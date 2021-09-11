// 改了一下，selector 为表格的 selector
function sortTable(selector, compFunc) {
    var mySelector = '';
    var myCompFunc = function ($td1, $td2, isAsc) {
        var v1 = $.trim($td1.text()).replace(/,|\s+|%/g, '');
        var v2 = $.trim($td2.text()).replace(/,|\s+|%/g, '');
        var pattern = /^-?\d+(\.\d*)?$/;
        if (pattern.test(v1) && pattern.test(v2)) {
            v1 = parseFloat(v1);
            v2 = parseFloat(v2);
        }

        return isAsc ? v1 > v2 : v1 < v2;
    };

    var doSort = function ($tbody, index, compFunc, isAsc) {
        var $trList = $tbody.find("tr");
        var len = $trList.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - i - 1; j++) {
                var $td1 = $trList.eq(j).find("td").eq(index);
                var $td2 = $trList.eq(j + 1).find("td").eq(index);

                if (compFunc($td1, $td2, isAsc)) {
                    var t = $trList.eq(j + 1);
                    $trList.eq(j).insertAfter(t);
                    $trList = $tbody.find("tr");
                }
            }
        }
    }

    var init = function () {
        var $th = $(selector+" th.sortable");
        this.$table = $th.closest("table");
        var that = this;
        $th.click(function () {
            var index = $(this).index();
            var asc = $(this).attr('data-asc');
            isAsc = asc === undefined ? true : (asc > 0 ? true : false);

            doSort(that.$table.find("tbody"), index, compFunc, isAsc);

            $(this).attr('data-asc', 1 - (isAsc ? 1 : 0));
        });

        $th.css({ 'cursor': 'pointer' })
            //.attr('title', '点击排序')
            .append('&nbsp;<i class="fa fa-long-arrow-down" style="color:#2196F3" aria-hidden="true"></i><i class="fa fa-long-arrow-up" style="color:#2196F3" aria-hidden="true"></i>');
    };


    selector = selector || mySelector;
    compFunc = compFunc || myCompFunc;

    init();
}