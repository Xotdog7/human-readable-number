module.exports = function toReadable(number) {
    let first_number = ['', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let second_number = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

    function Menwe_dvadcati(a) {
        F_number = 0;
        console.log(a);
        for (i = 0; i < first_number.length; i++) {
            F_number = first_number[a];

        }

        return F_number;
    }
    function Menwe_Sta(b) {

        for (i = 0; i < second_number.length; i++) {
            S_number = second_number[parseInt(b)]
        }
        return S_number;
    }
    
    if (number == 0) {
        return 'zero'
    }

    if (number < 20) {
        return Menwe_dvadcati(number).trim();
    }

    else if (number < 100) {

        return (Menwe_Sta(number / 10) + Menwe_dvadcati(number % 10)).trim();

    }

    else if (number < 1000) {

        if (number % 100 < 20) {
            return (Menwe_dvadcati(parseInt(number / 100)) + ' ' + "hundred " + Menwe_dvadcati(number % 100)).trim();
        }

        return (Menwe_dvadcati(parseInt(number / 100)) + ' ' + "hundred " + Menwe_Sta(parseInt(number / 10) % 10) + Menwe_dvadcati(number % 10)).trim();


    }
}

