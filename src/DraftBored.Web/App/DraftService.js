(function () {
	/**
	* @ngInject
	*/
	function DraftService(DataService, DraftSettings) {
		var svc = this;
		svc.draft = DraftSettings;
		svc.draft.drafted = [];
		svc.GetTeam = function (shortName) {
			return svc.draft.teams.filter(function (t) {
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
						var team = svc.GetTeam(shortName);
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

		svc.SimulatePick = function () {
			var topPick = svc.draft.prospects[0];
			svc.SelectProspect(topPick);
		};
	}

	angular
		.module("DraftBored")
		.service("DraftService", DraftService);
})();