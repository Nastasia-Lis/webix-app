import * as userAuthData from "./data/userAuthData.js";

export function userProfile() {
    return {
        view:"datatable",
        id: "userProfile",   
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


