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
		
		DraftService.PrepareDraft(teamId, 2015, setDraft);

		vm.loop = function () {
			DraftService.SimulatePick();
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
	}

	angular
		.module("DraftBored.Controllers")
		.controller("Sim", Sim);
})();