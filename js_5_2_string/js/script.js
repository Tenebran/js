let str1 = "H_!!!e___y t////est!s";
let str2 = "He......llo mgy Wor,l!d"
let str3 = "C,,,,!oggggca C___o___!!!!!!!la"



function worldsreplace(restrictedList){
    restrictedList = restrictedList.replace(/['!','g','_','/'......]/g, '');
    
    return restrictedList;
}


str1 = worldsreplace(str1);
str3 = worldsreplace(str3);
str2 = worldsreplace(str2);



document.write(`${str1} <br> ${str2} <br> ${str3}`);