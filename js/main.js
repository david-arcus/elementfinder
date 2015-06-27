// elements object containing the element's symbol, name and atomic weight
var elements = [

	{
		'symbol':'H', 
		'name':'Hydrogen', 
		'weight':1
	},
	{
		'symbol':'He', 
		'name':'Helium', 
		'weight':2
	},
	{
		'symbol':'Li', 
		'name':'Lithium', 
		'weight':3
	},
	{
		'symbol':'Be', 
		'name':'Beryllium', 
		'weight':4
	},
	{
		'symbol':'B', 
		'name':'Boron', 
		'weight':5
	},
	{
		'symbol':'C', 
		'name':'Carbon', 
		'weight':6
	},
	{
		'symbol':'N', 
		'name':'Nitrogen', 
		'weight':7
	},
	{
		'symbol':'O',
		'name':'Oxygen',
		'weight':8
	},
	{
		'symbol':'F',
		'name':'Fluorine',
		'weight':9
	},
	{
		'symbol':'Ne',
		'name':'Neon',
		'weight':10
	},
	{
		'symbol':'Na',
		'name':'Sodium',
		'weight':11
	},
	{
		'symbol':'Mg', 
		'name':'Magnesium',
		'weight':12
	},
	{
		'symbol':'Al', 
		'name':'Aluminium',
		'weight':13
	},
	{
		'symbol':'Si', 
		'name':'Silicon',
		'weight':14
	},
	{
		'symbol':'P', 
		'name':'Phosphorus',
		'weight':15
	},
	{
		'symbol':'S', 
		'name':'Sulfur',
		'weight':16
	},
	{
		'symbol':'Cl', 
		'name':'Chlorine',
		'weight':17		
	},
	{
		'symbol':'Ar', 
		'name':'Argon',
		'weight':18		
	},
	{
		'symbol':'K', 
		'name':'Potassium',
		'weight':19		
	},
	{
		'symbol':'Ca', 
		'name':'Calcium',
		'weight':20		
	},
	{
		'symbol':'Sc',
		'name':'Scandium',
		'weight':21		
	},
	{
		'symbol':'Ti', 
		'name':'Titanium',
		'weight':22	
	},
	{
		'symbol':'V', 
		'name':'Vanadium',
		'weight':23		
	},
	{
		'symbol':'Cr', 
		'name':'Chromium',
		'weight':24		
	},
	{
		'symbol':'Mn', 
		'name':'Manganese',
		'weight':25		
	},
	{
		'symbol':'Fe', 
		'name':'Iron',
		'weight':26
	},
	{
		'symbol':'Co', 
		'name':'Cobalt',
		'weight':27
	},
	{
		'symbol':'Ni', 
		'name':'Nickel',
		'weight':28
	},
	{
		'symbol':'Cu', 
		'name':'Copper',
		'weight':29		
	},
	{
		'symbol':'Zn', 
		'name':'Zinc',
		'weight':30		
	},
	{
		'symbol':'Ga', 
		'name':'Gallium',
		'weight':31		
	},
	{
		'symbol':'Ge', 
		'name':'Germanium',
		'weight':32		
	},
	{
		'symbol':'As', 
		'name':'Arsenic',
		'weight':33		
	},
	{
		'symbol':'Se', 
		'name':'Selenium',
		'weight':34		
	},
	{
		'symbol':'Br', 
		'name':'Bromine',
		'weight':35		
	},
	{
		'symbol':'Kr', 
		'name':'Krypton',
		'weight':36		
	},
	{
		'symbol':'Rb', 
		'name':'Rubidium',
		'weight':37		
	},
	{
		'symbol':'Sr', 
		'name':'Strontium',
		'weight':38		
	},
	{
		'symbol':'Y', 
		'name':'Yttrium',
		'weight':39		
	},
	{
		'symbol':'Zr', 
		'name':'Zirconium',
		'weight':40		
	},
	{
		'symbol':'Nb', 
		'name':'Niobium',
		'weight':41		
	},
	{
		'symbol':'Mo',
		'name':'Molybdenum',
		'weight':42		
	},
	{
		'symbol':'Tc',
		'name':'Technetium',
		'weight':43		
	},
	{
		'symbol':'Ru',
		'name':'Ruthenium',
		'weight':44		
	},
	{
		'symbol':'Rh',
		'name':'Rhodium',
		'weight':45		
	},
	{
		'symbol':'Pd',
		'name':'Palladium',
		'weight':46		
	},
	{
		'symbol':'Ag',
		'name':'Silver',
		'weight':47		
	},
	{
		'symbol':'Cd',
		'name':'Cadmium',
		'weight':48		
	},
	{
		'symbol':'In',
		'name':'Indium',
		'weight':49	
	},
	{
		'symbol':'Sn',
		'name':'Tin',
		'weight':50		
	},
	{
		'symbol':'Sb',
		'name':'Antimony',
		'weight':51		
	},
	{
		'symbol':'Te',
		'name':'Tellurium',
		'weight':52		
	},
	{
		'symbol':'I',
		'name':'Iodine',
		'weight':53		
	},
	{
		'symbol':'Xe',
		'name':'Xenon',
		'weight':54
	},
	{
		'symbol':'Cs',
		'name':'Caesium',
		'weight':55		
	},
	{
		'symbol':'Ba',
		'name':'Barium',
		'weight':56
		
	},
	{
		'symbol':'La',
		'name':'Lanthanum',
		'weight':57		
	},
	{
		'symbol':'Ce',
		'name':'Cerium',
		'weight':58		
	},
	{
		'symbol':'Pr',
		'name':'Praseodymium',
		'weight':59	
	},
	{
		'symbol':'Nd',
		'name':'Neodymium',
		'weight':60	
	},
	{
		'symbol':'Pm',
		'name':'Promethium',
		'weight':61	
	},
	{
		'symbol':'Sm', 
		'name':'Samarium',
		'weight':62	
	},
	{
		'symbol':'Eu',
		'name':'Europium',
		'weight':63	
	},
	{
		'symbol':'Gd',
		'name':'Gadolinium',
		'weight':64	
	},
	{
		'symbol':'Tb',
		'name':'Terbium',
		'weight':65	
	},
	{
		'symbol':'Dy',
		'name':'Dysprosium',
		'weight':66	
	},
	{
		'symbol':'Ho',
		'name':'Holmium',
		'weight':67	
	},
	{
		'symbol':'Er',
		'name':'Erbium',
		'weight':68	
	},
	{
		'symbol':'Tm',
		'name':'Thulium',
		'weight':69	
	},
	{
		'symbol':'Yb',
		'name':'Ytterbium',
		'weight':70	
	},
	{
		'symbol':'Lu',
		'name':'Lutetium',
		'weight':71	
	},
	{
		'symbol':'Hf',
		'name':'Hafnium',
		'weight':72	
	},
	{
		'symbol':'Ta',
		'name':'Tantalum',
		'weight':73	
	},
	{
		'symbol':'W',
		'name':'Tungsten',
		'weight':74	
	},
	{
		'symbol':'Re',
		'name':'Rhenium',
		'weight':75	
	},
	{
		'symbol':'Os',
		'name':'Osmium',
		'weight':76	
	},
	{
		'symbol':'Ir',
		'name':'Iridium',
		'weight':77	
	},
	{
		'symbol':'Pt',
		'name':'Platinum',
		'weight':78	
	},
	{
		'symbol':'Au',
		'name':'Gold',
		'weight':79	
	},
	{
		'symbol':'Hg',
		'name':'Mercury',
		'weight':80	
	},
	{
		'symbol':'Tl',
		'name':'Thallium',
		'weight':81
	},
	{
		'symbol':'Pb',
		'name':'Lead',
		'weight':82	
	},
	{
		'symbol':'Bi',
		'name':'Bismuth',
		'weight':83	
	},
	{
		'symbol':'Po',
		'name':'Polonium',
		'weight':84	
	},
	{
		'symbol':'At',
		'name':'Astatine',
		'weight':85	
	},
	{
		'symbol':'Rn',
		'name':'Radon',
		'weight':86	
	},
	{
		'symbol':'Fr',
		'name':'Francium',
		'weight':87	
	},
	{
		'symbol':'Ra',
		'name':'Radium',
		'weight':88	
	},
	{
		'symbol':'Ac',
		'name':'Actinium',
		'weight':89	
	},
	{
		'symbol':'Th',
		'name':'Thorium',
		'weight':90	
	},
	{
		'symbol':'Pa',
		'name':'Protactinium',
		'weight':91	
	},
	{
		'symbol':'U',
		'name':'Uranium',
		'weight':92	
	},
	{
		'symbol':'Np',
		'name':'Neptunium',
		'weight':93	
	},
	{
		'symbol':'Pu',
		'name':'Plutonium',
		'weight':94	
	},
	{
		'symbol':'Am',
		'name':'Americium',
		'weight':95	
	},
	{
		'symbol':'Cm',
		'name':'Curium',
		'weight':96	
	},
	{
		'symbol':'Bk',
		'name':'Berkelium',
		'weight':97	
	},
	{
		'symbol':'Cf',
		'name':'Californium',
		'weight':98	
	},
	{
		'symbol':'Es',
		'name':'Einsteinium',
		'weight':99	
	},
	{
		'symbol':'Fm',
		'name':'Fermium',
		'weight':100	
	},
	{
		'symbol':'Md',
		'name':'Mendelevium',
		'weight':101	
	},
	{
		'symbol':'No',
		'name':'Nobelium',
		'weight':102
	},
	{
		'symbol':'Lr',
		'name':'Lawrencium',
		'weight':103
	},
	{
		'symbol':'Rf',
		'name':'Rutherfordium',
		'weight':104
	},
	{
		'symbol':'Db',
		'name':'Dubnium',
		'weight':105
	},
	{
		'symbol':'Sg',
		'name':'Seaborgium',
		'weight':106	
	},
	{
		'symbol':'Bh',
		'name':'Bohrium',
		'weight':107
	},
	{
		'symbol':'Hs',
		'name':'Hassium',
		'weight':108
	},
	{
		'symbol':'Mt',
		'name':'Meitnerium',
		'weight':109
	},
	{
		'symbol':'Ds',
		'name':'Darmstadtium',
		'weight':110
	},
	{
		'symbol':'Rg',
		'name':'Roentgenium',
		'weight':111
	},
	{
		'symbol':'Cp',
		'name':'Copernicium',
		'weight':112
	},
	{
		'symbol':'Uut',
		'name':'Ununtrium',
		'weight':113
	},
	{
		'symbol':'Uuq',
		'name':'Ununquadium',
		'weight':114
	},
	{
		'symbol':'Uup',
		'name':'Ununpentium',
		'weight':115
	},
	{
		'symbol':'Uuh',
		'name':'Ununhexium',
		'weight':116
	},
	{
		'symbol':'Uus',
		'name':'Ununseptium',
		'weight':117
	},
	{
		'symbol':'Uuo',
		'name':'Ununoctium',
		'weight':118
	}

]

