const refs = {
    inputEl: document.querySelector("#validation-input"),

}


refs.inputEl.addEventListener("blur", onValidationCheck);

function onValidationCheck (event) {

    let isValid = event.currentTarget.value <= refs.inputEl.dataset.length && event.currentTarget.value > 0;
          
    
          
    if (!isValid) {
        console.log ("invalid");

 
        refs.inputEl.classList.add("invalid");
        refs.inputEl.classList.remove("valid"); 
    
return
          
        }

        console.log (event.currentTarget.value.length);
          refs.inputEl.classList.add("valid");  
          refs.inputEl.classList.remove("invalid"); 
   
}
         
     
