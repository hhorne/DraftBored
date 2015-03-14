(function () {
	angular
		.module("DraftBored")
		.factory("DraftSettings",
			function () {
				return {
					team: {},
					prospects: {},
					picks: {},
					isLoaded: false,
					load: function (draft) {
						this.teams = draft.teams;
						this.prospects = draft.prospects;
						this.picks = draft.picks;
						this.isLoaded = true;
					}
				};
			});
})();