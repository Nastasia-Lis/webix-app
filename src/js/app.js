
import * as template from "./modules/template.js";

template.template();




webix.ui({
    id: 'root',
    cols: [
        { rows:
            [
                {view:"label", label:"App"},
                {
                    view: "list",
                    id:"mylist",
                    scroll:false,
                    select:true,
                    width: 300,
                    data:[
                        {value:"Table 1",},
                        {value:"Table 2"},
                        {value:"Table 3"}
                    ]
                }
            ]
        },
        { view:"resizer"},
        { rows:
            [ 
                {},  
                {
                    view:"form",
                    id:"formAuthentication",

                    width: 350,
                    elements:[
                        { view:"text", label:'Username', name:"username" },
                        { view:"text", label:'Password', name:"password"},
                        {view:"button", value: "Submit", width: 150, align:"center",
                        click:function(){routie('app');}}
                
                    ],
                    rules:{
                        "username": webix.rules.isNotEmpty,
                        "password": function(value){ return value.length>3; }
                    }
                },
                {}
            ]
        }
    ]
    

});