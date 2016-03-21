var app = angular.module( 'ashishBlogApp.modules.Contact', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/contact', {
			templateUrl:'modules/Contact/contact.html'
		});
}]);
app.controller('link2Ctrl', function( $scope ){
	$scope.title='About'
})