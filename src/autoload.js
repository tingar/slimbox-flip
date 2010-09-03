// AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
if (!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
	jQuery(function($) {
		$("(a|div)[rel^='lightbox']").slimbox({/* Put custom options here */}, null, function(el) {
			rel=$(this).attr('rel');
			elrel=$(el).attr('rel');
			return (this == el) || ((rel.length > 8) && (rel == elrel));
		});
	});
}
