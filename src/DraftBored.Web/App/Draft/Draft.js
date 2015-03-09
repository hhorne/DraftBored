(function () {
	/**
	* @ngInject
	*/
	function Draft($modal, DraftService) {
		var vm = this;

		vm.getDraftSuccess = function (data, status, headers, config) {
			vm.draft = data;

			var teamSelector = $modal.open({
				templateUrl: 'App/TeamSelection/Index.html',
				controller: 'TeamSelection',
				size: 'lg',
				resolve: {
					teams: function () {
						return vm.draft.teams;
					}
				}
			});

			teamSelector.result.then(function (selectedTeam) {
				vm.selected = selectedTeam;
			});
		};

		vm.getDraftError = function (data, status, headers, config) {
			console.log("Error retrieving draft data");
		};

		DraftService
			.GetDraft(
				vm.getDraftSuccess,
				vm.getDraftError
			);
	}

	angular
		.module('DraftBored.Controllers')
		.controller('Draft', Draft);
})();