/////////////////////////////// PLUGINS

/* Mobile Detect */
var mobile=function(){return{detect:function(){var uagent=navigator.userAgent.toLowerCase();var list=this.mobiles;var ismobile=false;for(var d=0;d<list.length;d+=1)if(uagent.indexOf(list[d])!=-1)ismobile=true;return ismobile},mobiles:["midp","240x320","blackberry","netfront","nokia","panasonic","portalmmm","sharp","sie-","sonyericsson","symbian","windows ce","benq","mda","mot-","opera mini","philips","pocket pc","sagem","samsung","sda","sgh-","vodafone","xda","palm","iphone","ipod","android","ipad"]}}();

/* translate3d */
;(function($){var delay=0;$.fn.translate3d=function(translations,speed,easing,complete){var opt=$.speed(speed,easing,complete);opt.easing=opt.easing||"ease";translations=$.extend({x:0,y:0,z:0},translations);return this.each(function(){var $this=$(this);$this.css({transitionDuration:opt.duration+"ms",transform:"translate3d("+translations.x+"px, "+translations.y+"%, "+translations.z+"px)"});setTimeout(function(){$this.css({transitionDuration:"0s"});opt.complete()},opt.duration+(delay||0))})}})(jQuery);

/* slider */
;(function($){
	$.fn.extend({
		minusSlider : function(options){
			var defaults = {	};
			
			var option = $.extend( defaults, options );
			
			return this.each(function( e ){
				var o = option,
					ID = $( this ),
					main = {
						start: 0,
						current: null,
						auto: false,
						totalItems: 0,
						cls: { activeVideo: 'video-active', isPause: 'isPause', isPlay: 'isPlay', noControls: 'no-controls', active: 'active', selected: 'selected', noSwiper: 'no-swiper' },
						typ: {
							main: {
								prop: {
									slidesPerView: 1, 
									preloadImages: false, 
									lazyLoading: true, 
									loop: true, 
									paginationClickable: true, 
									nextButton: '.swiper-button-next', 
									prevButton: '.swiper-button-prev', 
									pagination: '.swiper-pagination', 
                                    onTouchStart: function(){
										main.autoControl.clear();
									},
									onTouchEnd: function(){
										main.autoControl.init();
									},
									onSlideChangeStart: function( s ){
										main.disabledVideo();
										main.autoControl.clear();
									},	
									onSlideChangeEnd: function( s ){
										main.autoControl.init();	
										main.detectPosition.init();
										main.activeIndex();
									},
									onInit: function(){
										main.detectPosition.init();
										main.activeIndex();
									}			
								}
							},
							widgetQuad: {
								prop: {
									slidesPerView: 4,
									slidesPerGroup: 4,
									preloadImages: false, 
									lazyLoading: true, 
									loop: true, 
									paginationClickable: true, 
									nextButton: '.swiper-button-next', 
									prevButton: '.swiper-button-prev', 
									pagination: '.swiper-pagination', 
                                    onTouchStart: function(){
										main.autoControl.clear();
									},
									onTouchEnd: function(){
										main.autoControl.init();
									},
									onSlideChangeStart: function( s ){
										main.disabledVideo();
										main.autoControl.clear();
									},	
									onSlideChangeEnd: function( s ){
										main.autoControl.init();	
										main.detectPosition.init();
										main.activeIndex();
									},
									onInit: function(){
										main.detectPosition.init();
										main.activeIndex();
									}			
								}
							},
							widgetTrio: {
								prop: {
										slidesPerView: 3,
										slidesPerGroup: 3,
										preloadImages: false, 
										lazyLoading: true, 
										loop: true, 
										paginationClickable: true, 
										nextButton: '.swiper-button-next', 
										prevButton: '.swiper-button-prev', 
										pagination: '.swiper-pagination', 
										onTouchStart: function(){
											main.autoControl.clear();
										},
										onTouchEnd: function(){
											main.autoControl.init();
										},
										onSlideChangeStart: function( s ){
											main.disabledVideo();
											main.autoControl.clear();
										},	
										onSlideChangeEnd: function( s ){
											main.autoControl.init();	
											main.detectPosition.init();
											main.activeIndex();
										},
										onInit: function(){
											main.detectPosition.init();
											main.activeIndex();
										}	
									}
							},
							quickReview: {
								prop: {
									
									slidesPerView: 1, 
									preloadImages: false, 
									lazyLoading: true, 
									loop: true, 
									paginationClickable: true, 
									nextButton: '.swiper-button-next', 
									prevButton: '.swiper-button-prev', 
									pagination: '.swiper-pagination', 
                                    onTouchStart: function(){
										main.autoControl.clear();
									},
									onTouchEnd: function(){
										main.autoControl.init();
									},
									onSlideChangeStart: function( s ){
										main.disabledVideo();
										main.autoControl.clear();
									},	
									onSlideChangeEnd: function( s ){
										main.autoControl.init();	
										main.detectPosition.init();
										main.activeIndex();
									},
									onInit: function(){
										main.detectPosition.init();
										main.activeIndex();
									}	
									
								}
							}
						},
						addOrder: function( e ){ e.each(function( i, k ){ $( this ).attr('data-order', i); }); },
						lazyImg: function( k ){
							 k
							 .css({'opacity': 0})
							 .attr('src', k.attr('data-original'))
							 .one('load', function(){ 																			 					
								$( this )
								.addClass('load-image')
								.removeClass('lazy-load')
								.stop()
								.animate({ 'opacity': 1 }, 111);
							 });		
						},
						lazy: function( k ){
							var _t = this, img = $('.lazy-load', k);	
							
							if( uty.detectEl( img ) )
								img
								.each(function(){ _t.lazyImg( $( this ) ); });
						},	
						disabledVideo: function(){
							var _t = this, e = $('.swiper-video', ID);
							
							if( uty.detectEl( e ) )
								e
								.each(function(){
									var ths = $( this );
									if( uty.detectEl( $('.youtubePlayer', ths) ) && ths.parents('li').eq( 0 ).hasClass( _t.cls['activeVideo'] ) ){
										ths.off('playerState');
										ths.get( 0 ).stopVideo();
										ths.parents('li').eq( 0 ).removeClass( _t.cls['isPlay'] ).removeClass( _t.cls['isPause'] ).removeClass( _t.cls['activeVideo'] );
									}
								});
						},
						activeVideo: function(){
							var _t = this, el = ID.find('.swiper-slide-active'), s = $('.youtubePlayer', el);
							if( uty.detectEl( s ) ){
								$('.swiper-video', el)
								.off('playerState')
								.on('playerState', function( events, k ){
									if( k == 'ended' && _t.current !== null )
										_t.current.slideNext();
									else if( k == 'playing' || k == 'buffering' ){ 
										_t.autoControl.clear();
										el.addClass( _t.cls['isPlay'] ).removeClass( _t.cls['isPause'] );
									}else if( k == 'paused' )
										el.removeClass( _t.cls['isPlay'] ).addClass( _t.cls['isPause'] );
								});
							}
						},
						autoControl: {
							stm: null,
							delay: ID.attr('data-duration') || 2500,
							clear: function(){
								var _t = this;
								if( _t.stm != null )
									clearTimeout( _t.stm );
							},
							start: function(){
								var _t = this;
								
								if( main.auto ){
									_t.clear();
									_t.stm = setTimeout(function(){
										if( main.current !== null )
											main.current.slideNext();
									}, _t.delay);	
								}
							},
							init: function(){
								this.start();
							}
						},
						addEvents: function(){
							var _t = this, videoBtn = $('.btn-video-play', ID);
							
							if( uty.detectEl( videoBtn ) ){
								videoBtn.bind('click', function(){
									var ths = $( this ), prt = ths.parents('li'), s = ths.siblings('.swiper-video'), vid = ths.attr('data-video') || '';
									if( vid != '' ){
										prt.addClass( _t.cls['activeVideo'] );
										if( !uty.detectEl( $('.youtubePlayer', s) ) ){
											s.minusPlayer({ videoId: vid, controls: 0, autoplay: isMobile ? 0 : 1, customClass: 'yt-video-player', orientation: 'vertical' });
											prt.addClass( _t.cls['isPlay'] ).removeClass( _t.cls['isPause'] );
										}else{
											var k = s.get( 0 ); 
											if( k.state() ){
												k.pauseVideo();
												prt.removeClass( _t.cls['isPlay'] ).addClass( _t.cls['isPause'] );
											}
											else{
												k.playVideo();
												prt.addClass( _t.cls['isPlay'] ).removeClass( _t.cls['isPause'] );
											}
										}
										_t.activeVideo();
										_t.autoControl.clear();
									}
									
								});
							}
						},
						activeIndex: function(){
							var _t = this, act = ID.find('.swiper-slide-active'), ind = parseFloat( act.attr('data-order') || 0 ), e = ID.find('.headline-holder');
							
							/* lazy */
							setTimeout(function(){ _t.lazy( ID.find('.swiper-wrapper [data-order="'+ ind +'"], .swiper-slide.active') );	}, 225);
							
							/* thumb */
							_t.thumbFocused();
							
							/* headline */
							if( uty.detectEl( e ) )
								$('[data-order="'+ ind +'"]', e).addClass( _t.cls['active'] ).siblings('li').removeClass( _t.cls['active'] );
							
							/* pager */
							e = ID.find('.sld-pager');	
							if( uty.detectEl( e ) ){
								e.find('strong').text( ind + 1 );
								e.find('span').text( '/ ' + _t.totalItems );
							}
							
							/* custom dropdown */
							e = ID.find('.ems-custom-dropdown .dropdown-value'); 
							if( uty.detectEl( e ) ){
								e.html( act.attr('data-title') || '' );
								e = ID.find('.ems-custom-dropdown li[data-order="'+ ind +'"]');
								if( uty.detectEl( e ) )
									e.addClass( _t.cls['selected'] ).siblings('li').removeClass( _t.cls['selected'] );
							}
						},
						thumbFocused: function(){
							var _t = this, drp = $('.thumb-pager', ID), k = $('.slide-wrp li.swiper-slide-active', ID).attr('data-order') || 0, cls = { opened: 'open', selected: 'selected' };
							
							if( uty.detectEl( drp ) ){						
								drp.find('[data-order="'+ k +'"]').addClass( cls['selected'] ).siblings().removeClass( cls['selected'] );
								if( _t.thumbPager != null ){								
									k = k - 1;
									if( k <= 0 ) k = 0;
									_t.thumbPager.slideTo( k, 333 );
								}
							}
						},
						thumbPager: null,
						customThumb: function(){
							if( !uty.detectEl( $('.thumb-pager', ID) ) ) 	return false;
							var _t = this, drp = $('.thumb-pager', ID), s = $('ul.slide-wrp > li', ID), htm = '', cls = { opened: 'open', selected: 'selected' };
							s.each(function( i, k ){
								var ths = $( this ), tt = ths.attr('data-thumb') || '', k = i == 0 ? cls['selected'] : '', sty = '', ico = '';
								if( ths.hasClass('prd-video') ){
									k += ' prd-video';
									sty = 'style="background-image:url('+ tt +');"'; 
								}
								if( tt != '' )
									htm += '<li '+ sty +' class="swiper-slide '+ k +'" data-order="'+ i +'"><a href="javascript:void(0);"><img src="'+ tt +'" border="0"/></a></li>';
							});
							drp.find('ul').html( htm );
							
							var le = $('li', drp).length;
							
							drp.addClass('item-' + le);
							
							if( le > 4 ){ 
								drp.addClass('pager-active');
								_t.thumbPager = new Swiper(drp.find('.swiper-inner'), {
									direction: 'vertical',
									slidesPerView: 'auto',
									slidesPerGroup: 1,
									paginationClickable: false,
									spaceBetween: 5,
									mousewheelControl: true,
									wrapperClass: 'thumb-wrp', 
									breakpoints: {
										960: {
										  direction: 'horizontal',
										  slidesPerView: 3, 
										}
								 	}	
								});
							}
															
							$('ul li', drp).bind('click', function(){
								var ths = $( this ), k = ths.attr('data-order') || 0;
								_t.current.slideTo( k, 333 );
								ths.addClass( cls['selected'] ).siblings().removeClass( cls['selected'] );
							});			
							
						},
						detectPosition: {
							get: function( k ){
								var b = false,
									padding = 50,
									con = ID.find('.swiper-inner'),
									o1 = { x: con.offset().left, y: con.offset().top, width: con.width() - padding, height: con.height() },
									o2 = { x: k.offset().left, y: k.offset().top, width: k.width(), height: k.height() };  
								if( o1.x < o2.x + o2.width && o1.x + o1.width > o2.x && o1.y < o2.y + o2.height && o1.y + o1.height > o2.y )
									b = true;       
								
								return b;
							},
							init: function(){
								var _t = this, e = $('.swiper-inner .swiper-wrapper > li', ID);
								if( uty.detectEl( e ) )
									setTimeout(function(){
										e
										.removeClass( main.cls['active'] )
										.each(function(){
											var ths = $( this );
											if( _t.get( ths ) )
												ths.addClass( main.cls['active'] );
										});
									}, 222);
							}
						},
						customLargeBtn: function(){
							var _t = this;
							
							ID
							.find('.swiper-slide a')
							.bind('click', function( e ){ 
								e.preventDefault(); 
								var ths = $( this ), k = ths.attr('data-large') || '';
								if( k != '' ){
									var arr = [];
										arr.push( k );	
									ths.parent().siblings().each(function(index, element) {
										var ths = $( this ), hrf = ths.find('a').attr('data-large') || ''
                                        if( hrf !== '' )
											arr.push( hrf )
                                    });	
									bdy.get( 0 ).loadImg( { uri: k, items: arr } );
								}
							});
						},
						customDropDown: function(){
							if( !uty.detectEl( $('.ems-custom-dropdown', ID) ) ) 	return false;
							var _t = this, drp = $('.ems-custom-dropdown', ID), s = $('.swiper-inner > ul > li', ID), htm = '', cls = { opened: 'open', selected: 'selected' };
							s.each(function( i, k ){
								var ths = $( this ), tt = ths.attr('data-title') || '';
								if( tt != '' )
									htm += '<li class="'+ ( i == 0 ? cls['selected'] : '' ) +'" data-order="'+ i +'"><a href="javascript:void(0);">'+ tt +'</a></li>';
							});
							drp.find('.ems-sub').html( htm );
							
							$('.ems-custom-dropdown-header a', drp).bind('click', function(){
								var ths = $( this );
								if( drp.hasClass( cls['opened'] ) ) 
									$('.ems-custom-dropdown').removeClass( cls['opened'] );
								else{
									$('.ems-custom-dropdown').removeClass( cls['opened'] );
									drp.addClass( cls['opened'] );
								}	
							});
							
							$('.ems-sub li', drp).bind('click', function(){
								var ths = $( this ), k = parseFloat( ths.attr('data-order') || 0 );
								$('.ems-custom-dropdown').removeClass( cls['opened'] );
								if( main.current != null )
									main.current.slideTo( k + 1 );
								
							});
							
						},
						addControls: function(){
							if( !uty.detectEl( ID.find('.swiper-button-next') ) )
								ID.append('<div class="swiper-direction"><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>'); 	
							
							if( !uty.detectEl( ID.find('.swiper-pagination') ) )
								ID.append('<div class="swiper-pagination"></div>');	
						},
						set: function(){
							var _t = this, typ = 'main', duration = ID.attr('data-duration') || '', s = $('.swiper-wrapper', ID), items = $('> li', s);
								_t.totalItems = items.length;
							
							ID.addClass('total-item-' + _t.totalItems);
							
							if( ID.hasClass('widgetQuad-swiper') ) typ = 'widgetQuad';
							else if( ID.hasClass('widgetTrio-swiper') ) typ = 'widgetTrio';
							else if( ID.hasClass('quickReview-swiper') ) typ = 'quickReview';
							
							if( _t.totalItems > 1 ){
								_t.addOrder( items );
								_t.customDropDown();
								_t.addControls( ID.find('.swiper-inner') || ID );
								_t.current = new Swiper(ID, _t.typ[ typ ]['prop'] || {});	
								_t.customThumb();
							
								if( duration !== '' ){
									_t.auto = true;
									_t.autoControl.init();
								}
							}else{
								ID.addClass( _t.cls['noSwiper'] );
								_t.lazy( ID );
							}
						},						
						init: function(){
							var _t = this;
								_t.set(); 
								_t.addEvents();
								
						}
					};
					main.init();
					
					this.adjust = function(){
						main.detectPosition.init(); 
						if( main.current != null )
							main.current.onResize();
					};
					
			});
		}
	});
})(jQuery);