// ios devices won't play html5 video in the backround without prompting, so hide if that's the case
var checkIfIOS = function() {
	
	var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
	
	if (iOS == true) {
		
		$('video').css('display','none');	
		
	}
	
}

// find the first instance of any element in the user's name, then add it into a data object
var findElementsInName = function(userName) {
	
	// this is the array that all found elements go in, along with their index and length
	var foundElements = [];
		
	for (var key in elements) {
			
		var obj = elements[key];
		//console.log(obj['name']);
			
		var re = new RegExp(obj['symbol'], 'i');
		var result = userName.match(re);
		
		if (result != null) {
			
			var foundElement = {};
			
			//var tagLength = 4;
			//var startIndex = userName.toLowerCase().indexOf(obj['symbol'].toLowerCase());
			var indexLength = obj['symbol'].length;
			//var endPoint = startIndex + indexLength + tagLength;
			
			foundElement.name = obj['name'];
			foundElement.symbol = obj['symbol'];
			foundElement.weight = obj['weight'];
			//foundElement.startIndex = startIndex;
			//foundElement.indexLength = indexLength;
			//foundElement.endPoint = endPoint;
			
			foundElements.push(foundElement);
			
			//console.log(obj['name'] + ': ' + obj['symbol'] + '(' + obj['weight'] + ')');			
			
		}
		
	}
	
	return foundElements;
	
}


