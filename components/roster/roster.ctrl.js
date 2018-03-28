(function () {
	angular
	.module('zipari')
	.controller('rosterCtrl', function($scope, $http, playersFactory, teamsFactory, $mdSidenav, $mdToast, $state, $stateParams){
		

		var vm = this;
		vm.finalRoster = $state.params.finalRoster;
		console.log(vm.finalRoster);



	});
})();

