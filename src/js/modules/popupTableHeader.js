export function popupTableHeader() {
    return { 

          view:"form",
          elements:[
            { view:"text", name:"header" },
            { view:"button", value:"Save", click:function(){
              var top = this.getTopParentView();
              top.config.callback( top.getBody().getValues().header);
              top.hide();
            }}
          ]

    };
}