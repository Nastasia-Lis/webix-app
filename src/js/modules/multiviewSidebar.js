//import * as userSettings from "./userSettings.js";
import { userSettings } from './userSettings.js';
import * as tableOne from "./tableOne.js";

import * as pagerTable from "./pagerTable.js";
import * as tableToolbar from "./tableToolbar.js";


export function multiviewSidebar (){
    
    let multiviewSidebar = {
        id: "multiview", 
        cells:[
            {id: "tables" },
            { id: "table1", rows:[tableToolbar.tableToolbar(),tableOne.tableOne(), {cols:[{},pagerTable.pagerTable(),{}]}]},
            { id: "table2", template: "ContentTable2"},
            { id: "table3", template: "ContentTable3"},
            {id: "settings", cols: [userSettings]}
        ],
        animate: false
    };

    return multiviewSidebar;
}