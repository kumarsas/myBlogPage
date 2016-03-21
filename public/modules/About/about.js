var app = angular.module( 'ashishBlogApp.modules.About', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/about', {
			templateUrl:'modules/About/about.html'
		});
}]);

app.controller('link2Ctrl', function( $scope ){
	$scope.title='About'
})