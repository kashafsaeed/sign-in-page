import { supabase } from './config.js';

let documentEmail = document.getElementById('email-address');
let documentPassword = document.getElementById('password-genrate');
let loginForm = document.getElementById('form');

async function login(e){
  e.preventDefault();
  console.log(documentEmail.value, documentPassword.value);
    try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: documentEmail.value,
      password: documentPassword.value,
    });
    if(error){
      console.log("Error ----->", error.message);
      Swal.fire({
    icon: 'error',
    title: 'Login Failed',
    text: error.message,
  });
      return;
    }
    if(data){
      console.log("User Logged In ----->", data);
        // Form reset
        documentEmail.value = '';
        documentPassword.value = '';

  Swal.fire({
    icon: 'success',
    title: 'Login Successful',
    timer: 1500,
    showConfirmButton: false
  });
  }
    } catch (err) {
    console.log("Catch Error ----->", err);
    }
}

loginForm.addEventListener('submit', login);
