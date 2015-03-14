(function () {
	/**
	* @ngInject
	*/
	function TeamSelection($location, DataService, DraftSettings) {
		var vm = this;
		vm.draft = {};
		vm.selectedTeam = {};

		DataService
			.GetDraft(2015)
			.success(function (data, status, headers, config) {
				vm.draft = data;
				vm.teams = vm.draft.teams;
			})
			.error(function (data, status, headers, config) {
				console.log("Error");
			});

		vm.SelectTeam = function (team) {
			vm.selectedTeam = team;
			console.log("Selected: " + team.name);
		};

		vm.IsTeamSelected = function (team) {
			return team == vm.selectedTeam;
		};

		vm.Submit = function () {
			if (vm.selectedTeam === "undefined" || vm.selectedTeam === null)
				return;

			DraftSettings.load(vm.draft);

			$location.path("/draft/" + vm.selectedTeam.short_name.toLowerCase());
		};
	}

	angular
		.module('DraftBored.Controllers')
		.controller('TeamSelection', TeamSelection);
})();