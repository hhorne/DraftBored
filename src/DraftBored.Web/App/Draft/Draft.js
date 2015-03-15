(function () {
	/**
	* @ngInject
	*/
	function Draft($location, $routeParams, DataService, DraftSettings) {
		var vm = this;
		vm.round = 1;
		vm.rounds = [1, 2, 3, 4, 5, 6, 7];

		vm.loadDraft = function (draft) {
			vm.teams = draft.teams;
			vm.picks = draft.picks;
			vm.prospects = draft.prospects;
			vm.drafted = [{}, {}, {}, {}, {}];

			var userTeam =
				draft.teams.filter(function (t) {
					return t.short_name.toLowerCase() === $routeParams.team;
				})[0];

			vm.team = userTeam;
		};

		if (!DraftSettings.isLoaded) {
			if ($routeParams.team === null || typeof $routeParams.team === "undefined") {
				$routeParams.team = "jax";
			}

			DataService
				.GetDraft(2015)
				.success(function (data, status, headers, config) {

					DraftSettings.load(data);

					vm.settings = DraftSettings;
					vm.loadDraft(vm.settings);
				})
				.error(function (data, status, headers, config) {
					console.log("Error");
				});
		}
		else {
			vm.settings = DraftSettings;
			vm.loadDraft(vm.settings);
		}
	}

	angular
		.module('DraftBored.Controllers')
		.controller('Draft', Draft);
})();