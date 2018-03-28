(function(){

	"use strict";

	angular
		.module('zipari')
		.factory('playersFactory', function($http){

			function getPlayers(){
					return $http.get('data/players.json');
			}
			return {
				getPlayers :getPlayers
			}
		});
})();