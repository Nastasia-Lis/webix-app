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
            
        ]
    };

    return header;
}