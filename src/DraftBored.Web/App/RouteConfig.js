(function () {
	function RouteConfig($routeProvider) {
		var i = 0;
		$routeProvider.
			when('/', {
				templateUrl: 'App/TeamSelection/TeamSelection.html',
				controller: 'TeamSelection',
				controllerAs: 'vm'
			}).
			when('/draft', {
				templateUrl: 'App/Draft/Draft.html',
				controller: 'Draft',
				controllerAs: 'vm'
			}).
			when('/draft/:team', {
				templateUrl: 'App/Draft/Draft.html',
				controller: 'Draft',
				controllerAs: 'vm'
			});
	}

	angular
		.module('DraftBored')
		.config(['$routeProvider', RouteConfig]);
})();