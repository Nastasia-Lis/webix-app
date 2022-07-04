export function userSettings () {
    
    const selectValues = () =>{                                                       
        let panelSelectValues = $$("panelSelect").getValue();
        let themeSelectValues = $$("themeSelectValues").getValue();
        console.log(panelSelectValues, themeSelectValues);
        
        let positionSidebar;
        if (panelSelectValues=="left"){
            positionSidebar = "left";
        } else{
            positionSidebar = "right";
        }
        

        if (themeSelectValues=="light"){
            console.log("1111");
        } else{
            console.log("222");
        }
    };
    
    let formSettings = [
        {   view:"select",id:"panelSelect", 
            label:"Расположение боковой панели", 
            options:[
                { value:"Слева", id:"left" },
                { value:"Справа", id:"right" }], 
            labelWidth:130, labelPosition:"top"},
        {   view:"select", 
            value: "light", 
            id: "themeSelectValues",
            label:"Тема", 
            options:[
                { value:"Светлая", id:"light" },
                { value:"Тёмная", id:"dark" }], 
            labelWidth:130, 
            labelPosition:"top"},
        {   view:"button", 
            id:"buttonSelect",
            value:"Confirm", 
            width:200, 
            click:selectValues 
        }

        
        
    ];

    
    const userSettings = {
        margin:30, 
        cols:[
            { margin:30, 
              rows:[
                { 
                    view:"form", 
                    scroll:false, 
                    width:300, 
                    elements: formSettings 
                }
            ]}
        ]
    };

    return userSettings;


}