
let calculate = document.getElementById("screen");
let btn = document.getElementsByClassName("btn");
let previous = 1;
let insert = "";
let resultStr = 0;


 function display(btn) {
  let dvalue = btn.getAttribute("value");
  let previous = 0;
  insert += dvalue;
  

if (calculate.innerHTML == "0") {
 calculate.innerHTML = dvalue;
}

  calculate.innerHTML = insert;
 }
 
  function result() {
   let resultStr = eval(insert);
   insert = resultStr;
   calculate.innerHTML = insert;
  }
 
 function refresh() {
  insert = "";
  calculate.innerHTML = "0";
 }
 
$(function() {
 
  $("*[name=btnAC]").on('click', function() {
   $("*[name=operator]").prop('disabled', true);
   $("*[name=number]").prop('disabled', false);
   $("*[name=number0]").prop('disabled', false);
   $("*[name=number00]").prop('disabled', true);
   $("*[name=btnDec]").prop('disabled', false);
});
 
  $("*[name=operator").on('click', function() {
   $("*[name=operator]").prop('disabled', true);
   $("*[name=equal]").prop('disabled', true);
   $("*[name=number]").prop('disabled', false);
   $("*[name=number0]").prop('disabled', false);
   $("*[name=number00]").prop('disabled', true);
   $("*[name=btnDec]").prop('disabled', false);
});

  $("*[name=number]").on('click', function() {
   $("*[name=number]").prop('disabled', false);
   $("*[name=number0]").prop('disabled', false);
   $("*[name=equal]").prop('disabled', false);
   $("*[name=operator]").prop('disabled', false);
   $("*[name=number00]").prop('disabled', false);
});

  $("*[name=equal]").on('click', function() {
   $("*[name=number]").prop('disabled', true);
   $("*[name=number0]").prop('disabled', true);
   $("*[name=number00]").prop('disabled', true);
   $("*[name=btnDec]").prop('disabled', true);
   $("*[name=operator]").prop('disabled', false);
}); 

  $("*[name=btnDec]").on('click', function() {
   $("*[name=btnDec]").prop('disabled', true);
   $("*[name=operator]").prop('disabled', true);
   $("*[name=number00]").prop('disabled', false);
   $("*[name=number]").prop('disabled', false);
}); 
  
  $("*[name=number0]").on('click', function() {
   $("*[name=equal]").prop('disabled', false);
   $("*[name=operator]").prop('disabled', false);
}); 
});
