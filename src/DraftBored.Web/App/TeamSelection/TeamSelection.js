(function () {
	/**
	* @ngInject
	*/
	function TeamSelection(DraftService) {
		var vm = this;
		vm.draft = DraftService
						.GetDraft()
						.success(function (data, status, headers, config) {
							vm.draft = data;
							vm.teams = vm.draft.teams;
						})
						.error(function (data, status, headers, config) {
							console.log("Error");
						});
	}

	angular
		.module('DraftBored.Controllers')
		.controller('TeamSelection', TeamSelection);
})();