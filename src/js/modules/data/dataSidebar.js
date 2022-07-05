export function dataSidebar() {
	
	let menu_data = [
		{id: "tables", icon: "mdi mdi-table", value:"Tables", data:[
			{ id: "table1", value: "Table1"},
			{ id: "table2", value: "Table2"},
			{ id: "table3", value: "Table3"}
		]},
		{id: "settings", icon: "webix_icon mdi mdi-cogs", value:"Settings"}
	];

	return menu_data;
} 