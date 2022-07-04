export function header() {
    const header = {
        view: "toolbar", 
        padding:3, 
        elements: [
            { view: "icon", icon: "mdi mdi-menu", click: function(){
            $$("$sidebar1").toggle();
            }
            },
            { view: "label", label: "My App"},
            {},
            {height: 40, type:"icon", icon:"wxi-user",  view:"button", label:"Profile", width:100, css:"webix_transparent"}
        ]
    };

    return header;
}