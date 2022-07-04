import * as userSettings from "./userSettings.js";
import * as tableOne from "./tableOne.js";
export function multiviewSidebar (){
    
    let multiviewSidebar = {
        id: "multiview", 
        cells:[
            {id: "tables" },
            { id: "table1", cols:[tableOne.tableOne()]},
            { id: "table2", template: "ContentTable2"},
            { id: "table3", template: "ContentTable3"},
            {id: "settings", cols: [userSettings.userSettings()]}
        ],
        animate: false
    };

    return multiviewSidebar;
}