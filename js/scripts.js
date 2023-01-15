window.onload = function(){
  document.querySelector("form").removeAttribute("class");
  document.querySelector("form").onsubmit = function(event){
  event.preventDefault();
  let input1 = (document.querySelector('input:nth-of-type(1)').value);
  let input2 = (document.querySelector('input:nth-of-type(2)').value);
  let input3 = (document.querySelector('input:nth-of-type(3)').value);
  let input4 = (document.querySelector('input:nth-of-type(4)').value);
  let input5 = (document.querySelector('input:nth-of-type(5)').value);
  let input6 = (document.querySelector('input:nth-of-type(6)').value);
  let input7 = (document.querySelector('input:nth-of-type(7)').value);
  let language;
    
    if (input1 === "yes" && input2 === "yes" && input3 === "yes" && input4 === "yes" && input5 === "yes" && input6 === "yes" && input7 === "yes"){
      language = "css";
    } else if (input1 === "yes" && input2 === "no" && input3 === "yes" && input4 === "yes" && input5 === "yes" && input6 === "yes" && input7 === "yes"){
      language = "javascript";
    } else {
      language = "c#";
    }      
    document.getElementById("output-area").innerText = language.toUpperCase();}
  }