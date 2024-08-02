$(document).ready(function() {
    $('#myForm').submit(function(event) {
        event.preventDefault();  
        
        // Check if email field is empty
        if ($('#email').val() === "") {
            alert("Email field is empty.");
            return;  
        }

        // Check if passwords match
        if ($('#password').val() !== $('#confirmPassword').val()) {
            alert("Passwords do not match.");
            return;  
        }

        // Check if the checkbox is checked
        if (!$('#agreeTerms').is(':checked')) {
            alert("Please agree to Terms and Conditions.");
            return;  
        }

        // If all validations pass, show success message
        alert("Success!");
    });
});
