// 改了一下，selector 为表格的 selector
function sortTable(selector, compFunc) {
    const mySelector = '';
    const myCompFunc = function (v1, v2, isAsc) {
        const pattern = /^-?\d*(\.\d*)?$/;
        if (pattern.test(v1) && pattern.test(v2)) {
            v1 = parseFloat(v1);
            v2 = parseFloat(v2);
            return isAsc ? v1 - v2 : v2 - v1;
        } else {
            return isAsc ? v1.localeCompare(v2) : v2.localeCompare(v1);
        }
    };

    const doSort = function ($tbody, index, compFunc, isAsc) {
        $tbody.html([...$tbody.find("tr")].map(t => [t.children[index].innerHTML.trim().replace(/,|\s+|%/g, ''), t])
            .sort((a, b) => compFunc(a[0], b[0], isAsc)).map(t => t[1].outerHTML).join(""));
    }

    const init = function () {
        let $th = $(selector + " th.sortable");
        let $table = $th.closest("table");
        $th.click(function () {
            let index = $(this).index();
            let asc = $(this).attr('data-asc');
            isAsc = asc === undefined || asc > 0;

            doSort($table.find("tbody"), index, compFunc, isAsc);
            $(this).attr('data-asc', isAsc ^ 1);
        });

        $th.css({ 'cursor': 'pointer' })
            //.attr('title', '点击排序')
            .append('&nbsp;<i class="fa fa-long-arrow-down" style="color:#2196F3" aria-hidden="true"></i><i class="fa fa-long-arrow-up" style="color:#2196F3" aria-hidden="true"></i>');
    };

    selector = selector || mySelector;
    compFunc = compFunc || myCompFunc;

    init();
}