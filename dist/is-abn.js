'use strict';

(function() {
    var context = this;

    function isABN(input, strictFormat) {
        if(strictFormat && !/^\d{2} \d{3} \d{3} \d{3}$/.test(input)) {
            return false;
        }

        var abnStr = input.replace(/\s/g, '');

        if(abnStr.length !== 11) {
            return false;
        }

        var abn = abnStr.split('');
        var weight = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

        var total = abn.reduce(function(prev, curr, i) {
            if(i === 0) {
                curr--;
            }

            return prev + (parseInt(curr, 10) * weight[i]);
        }, 0);

        if(total % 89 === 0) {
            return true;
        }

        return false;
    }


    if(typeof exports !== 'undefined') {
        if(typeof module !== 'undefined' && module.exports) {
            exports = module.exports = isABN;
        }

        exports.isABN = isABN;
    } else {
        context.isABN = isABN;
    }
}).call(this);
