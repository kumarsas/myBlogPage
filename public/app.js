var app = angular.module( 'ashishBlogApp', [
	'ngRoute',
	'ashishBlogApp.modules.Home',
	'ashishBlogApp.modules.About',
	'ashishBlogApp.modules.Contact',
	'ashishBlogApp.modules.Tutorial_AngularJS',
	'ashishBlogApp.modules.Tutorial_ExpressJS',
	'ashishBlogApp.modules.Tutorial_Mongodb',
	'ashishBlogApp.modules.Tutorial_NodeJS'
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


