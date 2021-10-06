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
			firstname: 'Leah',
			lastname: 'Alsop',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum est sapien, ac fringilla libero volutpat ut. In fringilla ante vel felis egestas accumsan.'
		},
		{
			firstname: 'Grace',
			lastname: 'Rutherford',
			description: 'Cras eu dolor interdum, placerat libero eu, ultrices ante. Pellentesque sollicitudin felis sit amet elit feugiat, quis gravida lorem ultricies. Nulla ac viverra erat.'
		},
		{
			firstname: 'Carl',
			lastname: 'Bell',
			description: 'Cras eu dolor interdum, placerat libero eu, ultrices ante. Pellentesque sollicitudin felis sit amet elit feugiat, quis gravida lorem ultricies. Nulla ac viverra erat.'
		},
		{
			firstname: 'Grace',
			lastname: 'Marshall',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum est sapien, ac fringilla libero volutpat ut. In fringilla ante vel felis egestas accumsan.'
		},
		{
			firstname: 'Rose',
			lastname: 'Hudson',
			description: 'Cras eu dolor interdum, placerat libero eu, ultrices ante. Pellentesque sollicitudin felis sit amet elit feugiat, quis gravida lorem ultricies. Nulla ac viverra erat.'
		},
    ];
	
	$scope.addUser = function (first,last) {
		$scope.users.push({
			firstname: first,
			lastname: last,
			description: 'Donec tincidunt porttitor odio, eu porta velit tristique sed. Etiam justo felis, tempus auctor euismod pretium, egestas vel dui. Nam semper lacus in mauris tincidunt ultrices.'
		});
	};
	
});

myApp.controller('aboutController', function($scope) {
	
});

myApp.controller('contactController', function($scope) {
	
});