;(function($) {
    $.fn.extend({
        minusDropDown: function(options, callback) {
            var defaults = {
				closeElem: '',
                type: "hover",
                customClass: "hover",
				bdyCls: "",
				bdyCls2: "",
                delay: 555,
                openedDelay: 0,
                className: "",
                clicked: "",
                openedControl: "",
                hideDropDown: [],
                attachmentDiv: null,
                isVisible: null,
				overlay: null,
				parents: null,
				toggle: true,
				bdyClicked: true 
            };
            var options = $.extend(defaults, options);
            return this.each(function() {
                
				var holder = $(this),
                    o = options,
                    attachmentDiv = o.attachmentDiv != null ? $(o.attachmentDiv) : null,
                    stm = null,
                    bdy = $('body');
				
				if( holder.hasClass('activePlug') ) return false;
									
                function init() {
                    if (o.type == "hover") {
                        holder.mouseenter(events.mouseenter).mouseleave(events.mouseleave);
                        if (attachmentDiv != null) attachmentDiv.mouseenter(events.mouseenter).mouseleave(events.mouseleave)
						
						$("body, html").bind('click touchstart', events.bodyClicked);
                    } 
					else if (o.type == "click"){ 
						$(o.clicked, holder).bind('click', events.clicked);
						if( o.bdyClicked )
							$("body, html").bind('click touchstart', events.bodyClicked);
					}else if (o.type == "hoverClick"){ 
						holder.mouseenter(events.onMouseenter).mouseleave(events.onMouseleave);
						$(o.clicked, holder).bind('click', events.onClicked);
						if( o.bdyClicked )
							$("body, html").bind('click touchstart', events.bodyClicked);
					}
                 }
                var animate = {
                    opened: function() {
                        controls();
                        if (attachmentDiv != null) attachmentDiv.addClass(o.customClass);
                        holder.addClass(o.customClass);
						if( o.parents != null ) holder.parents( o.parents ).addClass(o.customClass);
						overlayControls('opened');
						if (callback != undefined) callback("opened")
                    },
                    closed: function() {
                        if (attachmentDiv != null) attachmentDiv.removeClass(o.customClass);
                        holder.removeClass(o.customClass);
						if( o.parents != null ) holder.parents( o.parents ).removeClass(o.customClass);
						overlayControls('closed');
						if (callback != undefined) callback("closed");
						bdy.removeClass(o.bdyCls2);
                    }
                };
				
				function closeElem(){
					if( o.closeElem != '' )
						$( o.closeElem ).each(function(){
							var ths = $( this ).get( 0 );
							if( typeof ths.closed !== 'undefined' )	
                            	ths.closed();
                        });
				}
                var events = {
					
					onMouseenter: function() {
                        if (visibleControls()) return false;
                        if (stm != null) clearTimeout(stm);
                        if (o.openedControl != "") {
                            var ID = o.openedControl;
                            if (ID.html() == "") return false
                        }
                        stm = setTimeout(function() {
							closeElem();
                            overlayControls('opened');
                        }, o.openedDelay)
                    },
                    onMouseleave: function() {
                        if (visibleControls()) return false;
                        if (stm != null) clearTimeout(stm);
                        stm = setTimeout(function() {
							if (!holder.hasClass(o.customClass))
								overlayControls('closed');
							
                        }, o.delay)
                    },
					onClicked: function() {
						animate.opened();
						bdy.addClass( o.bdyCls2 );
                    },
                    mouseenter: function() {
                        if (visibleControls()) return false;
                        if (stm != null) clearTimeout(stm);
                        if (o.openedControl != "") {
                            var ID = o.openedControl;
                            if (ID.html() == "") return false
                        }
                        stm = setTimeout(function() {
                            animate.opened()
                        }, o.openedDelay)
                    },
                    mouseleave: function() {
                        if (visibleControls()) return false;
                        if (stm != null) clearTimeout(stm);
                        stm = setTimeout(function() {
                            animate.closed()
                        }, o.delay)
                    },
                    clicked: function() {
                        if( o.toggle ){
							if (holder.hasClass(o.customClass)) animate.closed();
                     	   	else animate.opened()
						}else
							animate.opened()
                    },
                    bodyClicked: function( e ){
						if( !holder.is( e.target ) && holder.has( e.target ).length === 0 )
							animate.closed();
                    }
                };
				
				function overlayControls( k ){
					if( o.overlay != null ){
						if( k == 'opened' ) bdy.addClass( o.bdyCls );
						else bdy.removeClass( o.bdyCls );
					}
				}
				
                function visibleControls() {
                    if (o.isVisible != null)
                        if ($(o.isVisible).is(":visible")) return true
                }

                function controls() {
                    if (o.hideDropDown.length > 0)

                        for (var i = 0; i < o.hideDropDown.length; ++i)
                            if (o.hideDropDown[i].length > 0) o.hideDropDown[i][0].closed()
                }
							
                this.opened =
                    function() {
                        animate.opened()
                    };
                this.closed = function() {
                    if (stm != null) clearTimeout(stm);
                    animate.closed()
                };
                this.dispose = function() {
                    if (o.type == "hover") holder.unbind("mouseenter").unbind("mouseleave");
                    else $(o.clicked, holder).unbind("click")
                };
                this.live = function() {
                    if (o.type == "hover") holder.mouseenter(events.mouseenter).mouseleave(events.mouseleave);
                    else $(o.clicked, holder).click(events.clicked)
                };
				
                init();
            })
        }
    })
})(jQuery, window);

