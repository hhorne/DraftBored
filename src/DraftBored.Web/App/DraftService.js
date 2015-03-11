(function () {
	/**
	* @ngInject
	*/
	function DraftService($http) {
		var dataUrl = "Data/Draft.min.json";

		this.GetDraftData = function () {
			return $http.get(dataUrl);
		};
	}

	angular
		.module("DraftBored")
		.service("DraftService", DraftService);
})();