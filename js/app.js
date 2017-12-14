// Use jQuery to complete the following challenges

// Get the value from the text input element and populate the output with the input value
var $inputField = $('#inputField'),
	$outputField = $('#outputField');

$inputField.keyup(function() {
	$outputField.text($inputField.val());
});

		// explain: every time you put the keyup in the input field there is text going into the output field. 

// Style the 'h1' element dynamically when the user hovers over it
var $h1Element = $($('h1')[0]);
var cssObject = {
		'fontSize': '40px',
		'color': 'orange',
		'backgroundColor': '#39add1',
		'padding': '1rem 2rem',
		'borderRadius': '1rem'
	};

$h1Element.mouseover(function() {
	$h1Element.css (cssObject);
});

		//everytime we think a piece of code is supposed to be doing something just log it to the console
// When a user clicks the 'hide this card' link in the cards, hide that card.
var $cardButtons = $('.card button');

$cardButtons.each(function(cardButton) {
	var $cardButton = $($cardButtons[cardButton]);
	
	$cardButton.click(function() {
		$card = $(this).parent();
		$card.hide();
	});
});
		//$(this).parent().hide();  another way
		//for each one of the things inside of the array do whatever is in here, so for each cardAnchor out of cardAnchors
	// 	What sarah did:
	// 	$('card button').click(function() {
 //    	$(this).parent().hide();
	// });
//Make all cards return to page
var $bringBackButton = $($('.bringBackAll')[0]),
	$cards = $('.card');

$bringBackButton.click(function() {
	$cards.show();
});

// Change the style of the 'p' elements when you double click them
var $allParagraphs = $('p');

$allParagraphs.each(function(index) {
	$($allParagraphs[index]).dblclick(function() {
		var cssValues = {
			'lineHeight': '2',
			'backgroundColor': 'blue',
			'fontSize': '30px',
			'color': 'white'
		};
		$(this).css(cssValues);
	});
});


// Add an element to the 'main' element when the user adds html in an prompt box.
var $userInput = $(prompt('What HTML element do you want to add to \'main\''));
	$mainElement = $('main');

	$mainElement.append($userInput.html());

