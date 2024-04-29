function convert2Binary(num:number):number {
    let str = "";
    while(num != 0) {
        str += num%2;
        num = Math.floor(num/2);
    };
    return +str.split('').reverse().join('');
}

let num = 4;
console.log(convert2Binary(num));