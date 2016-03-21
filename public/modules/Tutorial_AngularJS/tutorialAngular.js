var app = angular.module( 'ashishBlogApp.modules.Tutorial_AngularJS', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/angular', {
			templateUrl:'modules/Tutorial_AngularJS/tutorialAngular.html'
		});
}]);

app.controller('link1Ctrl', function( $scope ){
	$scope.title='Home'
})
