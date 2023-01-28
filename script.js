
// function letterCombinations(digits) {
     
//     if(digits == ""){
//         return [];
//     }
//     let table = [ '0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
     
//     let res =[];
//     let que = [''];
     
//     while(que.length>0){
//         let str = que[0];
//         que.shift();
         
//         if(str.length == digits.length){
//             res.push(str); // if all digits are replaced with char push to result
//         } else{
// //             get the current number from the digits i.e if str.length = 2 , digits =123 s= 3
//             let s= Number(digits.charAt(str.length));
//             let val = table[s]; // get char from the table i.e def for s =3
             
//             for(i=0;i<val.length;i++){
//                 que.push(str+val.charAt(i));
//             }
//         }
//     }
     
//     return res;
     
// }
 
//   // Driver code
//   let str = prompt("enter your digit");
//     document.write(letterCombinations(str));  
// module.exports = letterCombinations;
function letterCombinations(input_digit) {
  //Complete the function
	let size = input_digit.length,
       mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"],
       res = [''];
   
   for (let i=0; i<size; i++) {
       let currentVal = input_digit[i]-'0';
       if (currentVal > 1 && currentVal < 10) {
           let tmp = [],
               maplen = mapping[currentVal].length,
               reslen = res.length;
           
           for (let j=0; j<reslen; j++) {
               tmp.push(res[j]);
           }
           res = [];
           
           for (let j=0; j<reslen; j++) {
               for (let k=0; k<maplen; k++) {
                  res.push(tmp[j] + mapping[currentVal][k]);  
               }
           }
       }
   }
   
   if (size < 1 || (res.length === 1 && res[0] === '')) {
       return [];
   }
   
   return res;
}

module.exports = letterCombinations;
