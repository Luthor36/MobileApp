var signUpWin = Ti.UI.currentWindow();
var signUpView = Titanium.UI.createView();

var signUpTopView = Titanium.UI.createView({
	backgroundColor: 'purple',
	top: 1,
	height: 50
});
//small logo for mainTopView
var smallLogoImage = Titanium.UI.createImageView({
	image: 'Bridal Buddy Logo2.png',
	height: 46,
	left: 20,
	imageAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});
//Let's put up the title of the page
var signUpTitle = Ti.UI.createLabel({
	text: 'Personal Info',
	height: 46,
	color: 'white',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

var signUpName = Ti.UI.createTextField({
	color: '#3333333',
	hintText: 'Name',
	height: 35,
	width: 250,
	top: 300,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var signUpEmail = Ti.UI.createTextField({
	color: '#3333333',
	hintText: 'Email (yourname@email.com)',
	height: 35,
	width: 250,
	top: 400,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var signUpWedDate = Ti.UI.createTextField({
	color: '#3333333',
	hintText: 'Wedding Date',
	height: 35,
	width: 250,
	top: 500,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var personalInfoButton = Ti.UI.createButton({
	title: 'Submit',
	bottom: 200,
	width: 100,
	height: 45,
	color: 'white',
	backgroundColor: '#1589FF'
});








//Needs LOTS of fixing
/*
personalInfoButton.addEventListener('click',function(e){
	
});
*/





//Top Bar for main screen
signUpTopView.add(smallLogoImage);
signUpTopView.add(signUpTitle);

//Add the text fields to the view
signUpView.add(signUpName);
signUpView.add(signUpEmail);
signUpView.add(signUpWedDate);

//Add the button
signUpView.add(personalInfoButton);

signUpWin.add(signUpView);
