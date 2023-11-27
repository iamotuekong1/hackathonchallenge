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
