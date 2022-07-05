// export function userSettings () {
    
//     const selectValues = () =>{                                                       
//         let panelSelectValues = $$("panelSelect").getValue();
//         let themeSelectValues = $$("themeSelectValues").getValue();
//         console.log(panelSelectValues, themeSelectValues);
        
//         if (panelSelectValues=="full"){
//             let positionSidebar = "collapsed: true";
//             console.log(positionSidebar);
//         } 

//         if (themeSelectValues=="light"){
//             console.log("1111");
//         } else{
//             console.log("222");
//         }
//     };
    
//     let formSettings = [
//         {   view:"select",id:"panelSelect", 
//             label:"Боковая панель", 
//             options:[
//                 { value:"Развёрнута", id:"full" },
//                 { value:"Свёрнута", id:"part" }], 
//             labelWidth:130, labelPosition:"top"},
//         {   view:"select", 
//             value: "light", 
//             id: "themeSelectValues",
//             label:"Тема", 
//             options:[
//                 { value:"Светлая", id:"light" },
//                 { value:"Тёмная", id:"dark" }], 
//             labelWidth:130, 
//             labelPosition:"top"},
//         {   view:"button", 
//             id:"buttonSelect",
//             value:"Confirm", 
//             width:200, 
//             click:selectValues 
//         },
//         {}

        
        
//     ];

    
//     const userSettings = {
//         margin:30, 
//         cols:[
//             { margin:30, 
//               rows:[
//                 { 
//                     view:"form", 
//                     scroll:false, 
//                     width:300, 
//                     elements: formSettings 
//                 }
//             ]}
//         ]
//     };

//     return userSettings;


// }

    let positionSidebar = false; 

    const selectValues = () =>{
           
        let panelSelectValues;
        let themeSelectValues;

        $$("panelSelect")& $$("themeSelectValues")==true
            panelSelectValues = $$("panelSelect").getValue();
            //themeSelectValues = $$("themeSelectValues").getValue();

            if (panelSelectValues=="full"){
                let positionSidebar = false;
                console.log( positionSidebar);
            } 

 
        return positionSidebar;

    };
    
    let formSettings = [
        {   view:"select",id:"panelSelect", 
            label:"Боковая панель", 
            options:[
                { value:"Развёрнута", id:"full" },
                { value:"Свёрнута", id:"part" }], 
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
        },
        {}

        
        
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

    export {
        userSettings,
        selectValues,
        positionSidebar
    };

