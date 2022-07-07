import * as userLogin from "./userLogin.js";


import { userSettings } from './userSettings.js';
import * as tableOne from "./tableOne.js";

import * as dataTableOne from "./data/dataTableOne.js";
import * as dataTableTwo from "./data/dataTableTwo.js";
import * as dataTableThree from "./data/dataTableThree.js";

import * as pagerTable from "./pagerTable.js";
import * as tableToolbar from "./tableToolbar.js";

export function multiviewSidebar (){
    
    let multiviewSidebar = {
        id: "multiview", 
        cells:[
            {id: "user", cols: [{},{rows:[{},userLogin.userLogin(),{}]},{}]},
            {id: "tables" },
            { id: "table1", rows:[tableToolbar.tableToolbar(),tableOne.tableOne("tableOne", dataTableOne.dataTableOne(),"pagerTableOne"), {cols:[{},pagerTable.pagerTable("pagerTableOne"),{}]}]},
            { id: "table2", rows:[tableToolbar.tableToolbar(),tableOne.tableOne("tableTwo", dataTableTwo.dataTableTwo(),"pagerTableTwo"), {cols:[{},pagerTable.pagerTable("pagerTableTwo"),{}]}]},
            { id: "table3", rows:[tableToolbar.tableToolbar(),tableOne.tableOne("tableThree", dataTableThree.dataTableThree(),"pagerTableThree"), {cols:[{},pagerTable.pagerTable("pagerTableThree"),{}]}]},
            {id: "settings", cols: [userSettings]}
        ],
        animate: false
    };

    return multiviewSidebar;
}