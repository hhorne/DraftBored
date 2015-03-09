(function () {
	/**
	* @ngInject
	*/
	function DraftService($http) {
		var dataUrl = "Data/Draft.min.json";

		this.GetDraft = function (onSuccess, onError) {
			return $http
					.get(dataUrl)
					.success(onSuccess)
					.error(onError);
		};
	}

	angular
		.module("DraftBored")
		.service("DraftService", DraftService);

})();