// Function for the Order Now button
function showWelcome() {

        alert("Thank you! Your order request has been received.")

}


// Contact form validation
document.getElementById("contactForm").addEventListener(
    "submit",
    function(event) {

        // Stop the form from refreshing the page
        event.preventDefault();


        // Get input values
        var name =
            document.getElementById("name").value.trim();

        var text =
            document.getElementById("review").value.trim();


        // Get message element
        var formMessage =
            document.getElementById("formMessage");


        // Check empty fields
        if (name === "" || review === "") {

            formMessage.innerHTML =
                "Please fill in all fields.";

            formMessage.style.color = "red";

        }

        // If all fields are filled
        else {

            formMessage.innerHTML =
                "Message sent successfully!";

            formMessage.style.color = "green";


            // Clear form
            document.getElementById("contactForm").reset();

        }

    }
);