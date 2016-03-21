var app = angular.module( 'ashishBlogApp.modules.Express', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/express', {
			templateUrl:'modules/Express/express.html'
		});
}]);


app.controller('link1Ctrl', function( $scope ){
	$scope.title='Home'
})
