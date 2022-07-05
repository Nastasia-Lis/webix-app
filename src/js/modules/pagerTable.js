export function pagerTable() {
    let pagerTable = {
        view:"pager",
        id:"pager",
        size:20,
        group:5,
        template:`{common.first()} {common.prev()} 
      {common.pages()} {common.next()} {common.last()}`
      };
    return pagerTable;
}