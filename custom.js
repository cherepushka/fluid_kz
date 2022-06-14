$("#nav ul li a[href^='#']").on('click', function(e) {
    e.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function() {

        window.location.hash = hash;
    });
});