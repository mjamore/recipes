// CONTROLLERS
recipesApp.controller('mainController', ['$scope', '$uibModal', 'recipesService', 'Facebook', '$q', function($scope, $uibModal, recipesService, Facebook, $q) {

	// Cache selectors
	var $userSearch = angular.element('#user-search');

	// Get data from recipes, categories, and tags from recipesService
	$scope.recipes = recipesService.getRecipes();
	$scope.categories = recipesService.getCategories();
	$scope.tags = recipesService.getTags();
	
	$scope.animationsEnabled = true;

	$scope.getFacebookLoginStatus = function() {
		Facebook.getLoginStatus(function(response) {
			if(response.status === "connected") {
				$scope.isUserIsLoggedIn = true;
				var promise = $scope.getLoggedInUser();
				promise.then(function(response) {
					$scope.loggedInFacebookUser = response.name;
				}, function(reason) {
					console.log(reason);
				});
			}
			else {
				$scope.isUserIsLoggedIn = false;
			}
		});
	}
	// Run this function on page load
	$scope.getFacebookLoginStatus();

	$scope.openRecipeModal = function (recipe) {
		var idx = $scope.recipes.indexOf(recipe);
			returnArray = [$scope.recipes, idx];

		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'directives/recipeModal.html',
			controller: 'recipeModalController',
			resolve: {
				recipes: function () {
					return returnArray;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			console.log('View recipe modal dismissed at: ' + new Date());
		});
	};

	// Facebook functions
		$scope.loginToFacebook = function() {
			Facebook.login(function(response) {
				if(response.status === "connected") {
					$scope.isUserIsLoggedIn = true;
					$scope.getLoggedInUser();
					var promise = $scope.getLoggedInUser();
					promise.then(function(response) {
						$scope.loggedInFacebookUser = response.name;
					}, function(reason) {
						console.log(reason);
					});
				}
			});
		}

		$scope.logoutOfFacebook = function() {
			Facebook.logout(function(response) {
				if(response.status === "unknown") {
					$scope.isUserIsLoggedIn = false;
				}
			});
		}

		$scope.getLoggedInUser = function() {
			return $q(function(resolve, reject) {
				Facebook.api('/me', function(response) {
					if(response.name !== "") {
						resolve(response);
					}
					else {
						reject('Was not able to retreive the username from Facebook.');
					}
				});
			});
		}

	$scope.filterRecipes = function($event) {
		$userSearch.val($event.target.text).trigger('change');
	}

	$scope.clearSearch = function() {
		$userSearch.val('').trigger('change');
	}
}]);


recipesApp.controller('recipeModalController', ['$scope', '$uibModalInstance', 'recipes', function($scope, $uibModalInstance, recipes) {
	$scope.selectedIndex = recipes.pop();
	$scope.recipes = recipes[0];

	$scope.selected = {
		item: $scope.recipes[$scope.selectedIndex]
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
}]);


recipesApp.controller('editRecipesController', ['$scope', function($scope) {
	$scope.test = 'editRecipesController';
}]);