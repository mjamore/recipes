// CONTROLLERS
recipesApp.controller('mainController', ['$scope', '$uibModal', 'recipesService', 'Facebook', '$q', function($scope, $uibModal, recipesService, Facebook, $q) {

	// Cache selectors
	var $userSearch = angular.element('#user-search');

	// Get recipes from recipesService
	var recipesPromise = recipesService.getRecipes();
	recipesPromise.then(function(response) {
		$scope.recipes = response.data;
	});

	// Get categories from recipesService
	var categoriesPromise = recipesService.getCategories();
	categoriesPromise.then(function(response) {
		$scope.categories = response.data;
	});
	
	// Get tags from recipesService
	var tagsPromise = recipesService.getTags();
	tagsPromise.then(function(response) {
		$scope.tags = response.data;
	});
	
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


recipesApp.controller('recipeModalController', ['$scope', '$uibModalInstance', 'recipes', 'recipesService', '$compile', function($scope, $uibModalInstance, recipes, recipesService, $compile) {
	
	// Get categories from recipesService
	var categoriesPromise = recipesService.getCategories();
	categoriesPromise.then(function(response) {
		$scope.categories = response.data;
	});

	$scope.selectedIndex = recipes.pop();
	$scope.recipes = recipes[0];

	$scope.selected = {
		item: $scope.recipes[$scope.selectedIndex]
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	}

	$scope.addNewIngredient = function() {
		$('.edit-recipe-modal .ingredients button').before($compile('<add-ingredient />')($scope));
	}
}]);


recipesApp.controller('addNewRecipeModalController', ['$scope', '$uibModalInstance', '$compile', 'recipesService', function($scope, $uibModalInstance, $compile, recipesService) {

	$scope.nameHasAlreadyBeenUsed = false;

	// Get recipes from recipesService
	var recipesPromise = recipesService.getRecipes();
	recipesPromise.then(function(response) {
		$scope.recipes = response.data;
	});

	// Get data from tags from recipesService
	var tagsPromise = recipesService.getTags();
	tagsPromise.then(function(response) {
		$scope.tags = response.data;
	});
	$scope.loadTags = function(query) {
		return $scope.tags;
	}

	// Get categories from recipesService
	var categoriesPromise = recipesService.getCategories();
	categoriesPromise.then(function(response) {
		$scope.categories = response.data;
	});

	$scope.hasNameAlreadyBeenUsed = function(event) {
		var recipeName = event.target.value.toLowerCase();
		var user = $('.username').text().toLowerCase();

		// Check all recipes names against the name the user entered
		$scope.recipes.forEach(function(arrayItem) {
			if(arrayItem.name.toLowerCase() === recipeName) {
				if(arrayItem.author.toLowerCase() === user) {
					// To-Do: display error message to user and do not allow form to be submitted until fixed
					console.log('User already has a recipe with this name. Need to display error message to user and do not allow form to be submitted until fixed.');
					$scope.nameHasAlreadyBeenUsed = true;
					// $scope.$apply();
					console.log($scope.nameHasAlreadyBeenUsed);
				}
			}
		});

		$scope.nameHasAlreadyBeenUsed = false;
	}


	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	}

	$scope.addNewIngredient = function() {
		$('.add-new-recipe-modal .ingredients button').before($compile('<add-ingredient />')($scope));
	}
}]);


recipesApp.controller('editRecipesController', ['$scope', 'recipesService', function($scope, recipesService) {
	// Get categories from recipesService
	var categoriesPromise = recipesService.getCategories();
	categoriesPromise.then(function(response) {
		$scope.categories = response.data;
	});

	// Get data from tags from recipesService
	var tagsPromise = recipesService.getTags();
	tagsPromise.then(function(response) {
		$scope.tags = response.data;
	});
	$scope.loadTags = function(query) {
		return $scope.tags;
	}
}]);