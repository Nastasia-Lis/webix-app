export function tableToolbar() {
    function resetFilters(){
        const table = $$("tableProducts");
        table.filter(); 
        table.showItem(table.getFirstId()); 
        table.setState({filter:{}}); 
      }

      function exportToExcel(){
        webix.toExcel("tableProducts", {
          filename:"ProductTable",
          filterHTML:true,
          styles:true
        });
      }
      
    
    return {
        view:"toolbar",
        css:"webix_dark",
        height:50,

        cols:[	

          { view:"button", label:"Reset filters", click:resetFilters },
          { view:"button", label:"Export to Excel", click:exportToExcel }
        ]
    };
}