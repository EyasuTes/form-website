const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.checkValidity()) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  });

  input.addEventListener('focus', () => {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  });
});

const pass= document.querySelector('#password')
const incorr=document.querySelector('.incorr')
const confpass=document.querySelector('#confirm-password')
const form=document.querySelector('#myform')

form.addEventListener("submit", function(e) {
  incorr.textContent = '';
  

    if(pass.value===confpass.value){
        form.submit();
        
    }
    
    else{
        e.preventDefault();
        incorr.textContent='*Passwords do not match'
        pass.style.borderColor="red"
        confpass.style.borderColor='red'
    }
    
})
const inputss = document.querySelectorAll('input');
const button=document.querySelector('button')
button.addEventListener('click', function(e){
    inputss.forEach(function(input) {
        if(input.value===''){
            input.style.borderColor='red'
        }
    });
})
