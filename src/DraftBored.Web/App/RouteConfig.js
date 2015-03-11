﻿(function () {
	function RouteConfig($routeProvider) {
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
		.config(['$routeProvider', RouteConfig]);
})();