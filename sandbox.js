

let randies= document.querySelectorAll("li");

randies.forEach(randy => {
    if(randy.textContent.includes('First')){
        randy.innerText += " is  " +  Math.round(Math.random() * 47); 
    }
    if(randy.textContent.includes('Second')){
        randy.innerText += " is  " +  Math.round(Math.random() * 47);  
 }
    if(randy.textContent.includes('Third')){
        randy.innerText += " is  " +  Math.round(Math.random() * 47);
} 
 if(randy.textContent.includes('Fourth')){
        randy.innerText += " is  " + Math.round(Math.random() * 47);
}  
 if(randy.textContent.includes('Fifth')){
        randy.innerText += " is  " +  Math.round(Math.random() * 47);
} 
if(randy.textContent.includes('One')){
    randy.innerText += " is  " +  Math.round(Math.random() * 10);
} 
if(randy.textContent.includes('first')){
    randy.innerText += " is  " +  Math.round(Math.random() * 59); 
}
if(randy.textContent.includes('second')){
    randy.innerText += " is  " +  Math.round(Math.random() * 59);  
}
if(randy.textContent.includes('third')){
    randy.innerText += " is  " +  Math.round(Math.random() * 59);
} 
if(randy.textContent.includes('fourth')){
    randy.innerText += " is  " + Math.round(Math.random() * 59);
}  
if(randy.textContent.includes('fifth')){
    randy.innerText += " is  " +  Math.round(Math.random() * 59);
} 
if(randy.textContent.includes('sixth')){
    randy.innerText += " is  " +  Math.round(Math.random() * 59);
}
});







