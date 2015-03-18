(function () {
	/**
	* @ngInject
	*/
	function DraftService($q, DataService, DraftSettings) {
		var svc = this;
		svc.draft = DraftSettings;
		svc.draft.drafted = [];
		svc.GetTeam = function (shortName, teams) {
			return teams.filter(function (t) {
				return t.short_name === shortName.toUpperCase();
			})[0];
		};
		
		svc.PrepareDraft = function (shortName, year, success) {
			if (!DraftSettings.isLoaded()) {
				if (shortName === "") {
					shortName = "JAX";
				}

				DataService
					.GetDraft(year)
					.success(function (data, status, headers, config) {
						var team = svc.GetTeam(shortName, data.teams);
						svc.draft = DraftSettings;
						svc.draft.load(team, data);
						success();
					})
					.error(function (data, status, headers, config) {
						console.log("Error");
					});

				return;
			}

			success();
		};

		svc.SelectProspect = function (prospect) {
			var currentPick = svc.draft.picks[0];
			var prospectIndex = svc.draft.prospects.indexOf(prospect);

			prospect.selection = currentPick;
			svc.draft.prospects.splice(prospectIndex, 1);
			svc.draft.drafted.push(prospect);
			svc.draft.picks.splice(0, 1);
			svc.draft.round = svc.draft.picks[0].round_num;
		};
	}

	angular
		.module("DraftBored")
		.service("DraftService", DraftService);
})();