let n = 15;
let m = 12; 

let star = '*';
let space = '&nbsp;';


 strSpaces = '';
 strFilled = '';
 for(j = 1; j <= n - 2; j++){
     strSpaces = strSpaces + space;
     strFilled = strFilled + star;
 }

 resultSpace = '*' + strSpaces + '*<br>';
 resultFilled = strFilled + star + star + '<br>';

 resultLineWithSpaces = '';
 for(i = 1; i <= m - 2; i++){
     resultLineWithSpaces = resultLineWithSpaces + resultSpace;
 }

 document.write(resultFilled);
 document.write(resultLineWithSpaces);
 document.write(resultFilled);