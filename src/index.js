module.exports = function toReadable(number) {
    let count = number.toString().match(/.{1,1}/g),
        from0To19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        from20To99 =  {
            2: 'twenty',
            3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty',
            9: 'ninety'
        }
    
    function small(x) {
        return `${from0To19[x]}`;
    }
    
    function dec(a, b) {
        if (b != 0) {
            return `${from20To99[a]} ${from0To19[b]}`;
        } else return `${from20To99[a]}`;
    }
    
    if (number < 20) {
        return small(number);
    }
    
    if (number >= 20 && number < 100) {
        return dec(count[0], count[1]);
    }
    
    let res = `${dec(count[1], count[2])}`;
    let lastNumber = +count.splice(1, 2).join('');
    
    if (number >= 100 && number < 1000) {
        if (lastNumber){return `${from0To19[count[0]]} hundred ${lastNumber < 20 ? small(lastNumber) : res}`}
        else{return `${from0To19[count[0]]} hundred`}
    }
}


