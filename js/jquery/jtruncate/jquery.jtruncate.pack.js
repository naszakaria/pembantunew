(function($)
		  {
			  $.fn.jTruncate=function(h)
			  {
				  var i={length:300,minTrail:20,moreText:"more",lessText:"less",ellipsisText:"...",moreAni:"",lessAni:""};
				  var h=$.extend(i,h);
				  return this.each(function(){
											obj=$(this);var a=obj.html();
											if(a.length>h.length+h.minTrail)
											{
												var b=a.indexOf(' ',h.length);if(b!=-1)
												{
													var b=a.indexOf(' ',h.length);
													var c=a.substring(0,b);
													var d=a.substring(b,a.length-1);
													obj.html(c+'<span class="truncate_ellipsis">'+h.ellipsisText+'</span>'+'<span class="truncate_more">'+d+'</span>');
													obj.find('.truncate_more').css("display","none");
													obj.append('<div class="clearboth">'+'<a href="#" class="truncate_more_link">'+h.moreText+'</a>'+'</div>');
													var e=$('.truncate_more_link',obj);
													var f=$('.truncate_more',obj);
													var g=$('.truncate_ellipsis',obj);
													e.click(function(){
																	 if(e.text()==h.moreText)
																	 {
																		 f.show(h.moreAni);
																		 e.text(h.lessText);
																		 g.css("display","none")
																	 }
																	 else
																	 {
																		 f.hide(h.lessAni);
																		 e.text(h.moreText);
																		 g.css("display","inline")
																	}
																	return false
																	})
												}
											}
										})
				  						}
		})(jQuery);