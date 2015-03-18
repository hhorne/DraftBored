(function () {
	/**
	* @ngInject
	*/
	function Sim($routeParams, DataService, DraftService) {
		var vm = this;
		var DraftedListMininimum = 5;
		var teamId = $routeParams.team.toUpperCase();

		var setDraft = function () {
			vm.draft = DraftService.draft;
		};
		
		DraftService.PrepareDraft(teamId, 2015, setDraft);

		vm.selectProspect = function (prospect) {
			console.log(prospect.name);
			DraftService.SelectProspect(prospect);
		};
	}

	angular
		.module("DraftBored.Controllers")
		.controller("Sim", Sim);
})();