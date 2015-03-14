(function () {
	/**
	* @ngInject
	*/
	function DataService($http) {
		var dataUrl = "Data/Draft{0}.min.json";

		this.GetDraft = function (year) {
			dataUrl = dataUrl.format(year);
			return $http.get(dataUrl);
		};
	}

	angular
		.module("DraftBored")
		.service("DataService", DataService);
})();