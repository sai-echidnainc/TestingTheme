four51.app.controller('homeCtrl', ['$scope', '$rootScope', '$location', 'User', 'Address', 'Resources',
function ($scope, $rootScope, $location, User, Address, Resources) {
	
	function init(){
		alert(0)
		$("#exampleCarousel").owlCarousel({

			navigation : true,
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:true
		    
		});
	}	

	init();
});