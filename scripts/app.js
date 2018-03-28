angular
	.module('zipari', ['ngMaterial', 'ui.router'])
	.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {


		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('players', { 
				url: '/players',
				templateUrl: 'components/players/players.tpl.html',
				controller: 'playersCtrl as vm'
			})
			.state('players.roster', {
				url: '/roster',
				templateUrl: 'components/roster/roster.tpl.html',
				controller: 'rosterCtrl as vm',
				params: {
					finalRoster : null
				}
			});			
		
	});
	
	// .run(['PrintToConsole', function(PrintToConsole) {
 //    PrintToConsole.active = true;	
	// }])