/**
 * add by lizw
 */

import invalidDataCheck from "./filterMethod/invalidDataCheck"
import nullDataIndicate from "./filterMethod/nullDataIndicate"
import TimeAgoDesc from "./filterMethod/timeAgoDesc"
import timeFormatter from "./filterMethod/timeFormatter"


const filterPoolConst = (() => {
    return {
        filterPool: {},
        add(key, filter) {
            this.filterPool[key] = filter;
        },
        get(filterType) {
            return this.filterPool[filterType];
        }
    }
})();
filterPoolConst.add('nullDataIndicate', nullDataIndicate);
filterPoolConst.add('invalidDataCheck', invalidDataCheck);
filterPoolConst.add('timeAgoDesc',TimeAgoDesc)
filterPoolConst.add('timeFormatter',timeFormatter)



export default function (filterType) {
    return filterPoolConst.get(filterType);
}
