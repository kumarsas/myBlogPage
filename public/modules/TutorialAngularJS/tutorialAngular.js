var app = angular.module( 'ashishBlogApp.modules.TutorialAngularJS', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/angular', {
			templateUrl:'modules/TutorialAngularJS/tutorialAngular.html'
		});
}]);

app.controller('link1Ctrl', function( $scope ){
	$scope.title='Home'
})
