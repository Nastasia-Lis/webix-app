import * as dataTableOne from "./dataTableOne.js";
export function tableOne() {
    const tableOne = { 
        view:"datatable",
        id:"film_list",
        scroll:"y",
        autoConfig: true,
        data:dataTableOne.dataTableOne()
    };
    return tableOne;
}