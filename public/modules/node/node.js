var app = angular.module( 'ashishBlogApp.modules.node', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/node', {
			templateUrl:'modules/node/node.html'
		});
}]);

app.controller('link1Ctrl', function( $scope ){
	$scope.title='Home'
})
