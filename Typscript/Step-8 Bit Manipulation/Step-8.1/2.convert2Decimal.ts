function convert2Decimal(str:string):number {
    let n = str.length;
    let decimal = 0;
    let pow = 1;
    for(let i=n-1; i>=0; i--) {
        if(str[i] == '1') {
            decimal = decimal + pow;
        }
        pow = pow*2;
    };
    return decimal;
}

let str = "1101";
console.log(convert2Decimal(str));