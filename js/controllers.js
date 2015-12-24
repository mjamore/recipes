// CONTROLLERS
recipesApp.controller('mainController', ['$scope', '$modal', 'recipesService', function($scope, $modal, recipesService) {

	$scope.recipes = recipesService.getRecipes();
	console.log($scope.recipes);

	$scope.items = ['item1', 'item2', 'item3'];
	$scope.animationsEnabled = true;

	$scope.openRecipeModal = function ($event) {
		var index = $event.target.closest('recipe').dataset.index,
			returnArray = [$scope.recipes, index];

		var modalInstance = $modal.open({
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
}]);


recipesApp.controller('secondController', ['$scope', '$modalInstance', 'recipes', '$location', function($scope, $modalInstance, recipes, $location) {

	$scope.selectedIndex = recipes.pop();
	$scope.recipes = recipes[0];

	$scope.selected = {
		item: $scope.recipes[$scope.selectedIndex]
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
		// fix stupid fucking error where modal popup changes the URL and breaks entire application
		$location.path('/');
	};
}]);

recipesApp.controller('loginController', ['$scope', function($scope) {
	console.log()
	$scope.something = 'something';
}]);