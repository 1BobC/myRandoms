let random= Math.random();
//console.log(Math.round(random * 50));


let one= Math.random();
///console.log(Math.round(one * 50));

let two= Math.random();
//console.log(Math.round(two * 50));

let three= Math.random();
//console.log(Math.round(three * 50));

let four= Math.random();
//console.log(Math.round(four * 50));

let five= Math.random();
//console.log(Math.round(five * 50));

let six= Math.random();
//console.log(Math.round(six * 50));

let randies= document.querySelectorAll("li");
//console.log(randies);
randies.forEach(randy => {
    if(randy.textContent.includes('First')){
        randy.innerText += Math.round(one * 50);  
    }
    if(randy.textContent.includes('Second')){
    randy.innerText += Math.round(two * 50);  
}
   if(randy.textContent.includes('Third')){
    randy.innerText += Math.round(three * 50);
   } 
if(randy.textContent.includes('Fourth')){
    randy.innerText += Math.round(four * 50);
   }  
if(randy.textContent.includes('Fifth')){
    randy.innerText += Math.round(five * 50);
   } 
if(randy.textContent.includes('Sixth')){
    randy.innerText += Math.round(six * 50);
   }     
});


