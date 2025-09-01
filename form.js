let fname = document.querySelector("#fn");
let form=document.querySelector("form");
let lname = document.querySelector("#lname");
let email=document.querySelector("#em");
let pass=document.querySelector("#ps");
let cpass=document.querySelector("#cp");
let errors = document.getElementsByClassName("error");
let toggle1=document.querySelector("#toggle1");
let toggle2=document.querySelector("#toggle2");
let phone=document.getElementById("mob");
let checkbox= document.getElementsByName("checkbox");
let radio= document.getElementsByName("gen");
let regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
let pass_regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{5,}$/;
let ph_regex= /^\+92\d{10}$/;
let sp_regex= /^\S+$/;

form.addEventListener("submit", function(e){

    if(!valid()){  
        e.preventDefault();  
    }
    return valid();
});
//fname
fname.addEventListener("input",()=>{
    if(fname.value==""){
        error(0, "")
        rval = false;
    }
    else if(!sp_regex.test(fname.value)){
        error(0, "*Spaces are not allowed")
        rval = false;
    } 
    else{
            errors[0].innerHTML=""; 
    }
    
})
lname.addEventListener("input",()=>{
    if(lname.value==""){
        error(1, "")
        rval = false;
    }
    
    else if(!sp_regex.test(lname.value)){
        error(1, "*Spaces are not allowed")
        rval = false;
    }
    else{
            errors[1].innerHTML=""; 
    }
    
})
// email
email.addEventListener("input",()=>{
    if(!regex.test(email.value)){
        error(2, "*Please Enter Valid email")
        rval = false;
    }else{
            errors[2].innerHTML=""; 
    }
    
})
// password
pass.addEventListener("input",()=>{
   if(!pass_regex.test(pass.value)){
            error(3," Password must contain atleast one uppercase, lowercase and special charater. Minimum length is 5 characters")
            rval=false;
        }
         else{
            errors[3].innerHTML=""; 
    }
     if(pass.value !== cpass.value){
        error(4, "*Password must be same")
        rval = false;
    }
    else{
            errors[4].innerHTML=""; 
    }

    

})
// confirm password
cpass.addEventListener("input",()=>{
   if(pass.value !== cpass.value){
        error(4, "*Password must be same")
        rval = false;
    }
    else{
            errors[4].innerHTML=""; 
    }

})
//phone 
phone.addEventListener("input",()=>{
   if(isNaN(phone.value)){
        error(5, "*Only digits are allowed");
        rval = false;
       
    }else if(phone.value === "") {
        errors[5].innerHTML = "";
     
    }
   
    else if(!ph_regex.test(phone.value))
    {
        
        error(5, "*Invalid phone number. Enter 11 digits");
        rval = false;
    }
    else{
            errors[5].innerHTML=""; 
    }

})

// checkbox
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", () => {
       
        let check = 0;
        for (let j = 0; j < checkbox.length; j++) {
            if (checkbox[j].checked) {
                check++;
            }
        }
        if (check > 3) {
            // checkbox[i].checked = false; 
            error(7, "*You can select only 3 options");
        } else {
            errors[7].innerHTML = ""; 
        }
    });
}
//radio
for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener("click", () => {
       
        let r = 0;
        for (let j = 0; j < radio.length; j++) {
            if (!radio[j].checked) {
               
            }
            else {
            errors[8].innerHTML = ""; 
        }
        }
       
    });
}


toggle1.addEventListener("click", ()=>{
    if(pass.type==="password"){
        pass.type="text";
        toggle1.classList.add("fa-eye");
        toggle1.classList.remove("fa-eye-slash")
    }
        
    else if(pass.type==="text"){
        pass.type="password";
        toggle1.classList.remove("fa-eye");
        toggle1.classList.add("fa-eye-slash")
    }
       

})
toggle2.addEventListener("click", ()=>{
    if(cpass.type==="password"){
        cpass.type="text";
        toggle2.classList.add("fa-eye");
        toggle2.classList.remove("fa-eye-slash")
    }
        
    else if(cpass.type==="text"){
        cpass.type="password";
        toggle2.classList.remove("fa-eye");
        toggle2.classList.add("fa-eye-slash")
    }
       

})


error = (index, msg) => {
    errors[index].innerHTML = msg;
    
}


valid=()=>{
    let rval= true;
 
    if(fname.value==""){
        error(0, "*This field is required")
        rval = false;
    }
    if(lname.value==""){
        error(1, "*This field is required")
        rval = false;
    }
    if(email.value == ""){
         error(2, "*This field is required")
        rval = false;
    }
    if(pass.value==""){
        error(3, "*This field is required")
        rval = false;
    }
    if(cpass.value==""){
        error(4, "*This field is required")
        rval = false;
    }
    
    // phone 
    if(phone.value==""){
        error(5, "*Phone Number is required");
        rval = false;
    }
 
    // checkbox
     let chk = 0;
        for (let j = 0; j < checkbox.length; j++) {
            if (checkbox[j].checked) {
                chk++;
            }
        }
        if(chk===0){
            error(7, "*Select at least one option");
    rval = false;
        }
  
    // radio
    let r=0;
    for(let i=0; i<radio.length; i++)
    {
        if(!radio[i].checked){
            error(8, "*Select one option");
            rval = false;

        }
        else if(radio[1].checked){
           errors[8].innerHTML = ""; 

        }
          else {
            errors[8].innerHTML = ""; 
        }
    }



    
    return rval;
    
} 
// fname.addEventListener("input", ()=> errors[0].innerHTML = "");


function inp1(){
    errors[1].innerHTML=""; 
}
