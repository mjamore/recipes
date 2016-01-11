var recipesApp = angular.module('recipesApp', ['ngRoute', 'ui.bootstrap']);

recipesApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'mainController'
	})
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'loginController'
	})
	.when('/edit-recipes', {
		templateUrl: 'views/editRecipes.html',
		controller: 'editRecipesController'
	})
	.otherwise({
		redirectTo: '/login'
	});

	$locationProvider.html5Mode(true);
}]);

recipesApp.directive('recipe', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/recipeSearchResult.html',
		replace: false
	}
});


// borrowed from: https://gist.github.com/paulakreuger/b2af1958f3d67f46447e
recipesApp.filter('capitalize', function() {
	return function(input, scope) {
		if (input!=null)
		input = input.toLowerCase();
		return input.substring(0,1).toUpperCase()+input.substring(1);
	}
});