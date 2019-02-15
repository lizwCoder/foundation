/**
 * add by lizw
 */

import TimeFormatter from "./filterMethod/timeFormatter"
import TimeAgoDesc from "./filterMethod/timeAgoDesc"

interface Map {
    [key: string]: any
};

const filterPoolConst = (() => {

    let filterPool: Map = {};

    return {
        filterPool: filterPool,

        add(key: string, filter: any) {
            this.filterPool[key] = filter;
        },

        get(filterType: string) {
            return this.filterPool[filterType];
        }
    }
})();

filterPoolConst.add('timeFormatter', TimeFormatter)
filterPoolConst.add('timeAgoDesc', TimeAgoDesc)



export default function (filterType: string) {
    return filterPoolConst.get(filterType);
}
