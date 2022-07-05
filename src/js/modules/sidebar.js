import * as dataSidebar from "./data/dataSidebar.js";

import { positionSidebar, } from './userSettings.js';
export function sidebar() {
    
    const sidebar = {
        view: "sidebar",
        data: dataSidebar.dataSidebar(),
        collapsed: positionSidebar,
        on:{
          onAfterSelect: function(id){
            $$("multiview").setValue(id);
          }
        },
        ready:function () {
          let firstItem = this.getFirstId();
          this.select(firstItem);
          console.log(positionSidebar );
        }
    };

    return sidebar;


}