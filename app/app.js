var app = angular.module('app', ['ngRoute','smoothScroll']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/home',
		{
			controller: 'HomeController',
			templateUrl: '/app/partials/home.html'
		})
		.when('/menu',
		{
			controller: 'HomeController', 
			templateUrl: '/app/partials/menu.html'
		})
		.when('/contact',
		{
			controller: 'HomeController',
			templateUrl: '/app/partials/contact.html'
		})
		.otherwise({ redirectTo: '/home'});
});