var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/home',
		{
			controller: 'HomeImageController',
			templateUrl: '/app/partials/home.html'
		})
		.when('/menu',
		{
			controller: 'HomeImageController', 
			templateUrl: '/app/partials/menu.html'
		})
		.when('/contact',
		{
			controller: 'HomeImageController',
			templateUrl: '/app/partials/contact.html'
		})
		.otherwise({ redirectTo: '/home'});
});