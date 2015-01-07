app.controller('HomeImageController', function($scope) {
	$scope.images = [
		{ src:'/assets/img/coffee.jpg', title:'image1'}, 
		{ src:'/assets/img/indoor.jpg', title:'image2'}, 
		{ src:'/assets/img/outdoor.jpg', title:'image3'}, 
	];

	$scope.addImage = function() {
		$scope.customers.push({ 
			name: $scope.newCustomer.name, 
			city: $scope.newCustomer.city 
		});
	};

	// **********************************************************************
	// Function to dynamicly change image sizes

	var height, largeHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        height = window.innerHeight;

        largeHeader = document.getElementsByClassName('imgholder');
        for (i=0; i<largeHeader.length; i++) {
        	largeHeader[i].style.height = height+'px';
        }
    }

    // Event handling
    function addListeners() {
        window.addEventListener('resize', resize);
    }


    function resize() {
        height = window.innerHeight;
        for (i=0; i<largeHeader.length; i++) {
            largeHeader[i].style.height = height+'px';
        }
    }
	// *********************************************************************
});