// get all the elements (and their info) and output them to the page
var outputElements = function(foundElements, userName) {
	
	//put the user's original name into hidden input field
	$('#orig_name').val(userName);
	
	userName = userName.replace(" ","<br>");

	$('#results_container').show();
	
	if (foundElements.length > 0) {
		
		$('#social-buttons').show();
		$('#results').append('<h1 class="name-with-element" id="username-target">'+userName+'</h1>');
		$('#results').append('<h4>Click an element to see it in your name</h4>');	
		
		for (var i = 0; i < foundElements.length; i++) {
			
			$('#elements-container').append('<div class="element-container"><div class="element">' + foundElements[i].symbol + '<div class="atomic-weight">' + foundElements[i].weight + '</div></div><span class="element-full"><a href="http://en.wikipedia.org/wiki/' + foundElements[i].name + '">' + foundElements[i].name + ' &raquo;</a></span></div>');
			
		}	
		
	} else {
			
		$('#results').html('<h4>There are no elements in your name!</h4>');
			
	}
	
}

// when user clicks an element, get the index of it and then apply that index to the array of found elements
var showElementsInName = function(foundElements, clickedIndex, userName) {
	
	userName = $('#username-target').html();
				
	var updatedUserName = insertElementTag(userName, foundElements[clickedIndex].symbol, foundElements[clickedIndex].weight);
	
	updatedUserName = updatedUserName.replace(" ","<br>");	
	
	updatedUserName = decapitalize(updatedUserName);
	
	$('#username-target').html(updatedUserName);
		
}

