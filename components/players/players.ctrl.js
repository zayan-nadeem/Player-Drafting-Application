
(function(){
	
	"use strict";

	angular
		.module('zipari')
		.controller('playersCtrl', function($scope, $http, playersFactory, teamsFactory, $mdSidenav, $mdToast, $state){

			var vm = this;


			vm.draftTeam = new Array();
			vm.done = new Number();
			vm.teasm2 = new Object();

			playersFactory.getPlayers().then(function(res){
				vm.players = res.data;
				vm.done = vm.players.length;
						
			});

			teamsFactory.getTeams().then(function(res){
				vm.teams = res.data.teams;
				vm.teams2 = vm.teams;
				vm.teams.forEach(function(t) {
					vm.draftTeam.push(new Array());
				})				
				
			});

			vm.openSidebar = function(){
				$mdSidenav('left').open();  //becuase md-component-id is left
			}

			vm.closeSidebar = function(){
				$mdSidenav('left').close();
			}

			vm.editPlayer = function(player) {
			//	vm.editing = true;
				vm.openSidebar();
				vm.player = player;
			}


			vm.saveEdit = function(){
			//	vm.editing = false;
				vm.star = {};
				vm.closeSidebar();
				showToast("Edit saved!");
			}

			function showToast(message) {
				$mdToast.show(
						$mdToast.simple()
							.content(message)
							.position('top, right')
							.hideDelay(3000)
					);
			}


			vm.draftPlayer = function(player,team){
				//console.log(player);
				//console.log(team);
				var index = vm.teams.indexOf(team);
				vm.draftTeam[index].push(player);
				showToast(player.name + " Drafted");
				vm.done = vm.done - 1;
				console.log(vm.done)

			}


			vm.isDone = function() {
				if(vm.done == 0)
					return false;
				else 
					return true;
				
			}


			// vm.getRosters = function(){
			// 	vm.viewRosters()
			// 	.then(function(){
			// 		$state.go('roster', {
			// 			viewRosters: vm.finalRoster
			// 		});
			// 	})
			// }

			vm.viewRosters = function() {
				vm.finalRoster = vm.teams.map(function(value, index) {
    			return {
        			team: value,
        			players: vm.draftTeam[index]
   				}
				});
			}
			
			vm.finalDraft = function() {
				var finalRoster = vm.teams.map(function(value, index) {
    			return {
        			team: value,
        			players: vm.draftTeam[index]
   				}
				});
				console.log(finalRoster);
				vm.done=vm.done+1;
				$state.go('players.roster', {
					finalRoster : finalRoster
				});
				//changeState();
			}

});

})();

