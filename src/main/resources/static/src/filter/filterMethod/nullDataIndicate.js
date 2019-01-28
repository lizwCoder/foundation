/**
 * Created by lizw on 2017/2/22.
 */
export default function (input, defaultIndicate) {
    if (_.isUndefined(defaultIndicate)) {
        defaultIndicate = "暂无数据";
    }
    var isNullOrEmpty = _.isNull(input)
        || _.isEmpty(input)
        || _.trim(input) == 'null'
        || _.trim(input) == '\"null\"'
        || _.trim(input).length == 0;
    return isNullOrEmpty ? defaultIndicate : input;
}
