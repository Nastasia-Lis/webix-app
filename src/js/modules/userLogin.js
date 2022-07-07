import * as userAuthData from "./data/userAuthData.js";
export function userLogin () {

    function submit(){
        this.getParentView().validate();
        // webix.message(JSON.stringify($$("formAut").getValues(), null, 2));
        // if (userAuthData.userAuthData()===)
        let userData = (($$("formAuth").getValues()));
        // console.log(($$("formAuth").getValues()).username);


        if (userAuthData.userAuthData().username ===userData.username&&userAuthData.userAuthData().password ===userData.password){
            console.log('y');
        } else {
            console.log('n');
        }
    }


    return {
        view:"form",
        id:"formAuth",
        width: 450,
        elements: [
            {view:"text", label:"Username", name:"username"},
            {view:"text", label:"Password", name:"password",
            type:"password"},
            {view:"button", value: "Submit", width: 150, align:"center",
            click:submit}
        ],

        rules:{
            "username":webix.rules.isNotEmpty,
            "password":webix.rules.isNotEmpty
        },

        on:{
            onValidationError:function(key, obj){
              var text;
        
              if (key == "username")
                text = "Username can't be empty";
              if (key == "password")
                text = "Password can't be empty";
        
              webix.message({ type:"error", text:text });
            }
          }

    };
}