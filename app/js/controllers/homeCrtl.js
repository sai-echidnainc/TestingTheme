four51.app.controller('homeCtrl', ['$scope', '$rootScope', '$location', 'User', 'Address', 'Resources',
function ($scope, $rootScope, $location, User, Address, Resources) {

	function init(){

		$("#exampleCarousel").owlCarousel({

			navigation : true,
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:true

		});
	}
$(document).ready(function(){

setTimeout(function(){
init();
},100);


});

}]);