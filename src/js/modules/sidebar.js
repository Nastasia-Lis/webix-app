import * as dataSidebar from "./dataSidebar.js";
export function sidebar() {
    
    const sidebar = {
        view: "sidebar",
        data: dataSidebar.dataSidebar(),
        on:{
          onAfterSelect: function(id){
            $$("multiview").setValue(id);
          }
        },
        ready:function () {
          let firstItem = this.getFirstId();
          this.select(firstItem);
        }
    };

    return sidebar;


}