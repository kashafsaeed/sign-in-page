
import supabase from './config.js'

let email = document.getElementById('email');
let password = document.getElementById('password');
let signupForm = document.getElementById('sign-in-form');

async function register(e){
  e.preventDefault();

  console.log(email.value, password.value);

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if(error){
      console.log("Error ----->", error.message);
      alert(error.message);
      return;
    }

    if(data){
      console.log("User Created ----->", data);

      // Form reset
      email.value = '';
      password.value = '';

      alert("Signup successful! Go verify your email.");
    }

  } catch (err) {
    console.log("Catch Error ----->", err);
  }
}

signupForm.addEventListener('submit', register);
