import * as header from "./modules/header.js";
import * as sidebar from "./modules/sidebar.js";
import * as userLogin from "./modules/userLogin.js";

import * as multiviewSidebar from "./modules/multiviewSidebar.js";

import * as popupTableHeader from "./modules/popupTableHeader.js";






webix.ready(function(){
    
    webix.ui({
        id:"editor", 
        view:"popup", 
        body: popupTableHeader.popupTableHeader()
    });

    // webix.ui({
    //     id:"layout", 
    //     rows: [
    //         header.header(),
    //         userLogin.userLogin(
            
                
            
    //             { cols:[
    //                 sidebar.sidebar(),
    //                 multiviewSidebar.multiviewSidebar()
    //             ]}
            
    //         )
    //     ]
                    

        

    // });
    
    
    webix.ui({
        rows: [
            header.header(),
            
            { cols:[
                sidebar.sidebar(),
                multiviewSidebar.multiviewSidebar()
            ]}
      ]
      
    });



    // webix.ui({
    //     view: "scrollview",
    //     scroll: "y",
    //     body: {
    //       rows:[
    //         {
    //           view:"button", value:"Replace grid",
    //           inputWidth:150, align:"center", css: "webix_primary",
    //           click:replaceGrid
    //         },

    //         {id:"mylayout", rows:[

    //           { view:'toolbar', elements:[
    //             {},
    //             {view:"icon", width:50, icon:"wxi-user"},

    //           ]},

    //           {
    //             view:'datatable',
    //             id:'mydatatable',
    //             scroll:false,
    //             autoheight:true,
    //             columns:[
    //               {id:"rank", header:"", width:40},
    //             ],
    //             data:dataTableCollection.dataTableCollection()
    //           }
    //         ]}                
    //       ]
    //     }
    //   });
      
      

      
    //   function replaceGrid(){
    //     if ($$('mylayout') && $$('mydatatable'))
    //       webix.ui({
    //         minHeight:300,
    //         view:"dataview",
    //         template:"<b>#title#</b><br>#year#",
    //         xCount:2,
    //         type:{
    //           height:100,
    //           width:"auto"
    //         },
    //         data:dataTableCollection.dataTableCollection()
    //       }, $$('mylayout'), $$('mydatatable'));
    //     this.disable()
    //   }
});












