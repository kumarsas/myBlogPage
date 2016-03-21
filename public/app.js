var app = angular.module( 'ashishBlogApp', [
	'ngRoute',
	'ashishBlogApp.modules.Home',
	'ashishBlogApp.modules.About',
	'ashishBlogApp.modules.Contact',
	'ashishBlogApp.modules.TutorialAngularJS',
	'ashishBlogApp.modules.TutorialExpressJS',
	'ashishBlogApp.modules.TutorialMongodb',
	'ashishBlogApp.modules.TutorialNodeJS'
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


