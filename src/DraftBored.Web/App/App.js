(function () {
	angular.module('DraftBored.Controllers', []);
	angular.module('DraftBored',
		[
			'ngRoute',
			'DraftBored.Controllers'
		]);

	function routeConfig($routeProvider) {
		var i = 0;
		$routeProvider.
			when('/', {
				templateUrl: 'App/TeamSelection/Index.html',
				controller: 'TeamSelection',
				controllerAs: 'vm'
			});
	}

	angular
		.module('DraftBored')
		.config(['$routeProvider', routeConfig]);
})();