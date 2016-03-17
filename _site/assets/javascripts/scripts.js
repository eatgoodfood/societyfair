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

/** Parties contact form 

// get all data in form and return object
function getFormData() {
  var elements = document.getElementById("gform").elements; // all form elements
  var fields = Object.keys(elements).filter(function(k){
    return k.length > 1 && elements[k].name && elements[k].name.length > 0 ;
  });
  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
  });
  console.log(data);
  return data;
}

function handleFormSubmit(event) {  // handles form submit withtout any jquery
	event.preventDefault();           // we are submitting via xhr below
	var data = getFormData();         // get the values submitted in the form
	var url = event.target.action;  //
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url);
	// xhr.withCredentials = true;
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onreadystatechange = function() {
	    console.log( xhr.status, xhr.statusText )
	    console.log(xhr.responseText);
	    document.getElementById('gform').style.display = 'none'; // hide form
	    document.getElementById('thankyou_message').style.display = 'block';
	    return;
	};
	// url encode form data for sending as post data
	var encoded = Object.keys(data).map(function(k) {
	    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
	}).join('&')
	xhr.send(encoded);
}
function loaded() {
  console.log('contact form submission handler loaded successfully');
  // bind to the submit event of our form
  var form = document.getElementById('gform');
  form.addEventListener("submit", handleFormSubmit, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);
**/