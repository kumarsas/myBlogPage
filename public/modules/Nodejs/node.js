var app = angular.module( 'ashishBlogApp.modules.nodejs', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/node', {
			templateUrl:'modules/nodejs/node.html'
		});
}]);

app.controller('link1Ctrl', function( $scope ){
	$scope.title='Home'
})
