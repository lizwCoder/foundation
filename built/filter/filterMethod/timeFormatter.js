export default function (time) {
    if (time < 60) {
        return time + "\u79D2";
    }
    else if (time < 3600) {
        return "\u7EA6" + Math.round(time / 60) + "\u5206\u949F";
    }
    else {
        return "\u7EA6" + Math.round(time / 3600) + "\u5C0F\u65F6";
    }
}
//# sourceMappingURL=timeFormatter.js.map