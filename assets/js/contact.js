
// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate empty fields
        if (!name || !email || !phone || !message) {
            feedback.textContent = "Please complete every field.";
            feedback.className = "form-feedback error";
            return;
        }

        // Correct email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) {
            feedback.textContent = "Please enter a valid email address.";
            feedback.className = "form-feedback error";
            return;
        }

        // Validate phone number
        const phonePattern = /^[0-9]+$/;

        if (!phonePattern.test(phone)) {
            feedback.textContent = "Phone number must contain digits only.";
            feedback.className = "form-feedback error";
            return;
        }

        // Successful validation
        feedback.textContent = "Validation successful! Your information is correct.";
        feedback.className = "form-feedback success";

        form.reset();
    });

});
