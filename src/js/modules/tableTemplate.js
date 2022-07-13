import * as dataTableCollection from "./data/dataTableCollection.js";

export function tableTemplate(idTable,src,idPager) {

    function addNewElement(){
        const table = $$(idTable); 
        const id_new_elem = table.add({"product":"","available":"","date":"","color":"","code":"","price":"",}); 
        table.showItem(id_new_elem); 
    }

    function removeElement(idElement){
        $$(idTable).remove(idElement);
    }

    return { 
        view:"datatable",
        id:idTable,
        autoConfig:true,
        data:src,
        resizeColumn: true,
        css:"webix_data_border webix_header_border",
        scroll: "xy",
        editable:true,
        footer: true,
        pager:idPager,
        rightSplit: 2,
        drag:"order",
        
        scheme:{
            $init:function(obj){
              obj.date = webix.i18n.dateFormatDate(obj.date)
            }
        },

        columns:[
            {   id:"product", 
                header:[ "Товар", { content:"textFilter" },  ], 
                editor:"text", 
                minWidth:60, 
                fillspace:true, 
                sort:"string",
                footer:{ text:"Товаров в наличии:"} 
            },

            {   id:"available", 
                header:[ "Наличие", { content:"selectFilter" } ], 
                editor:"combo",  
                collection:dataTableCollection.dataTableCollection(),
                minWidth:60, 
                fillspace:true, 
                sort:"string",
                footer:{content:"summColumn"} 
            },

            {   id:"date", 
                header:[ "Дата производства",{ content:"dateFilter"}], 
                editor:"date",
                minWidth:60, 
                fillspace:true, 
                format:webix.i18n.longDateFormatStr, 
                sort:"date"
            },

            {   id:"color", 
                header:[ "Цвет", { content:"textFilter" } ], 
                editor:"color", 
                template:`<span style="background-color:#color#; border-radius:4px; padding-right:10px;">&nbsp</span> #color#`,
                minWidth:60,
                fillspace:true
            },

            {   id:"code", 
                header:[ "Код", { content:"textFilter" } ], 
                editor:"text", 
                minWidth:60, 
                fillspace:true, 
                sort:"int"
            },

            {   id:"price", 
                header:[ "Цена", { content:"textFilter" } ], 
                editor:"text", 
                template:"#price# руб", 
                minWidth:60, 
                fillspace:true, 
                sort:"int"
            },

            {   header:[{text:"<span class='webix_icon wxi-plus-circle'></span>", colspan:2}], 
                width:50, 
                template:"<span class='webix_icon wxi-drag'></span>" 
            },
            
            {   header:["",""], 
                width:50, 
                template:"{common.trashIcon()}" 
            }

            
        ],

        rules:{
            product:webix.rules.isNotEmpty,
            date:webix.rules.isNotEmpty,
            color:webix.rules.isNotEmpty,
            code:webix.rules.isNumber,
            price:function(obj){ return(obj>20 && obj<10000) },
            	
        },


        onClick:{
            "wxi-plus-circle":() => addNewElement(), 
            "wxi-trash":(e,id) => removeElement(id)
         },

         on: {
            onBeforeDrag:function(data, e){ 
                return (e.target||e.srcElement).className == "webix_icon wxi-drag";
              }
         }      
    };
}