document.addEventListener('DOMContentLoaded', function() {
    var notification = document.querySelector('.notification');
    var alertMenu = document.querySelector('.alert-menu');
    var profile = document.querySelector('.profile');
    var topbarMenu = document.querySelector('.topbar-menu');
    const svgIcon = document.querySelector('#banner svg');
    const banner = document.querySelector('#banner');

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

        if (banner) {
            // Remove the section
            banner.remove();
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

    svgIcon.addEventListener('click', handleDocumentClick);
});