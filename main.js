
var inputElm= document.getElementById("input-id");

var btnElm= document.getElementById("btn-id");

var paraElm= document.getElementById("para-id");




btnElm.onclick=function(){
    
    
    
    var inputVal=inputElm.value;
    
    paraElm.innerHTML=inputVal;
    
    inputElm.value="";
    
    
    
    
    
    };


