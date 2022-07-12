import * as header from "./modules/header.js";
import * as sidebar from "./modules/sidebar.js";
import * as multiviewSidebar from "./modules/multiviewSidebar.js";

webix.ready(function(){
    webix.ui({
        rows: [
            header.header(),
            
            { id:"mainContent", cols:[
                
                sidebar.sidebar(),
                multiviewSidebar.multiviewSidebar(),
            ]}
        ]
      
    });
});












