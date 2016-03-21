var app = angular.module( 'ashishBlogApp.modules.Home', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/', {
			templateUrl:'modules/Home/home.html',
			//controller: 'link1Ctrl'
		});
}]);

app.controller('link1Ctrl', function( $scope ){
	$scope.title='Home'
})
