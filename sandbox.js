

let randies= document.querySelectorAll("li");

randies.forEach(randy => {
    if(randy.textContent.includes('First')){
        randy.innerText += " is  " +  Math.round(Math.random() * 50); 
    }
    if(randy.textContent.includes('Second')){
        randy.innerText += " is  " +  Math.round(Math.random() * 50);  
 }
    if(randy.textContent.includes('Third')){
        randy.innerText += " is  " +  Math.round(Math.random() * 50);
} 
 if(randy.textContent.includes('Fourth')){
        randy.innerText += " is  " + Math.round(Math.random() * 50);
}  
 if(randy.textContent.includes('Fifth')){
        randy.innerText += " is  " +  Math.round(Math.random() * 50);
} 
if(randy.textContent.includes('Sixth')){
     randy.innerText += " is  " +  Math.round(Math.random() * 50);
}     
});


