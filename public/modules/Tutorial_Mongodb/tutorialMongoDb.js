var app = angular.module( 'ashishBlogApp.modules.Tutorial_Mongodb', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/mongodb', {
			templateUrl:'modules/Tutorial_Mongodb/tutorialMongoDb.html'
		});
}]);
app.controller('link2Ctrl', function( $scope ){
	$scope.title='About'
})