
// calc of one item


let quantidade = document.getElementById("quantidade").children;
let quantidade1 = 150;
let bottomCalcular= document.getElementById("qtdCalcular");
console.log(quantidade)
bottomCalcular.addEventListener("click", function(e){

  e.preventDefault();
  
  let pessoas = document.getElementById("pessoas");
  let pessoas1 = pessoas.value;
  
  if (quantidade1 >= 10 ){
    console.log(pessoas1)
  
    const calculado = quantidade1 * 3 ;
    console.log(calculado);
    
    document.getElementById("quantidade").innerText=calculado;

  }

});
