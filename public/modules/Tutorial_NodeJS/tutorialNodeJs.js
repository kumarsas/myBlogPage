var app = angular.module( 'ashishBlogApp.modules.Tutorial_NodeJS', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/node', {
			templateUrl:'modules/Tutorial_NodeJS/tutorialNodejs.html'
		});
}]);

app.controller('link1Ctrl', function( $scope ){
	$scope.title='Home'
})
