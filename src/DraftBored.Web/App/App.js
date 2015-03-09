(function () {
	angular.module('DraftBored.Controllers', ['ui.bootstrap']);
	angular.module('DraftBored',
		[
			'ngRoute',
			'DraftBored.Controllers'
		]);

	function routeConfig($routeProvider) {
		var i = 0;
		$routeProvider.
			when('/', {
				templateUrl: 'App/Draft/Index.html',
				controller: 'Draft',
				controllerAs: 'vm'
			});
	}

	angular
		.module('DraftBored')
		.config(['$routeProvider', routeConfig]);
})();