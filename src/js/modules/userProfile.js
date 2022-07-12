import * as userAuthData from "./data/userAuthData.js";
export function userProfile() {

    return {
        id: "userProfile",
        // view:"dataview",
        
        //hidden: true,
        // scroll:false,
        // template:`<h1 class='webix_strong'>Информация</h1> <br> <h3 class='webix_strong'>Имя: #name# <br> <br>Электронная почта: #email#</h3> `,
        // data:userAuthData.userAuthData(),
        // xCount:1, 
        // yCount:1, 
        // type:{
        //     width: 900,
        //     height: 500
        // }


        
        view:"datatable",
        autoConfig:true,
        data:userAuthData.userAuthData(),
        resizeColumn: true,
        css:"webix_data_border webix_header_border",
        scroll: "xy",
        columns:[
            { id:"name", header:"ФИО", minWidth:60, fillspace:true},
            { id:"email", header:"Электронная почта", minWidth:60, fillspace:true},
            { id:"post", header:"Должность", minWidth:60, fillspace:true},
        ],
    };
}


