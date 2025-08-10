document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const feedbackForm = document.getElementById('feedback-form');

    // Toggle mobile navigation on burger icon hover
    // Using mouseover and mouseout for hover effect
    if (burgerIcon && mobileMenu) {
        burgerIcon.addEventListener('mouseover', function() {
            mobileMenu.classList.add('show');
        });

        burgerIcon.addEventListener('mouseout', function() {
            // A small delay to allow the user to move to the menu
            setTimeout(() => {
                if (!mobileMenu.matches(':hover')) {
                    mobileMenu.classList.remove('show');
                }
            }, 300);
        });

        mobileMenu.addEventListener('mouseout', function() {
            mobileMenu.classList.remove('show');
        });
    }

    // Handle feedback form submission
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Placeholder for form submission logic
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const comments = document.getElementById('comments').value;

            console.log("Feedback Submitted:");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Comments:", comments);

            // In a real application, you would send this data to a server.
            // For now, we will clear the form and provide a simple alert message.
            alert("Thank you for your feedback! It has been submitted.");
            feedbackForm.reset();
        });
    }
});
