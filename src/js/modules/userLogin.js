import * as userAuthData from "./data/userAuthData.js";

export function userLogin () {
    function submit(){
        this.getParentView().validate();

        let userData = (($$("formAuth").getValues()));

        if (userAuthData.userAuthData().username ===userData.username&&userAuthData.userAuthData().password ===userData.password){
 
            $$("formAuth").hide();
            $$("header").show();
            $$("sidebarMain").show();
            $$("sidebarMain").remove("userAuth");
            $$("sidebarMain").select("userProf");

        } else {
            webix.message({ type:"error", text:"Неправильный логин или пароль" });
        }
    }

    return {
        view:"form",
        id:"formAuth",
        maxWidth: 300,
        elements: [
            {},
            {view:"text", label:"Логин", name:"username", },
            {view:"text", label:"Пароль", name:"password",
            type:"password"},
            {view:"button", value: "Войти", css:"webix_primary",hotkey: "enter", align:"center",
            click:submit},
            {}
            
        ],

        on:{
            onValidationError:function(key, obj){
              var text;
        
              if (key == "username")
                text = "Username can't be empty";
              if (key == "password")
                text = "Password can't be empty";
        
              webix.message({ type:"error", text:text });
            }
        },

        elementsConfig:{
            labelPosition:"top"
        }

    };
}
