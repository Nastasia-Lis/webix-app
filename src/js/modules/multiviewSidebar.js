import  {formLogin} from "./userLogin.js";
import * as userProfile from "./userProfile.js";

import * as tableTemplate from "./tableTemplate.js";
import * as tableToolbar from "./tableToolbar.js";
import * as dataTableOne from "./data/dataTableOne.js";
import * as dataTableTwo from "./data/dataTableTwo.js";
import * as dataTableThree from "./data/dataTableThree.js";
import * as pagerTable from "./pagerTable.js";

import {userSettings} from './userSettings.js';

export function multiviewSidebar (){
    
    let multiviewSidebar = {
        id: "multiview", 
        
        cells:[
            {   id: "userProf", 
                rows: [
                    userProfile.userProfile()
                ]
            },
            
            {   id: "userAuth", 
                cols: [
                    {},
                    {   rows:[
                            {},
                            formLogin,
                            {}
                        ]},
                    {}
                ]
            },
            
            {   id: "table1", 
                rows:[
                    tableToolbar.tableToolbar("tableOne"),
                    tableTemplate.tableTemplate("tableOne", dataTableOne.dataTableOne(),"pagerTableOne"), 
                    {cols:[
                        {},
                        pagerTable.pagerTable("pagerTableOne"),
                        {}
                    ]}
                ]
            },

            {   id: "table2", 
                rows:[
                    tableToolbar.tableToolbar("tableTwo"),
                    tableTemplate.tableTemplate("tableTwo", dataTableTwo.dataTableTwo(),"pagerTableTwo"), 
                    {cols:[
                        {},
                        pagerTable.pagerTable("pagerTableTwo"),
                        {}
                    ]}
                ]
            },

            { id: "table3", 
                rows:[
                    tableToolbar.tableToolbar("tableThree"),
                    tableTemplate.tableTemplate("tableThree", dataTableThree.dataTableThree(),"pagerTableThree"), 
                    {cols:[
                        {},
                        pagerTable.pagerTable("pagerTableThree"),
                        {}
                    ]}
                ]
            },

            {id: "settings", 
                cols:[
                    userSettings
                ]
            }
        ],
        
        animate: false,
       
    };

    return multiviewSidebar;
}