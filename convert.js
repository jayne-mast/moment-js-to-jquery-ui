function convertToJQueryUI() {
    var format = moment().localeData()._longDateFormat['L'];
    var dateDelimiterRegEx = /[\W]+/;
    var delimiter = (dateDelimiterRegEx.exec(format) || '')[0];
    var dateTransform = {
        'YYYY': 'yy',
        'YY': 'y',
        'MMMM': 'MM',
        'MMM': 'M',
        'MM': 'mm',
        'M': 'm',
        'DDDD': 'oo',
        'DDD': 'o',
        'DD': 'dd',
        'D': 'd'
    };
    function getTransformedDatePart(part) {
        return dateTransform[part] || part;
    }

    return format
        .split(dateDelimiterRegEx)
        .map(getTransformedDatePart)
        .join(delimiter);
};