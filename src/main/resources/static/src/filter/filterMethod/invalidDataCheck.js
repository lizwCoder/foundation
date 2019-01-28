export default function (input) {
    input += '';
    var isNullOrEmpty = _.isNull(input)
        || _.isEmpty(input)
        || _.trim(input) == 'null'
        || _.trim(input) == '\"null\"'
        || _.trim(input).length == 0;
    return isNullOrEmpty;
}
