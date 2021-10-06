var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
		.when('/',
		{
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})
		.when('/about',
		{
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})
		.when('/contact',
		{
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		});
});

myApp.controller('mainController', function($scope) {
	
	$scope.users = [
		{
			firstname:  ' HY-424 - Computer Architecture Project'  , 
			lastname: 'Teacher:Anevainis ioannis',
			description: 'Valid number of members:2'
		},
		{
			firstname: 'HY-464 - Web Design Project',
			lastname: 'Teacher:Stefanidis Konstadinos',
			description: 'Valid number of members:2'
		},
		{
			firstname: 'HY-456 - Virtual Design Project',
			lastname: 'Teacher:Georgalidis Athanasios',
			description: 'Valid number of members:2'
		},
		{
			firstname: 'HY-335 - Computer Networks projects',
			lastname: 'Teacher:Pavlidou Christina',
			description: 'Valid number of members:3'
		},
		{
			firstname: 'HY-356 - Web Programming Project',
			lastname: 'Teacher:Mavridis Pantelis',
			description: 'Valid number of members:6'
		},
		{
			firstname: 'HY-240b - Avl trees',
			lastname: 'Teacher:Fatourou Panagiota',
			description: 'Valid number of members:4'
		},
    ];
	
	
	
});

myApp.controller('aboutController', function($scope) {
	
});

myApp.controller('contactController', function($scope) {
	
});