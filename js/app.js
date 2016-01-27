var recipesApp = angular.module('recipesApp', ['ngRoute', 'ui.bootstrap', 'facebook', 'ngTagsInput']);

recipesApp.config(['$routeProvider', '$locationProvider', 'FacebookProvider', function($routeProvider, $locationProvider, FacebookProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'mainController'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
	FacebookProvider.init('211930432483084');
}]);

recipesApp.directive('recipe', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/recipeSearchResult.html',
		replace: false
	}
});

recipesApp.directive('addIngredient', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/add-ingredient.html',
		replace: false
	}
});

recipesApp.directive('editIngredient', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/edit-ingredient.html',
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