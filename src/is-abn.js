function isABN(input, strictFormat) {
    if(strictFormat && !/^\d{2} \d{3} \d{3} \d{3}$/.test(input)) {
        return false;
    }

    var abnStr = input.replace(' ', '');

    if(abnStr.length !== 11) {
        return false;
    }

    var abn = abnStr.split('');
    var weight = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

    var total = abn.reduce(function(prev, curr, i) {
        return prev + (parseInt(curr, 10) * weight[i]);
    }, 0);

    if(total % 89 === 0) {
        return true;
    }

    return false;
}
