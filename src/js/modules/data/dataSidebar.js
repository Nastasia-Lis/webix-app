export function dataSidebar() {
	return [
		{id: "userAuth", icon: "mdi mdi-account", value:"Аутентификация"},
		{id: "userProf", icon: "mdi mdi-account", value:"Профиль"},
		{id: "tables", icon: "mdi mdi-table", value:"Таблицы", data:[
			{ id: "table1", value: "Таблица №1"},
			{ id: "table2", value: "Таблица №2"},
			{ id: "table3", value: "Таблица №3"}
		]},
		{id: "settings", icon: "webix_icon mdi mdi-cogs", value:"Настройки"}
	];
} 