;(function($) {
    $.fn.extend({
        minusTabMenu: function( options, callback ){
            var defaults = {
				speed: 222,
				easing: 'easeInOutExpo',
				begin: 0,
				dropdown: false,
				ajx: { target: '.emosInfinite', typ: 'append' }
            };
            var options = $.extend(defaults, options);
            return this.each(function() {
				
                var opt = options, 
					el = $( this ),
					wrp = el.find('> .ems-tab-inner'),
					main = {
						nav: wrp.find('.navigation-js'),
						con: wrp.find('> .content-js'),
						cls: { selected: 'selected', ajx: 'ajx-loading', loaded: 'ajx-loaded' },
						detectEl: function( ID ){ return ID.length > 0 ? true : false; },
						clicklable: true,
						pageScroll: function( k, callback ){
							var _t = this;
							$('html, body').stop().animate({ scrollTop: k }, opt['speed'] , opt['easing'], function(){ 
								if( typeof callback !== 'undefined' )
									callback();  
							});
						},
						getNavigationTemplate: function(){
							var _t = this, htm = '';
							$('> li', _t.con).each(function(){
								var ths = $( this ), rel = ths.attr('rel') || '', e = ths.find('> a');
								htm += '<li rel="'+ rel +'"><a href="javascript:void(0);">'+ e.html() +'</a></li>';
							});
							return htm;	
						},
						setNavigation: function(){
							var _t = this;
							if( _t.detectEl( _t.nav ) )
								if( !_t.detectEl( $('li', _t.nav) ) )
									_t.nav.html( _t.getNavigationTemplate() );
						},
						getUri: function( o ){
							var _t = this, ID = o['ID'], uri = uty.cleanText( o['uri'] || '' ), code = uty.cleanText( o['code'] || '' ), cat = uty.cleanText( o['cat'] || '' );
							return uri.replace(/{{lang}}/g, lang).replace(/{{code}}/g, code).replace(/{{kat}}/g, cat);
						},
						loading: function( k ){
							var _t = this;
							if( k == 'add' ) el.addClass( _t.cls['ajx'] );
							else el.removeClass( _t.cls['ajx'] );
						},
						initPlugins: function( ID ){
							setTimeout(function(){
								uty.unVeil( ID );
								management.searchCartButton.init();
							}, 100);
						},
						ajx: function( o ){
							var _t = this, ID = o['ID'], uri = _t.getUri({ uri: o['uri'], code: o['code'] || '', cat: o['cat'] || '' });
							if( uty.detectEl( ID ) && !ID.hasClass( _t.cls['loaded'] ) )	{
								_t.clicklable = false;
								_t.loading('add');
								uty.ajx({ uri: uri }, function( d ){
									if( d['type'] == 'success' ){
										ID.addClass( _t.cls['loaded'] );
										d = uty.clearScriptTag( d['val'] || '' );
										d = $( d ).find( opt.ajx.target ).html() || '';
										if( opt.ajx.target !== '' ) ID = ID.find( opt.ajx.target );
										if( uty.detectEl( ID ) ){
											var typ = opt.ajx['typ'] || '';
											if( typ == 'append' ) ID.append( d );
											else if( typ == 'prepend' ) ID.append( d );
											else if( typ == 'before' ) ID.before( d );
											else if( typ == 'after' ) ID.after( d );
											else ID.html( d );
											
											_t.initPlugins( ID );
										}
									}
									_t.loading('remove');	
									_t.clicklable = true;	
								});
							}	
						},
						addEvent: function(){
							var _t = this;
							$('> li', _t.nav).bind('click', function(){
								var ths = $( this ), rel = ths.attr('rel') || '', ajx = ths.attr('data-ajx') || '', code = ths.attr('data-code') || '', cat = ths.attr('data-cat') || '';
								if( rel != '' && _t.clicklable ){
									$('> li[rel="'+ rel +'"]', _t.con).add( ths ).addClass( _t.cls['selected'] ).siblings('li').removeClass( _t.cls['selected'] );
									if( ajx != '' )
										_t.ajx({ ID: $('> li[rel="'+ rel +'"]', _t.con), uri: ajx, code: code, cat: cat });
								}
							})
							.eq( opt.begin )
                            .click();
							
							$('> li > a', _t.con).bind('click', function(){
								var ths = $( this ).parent('li'), rel = ths.attr('rel') || '';
								if( rel != '' ){
									if( ths.hasClass( _t.cls['selected'] ) )
										$('> li[rel="'+ rel +'"]', _t.nav).add( ths ).removeClass( _t.cls['selected'] ).siblings('li').removeClass( _t.cls['selected'] );
									else{
										$('> li[rel="'+ rel +'"]', _t.nav).add( ths ).addClass( _t.cls['selected'] ).siblings('li').removeClass( _t.cls['selected'] );
										_t.pageScroll( ths.offset().top );	
									}
								}
							});
						},
						add: function(){
							var _t = this;
							if( wrp.find('> .dropdown').length == 0 && _t.nav.length > 0 && opt.dropdown ){
								wrp.prepend('<div class="dropdown mobi-ver"><span></span><ul class="navigation-js">'+ _t.nav.html() +'</ul></div>');
								_t.nav = wrp.find('.navigation-js');
								wrp.find('> .dropdown').minusCustomDropDown();
							}
							
							$('> li', _t.con).each(function(){
                                var ths = $( this );
								if( ths.find('> a').length == 0 ){
									var e = $('> li[rel="'+ ( ths.attr('rel') || '' ) +'"]', _t.nav);
									if( e.length > 0 )
										ths.prepend( e.find('a').clone() );
								}
                            });
						},
						init: function(){
							var _t = this;
							if( _t.detectEl( _t.con ) ){
								_t.add();
								_t.setNavigation();
								_t.addEvent();
							}
						}
					};
				main.init();
				
            })
        }
    })
})(jQuery, window);


