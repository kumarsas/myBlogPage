var app = angular.module( 'ashishBlogApp.modules.TutorialMongodb', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/mongodb', {
			templateUrl:'modules/TutorialMongodb/tutorialMongoDb.html'
		});
}]);
app.controller('link2Ctrl', function( $scope ){
	$scope.title='About'
})