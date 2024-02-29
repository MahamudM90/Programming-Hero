document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField=document.getElementById('user-email')
    const email=emailField.value
    const passwordField=document.getElementById('user-password')
    const password=passwordField.value;
    if (email==='mahamud.softdev@gmail.com' && password==='mahamud'){
        location.href='bank.html'
    }
    else {
        alert('Please Provide Correct Username & Password')
    }
})