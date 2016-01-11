// CONTROLLERS
recipesApp.controller('mainController', ['$scope', '$uibModal', 'recipesService', 'Facebook', '$q', function($scope, $uibModal, recipesService, Facebook, $q) {

	// Cache selectors
	var $userSearch = angular.element('#user-search');

	// Get data from recipes, categories, and tags from recipesService
	$scope.recipes = recipesService.getRecipes();
	$scope.categories = recipesService.getCategories();
	$scope.tags = recipesService.getTags();
	
	$scope.animationsEnabled = true;
	$scope.isModalOpened = false;
	$scope.authorizedUsers = [
		'Michael Amore',
		'Brenda Amore Vickery',
		'Paul Amore',
		'Nancy Lascala Milford'
	];

	$scope.openRecipeModal = function (recipe) {
		// prevent conflict with openRecipeModal - http://stackoverflow.com/questions/19706187/angular-ui-bootstrap-modal-how-to-prevent-multiple-modals-opening
		if($scope.isModalOpened) return;

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

		$scope.isModalOpened = true;

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
			$scope.isModalOpened = false;
		}, function () {
			console.log('View recipe modal dismissed at: ' + new Date());
			$scope.isModalOpened = false;
		});
	};

	// Facebook functions
		$scope.getFacebookLoginStatus = function() {
			Facebook.getLoginStatus(function(response) {
				if(response.status === "connected") {
					$scope.userIsLoggedIn = true;
					var promise = $scope.getLoggedInUser();
					promise.then(function(response) {
						$scope.loggedInFacebookUser = response.name;
						$scope.userIsAuthorized = $scope.checkIfUserIsAuthorized($scope.loggedInFacebookUser);
					}, function(reason) {
						console.log(reason);
					});
				}
				else {
					$scope.userIsLoggedIn = false;
				}
			});
		}
		// Run this function on page load
		$scope.getFacebookLoginStatus();

		$scope.loginToFacebook = function() {
			Facebook.login(function(response) {
				if(response.status === "connected") {
					$scope.userIsLoggedIn = true;
					$scope.getLoggedInUser();
					var promise = $scope.getLoggedInUser();
					promise.then(function(response) {
						$scope.loggedInFacebookUser = response.name;
						$scope.userIsAuthorized = $scope.checkIfUserIsAuthorized($scope.loggedInFacebookUser);
					}, function(reason) {
						console.log(reason);
					});
				}
			});
		}

		$scope.logoutOfFacebook = function() {
			Facebook.logout(function(response) {
				if(response.status === "unknown") {
					$scope.userIsLoggedIn = false;
					$scope.userIsAuthorized = false;
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

	// This function will take the logged in user name and verify if it is one of our application's authorized users
	$scope.checkIfUserIsAuthorized = function(name) {
		return $.inArray(name, $scope.authorizedUsers) > -1 ? true : false;
	}

	$scope.addNewRecipe = function() {
		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'directives/addNewRecipeModal.html',
			controller: 'addNewRecipeModalController'
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			console.log('Add new recipe modal dismissed at: ' + new Date());
		});
	}

	$scope.openEditRecipeModal = function (recipe) {
		// prevent conflict with openRecipeModal - http://stackoverflow.com/questions/19706187/angular-ui-bootstrap-modal-how-to-prevent-multiple-modals-opening
		if($scope.isModalOpened) return;

		var idx = $scope.recipes.indexOf(recipe);
			returnArray = [$scope.recipes, idx];

		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'directives/editRecipeModal.html',
			controller: 'recipeModalController',
			resolve: {
				recipes: function () {
					return returnArray;
				}
			}
		});

		$scope.isModalOpened = true;

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
			$scope.isModalOpened = false;
		}, function () {
			console.log('Edit recipe modal dismissed at: ' + new Date());
			$scope.isModalOpened = false;
		});
	};

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


recipesApp.controller('addNewRecipeModalController', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
}]);


recipesApp.controller('editRecipesController', ['$scope', function($scope) {
	$scope.test = 'editRecipesController';
}]);