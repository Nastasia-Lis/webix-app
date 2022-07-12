export function userSettings () {
    
    function collapsedSidebar(){
        if($$("collapsedSelect").getValue()=="collapsed"){
            $$('sidebarMain').collapse();
        } else{
            $$('sidebarMain').expand();
        }
    }

    function themeSidebar(){
        if($$("themeSidebarSelect").getValue()=="dark"){
            $$("header").define("css","webix_dark");
            $$("sidebarMain").define("css","webix_dark");
        } else{
            webix.html.removeCss( $$("header").getNode(), "webix_dark");
            webix.html.removeCss( $$("sidebarMain").getNode(), "webix_dark");
        }  
    }

    const settingsSidebar = [
        {template:"<h3 class='webix_strong'>Настройки боковой панели</h3>",type:"clean",height: 60, margin:20},
        {   view:"select",id:"collapsedSelect", 
            label:"Вид", 
            click:collapsedSidebar,
            options:[
                { value:"Развёрнута", id:"expand" },
                { value:"Свёрнута", id:"collapsed" }], 
            labelWidth:130, labelPosition:"top"},

        {   view:"select", 
            value: "light", 
            id: "themeSidebarSelect",
            label:"Тема", 
            click:themeSidebar,
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
                rows:[
                { 
                    view:"form", 
                    
                    scroll:false, 
                    
                    width:300, 
                    elements: settingsSidebar
                }
            ]}
        ]
    };

    return userSettings;

}


