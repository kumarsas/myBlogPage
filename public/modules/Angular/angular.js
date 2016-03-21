var app = angular.module( 'ashishBlogApp.modules.Angular', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/angular', {
			templateUrl:'modules/Angular/angular.html'
		});
}]);

app.controller('link1Ctrl', function( $scope ){
	$scope.title='Home'
})
