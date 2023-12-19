document.addEventListener("DOMContentLoaded", function () {
    var lastScrollTop = 0;
    var sections = document.querySelectorAll('section');

    // Check if the URL has a hash
    if (window.location.hash) {
        // Remove 'active' class from all sections
        sections.forEach(function(section) {
            section.classList.remove('active');
        });

        // Add 'active' class to the section with the matching id
        var targetSection = document.getElementById(window.location.hash.substring(1));
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    window.addEventListener("scroll", function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;

            if (st > lastScrollTop) {
                // Scrolling down, hide the footer
                document.body.classList.add('hide-footer');
            } else {
                // Scrolling up, show the footer
                document.body.classList.remove('hide-footer');
            }

            if (st + window.innerHeight > sectionTop + sectionHeight / 2 &&
                st < sectionTop + sectionHeight) {
                // Section is in the viewport
                section.classList.add('active');
            }
        });

        lastScrollTop = st;
    });
});
