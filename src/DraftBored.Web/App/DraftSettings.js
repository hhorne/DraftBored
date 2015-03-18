(function () {
	function DraftSettings() {
		var loaded = false;
		var settings = this;
		var inProgress = false;
		var started = false;

		settings.picks = [];
		settings.prospects = [];
		settings.round = 1;
		settings.rounds = [1, 2, 3, 4, 5, 6, 7];
		settings.teams = [];
		settings.team = {};

		settings.load = function (team, draft) {
			settings.team = team;
			settings.picks = draft.picks;
			settings.prospects = draft.prospects;
			settings.teams = draft.teams;
			loaded = true;
		};

		settings.isLoaded = function () {
			return loaded;
		};

		settings.isStarted = function () {
			return started;
		};

		settings.isInProgress = function () {
			return inProgress;
		};

		settings.start = function () {
			started = true;
			inProgress = true;
		};

		settings.stop = function () {
			inProgress = false;
		};
	}

	var draftSettings = new DraftSettings();

	angular
		.module("DraftBored")
		.factory("DraftSettings",
			function () {
				return draftSettings;
			});
})();