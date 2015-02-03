app.controller('HomeController', [function ($scope)  {

	// **********************************************************************
	// Function to dynamicly change image sizes

	var height, largeImages = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        height = window.innerHeight;

        largeImages = document.getElementsByClassName('imgholder');

        for (i=0; i<largeImages.length; i++) {
        	largeImages[i].style.height = height+'px';
        }
    }

    // Event handling
    function addListeners() {
        window.addEventListener('resize', resize);
    }


    function resize() {
        height = window.innerHeight;
        for (i=0; i<largeImages.length; i++) {
            largeImages[i].style.height = height+'px';
        }
    }
	// *********************************************************************
}]);

app.controller('MenuController', [function($scope ) {

}]);

app.controller('Contact', [function($scope) {

}]);
