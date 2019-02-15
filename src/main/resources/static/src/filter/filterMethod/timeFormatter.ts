export default function (time:number) {
    if (time < 60) {
        return `${time}秒`;
    } else if (time < 3600) {
        return `约${Math.round(time / 60)}分钟`;
    } else {
        return `约${Math.round(time / 3600)}小时`;
    }
}
