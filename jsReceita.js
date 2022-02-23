
// calc of one item Brownie


// igridients
let choc= 150;
let mant = 50;
let açucar = 5;
let ovos = 2;
let baunilha = 1;
let farinha = 120;
let bic = 1;
let nozes = 1;

// js iteration, edition

let quantidade = document.getElementById("quantidade");
let quantidade1 = document.getElementById("quantidade1");
let quantidade2 = document.getElementById("quantidade2");
let quantidade3 = document.getElementById("quantidade3");
let quantidade4 = document.getElementById("quantidade4");
let quantidade5 = document.getElementById("quantidade5");
let quantidade6 = document.getElementById("quantidade6");
let quantidade7 = document.getElementById("quantidade7");
let bottomCalcular= document.getElementById("qtdCalcular");
console.log(quantidade)


bottomCalcular.addEventListener("click", function(e){

  e.preventDefault();
  
  let pessoas = document.getElementById("pessoas");
  let pessoas1 = pessoas.value;
  
  if (pessoas1 <= 5 ){
    console.log(pessoas1)
  
   let calculado =[ 
    choc = (choc / 2) ,
    mant = (mant /2),
    açucar = (açucar /2) ,
    ovos = (ovos /2),
    baunilha = (baunilha /2),
    farinha = (farinha /2),
    bic = (bic /2),
    nozes = (nozes /2) 
   ]
   document.getElementById("quantidade").innerText=calculado[0];
   document.getElementById("quantidade1").innerText=calculado[1];
   document.getElementById("quantidade2").innerText=calculado[2];
   document.getElementById("quantidade3").innerText=calculado[3];
   document.getElementById("quantidade4").innerText=calculado[4];
   document.getElementById("quantidade5").innerText=calculado[5];
   document.getElementById("quantidade6").innerText=calculado[6];
   document.getElementById("quantidade7").innerText=calculado[7];
  
   pessoas1= 0;
    
  
  }

  else if (pessoas1 >5 || pessoas1 <=10 ){
    console.log(pessoas1)
  
   let calculado =[ 
    choc = (choc * 2) ,
    mant = (mant * 2),
    açucar = (açucar * 2) ,
    ovos = (ovos * 2),
    baunilha = (baunilha * 2),
    farinha = (farinha * 2),
    bic = (bic * 2),
    nozes = (nozes * 2) 
   ]
   document.getElementById("quantidade").innerText=calculado[0];
   document.getElementById("quantidade1").innerText=calculado[1];
   document.getElementById("quantidade2").innerText=calculado[2];
   document.getElementById("quantidade3").innerText=calculado[3];
   document.getElementById("quantidade4").innerText=calculado[4];
   document.getElementById("quantidade5").innerText=calculado[5];
   document.getElementById("quantidade6").innerText=calculado[6];
   document.getElementById("quantidade7").innerText=calculado[7];
   pessoas1= 0;
  }

   else if (pessoas1 >10 || pessoas1 <=15 ){
    console.log(pessoas1)
  
   let calculado =[ 
    choc = (choc * 4) ,
    mant = (mant * 4),
    açucar = (açucar * 4) ,
    ovos = (ovos * 4),
    baunilha = (baunilha * 4 ),
    farinha = (farinha * 4 ),
    bic = (bic * 4),
    nozes = (nozes * 4) 
   ]
   document.getElementById("quantidade").innerText=calculado[0];
   document.getElementById("quantidade1").innerText=calculado[1];
   document.getElementById("quantidade2").innerText=calculado[2];
   document.getElementById("quantidade3").innerText=calculado[3];
   document.getElementById("quantidade4").innerText=calculado[4];
   document.getElementById("quantidade5").innerText=calculado[5];
   document.getElementById("quantidade6").innerText=calculado[6];
   document.getElementById("quantidade7").innerText=calculado[7];
   pessoas1= 0;
    
  }

   else if (pessoas1 >15 || pessoas1 <=20 ){
    console.log(pessoas1)
  
   let calculado =[ 
    choc = (choc * 6) ,
    mant = (mant * 6),
    açucar = (açucar * 6) ,
    ovos = (ovos * 6),
    baunilha = (baunilha *6),
    farinha = (farinha *6),
    bic = (bic * 6),
    nozes = (nozes * 6) 
   ]
   document.getElementById("quantidade").innerText=calculado[0];
   document.getElementById("quantidade1").innerText=calculado[1];
   document.getElementById("quantidade2").innerText=calculado[2];
   document.getElementById("quantidade3").innerText=calculado[3];
   document.getElementById("quantidade4").innerText=calculado[4];
   document.getElementById("quantidade5").innerText=calculado[5];
   document.getElementById("quantidade6").innerText=calculado[6];
   document.getElementById("quantidade7").innerText=calculado[7];
  
   pessoas1= 0;
  }

   else if (pessoas1 >20 || pessoas1 <=25 ){
    console.log(pessoas1)
  
   let calculado =[ 
    choc = (choc * 8) ,
    mant = (mant * 8),
    açucar = (açucar * 8) ,
    ovos = (ovos * 8),
    baunilha = (baunilha *8),
    farinha = (farinha *8),
    bic = (bic * 8),
    nozes = (nozes *8) 
   ]

   document.getElementById("quantidade").innerText=calculado[0];
   document.getElementById("quantidade1").innerText=calculado[1];
   document.getElementById("quantidade2").innerText=calculado[2];
   document.getElementById("quantidade3").innerText=calculado[3];
   document.getElementById("quantidade4").innerText=calculado[4];
   document.getElementById("quantidade5").innerText=calculado[5];
   document.getElementById("quantidade6").innerText=calculado[6];
   document.getElementById("quantidade7").innerText=calculado[7];
  
   pessoas1= 0;
  }

  
  

})
