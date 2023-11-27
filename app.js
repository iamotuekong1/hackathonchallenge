// Get the SVG element
const svgIcon = document.querySelector('#banner svg');

// Add a click event listener to the SVG icon
svgIcon.addEventListener('click', function () {
    // Get the section to remove
    const banner = document.querySelector('#banner');

    // Check if the section exists
    if (banner) {
        // Remove the section
        banner.remove();
    }
});

// let topbarMenu = document.getElementById('topbar-menu');

// function toggleTopbarMenu() {
//     topbarMenu.classList.toggle("open-menu");
// }

// let alertMenu = document.getElementById('notification');

// function toggleAlertMenu() {
//     alertMenu.classList.toggle("open-menu");
// }
document.addEventListener('DOMContentLoaded', function() {
    var notification = document.querySelector('.notification');
    var alertMenu = document.querySelector('.alert-menu');
    var profile = document.querySelector('.profile');
    var topbarMenu = document.querySelector('.topbar-menu');

    function toggleAlertMenu() {
        alertMenu.classList.toggle('open-menu');
    }

    function toggleTopbarMenu() {
        topbarMenu.classList.toggle('open-menu');
    }

    function handleDocumentClick(event) {
        if (event.target !== notification) {
            alertMenu.classList.remove('open-menu');
        }

        if (event.target !== profile) {
            topbarMenu.classList.remove('open-menu');
        }
    }

    notification.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleAlertMenu();
        topbarMenu.classList.remove('open-menu');
    });

    profile.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleTopbarMenu();
        alertMenu.classList.remove('open-menu');
    });

    document.addEventListener('click', handleDocumentClick);
});
