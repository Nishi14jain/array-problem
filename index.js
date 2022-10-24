var arr = [2, 4, 6 ,8, 10,12];
var output =  requriedFun(arr);
 console.log(output);
 function requriedFun(arr){
    var requriedArray =[]; 
     for(let i = 0 ; i <= arr.length +1; i++){
    
         var max = Math.max(...arr); 
          requriedArray.push(max);
           arr.pop();
          
           if(arr.length != 0){
               var min = Math.min(...arr);
            requriedArray.push(min);
             arr.shift();
             
           }
            
     }
     return requriedArray ;
 }
 