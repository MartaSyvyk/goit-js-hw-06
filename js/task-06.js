const refs = {
    inputEl: document.querySelector("#validation-input"),

}

// refs.inputEl.addEventListener("input", onInputCheck);

//     function onInputCheck (event) {

 
// let isValid = undefined;

//      if (event.currentTarget.value.length >= refs.inputEl.getAttribute("data-length")) {
       
//           isValid = true;
//          }
//          else 
        
//          isValid = false;


//          console.log(isValid);
 

refs.inputEl.addEventListener("blur", onValidationCheck);

function onValidationCheck () {

    let isValid = event.currentTarget.value.length === +refs.inputEl.dataset.length;
          
    
          
    if (!isValid) {

 
        refs.inputEl.classList.add("invalid");
        refs.inputEl.classList.remove("valid"); 
    
return
          
        }

  
          refs.inputEl.classList.add("valid");  
          refs.inputEl.classList.remove("invalid"); 
   
}
         
     
