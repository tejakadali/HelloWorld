angular.module('MusicApp',[])
		.controller('MainCtrl',function($scope, $http){
	var users_data=$http.get('http://104.197.128.152:8000/v1/tracks');
	users_data.then(function(result){
		$scope.users=result.data;	
	})
	
	$scope.setUserData = function(userID){
		
	};
	$scope.addUser = function(){
		
	};
})