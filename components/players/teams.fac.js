(function(){

	"use strict";

	angular
		.module('zipari')
		.factory('teamsFactory', function($http){

			function getTeams(){
					return $http.get('data/teams.json');
			}


			return {
				getTeams :getTeams
			}
			
		});
})();