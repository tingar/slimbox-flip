/*
	Slimbox v2.04 - The ultimate lightweight Lightbox clone for jQuery
	(c) 2007-2010 Christophe Beyls <http://www.digitalia.be>
	MIT-style license.
*/
(function(y){var G=y(window),w,f,J=-1,p,z,F,x,A,S,t,o=!window.XMLHttpRequest,u=[],n=document.documentElement,m={},v=new Image(),Q=new Image(),I=new Image(),M,b,h,l,r,H,N,d,K,c,D,R,P=false;y(function(){y("body").append(y([M=y('<div id="lbOverlay" />')[0],b=y('<div id="lbCenter" />')[0],K=y('<div id="lbBottomContainer" />')[0]]).css("display","none"));h=y('<div id="lbImage" />').appendTo(b).append(r=y('<div style="position: relative;" />').append([N=y('<a id="lbPrevLink" href="#" />').click(B)[0],d=y('<a id="lbNextLink" href="#" />').click(e)[0],l=y("<div />")[0]])[0])[0];c=y('<div id="lbBottom" />').appendTo(K).append([y('<a id="lbCloseLink" href="#" />').add(M).click(E)[0],H=y('<a id="lbFlipLink" href="#" />').add(M).click(O)[0],D=y('<div id="lbCaption" />')[0],R=y('<div id="lbNumber" />')[0],y('<div style="clear: both;" />')[0]])[0]});y.slimbox=function(V,U,T){w=y.extend({do3DFlip:false,loop:false,overlayOpacity:0.8,overlayFadeDuration:300,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:200,counterText:"Image {x} of {y}",counterFrontText:"(front)",counterBackText:"(back)",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78],flipKeys:[9,70],animateType:"both"},T);if(typeof V=="string"){V=[[V,U,null]];U=0}A=G.scrollTop()+(G.height()/2);S=w.initialWidth;t=w.initialHeight;y(b).css({top:Math.max(0,A-(t/2)),width:S,height:t,marginLeft:-S/2}).show();x=o||(M.currentStyle&&(M.currentStyle.position!="fixed"));if(x){M.style.position="absolute"}y(M).css("opacity",w.overlayOpacity).fadeIn(w.overlayFadeDuration);C();k(1);f=V;w.loop=w.loop&&(f.length>1);return a(U)};y.fn.slimbox=function(T,W,V){W=W||function(X){switch(X.nodeName.toLowerCase()){case"a":return[X.href,X.title,(X.rev==""?null:X.rev)];break;case"div":return y(X);break}};V=V||function(){return true};var U=this;return U.unbind("click").click(function(){var Z=this,ab=0,aa,X=0,Y;aa=y.grep(U,function(ad,ac){return V.call(Z,ad,ac)});for(Y=aa.length;X<Y;++X){if(aa[X]==Z){ab=X}aa[X]=W(aa[X],X)}return y.slimbox(aa,ab,T)})};function C(){var U=G.scrollLeft(),T=G.width();y([b,K]).css("left",U+(T/2));if(x){y(M).css({left:U,top:G.scrollTop(),width:T,height:G.height()})}}function k(T){if(T){y("object").add(o?"select":"embed").each(function(V,W){u[V]=[W,W.style.visibility];W.style.visibility="hidden"})}else{y.each(u,function(V,W){W[0].style.visibility=W[1]});u=[]}var U=T?"bind":"unbind";G[U]("scroll resize",C);y(document)[U]("keydown",q)}function q(V){var U=V.keyCode,T=y.inArray;return(T(U,w.closeKeys)>=0)?E():(T(U,w.nextKeys)>=0)?e():(T(U,w.previousKeys)>=0)?B():(T(U,w.flipKeys)>=0)?O():true}function B(){return a(z)}function e(){return a(F)}function O(){if(!P&&J>=0&&f[J][2]){P=true;if(p===f[J][2]){p=f[J][0]}else{p=f[J][2]}s(true);m=new Image();if(w.do3DFlip){m.onload=function(){g()}}else{m.onload=function(){j(true)}}m.src=p}return false}function a(T){if(!P&&T>=0){P=true;J=T;var U=f[J];if(U.length>1){p=f[J][0]}else{p="#"}z=(J||(w.loop?f.length:0))-1;F=((J+1)%f.length)||(w.loop?0:-1);s();b.className="lbLoading";if(U.length>1){m=new Image();m.onload=function(){j()};m.src=p}else{j()}}return false}function g(){b.className="";y(D).html(f[J][1]||"");if(z>=0){v.src=f[z][0]}if(F>=0){Q.src=f[F][0]}if(f[J][2]!=null){if(p===f[J][0]){I.src=f[J][2]}else{I.src=f[J][0]}}L(true);var T=Math.max(0,A-(t/2));y(b).queue(function(){y(r).width(m.width);y([r,N,d]).height(m.height);y(h).flip({speed:(w.imageFadeDuration),direction:(p===f[J][2])?"rl":"lr",dontChangeColor:true,bgColor:"#777",midColor:"#555",toColor:"#777",onBefore:function(){y(h).css({backgroundImage:"url("+p+")",visibility:"hidden",display:""})},onAnimation:function(){y(R).html((((f.length>1)&&w.counterText)||"").replace(/{x}/,J+1).replace(/{y}/,f.length)+((f[J][2]!==null)?" "+((p===f[J][2])?w.counterBackText:w.counterFrontText):""))},onEnd:function(){y(h).css({display:"none",visibility:"",opacity:""}).show();P=false}})})}function j(T){b.className="";y(h).fadeTo(w.imageFadeDuration,0,function(){if(f[J].length>1){y(h).css({backgroundImage:"url("+p+")",visibility:"hidden",display:""});y(l).html("");y(r).width(m.width);y([r,N,d]).height(m.height)}else{y(h).css({backgroundImage:""});y(l).html(f[J].html()).css({width:f[J].css("width"),height:f[J].css("height")});y(r).width(w.initialWidth);y([r,N,d]).height(w.initialHeight)}y(D).html(f[J][1]||"");y(R).html((((f.length>1)&&w.counterText)||"").replace(/{x}/,J+1).replace(/{y}/,f.length)+((f[J][2]!==null)?" "+((p===f[J][2])?w.counterBackText:w.counterFrontText):""));if(z>=0){v.src=f[z][0]}if(F>=0){Q.src=f[F][0]}if(f[J][2]!=null){if(p===f[J][0]){I.src=f[J][2]}else{I.src=f[J][0]}}L(T);var U=Math.max(0,A-(t/2));if(!T){y(b).queue(function(){y(K).css({width:S,top:U+t,marginLeft:-S/2,visibility:"hidden",display:""});y(h).css({display:"none",visibility:"",opacity:""}).fadeTo(w.imageFadeDuration,1,i)})}else{y(b).queue(function(){y(h).css({display:"none",visibility:"",opacity:""}).fadeTo(w.imageFadeDuration,1,function(){P=false})})}})}function L(V){var T,U;if(f[J].length>1){T=m.width;U=m.height}else{T=parseInt(f[J].css("width"))||w.initialWidth;U=parseInt(f[J].css("height"))||w.initialHeight}S=T+parseFloat(y(h).css("border-left-width"))+parseFloat(y(h).css("border-right-width"));t=U+parseFloat(y(h).css("border-bottom-width"))+parseFloat(y(h).css("border-top-width"));var W=Math.max(0,A-(t/2));if(w.animateType=="both"&&(b.offsetHeight!=t||b.offsetWidth!=S)){y(b).animate({height:t,top:W,width:S,marginLeft:-S/2},w.resizeDuration,w.resizeEasing);if(V){y(K).animate({width:S,top:W+t,marginLeft:-S/2},w.resizeDuration,w.resizeEasing)}if(V){y(r).animate({width:T,height:U});y([N,d]).animate({height:U})}}else{if(w.animateType=="hw"){if(b.offsetHeight!=t){y(b).animate({height:t,top:W},w.resizeDuration,w.resizeEasing);if(V){y(K).animate({top:W+t},w.resizeDuration,w.resizeEasing)}if(V){y([r,N,d]).animate({height:U})}}if(b.offsetWidth!=S){y(b).animate({width:S,marginLeft:-S/2},w.resizeDuration,w.resizeEasing);if(V){y(K).animate({width:S,marginLeft:-S/2},w.resizeDuration,w.resizeEasing)}if(V){y(r).animate({width:T})}}}else{if(w.animateType=="wh"){if(b.offsetWidth!=S){y(b).animate({width:S,marginLeft:-S/2},w.resizeDuration,w.resizeEasing);if(V){y(K).animate({width:S,marginLeft:-S/2},w.resizeDuration,w.resizeEasing)}if(V){y(r).animate({width:T})}}if(b.offsetHeight!=t){y(b).animate({height:t,top:W},w.resizeDuration,w.resizeEasing);if(V){y(K).animate({top:W+t},w.resizeDuration,w.resizeEasing)}if(V){y([r,N,d]).animate({height:U})}}}}}}function i(){if(f[J][2]){y(H).show()}if(z>=0){y(N).show()}if(F>=0){y(d).show()}K.style.visibility="";y(c).css("marginTop",-c.offsetHeight).animate({marginTop:0},w.captionAnimationDuration,function(){P=false})}function s(T){m.onload=null;m.src=v.src=Q.src=I.src=p;y([b,h,c]).stop(true);if(!T){y([N,d,H,h]).hide();y(c).css("marginTop",0).animate({marginTop:-c.offsetHeight},w.captionAnimationDuration)}}function E(){if(J>=0){y([N,d,H,h]).hide();y(K).css({visibility:"hidden"});s(true);J=z=F=-1;y(b).hide();y(M).stop().fadeOut(w.overlayFadeDuration,function(){k();P=false})}return false}})(jQuery);

// AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
if (!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
	jQuery(function($) {
		$("(a,div)[rel^='lightbox']").slimbox({/* Put custom options here */}, null, function(el) {
			rel=$(this).attr('rel');
			elrel=$(el).attr('rel');
			return (this == el) || ((rel.length > 8) && (rel == elrel));
		});
	});
}
