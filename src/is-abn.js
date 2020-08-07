/*global module, exports */
(function() {
    'use strict';

    var context = this;

    function isABN(input, strictFormat, verbose) {
        if(typeof verbose === 'undefined') {
            verbose = false;
        }

        input = String(input);

        if(strictFormat && !(/^\d{2} \d{3} \d{3} \d{3}$/).test(input)) {
            if(verbose) {
                return {
                    success: false,
                    code: 1,
                    description: 'ABN does not match the format \'XX XXX XXX XXX\''
                };
            } else {
                return false;
            }
        }


        var abnStr = input.replace(/\s/g, '');

        if(abnStr.length !== 11) {
            if(verbose) {
                return {
                    success: false,
                    code: (abnStr.length < 11 ? 3 : 4),
                    description: 'ABN is ' + (abnStr.length < 11 ? 'less' : 'more') + ' than 11 digits in length'
                };
            } else {
                return false;
            }
        }

        if(!(/^\d+$/).test(abnStr)) {
            if(verbose) {
                return {
                    success: false,
                    code: 2,
                    description: 'ABN contains non-numeric characters'
                };
            } else {
                return false;
            }
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
            if(verbose) {
                return {
                    success: true,
                    code: 0,
                    description: 'ABN is valid'
                }
            } else {
                return true;
            }
        }

        if(verbose) {
            return {
                success: false,
                code: 5,
                description: 'ABN is not valid'
            };
        } else {
            return false;
        }
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
