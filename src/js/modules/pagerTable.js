export function pagerTable(id) {
    let pagerTable = {
        view:"pager",
        id:id,
        size:20,
        group:5,
        template:`{common.first()} {common.prev()} 
      {common.pages()} {common.next()} {common.last()}`
      };
    return pagerTable;
}