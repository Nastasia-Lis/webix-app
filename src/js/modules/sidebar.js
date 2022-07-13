import * as dataSidebar from "./data/dataSidebar.js";

export function sidebar() { 
  return {
      view: "sidebar",
      id: "sidebarMain",
      data: dataSidebar.dataSidebar(),
      hidden:true,
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
}

