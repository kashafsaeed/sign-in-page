// import supabase from './config.js'

// let userName = document.getElementById('name')
// let email = document.getElementById('exampleInputEmail1')
// let password = document.getElementById('exampleInputPassword1')
// let signupForm = document.getElementById('myForm')

// async function register(e){
//   e.preventDefault()
//   console.log(email.value , password.value);
//   //supabase code added here
//   try {
//     const { data, error } = await supabase.auth.signUp({
//   email: email.value,
//   password: password.value,
//   options:{
//     data:{
//         userName :userName.value
//     }
//   }
// })

// if(data){
//     console.log('user ka data----->',data);
//     email.value = ''
//     password.value = ''
    
// }
//   } catch (error) {
//     console.log(error);
    
//   }
  
  
// }
// signupForm.addEventListener('submit',register)


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
