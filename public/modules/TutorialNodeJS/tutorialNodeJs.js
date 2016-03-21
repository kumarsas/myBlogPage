var app = angular.module( 'ashishBlogApp.modules.TutorialNodeJS', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/node', {
			templateUrl:'modules/TutorialNodeJS/tutorialNodejs.html'
		});
}]);

app.controller('link1Ctrl', function( $scope ){
	$scope.title='Home'
})
