//WOW Scroll Spy
var wow = new WOW({
    //disabled for mobile
    mobile: false
});
wow.init();

//MENU LEFT SCRIPT
$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
     $("#menu-toggle-2").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-2");
        $('#menu ul').hide();
    });
 
     function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
      //$('#menu ul:first').show();
      $('#menu li a').click(
        function() {
          var checkElement = $(this).next();
          if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            return false;
            }
          if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
            return false;
            }
          }
        );
      }
    $(document).ready(function() {initMenu();});
	
	
//CARUSEL BLOCKS not script

//CHART PROGRESS MAINPAGE BLOCK

        $(document).ready(function () {
            $('#demo-pie-1').pieChart({
                barColor: '#68b828',
                trackColor: '#eee',
                lineCap: 'round',
                lineWidth: 5,
				size: 100,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

			$('#demo-pie-2').pieChart({
                barColor: '#8465d4',
                trackColor: '#eee',
                lineCap: 'round',
                lineWidth: 5,
				size: 100,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });
			
			$('#demo-pie-3').pieChart({
                barColor: '#f44336',
                trackColor: '#eee',
                lineCap: 'round',
                lineWidth: 5,
				size: 100,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });		
			
			$('#demo-pie-4').pieChart({
                barColor: '#1992ba',
                trackColor: '#eee',
                lineCap: 'round',
                lineWidth: 5,
				size: 100,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });
						
			$('#demo-pie-5').pieChart({
                barColor: '#ffc107',
                trackColor: '#eee',
                lineCap: 'round',
                lineWidth: 5,
				size: 100,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });
			
			
        });
		
		
//FIXED LEFT MENU
   $(document).ready(function(){
      $(window).bind('scroll', function() {
       var navHeight = $( window ).height() - 90;
          
             if ($(window).scrollTop() > 90) {
                 $('#menu-ext').addClass('fixed-menu');
             }
             else {
                 $('#menu-ext').removeClass('fixed-menu');
             }
        });
    });
	
	
	
			
	
//TABS TOP POST
	$(document).ready(function() {
			$(".tabs-menu-filter-graphic a").click(function(event) {
			event.preventDefault();
			$(this).parent().addClass("current");
			$(this).parent().siblings().removeClass("current");
			var tab = $(this).attr("href");
			$(".tab-content-filter-graphic").not(tab).css("display", "none");
			$(tab).fadeIn();
		});	

	});		
	$(document).ready(function() {
			$(".tabs-menu-filter-graphic-2 a").click(function(event) {
			event.preventDefault();
			$(this).parent().addClass("current");
			$(this).parent().siblings().removeClass("current");
			var tab = $(this).attr("href");
			$(".tab-content-filter-graphic-2").not(tab).css("display", "none");
			$(tab).fadeIn();
		});	

	});	
	$(document).ready(function() {
			$(".tabs-menu-all-posts a").click(function(event) {
			event.preventDefault();
			$(this).parent().addClass("current");
			$(this).parent().siblings().removeClass("current");
			var tab = $(this).attr("href");
			$(".tab-content-all-posts").not(tab).css("display", "none");
			$(tab).fadeIn();
		});	

	});
	
	
//elements butoon add content_socials
	$(".button_exterior_togle").click(function () {
			 $(this).toggleClass("button_exterior_togle_active");
		   });


//Calendar Popap UI
  $( function() {
    var dateFormat = "",
      from = $( "#from" )
        .datepicker({
		dateFormat: "d MM, yy",
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		showOn: "button",
		buttonImage: "img/calendar.png",
		buttonImageOnly: true,
		buttonText: "Select date"
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
		 dateFormat: "d MM, yy",
        defaultDate: "+1w",
        changeMonth: true, 
        numberOfMonths: 1,
		showOn: "button",
		buttonImage: "img/calendar.png",
		buttonImageOnly: true,
		buttonText: "Select date"
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );
  
//Vertical tab UI mediaplan*
	  $( function() {
		$( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
		$( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
		 var tabs = $( "#tabs" ).tabs();
		tabs.find( ".ui-tabs-nav" ).sortable({
		  axis: "y",
		  stop: function() {
			tabs.tabs( "refresh" );
		  }
		});
	  } );
	  




//clor select popap
		function colourFunction(pos) {
			pos.className = pos[pos.selectedIndex].className;
			pos.blur();
		} 
		
		
		


	
//slider carusel

	$(document).on('ready', function() {
	  $(".regular-brands").slick({
		dots: false,
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 5
	  });

	});