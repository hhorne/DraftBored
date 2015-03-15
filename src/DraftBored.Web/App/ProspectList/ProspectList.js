(function () {
	function prospectList() {
		return {
			restrict: "E",
			scope: { prospects: "=" },
			templateUrl: "App/ProspectList/ProspectList.html",
		};
	}

	angular
		.module("DraftBored")
		.directive("prospectList", prospectList);
})();