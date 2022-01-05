window.onload = function() {

    let input = document.getElementById('input');
    let button = document.getElementById('button');
    let error = document.getElementById('error');

    button.addEventListener('click', function() {
        error.classList.add("hidden");
        input.classList.remove("error-border");

        if(!validateEmail(input.value)) {
            error.classList.remove('hidden');
            input.classList.add('error-border');
        } 
    });

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}