;(function($) {
    $.fn.extend({
        minusMenu: function(options, callback) {
            var defaults = {
				closeElem: '',
				items: '> ul > li',
				siblings: 'li',
				controls: '> ul, > div',
				customClass: 'selected',
				openedDelay: 200,
				closedDelay: 555,
				eventType: 'hover',
				clickedElem: '> a',
				bdyClicked: false,
				isVisible: '',
				setPos: false,
				overlay: false,
				bdyCls: ''
            };
            var options = $.extend(defaults, options);
            return this.each(function() {
                var o = options,
					el = $( this ),
					items = el.find( o.items ),
                    main = {
						stm: null,
						clearTm: function(){
							var _t = this;
							if( _t.stm != null )
								clearTimeout( _t.stm );
						},
						detectEl: function( ID ){ return ID.length > 0 ? true : false; },
						isVisible: function(){
							var _t = this, b = false;
							if( o.isVisible !== '' ){
								var e = $( o.isVisible );
								if( _t.detectEl( e ) )
									if( e.is(':visible') )
										b = true;	
							}
							return b;
						},
						overlayControls: function( k ){
							var _t = this;
							if( o.overlay ){
								if( k == 'opened' ) bdy.addClass( o.bdyCls );
								else{ 
									var e = el.find( o.items + '.' + o.customClass );
									if( !_t.detectEl( e ) ) 
										bdy.removeClass( o.bdyCls );
								}
							}
						},
						setPos: function( ID ){
							if( o.setPos ){
								var _t = this, k = $(o.controls, ID), e = $('.site-header-inner-top');
								if( _t.detectEl( k ) && _t.detectEl( e ) ){
									var x1 = ID.offset().left + 810, x2 = e.width() + e.offset().left;
									if( x1 >= x2 ) k.css({ 'left': x2 - x1 });
								}
							}
						},
						closeElem: function(){
							if( o.closeElem != '' )
								$( o.closeElem ).each(function(){
									var ths = $( this ).get( 0 );
									if( typeof ths.closed !== 'undefined' )	
										ths.closed();
								});
						},
						events: {
							onMouseEnter: function(){
								var _t = main, ths = $( this );
								
								if( _t.isVisible() ) return false;
								
								if( _t.detectEl( $(o.controls, ths) ) ){
									_t.clearTm();
									_t.stm = setTimeout(function(){
										_t.closeElem();
										ths.addClass( o.customClass ).siblings( o.siblings ).removeClass( o.customClass );
										_t.setPos( ths );
										_t.overlayControls('opened');
									}, o.openedDelay);
								}
							},
							onMouseLeave: function(){
								var _t = main, ths = $( this );
									if( _t.isVisible() ) return false;
									_t.clearTm();
									_t.stm = setTimeout(function(){
										ths.add( ths.siblings( o.siblings ) ).removeClass( o.customClass );
										_t.overlayControls('closed');
									}, o.closedDelay);
							},
							onClick: function( e ){
								var _t = main, ths = $( this ).parent( o.siblings );
								if( _t.detectEl( $(o.controls, ths) ) && !_t.isVisible() ){
									e.preventDefault();
									if( ths.hasClass( o.customClass ) ){
										ths.removeClass( o.customClass ).siblings( o.siblings ).removeClass( o.customClass );
										_t.overlayControls('closed');
									}else{
										ths.addClass( o.customClass ).siblings( o.siblings ).removeClass( o.customClass );
										_t.setPos( ths );
										_t.overlayControls('opened');
									}
								}
							},
							bdyClicked: function( e ){
								var _t = main;
								if( !el.is( e.target ) && el.has( e.target ).length === 0 && !_t.isVisible() ){
									$('.' + o.customClass, el).removeClass( o.customClass );
									_t.overlayControls('closed');
								}
							}
						},
						addEvent: function(){
							var _t = this;
							
							if( o.eventType == 'hover' )
								items.bind('mouseenter', _t.events.onMouseEnter).bind('mouseleave', _t.events.onMouseLeave);
							else if( o.eventType == 'click' )
								$(o.clickedElem, items).bind('click', _t.events.onClick);		
							
							if( o.bdyClicked )
								$('body, html').bind('click touchstart', _t.events.bdyClicked);
						},
						destroy: function(){
							var _t = this;
							$('.' + o.customClass, el).removeClass( o.customClass );
							_t.overlayControls('closed');
						},
						init: function(){
							var _t = this;
								_t.addEvent();
						}
					};  
				
				
				this.closed = function() {
                    if( main.stm != null ) clearTimeout( main.stm );
                    main.destroy()
                };
				
				main.init();              
            })
        }
    })
})(jQuery, window);

