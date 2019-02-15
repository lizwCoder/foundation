export default function (timestamp:number) {
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day * 30;

    let now = new Date().getTime();
    let diffValue = now - timestamp;
    if (diffValue < 0) {
        return;
    }
    let monthC = diffValue / month;
    let weekC = diffValue / (7 * day);
    let dayC = diffValue / day;
    let hourC = diffValue / hour;
    let minC = diffValue / minute;

    if (monthC >= 1) {
        return Math.floor(monthC) + "月前";
    } else if (weekC >= 1) {
        return Math.floor(weekC) + "周前";
    } else if (dayC >= 1) {
        return Math.floor(dayC) + "天前";
    } else if (hourC >= 1) {
        return Math.floor(hourC) + "小时前";
    } else if (minC >= 1) {
        return Math.floor(minC) + "分钟前";
    } else {
        return "刚刚";
    }
}