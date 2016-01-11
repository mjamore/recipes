// CONTROLLERS
recipesApp.controller('mainController', ['$scope', '$uibModal', 'recipesService', function($scope, $uibModal, recipesService) {

	// Cache selectors
	var $userSearch = angular.element('#user-search');

	// Get data from recipes, categories, and tags from recipesService
	$scope.recipes = recipesService.getRecipes();
	$scope.categories = recipesService.getCategories();
	$scope.tags = recipesService.getTags();

	$scope.animationsEnabled = true;

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
			console.log('Modal dismissed at: ' + new Date());
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

recipesApp.controller('loginController', ['$scope', function($scope) {
	$scope.something = 'something';
}]);


recipesApp.controller('editRecipesController', ['$scope', function($scope) {
	$scope.test = 'editRecipesController';
}]);