/**
 * add by lizw
 */
import TimeFormatter from "./filterMethod/timeFormatter";
import TimeAgoDesc from "./filterMethod/timeAgoDesc";
;
var filterPoolConst = (function () {
    var filterPool = {};
    return {
        filterPool: filterPool,
        add: function (key, filter) {
            this.filterPool[key] = filter;
        },
        get: function (filterType) {
            return this.filterPool[filterType];
        }
    };
})();
filterPoolConst.add('timeFormatter', TimeFormatter);
filterPoolConst.add('timeAgoDesc', TimeAgoDesc);
export default function (filterType) {
    return filterPoolConst.get(filterType);
}
//# sourceMappingURL=filterForService.js.map