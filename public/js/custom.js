/*!
 * Template Functions
*/

(function($){

    "use strict";

    $(document).ready(function() {

        var header             = $('.header'),
            stiky_sidebar      = $('.sticky-sidebar'),
            map                = $('.map'),
            play_btn           = $('.play-button'),
            shop_gallery       = $('.shop-single-item-popup'),
            contact_form       = $('#contact-form');

        /* ---------------------------------------------- /*
         * Collapse navbar on click
        /* ---------------------------------------------- */

        $(document).on('click', '.inner-navigation.show', function(e) {
            if ( $(e.target).is('span') && !$(e.target).parent().parent().hasClass('menu-item-has-children') ) {
                $(this).collapse('hide');
            }
        });


        /* ---------------------------------------------- /*
         * Header animation
        /* ---------------------------------------------- */

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 5) {
                header.addClass('header-small');
                header.addClass('header-shadow');
            } else {
                header.removeClass('header-small');
                header.removeClass('header-shadow');
            }
        }).scroll();

        /* ---------------------------------------------- /*
         * Off-canvas
        /* ---------------------------------------------- */

        $('.off-canvas-open, .off-canvas-close').on('click', function() {
            $('body').toggleClass('off-canvas-sidebar-open');
            return false;
        }).resize();

        $(document).on('click', function(e) {
            var container = $('.off-canvas-sidebar');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('body').removeClass('off-canvas-sidebar-open');
            }
        }).resize();

        function getScrollBarWidth() {
            var inner = document.createElement('p');
            inner.style.width = "100%";
            inner.style.height = "200px";
            var outer = document.createElement('div');
            outer.style.position = "absolute";
            outer.style.top = "0px";
            outer.style.left = "0px";
            outer.style.visibility = "hidden";
            outer.style.width = "200px";
            outer.style.height = "150px";
            outer.style.overflow = "hidden";
            outer.appendChild (inner);
            document.body.appendChild (outer);
            var w1 = inner.offsetWidth;
            outer.style.overflow = 'scroll';
            var w2 = inner.offsetWidth;
            if (w1 == w2) w2 = outer.clientWidth;
            document.body.removeChild (outer);
            return (w1 - w2);
        };

        $('.off-canvas-sidebar-wrapper').css('margin-right', '-' + getScrollBarWidth() + 'px');

        $(window).on('resize', function() {
            var width    = Math.max($(window).width(), window.innerWidth);

            if ( width <= 991 ) {
                $('body').removeClass('off-canvas-sidebar-open');
            }
        });


        /* ---------------------------------------------- /*
         * Popup
        /* ---------------------------------------------- */

        play_btn.magnificPopup({
            type: 'iframe',
        });

        // shop_gallery.magnificPopup({
        //     type: 'image',
        //     gallery: {
        //         enabled: true,
        //         navigateByImgClick: true,
        //         preload: [0,1]
        //     },
        //     image: {
        //         titleSrc: 'title',
        //         tError: 'The image could not be loaded.',
        //     }
        // });

        /* ---------------------------------------------- /*
         * Sticky Sidebar
        /* ---------------------------------------------- */

        stiky_sidebar.imagesLoaded(function() {
            stiky_sidebar.stick_in_parent({
                offset_top: 80,
                recalc_every: 1
            })
            .on('sticky_kit:bottom', function(e) {
                $(this).parent().css('position', 'relative');
            })
            .on('sticky_kit:unbottom', function(e) {
                $(this).parent().css('position', 'relative');
            }).scroll();
        });

        /* ---------------------------------------------- /*
         * Tooltip
        /* ---------------------------------------------- */

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })

        /* ---------------------------------------------- /*
         * A jQuery plugin for fluid width video embeds
        /* ---------------------------------------------- */

        // $('body').fitVids();



        /* ---------------------------------------------- /*
         * Google Map
        /* ---------------------------------------------- */

        map.each(function() {

            var reg_exp = /\[[^(\]\[)]*\]/g;

            var map_div        = $(this);
            var is_draggable   = Math.max($(window).width(), window.innerWidth) > 736 ? true : false;
            var is_street_view = ( map_div.data('street-view') ) ? true : false;

            if (map_div.length > 0) {

                var markers_addresses = map_div[0].getAttribute('data-addresses').match(reg_exp),
                    markers_info      = map_div[0].getAttribute('data-info').match(reg_exp),
                    markers_icon      = map_div.data('icon'),
                    map_zoom          = map_div.data('zoom');

                var	markers_values = [], map_center;

                markers_addresses.forEach( function(marker_address, index) {
                    var marker_value = '{'
                    marker_value    += '"latLng":' + marker_address;
                    if (index == 0) {
                        map_center = JSON.parse(marker_address);
                    };
                    if (markers_info[index]) {
                        var marker_data = markers_info[index].replace(/\[|\]/g, '');
                        marker_value   += ', "data":"' + marker_data + '"';
                    };
                    marker_value += '}';
                    markers_values.push(JSON.parse(marker_value));
                });

                var map_options = {
                    scrollwheel: false,
                    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
                };

                map_options.center    = map_center;
                map_options.zoom      = map_zoom;
                map_options.draggable = is_draggable;

                var markers_options = {
                    icon: markers_icon,
                };

                var map_config = {
                    map: {
                        options: map_options,
                    },
                    streetviewpanorama: {
                        options: {
                            container: $(this),
                            opts: {
                                visible:  is_street_view,
                                position: map_center,
                                enableCloseButton: true,
                                scrollwheel: false,
                            }
                        }
                    },
                    marker: {
                        values:  markers_values,
                        options: markers_options,
                        events: {
                            click: function(marker, event, context) {
                                if (context.data) {
                                    var map        = $(this).gmap3("get"),
                                        infowindow = $(this).gmap3({get:{name:"infowindow"}});
                                    if (infowindow) {
                                        infowindow.open(map, marker);
                                        infowindow.setContent(context.data);
                                    } else {
                                        $(this).gmap3({
                                            infowindow:{
                                                anchor:marker,
                                                options:{content: context.data}
                                            }
                                        });
                                    }
                                }
                            }
                        }
                    }
                };
                map_div.gmap3(map_config);
            };
        });


        /* ---------------------------------------------- /*
         * Scroll top
        /* ---------------------------------------------- */

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-top').addClass('scroll-top-visible');
            } else {
                $('.scroll-top').removeClass('scroll-top-visible');
            }
        });

        $('a[href="#top"]').on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });

    });

})(jQuery);
