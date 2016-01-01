// CONTROLLERS
recipesApp.controller('mainController', ['$scope', '$uibModal', 'recipesService', function($scope, $uibModal, recipesService) {

	$scope.recipes = recipesService.getRecipes();
	$scope.categories = recipesService.getCategories();
	$scope.tags = recipesService.getTags();

	$scope.items = ['item1', 'item2', 'item3'];
	$scope.animationsEnabled = true;

	var $userSearch = angular.element('#user-search');

	$scope.openRecipeModal = function ($event) {
		var index = $event.target.closest('recipe').dataset.index,
			returnArray = [$scope.recipes, index];

		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'directives/recipeModal.html',
			controller: 'secondController',
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


recipesApp.controller('secondController', ['$scope', '$uibModalInstance', 'recipes', '$location', function($scope, $uibModalInstance, recipes, $location) {

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