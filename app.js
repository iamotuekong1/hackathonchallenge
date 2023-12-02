document.addEventListener('DOMContentLoaded', function() {
    var notification = document.querySelector('.notification');
    var alertMenu = document.querySelector('.alert-menu');
    var profile = document.querySelector('.profile');
    var topbarMenu = document.querySelector('.topbar-menu');
    const svgIcon = document.querySelector('#svgIcon');
    const banner = document.querySelector('#banner');
    const checkbox = document.getElementById('svgToggle');
    const cardListContainer = document.querySelector('.card-list-container');
    const radiobutton = document.querySelectorAll('.radio-button');
    const radiobuttons = document.querySelectorAll('.radio-button');
    const icons = document.querySelectorAll('.icon');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');

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

    function handleSvgClick() {
            banner.remove();
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

    svgIcon.addEventListener('click', handleSvgClick);

    checkbox.addEventListener('change', function() {
        if (this.checked) {
          cardListContainer.style.maxHeight = '1000px'; 
        } else {
          cardListContainer.style.maxHeight = '0';
        }
      });

    radiobuttons.forEach(function(radio) {
        radio.addEventListener('change', function() {
            const subList = this.closest('.sub-list');
            const allSubLists = document.querySelectorAll('.sub-list');

            if (this.checked) {
                allSubLists.forEach(function(list) {
                    list.style.background = '#ffffff';
                });
                subList.style.background = '#f1f1f1'; 
            }
        });
    });


    document.addEventListener('click', handleDocumentClick);

    let step = 0;

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            step--;
        } else {
            icon.classList.add('active');
            step++;
        }

        const percentage = (step / icons.length) * 100;
        progressBar.style.width = percentage + '%';
        progressText.textContent = `${step} / ${icons.length} completed`;
        });
    });

    

});

window.addEventListener('DOMContentLoaded', () => {
    const circle = document.getElementById('circle');
    const tick = document.getElementById('tick');

    // Function to set initial transparency
    const setInitialTransparency = () => {
        tick.style.fillOpacity = '0'; // Set fill opacity to 0 for 100% transparency
    };

    const done = function() {
        if (circle.classList.contains('clicked')) {
            circle.classList.remove('clicked');
            circle.classList.add('unclicked');
        } else {
            circle.classList.remove('unclicked');
            circle.classList.add('clicked');
        }
    }

    const toggleTickFill = function() {
        if (tick.classList.contains('ticked')) {
            tick.classList.remove('ticked');
            tick.classList.add('unticked');
        } else {
            tick.classList.remove('unticked');
            tick.classList.add('ticked');
        }
    }

    circle.addEventListener('click', done);
    tick.addEventListener('click', toggleTickFill);

    // Call the function to set initial transparency on window load
    setInitialTransparency();
});
