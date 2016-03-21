var app = angular.module( 'ashishBlogApp.modules.Mongodb', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/mongodb', {
			templateUrl:'modules/Mongodb/mongodb.html'
		});
}]);
app.controller('link2Ctrl', function( $scope ){
	$scope.title='About'
})