var app = angular.module( 'ashishBlogApp', [
	'ngRoute',
	'ashishBlogApp.modules.Home',
	'ashishBlogApp.modules.About',
	'ashishBlogApp.modules.Contact',
	'ashishBlogApp.modules.Angular',
	'ashishBlogApp.modules.Express',
	'ashishBlogApp.modules.Mongodb',
	'ashishBlogApp.modules.nodejs'
]);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.otherwise({
			redirectTo: '/'
		})
}]);


app.controller('appCtrl', function( $scope ){
	$scope.title1='Home'
})


