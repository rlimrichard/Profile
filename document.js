$(document).ready(function() {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        //console.log($(window).scrollTop())

        //var body = $(document).body;
        //var html = $(document).documentElement;

        //var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

        var height = $('#primary-navigation').offset().top ;
        //height = Math.min($(document).height(), $(window).height())
        console.log("height=" + height);

        //var dif = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        //var height = dif + document.documentElement.scrollHeight ;


        if ($(window).scrollTop() > height ) {
            if ($( "#primary-navigation" ).hasClass( "fixed" ) == false) {
                $('#primary-navigation').addClass('fixed');
                $('#primary-navigation').addClass('navbar-fixed-top');
            //}
        }
        //if ($(window).scrollTop() <= height.top) {
        else {
            $('#primary-navigation').removeClass('fixed');
            $('#primary-navigation').addClass('navbar-fixed-bottom');
        }
    });
});

/*
var navpos = $('#primary-navigation').offset();
  console.log(navpos.top);
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > navpos.top) {
       $('#mainnav').addClass('navbar-fixed-top');
       }
       else {
         $('#mainnav').removeClass('navbar-fixed-top');
       }
    });
    */
