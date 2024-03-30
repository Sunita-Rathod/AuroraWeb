document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    var emailBody = '';
    formData.forEach(function(value, key) {
        emailBody += key + ': ' + value + '\n';
    });

    var emailLink = "mailto:" + formData.get('email') + "?subject=" + encodeURIComponent(formData.get('subject')) + "&body=" + encodeURIComponent(emailBody);
    window.location.href = emailLink;
});
