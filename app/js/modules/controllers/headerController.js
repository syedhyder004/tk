
hackApp.controller('HeaderBLCtrl', function($scope){
	$scope.template = { url: '/dist/views/headerBeforeLogin.html' }
});

hackApp.controller('HeaderCtrl', function($scope,$location){
	$scope.drodownHelp = true;
    $scope.template = { url: '/dist/views/header.html' };
	$scope.go = function ( path ) {
		$location.path( path );
	};

	 // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';


    $scope.slideClick =  function (e) {

        var selected = $("#slide-nav").hasClass('slide-active');
        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });

        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });

        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });


        $("#slide-nav").toggleClass('slide-active');
        $('#slidemenu').toggleClass('slide-active');


        //$('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');

    }

});