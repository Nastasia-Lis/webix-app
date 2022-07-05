import * as header from "./modules/header.js";
import * as sidebar from "./modules/sidebar.js";
import * as multiviewSidebar from "./modules/multiviewSidebar.js";

import * as popupTableHeader from "./modules/popupTableHeader.js";

webix.ready(function(){
    
    webix.ui({
        id:"editor", 
        view:"popup", 
        body: popupTableHeader.popupTableHeader()
    });

    webix.ui({
        // css:"webix_dark",

        rows: [
            header.header(),
        
            { cols:[
                sidebar.sidebar(),
                multiviewSidebar.multiviewSidebar()
            ]}
      ]
      
    });
    console.log();
});







