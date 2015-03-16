(function () {
	function prospectCard() {
		return {
			restrict: "E",
			scope: { prospect: "=" },
			templateUrl: "App/ProspectCard/ProspectCard.html",
		};
	}

	angular
		.module("DraftBored")
		.directive("prospectCard", prospectCard);
})();