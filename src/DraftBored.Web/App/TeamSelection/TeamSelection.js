(function () {
	/**
	* @ngInject
	*/
	function TeamSelection($scope, $modalInstance, teams) {
		$scope.teams = teams;
		$scope.selected = $scope.teams[0];

		$scope.ok = function () {
			$modalInstance.close($scope.selected);
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	}

	angular
		.module('DraftBored.Controllers')
		.controller('TeamSelection', TeamSelection);
})();