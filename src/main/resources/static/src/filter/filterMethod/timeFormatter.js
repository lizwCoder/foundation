export default function (time) {
    if (time < 60) {
        return `${time}秒`;
    } else if (time < 3600) {
        return `约${parseInt(time / 60)}分钟`;
    } else {
        return `约${parseInt(time / 3600)}小时`;
    }
}