// if user toggles a clicked element, then remove it from their name
var removeElementsInName = function(foundElements, clickedIndex, userName) {
	
	userName = $('#username-target').html();	
			
	var updatedUserName = removeElementTag(userName, foundElements[clickedIndex].symbol, foundElements[clickedIndex].weight);	
	
	updatedUserName = updatedUserName.replace(" ","<br>");
	updatedUserName = decapitalize(updatedUserName);
		
	$('#username-target').html(updatedUserName);
	
}

// allows for dropping additional characters into a string
String.prototype.splice = function( idx, rem, s ) {
	
	return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
	
}

//search the user's name with the clicked element
var insertElementTag = function(userName, foundElement, atomicWeight) {
	
	userName = userName.replace("<br>"," ");
	
	var re = new RegExp(foundElement, 'ig');
	//var result = userName.match(re);
	
	while ((match = re.exec(userName)) != null) { // exec will create an array of all found instances of the clicked element
		
    	//console.log("match found at " + match.index + ", character before is '" + userName.charAt(match.index-1) + "'");
		//console.log(userName.substring(match.index-5, match.index));
		
		var emTag = new RegExp('<em>', 'i');
		
		// a new check here on the 5 characters previous to the found element. if we find an instance of the <em> tag we know we're inside an exisitng tag and need to not do anything
		if ( emTag.exec(userName.substring(match.index-5, match.index)) == null) { // (it's five characters not four to account for two letter elements)
			
			//console.log('no conflicts');
			//console.log('match: ' + match + ', length: ' + foundElement.length + ', index: ' + match.index + ', end index: ' + parseInt(match.index + match.length) );
			
			userName = userName.splice(match.index, foundElement.length, '<em>'+ match);
			userName = userName.splice(parseInt(match.index + foundElement.length + 4), 0, '<em>'+atomicWeight+'</em></em>'); // '4' is the length of '<em>'
			
		} 
		
	}
		
	//console.log(re.exec(userName));
		
	return userName;	
		
	//console.log(result);
	//return userName.replace(new RegExp('(' + foundElement + ')','ig'), '<em>$1<em>'+atomicWeight+'</em></em>');
		
}

// use a regular expression to remove any instance of the clicked element
var removeElementTag = function(userName, foundElement, atomicWeight) {
	
	userName = userName.replace("<br>"," ");
	
	var re = new RegExp(foundElement, 'ig');
	var result = userName.match(re);
	return userName.replace(new RegExp('(<em>'+foundElement+'<em>'+atomicWeight+'</em></em>)','ig'), foundElement);
	
}

// removes the contents of a person's name so they can enter a new one
var resetName = function() {
	
	userName = '';
	$('#results_container').hide();
	$('#results').html('');
	$('#elements-container').html('');
	$('#social-buttons').hide();
	
	
}

