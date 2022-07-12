export function header() {
    const header = {
        view: "toolbar", 
        id: "header",
        padding:3,
        hidden:true, 
        elements: [
            { view: "icon", icon: "mdi mdi-menu", click: function(){
            $$("sidebarMain").toggle();
            }
            },
            { view: "label", label: "App"},
            
        ]
    };

    return header;
}