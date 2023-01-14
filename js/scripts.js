window.onload = function(){
  document.querySelector("form").removeAttribute("class");
  document.querySelector("form").onsubmit = function(event){
  event.preventDefault();
  let superhero1 = (document.querySelector('input:nth-of-type(1)').value);
  let superhero2 = (document.querySelector('input:nth-of-type(2)').value);
  let superhero3 = (document.querySelector('input:nth-of-type(3)').value);
  let superhero4 = (document.querySelector('input:nth-of-type(4)').value);
  let superhero5 = (document.querySelector('input:nth-of-type(5)').value);
  let superhero6 = (document.querySelector('input:nth-of-type(6)').value);
  let superhero7 = (document.querySelector('input:nth-of-type(7)').value);
  let superherotype;
    
    if (superhero1 === superhero2 && superhero2 === superhero3 && superhero3 === superhero4 && superhero4 === superhero5 && superhero5 === superhero6 && superhero6 === superhero7){
      superherotype = "css";
    } else if (superhero1 !== superhero2 && superhero2 === superhero3 && superhero3 === superhero4 && superhero4 === superhero5 && superhero5 === superhero6 && superhero6 === superhero7){
      superherotype = "javascript";
    } else (superhero1 === superhero2 && superhero2 === superhero3 && superhero3 === superhero4 && superhero4 === superhero5 && superhero5 === superhero6 && superhero6 !== superhero7);{
      superherotype = "c#";
    }      
    document.getElementById('output-area').innerText = superherotype.toUpperCase();}
  }