// suggests to the user what element is causing a problem if they click an element already inside a existing (clicked) element
var showElementConflict = function(foundElements, index, userName) {
	
	//foundElements[clickedIndex].symbol;
	//foundElements[clickedIndex].name;
	
	var foundElement = foundElements[index].symbol;
	var matchedElements = [];

	for (var i = 0; i < foundElements.length; i++) {
		
		if (i != index) {
			
			/* i would really like to know a better way of doing this! */
			var firstLetter = foundElement.charAt(0);
			var secondLetter = foundElement.charAt(1);
			var re;
			
			if (secondLetter === "") {
				re = new RegExp(firstLetter, 'ig');
			} else {
				re = new RegExp('(' + firstLetter + '|' + secondLetter + ')', 'ig');
			}

			var result = foundElements[i].symbol.match(re);
			
			//console.log(foundElement.charAt(0) + ' ' + foundElement.charAt(1));
						
			if (result != null) {
				
				matchedElements.push(foundElements[i].symbol+' '+'('+foundElements[i].name+')');
				
				//console.log('try unclicking ' + foundElements[i].symbol);
				
			} 
							
		}
		//console.log(foundElements[i].symbol);	
	}

	if (matchedElements.length == 1) {

		$('#warning-holder').html('<button type="button" class="btn btn-warning full-width clearer-warning" id="conflict">Try unclicking <strong>'+matchedElements[0]+'</strong></button>');
					
		setTimeout(function(){
			$("#conflict").fadeOut();
		},3000)
		
	} else if (matchedElements.length == 2) {
		
		$('#warning-holder').html('<button type="button" class="btn btn-warning full-width clearer-warning" id="conflict">Try unclicking <strong>'+matchedElements[0]+' or '+matchedElements[1]+'</strong></button>');
					
		setTimeout(function(){
			$("#conflict").fadeOut();
		},4000)
		
	} else {
		
		var matchedList = [];
		
		$.each(matchedElements, function(index, value) {
			matchedList.push(value);
		});
		
		var longMessage = '<button type="button" class="btn btn-warning full-width clearer-warning" id="conflict">Try unclicking: <strong>' + matchedList.join(" ") + '</strong></button>';
		
		$('#warning-holder').html(longMessage);
		
		setTimeout(function(){
			$("#conflict").fadeOut();
		},4000)
		
	}
	//console.log(foundElement)
		
	
}

// toggling elements in the user's name leaves weird capitalisation, and the font for username looks better all in lower case anyway
var decapitalize = function(userName) {
	userName = userName.toLowerCase();
	return userName;
}

// update the hidden input field with the html version of the user's name for the share page
var updateHiddenInputWithHTMLName = function(htmlName) {
	
	$.trim(htmlName);
	$('#html_name').val(htmlName);
	
}

var centerIt = function(el) {
    if (!el) {
    	return;
    }
		
    var moveIt = function () {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        el.css("position","absolute").css("left", ((winWidth / 2) - (el.width() / 2)) + "px").css("top", ((winHeight / 2) - (el.height() / 2)) + "px");
    }; 
    $(window).resize(moveIt);
    moveIt();
	
	el.fadeIn();
};

checkIfIOS();

$( document ).ready(function() {
	
	$( "#submit_name" ).submit(function( event ) {

		event.preventDefault();
		
		resetName();
		
		var userName = $('#name').val();
		//var userNames = userName.split(" ");
		
		userName = decapitalize(userName);
		
		var foundElements = findElementsInName(userName);
		outputElements(foundElements, userName);
		
		// put this here so that the hidden input field isn't empty
		updateHiddenInputWithHTMLName($('#username-target').html());
				
		$('.element').click(function() {
						
			// this variable checks to see if there's a change to the users' name if an element is clicked. 
			// if there's no change then the element clicked is already inside another (clicked) element and therefore the click is invalid
			var changeInUserName = $('#username-target').html();
								
			var index = $(this).parent().index();

			// this allows for toggling of clicked elements
			$(this).data('clicked',!$(this).data('clicked'));
	
			if ($(this).data('clicked'))  {
				
				$(this).addClass('selected');		
				showElementsInName(foundElements, index, userName);
				
				// if no change as mentioned above remove the 'clicked' data attribute
				if (changeInUserName == $('#username-target').html()) {
					$(this).removeClass( 'selected' );
					$(this).data('clicked',!$(this).data('clicked'));
					
					// show what might be causing the problem
					showElementConflict(foundElements, index, userName);
				}
					
			} else {
				
				$(this).removeClass( 'selected' );
				removeElementsInName(foundElements, index, userName);	
			}
			
			//event.stopPropagation();
			//namesWithElementsArray[index] = namesWithElementsArray[index].replace(/ /g,"<br />");
			
			updateHiddenInputWithHTMLName($('#username-target').html());

		});  
		
		//show an element by default
		$('.element').first().click();
		
	});

	centerIt($('#share-container'));
	
});