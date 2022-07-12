import * as userAuthData from "./data/userAuthData.js";
export function userProfile() {

    return {
        view:"dataview",
        id: "userProfile",
        hidden: true,
        scroll:false,
        template:`<h1 class='webix_strong'>Информация</h1> <br> <h3 class='webix_strong'>Имя: #name# <br> <br>Электронная почта: #email#</h3> `,
        data:userAuthData.userAuthData(),
        xCount:1, 
        yCount:1, 
        type:{
            width: 900,
            height: 500
        }
    };
}


