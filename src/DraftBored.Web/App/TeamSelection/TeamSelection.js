(function () {
	/**
	* @ngInject
	*/
	function TeamSelection(DraftService) {
		var vm = this;
		DraftService
			.GetDraftData()
			.success(function (data, status, headers, config) {
				vm.draft = data;
				vm.teams = vm.draft.teams;
			})
			.error(function (data, status, headers, config) {
				console.log("Error");
			});

		vm.SelectTeam = function (team) {
			vm.SelectedTeam = team;
			console.log("Selected: " + team.name);
		};
	}

	angular
		.module('DraftBored.Controllers')
		.controller('TeamSelection', TeamSelection);
})();