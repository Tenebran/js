const n = 40;
const m = n;
const mySquare = Math.floor(n/2);


for(let i = 1; i <= n; i++){
    for(let j = 1; j <= m; j++){
        if(j - i + mySquare <= mySquare  &&   j + i < n + 2 || j - 1 >= mySquare  && i + j <= n + 1){ 
            document.write('11 ');
        }else{
            document.write('00 ');
        }
    }
    document.write('<br>');
}