/////////////////////////////// JS MULTILANGUAGES
var translation = {
	
};

///////////////////////////////
var bdy = $('body'),
	win = $( window ),
	doc = $( document ),
	wt = parseFloat( win.width() ),
	ht = parseFloat( win.height() ),
	wst = parseFloat( win.scrollTop() ),
	sRatio,
	isMobile = mobile.detect(),
	uty = {
		speed: 666,
		easing: 'easeInOutExpo',
		ani: function( o, callback ){
			var _t = this, ID = o['el'];
			if( _t.detectEl( ID ) ){
				ID.stop().animate(o['prop'], o['speed'] || _t.speed, o['easing'] || _t.easing);
				setTimeout(function(){
					if( typeof callback !== 'undefined' )
						callback();
				}, ( o['speed'] || _t.speed ) + 1);
			}
		},
		setCss: function( o ){
			TweenLite.set(o['el'], { css: o['prop'] || {} } );
		},
		setAttr: function( o ){
			o['el'].attr( o['prop'], o['val'] || '' );
		},
		detectEl: function( ID ){
			return ID.length > 0 ? true : false;
		},
		ajx: function( o, callback ){
			$.ajax({
				type: o['type'] || 'GET',
				dataType: o['dataType'] || 'html',
				url: o['uri'] || '',
				data : o['param'] || {},
				contentType: o['contentType'] || '',
				error: function( e ){ 
					if( typeof callback !== 'undefined' ) 
						callback({ type: 'error' }); 
				},
				timeout: 30000,
				success:function( d ){ 
					if( typeof callback !== 'undefined' ) 
						callback({ type: 'success', val: d });
				}
			});
		},
		getScript: function( o, callback ){
			$.getScript(o['uri'], function(){
				if( typeof callback !== 'undefined' ) 
					callback();
			});
		},
		cssClass: function( o, callback ){
			var _t = this, ID = $( o['ID'] ), k = o['delay'], type = o['type'], cls;
			if( _t.detectEl( ID ) ){
				if( type == 'add' ){
					cls = o['cls'] || ['ready', 'animate'];
					ID.addClass( cls[ 0 ] ).delay( k ).queue('fx', function(){ $( this ).dequeue().addClass( cls[ 1 ] ); if( typeof callback !== 'undefined' ) callback(); });
				}else{
					cls = o['cls'] || ['animate', 'ready'];
					ID.removeClass( cls[ 0 ] ).delay( k ).queue('fx', function(){ $( this ).dequeue().removeClass( cls[ 1 ] ); if( typeof callback !== 'undefined' ) callback(); });
				}
			}
		},
		pageScroll: function( o, callback ){
			var _t = this, k = o || {};
			$('html, body').stop().animate({ scrollTop: k['scrollTop'] || 0 }, k['speed'] || _t.speed, k['easing'] || _t.easing, function(){ 
				if( typeof callback !== 'undefined' )
					callback();  
			});
		},
		lazyLoad: function( o, callback ){
			var _t = this, ID = $( o['ID'] );
			if( _t.detectEl( $('.lazy', ID) ) )
				$('.lazy', ID).lazyload({ effect: 'fadeIn', container: o['container'] || window, load: function(){ 
					$( this )
					.removeClass('lazy')
					.addClass('loaded'); 
				}});
		},
		clearScriptTag: function( k ){
			var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
			while( SCRIPT_REGEX.test( k ) )
				k = k.replace(SCRIPT_REGEX, '');	
			return k;
		},
		trimText: function( k ){
			return k.replace(/(^\s+|\s+$)/g,'');
		},
		cleanText: function( k ){
			return k.replace(/\s+/g, '');
		},
		diff: function( arr1, arr2 ){
			var newArr = [];
			var arr = arr1.concat(arr2);
		
			for (var i in arr) {
				var f = arr[i];
				var t = 0;
				for (j = 0; j < arr.length; j++) {
					if (arr[j] === f) {
						t++;
					}
				}
				if (t === 1)
					newArr.push(f);
				
			}
			return newArr;
		},
		isVisible: '.responsive-control',
		visibleControl: function(){
			var _t = this, b = false;
			if( _t.isVisible !== '' ){
				var e = $( _t.isVisible );
				if( uty.detectEl( e ) )
					if( e.is(':visible') )
						b = true;	
			}
			return b;
		},
		Cookies: function( o ){ 
			var typ = o['typ'] || '', name = o['name'] || '';
			if( typ == 'set' ){ 
				var date = new Date(), minutes = o['minutes'] || 5;
					date.setTime( date.getTime() + ( minutes * 60 * 1000 ) );
				$.cookie(name, o['value'] || '', { expires: date, path: '/' });
			}else if( typ == 'get' )
				return $.cookie( name );
		}
	},
	management = {
		destroy: function( o ){
			var _t = this, typ = o['type'] || '';
			if( typ == 'pc' ){
			
			}else if( typ == 'mobi' ){
			
			}
		},
		onScroll: function(){
			var _t = this;
		},
		adjust: function(){
			var _t = this;
		},
		init: function(){
			var _t = this;
		}	
	},
	plugin = {
		menu: {
			cls: { active: 'active-menu-plugin' },
			arr: [
				{ ID: '.nav-main:not(".active-menu-plugin")', prop: { closeElem: '.mod-mini-cart, .mod-mini-login', setPos: true, bdyClicked: true, eventType: isMobile ? 'click' : 'hover', isVisible: uty.isVisible, overlay: true, 	bdyCls: 'main-menu-ready', items: 'ul.cat-menu-lvl-1 > li' } }
			],
			set: function( o ){
				var _t = this, ID = $( o['ID'] ), b = o['unbind'] || '', s = o['selectionFirst'] || '';
				if( uty.detectEl( ID ) ){
					if( !ID.hasClass( _t['cls']['active'] ) ){
						ID.addClass( _t['cls']['active'] );
						ID.minusMenu( o['prop'] || {} ); 
						if( b != '' ) 
							$(b, ID).unbind('mouseleave')
						
						if( s != '' )	
							$(s, ID).each(function(){ $( this ).find('> li:eq( 0 )').addClass('selected'); });
					}
				}
			},
			init: function(){
				var _t = this;
				for( var i = 0; i < _t.arr.length; ++i )
					_t.set( _t.arr[ i ] );
			}
		},
		tabMenu: {
			cls: { active: 'active-tabMenu-plugin' },
			el: '.ems-tab:not(".active-tabMenu-plugin',
			set: function( ID ){
				var _t = this;
				if( !ID.hasClass( _t['cls']['active'] ) ){
					ID.addClass( _t['cls']['active'] );
					ID.minusTabMenu(); 
				}
			},
			init: function(){
				var _t = this, el = $( _t.el );
				if( uty.detectEl( el ) ){
					el.each(function(){ 
						var ths = $( this );
						_t.set( ths );
					});
				}
			}
		},
		slider: {
			cls: { active: 'active-slider-plugin' },
			el: '.swiper-container:not(".active-slider-plugin")',
			target: '.swiper-wrapper > li',
			adjust: function(){
				var _t = this, el = $( _t.el );
				if( uty.detectEl( el ) )
					el.each(function(){ 
						var ths = $( this );
						if( uty.detectEl( ths.find( _t.target ) ) ){
							ths = ths.get( 0 ); 	
							if( typeof ths.adjust !== 'undefined' )
								ths.adjust();
						}
					});
			},
			set: function( ID ){
				var _t = this;
				if( !ID.hasClass( _t['cls']['active'] ) && uty.detectEl( ID.find( _t.target ) ) ){
					ID.addClass( _t['cls']['active'] );
					ID.minusSlider(); 
				}
			},
			init: function(){
				var _t = this, el = $( _t.el );
				if( uty.detectEl( el ) ){
					el.each(function(){ 
						var ths = $( this );
						_t.set( ths );
					});
				}
			}
		},
		destroy: function( o ){
			var _t = this, typ = o['type'] || '';
			if( typ == 'pc' ){
			
			}else if( typ == 'mobi' ){
			
			}
		},
		onScroll: function(){
			var _t = this;
		},
		adjust: function(){
			var _t = this;
				_t.slider.adjust();
		},
		init: function(){
			var _t = this;
				_t.slider.init();
		}
	},
	modules = {
		destroy: function( o ){
			var _t = this, typ = o['type'] || '';
			if( typ == 'pc' ){
			
			}else if( typ == 'mobi' ){
			
			}
		},
		onScroll: function(){
			var _t = this;
		},
		adjust: function(){
			var _t = this;
		},
		init: function(){
			var _t = this;
		}
	},
	pages = {
		destroy: function( o ){
			var _t = this, typ = o['type'] || '';
			if( typ == 'pc' ){
			
			}else if( typ == 'mobi' ){
			
			}
		},
		onScroll: function(){
			var _t = this;
		},
		adjust: function(){
			var _t = this;
		},
		init: function(){
			var _t = this;
		}
	},
	resetDom = {
		k: true,
		adjust: function(){
			var _t = this;
			if( !_t.k && uty.visibleControl() ){
				// mobi
				_t.k = true;
				management.destroy({ typ: 'mobi' });
				modules.destroy({ typ: 'mobi' });
				plugin.destroy({ typ: 'mobi' });
				pages.destroy({ typ: 'mobi' });
			}else if( _t.k && !uty.visibleControl() ){
				// pc
				_t.k = false;
				management.destroy({ typ: 'pc' });
				modules.destroy({ typ: 'pc' });
				plugin.destroy({ typ: 'pc' });
				pages.destroy({ typ: 'pc' });
			}
		},
		init: function(){
			var _t = this;
			if( uty.visibleControl() )
				_t.k = false;
		}
	},
	events = {
		bdyClicked: function(){
			$('body, html').bind('click touchstart', function( e ){
				var m = $('.dropdown'); 
				if( !m.is( e.target ) && m.has( e.target ).length === 0 )
					m.removeClass('opened');
			});	
		},
		loaded: function(){
			uty.lazyLoad( { ID: 'body' } );
		},
		onResize: function(){
			wt = parseFloat( win.width() );
			ht = parseFloat( win.height() );
			
			management.adjust();
			modules.adjust();
			plugin.adjust();
			pages.adjust();
		},
		onResizeStop: function(){
			
		},
		onScroll: function(){
			wst = parseFloat( win.scrollTop() );
			sRatio = wst / ( doc.height() - ht );
			
			management.onScroll();
			modules.onScroll();
			plugin.onScroll();
			pages.onScroll();
		},
		init: function(){
			var _t = this;
				_t.bdyClicked();
			win.load( _t.loaded );
			win.resize( _t.onResize ).resize();
			win.bind('resizestop', _t.onResizeStop);
			win.bind('scroll', _t.onScroll ).scroll();
		}
	},
	initialize = function(){
			management.init();
			modules.init();
			plugin.init();
			pages.init();
			resetDom.init();
			events.init();
	};
	
	initialize();