var iconBasePath = $contextPath + "/images";
import MapIconConst from "jsRoot/constants/mapIconConst"

export default function (iconConst) {
    let path = `${iconBasePath}/${iconConst}.png`;
    switch (iconConst) {
        case MapIconConst.PLANE_MARKER:
        case MapIconConst.PLANE_GRAY_MARKER:
        case MapIconConst.PLANE_HOVER_MARKER:
        case MapIconConst.TRAIN_MARKER:
        case MapIconConst.TRAIN_GRAY_MARKER:
        case MapIconConst.TRAIN_HOVER_MARKER:
        case MapIconConst.PRIVY_MARKER:
        case MapIconConst.PRIVY_SELF_MARKER:
        case MapIconConst.HOME_MARKER:
        case MapIconConst.HOME_GRAY_MARKER:
        case MapIconConst.HOME_HOVER_MARKER:
        case MapIconConst.COMPANY_MARKER:
        case MapIconConst.COMPANY_GRAY_MARKER:
        case MapIconConst.COMPANY_HOVER_MARKER:
        case MapIconConst.HOTEL_MARKER:
        case MapIconConst.HOTEL_GRAY_MARKER:
        case MapIconConst.HOTEL_HOVER_MARKER:
        case MapIconConst.PRIVY_GATHER_MARKER:
        case MapIconConst.PRIVY_GATHER_GRAY_MARKER:
        case MapIconConst.PRIVY_GATHER_HOVER_MARKER:
        case MapIconConst.ABNORMAL_STAY_MARKER:
        case MapIconConst.ABNORMAL_STAY_GRAY_MARKER:
        case MapIconConst.ABNORMAL_STAY_HOVER_MARKER:
        case MapIconConst.COMBINATION_MARKER:
        case MapIconConst.COMBINATION_GRAY_MARKER:
        case MapIconConst.COMBINATION_HOVER_MARKER:
        case MapIconConst.LATEST_POS_MARKER:
        case MapIconConst.LATEST_POS_GRAY_MARKER:
        case MapIconConst.LATEST_POS_HOVER_MARKER:
        case MapIconConst.PRIVY_FF7043:
        case MapIconConst.PRIVY_FFA726:
        case MapIconConst.PRIVY_FFCA28:
        case MapIconConst.PRIVY_5677FC:
        case MapIconConst.PRIVY_9CCC65:
        case MapIconConst.PRIVY_25AF2B:
        case MapIconConst.PRIVY_26A69A:
        case MapIconConst.PRIVY_26C6DA:
        case MapIconConst.PRIVY_29b6f6:
        case MapIconConst.PRIVY_738ffe:
        case MapIconConst.NEAR_PRECISE_ADDRESS_MARKER:
        case MapIconConst.NEAR_NAVIGATION_ADDRESS_MARKER:
            return {
                path,
                width: 45,
                height: 63.1
            };
        case MapIconConst.TRACK_POINT_RED:
        case MapIconConst.TRACK_POINT_BLUE:
        case MapIconConst.TRACK_POINT_GREEN:
            return {
                path,
                width: 15,
                height: 15
            };
        case MapIconConst.TRACK_START_POINT:
        case MapIconConst.TRACK_END_POINT:
            return {
                path,
                width: 52,
                height: 73
            };
        case MapIconConst.RED_MARKER:
            return {
                path,
                width: 39,
                height: 25
            };
        case MapIconConst.CAR_TRACE:
        case MapIconConst.CAR_TRACE_HOVER:
            return {
                path,
                width: 48,
                height: 72
            };
        case MapIconConst.RECT_HOME:
        case MapIconConst.RECT_COMPANY:
        case MapIconConst.RECT_PLANE:
        case MapIconConst.RECT_TRAIN:
        case MapIconConst.RECT_ABNORMAL_STAY:
        case MapIconConst.RECT_PRIVY_GATHER:
            return {
                path,
                width: 90,
                height: 90
            };
        default:
            return null;
    }


}
