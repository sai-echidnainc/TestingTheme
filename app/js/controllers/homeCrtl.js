four51.app.controller('homeCtrl', ['$scope', '$rootScope', '$location', 'User', 'Address', 'Resources',
function ($scope, $rootScope, $location, User, Address, Resources) {
	
	function init(){
		$("#exampleCarousel").owlCarousel();
	}	

	init();
});