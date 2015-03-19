(function () {
	/**
	* @ngInject
	*/
	function Sim($routeParams, $interval, DraftService) {
		var vm = this;
		var DraftedListMininimum = 5;
		var teamId = $routeParams.team.toUpperCase();
		var loopPromise = {};

		var setDraft = function () {
			vm.draft = DraftService.draft;
		};
		
		vm.draftedSearch = {
			selection: {
				round_num: 1,
			},
		};

		DraftService.PrepareDraft(teamId, 2015, setDraft);

		vm.loop = function () {
			var currentRound = vm.draft.round;
			vm.draftedSearch.selection.round_num = vm.draft.round;
			DraftService.SimulatePick();

			if (currentRound !== vm.draft.round) {
				vm.pauseSim();
			}
		};

		vm.selectProspect = function (prospect) {
			console.log(prospect.name);
			DraftService.SelectProspect(prospect);
		};

		vm.startSim = function () {
			if (!vm.draft.isInProgress()) {
				vm.draft.start();
				loopPromise = $interval(vm.loop, 1000, vm.draft.prospects.length);
			}
		};

		vm.pauseSim = function () {
			if (vm.draft.isInProgress()) {
				vm.draft.stop();
				$interval.cancel(loopPromise);
			}
		};

		vm.filterByRound = function (round) {
			if (round <= vm.draft.round) {
				vm.draftedSearch.selection.round_num = round;
			}
		};
	}

	angular
		.module("DraftBored.Controllers")
		.controller("Sim", Sim);
})();