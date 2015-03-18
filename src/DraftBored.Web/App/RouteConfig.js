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
				templateUrl: 'App/Sim/Sim.html',
				controller: 'Sim',
				controllerAs: 'vm'
			}).
			when('/draft/:team', {
				templateUrl: 'App/Sim/Sim.html',
				controller: 'Sim',
				controllerAs: 'vm'
			});
	}

	angular
		.module('DraftBored')
		.config(['$routeProvider', RouteConfig]);
})();