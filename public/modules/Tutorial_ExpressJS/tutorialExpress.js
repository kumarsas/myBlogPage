var app = angular.module( 'ashishBlogApp.modules.Tutorial_ExpressJS', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/express', {
			templateUrl:'modules/Tutorial_ExpressJS/tutorialExpress.html'
		});
}]);


app.controller('link1Ctrl', function( $scope ){
	$scope.title='Home'
})
