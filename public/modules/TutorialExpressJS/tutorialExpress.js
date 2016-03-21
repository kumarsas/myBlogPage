var app = angular.module( 'ashishBlogApp.modules.TutorialExpressJS', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/express', {
			templateUrl:'modules/TutorialExpressJS/tutorialExpress.html'
		});
}]);


app.controller('link1Ctrl', function( $scope ){
	$scope.title='Home'
})
