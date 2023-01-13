window.onload = function(){
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
    
    if (superhero1 === superhero2 && superhero2 === superhero3 && superhero4 === superhero5 && superhero6 === superhero7){
      superherotype = "aquaman";
    // } else if (side1 === side2 || side2 === side3 || side1 === side3){
    //   console.log('sides', side1, side2, side3)
    //   superherotype = "spiderman";
    // } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    //   console.log('unequal sides!');
    //   if ((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2) {
    //     superherotype = 'batman';        
    //   } else {
    //     superherotype = 'superman';
    //   }
      
    }
    document.getElementById('output-area').innerText = superherotype.toUpperCase();
  }
}