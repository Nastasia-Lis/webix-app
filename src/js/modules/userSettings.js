function defaultStorageSettings () {
    let viewSidebarVal = webix.storage.local.get("viewSidebar");
    let themeSidebarVal = webix.storage.local.get("themeSidebar");
    
    if (viewSidebarVal){
        collapsedSidebar(viewSidebarVal);
        $$("collapsedSelect").setValue(JSON.parse(localStorage.getItem("viewSidebar")));
    } 
    if (themeSidebarVal) {
        themeSidebar(themeSidebarVal);
        $$("themeSidebarSelect").setValue(JSON.parse(localStorage.getItem("themeSidebar")));
    }
}

function collapsedSidebar(value){
    
    if(value=="collapsed"){
        $$('sidebarMain').collapse();
    } else{
        $$('sidebarMain').expand();
    }
}

function themeSidebar(value){
    if(value=="dark"){
        $$("header").define("css","webix_dark");
        $$("sidebarMain").define("css","webix_dark");

    } else{
        webix.html.removeCss( $$("header").getNode(), "webix_dark");
        webix.html.removeCss( $$("sidebarMain").getNode(), "webix_dark");
    }  
}


function storageDataSettings (name, value){
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem(name, JSON.stringify($$(value).getValue()));
    } 
}
const settingsSidebar = [
    {template:"<h3 class='webix_strong'>Настройки боковой панели</h3>",type:"clean",height: 60, margin:20},
    {   view:"select",id:"collapsedSelect", 
        label:"Вид",
        click:function(){
            collapsedSidebar($$("collapsedSelect").getValue());
            storageDataSettings ("viewSidebar",  "collapsedSelect"); 
        },
        options:[
            { value:"Развёрнута", id:"expand" },
            { value:"Свёрнута", id:"collapsed" }], 
        labelWidth:130, labelPosition:"top",
    },

    {   view:"select", 
        value: "light", 
        id: "themeSidebarSelect",
        label:"Тема", 
        click:function() {
            themeSidebar($$("themeSidebarSelect").getValue());
            storageDataSettings ("themeSidebar",  "themeSidebarSelect"); 
        },
        options:[
            { value:"Светлая", id:"light" },
            { value:"Тёмная", id:"dark" }], 
        labelWidth:130, 
        labelPosition:"top"},
    {}     
];

const userSettings = {
    cols:[
        { 
            rows:[{ 
                view:"form", 
                scroll:false, 
                width:300, 
                elements: settingsSidebar
            }]
        }
    ]
};

export{
    userSettings,
    defaultStorageSettings

};
