//
// Foundation-Jekyll - Javascripts
// Author: @aaronkwhite
//

// Init Foundation
$(document).foundation();

// Init Highlight.js
//hljs.initHighlightingOnLoad();

// Parties contact form 
var $contactForm = $('#parties-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/parties@societyfair.net',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="row"><div class="small-12 small-centered columns"><div class="callout alert--loading" data-closable><h5>Sending</h5></div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="row"><div class="small-12 small-centered columns"><div class="callout success" data-closable><h5>Message sent!</h5><p>We will be in touch with you shortly. Thank you for your enquiry.</p><button class="close-button" aria-label="Dismiss alert" type="button" data-close><span aria-hidden="true">&times;</span></button></div>');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
});
