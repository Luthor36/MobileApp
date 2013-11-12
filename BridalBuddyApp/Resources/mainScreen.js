
var mainScreenWin = Titanium.UI.currentWindow;
//Create the view for the app or it doesn't display anything but the window
var mainView = Titanium.UI.createView();
var mainTopView = Titanium.UI.createView({
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

var mainTitle = Ti.UI.createLabel({
	text: 'Bridal Buddy',
	height: 46,
	color: 'white',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});
//Let's put up the logo
var logoImage = Titanium.UI.createImageView({
	image: 'Bridal Buddy Logo2.png',
	width: 200,
	top: 75,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});







//-------------------------------------------------LOGIN BUTTON----------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------


//Let's create a button for the app
var loginButton = Titanium.UI.createButton({
	title: 'Login',
	height: 45,
	width: 200,
	bottom: 225,
	color: 'white',
	backgroundColor: '#1589FF'
});

loginButton.addEventListener('click',function(e){
	mainScreenWin.close();
	toDoWin.open();
});


//-------------------------------------------------------TO DO SCREEN--------------------------------------------------------------------
//=======================================================================================================================================


var toDoWin = Ti.UI.createWindow({
	backgroundColor: 'white'
});
var toDoView = Titanium.UI.createView();

var toDoTopView = Titanium.UI.createView({
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
var toDoTitle = Ti.UI.createLabel({
	text: 'Login',
	height: 46,
	color: 'white',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});






























//Top Bar for main screen
toDoTopView.add(smallLogoImage);
toDoTopView.add(toDoTitle);

toDoWin.add(toDoTopView);
toDoWin.add(toDoView);







//------------------------------------------------------LOGIN SCREEN---------------------------------------------------------------------
//=======================================================================================================================================


//Figure out later --- Confusing
/*
//Add event listener - this will open the login window
loginButton.addEventListener('click',function(e){
	Ti.UI.loginWin.open();
});
*/

/*




var loginWin = Ti.UI.createWindow({
	backgroundColor: 'white'
});
var loginView = Titanium.UI.createView();

var loginTopView = Titanium.UI.createView({
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
var loginTitle = Ti.UI.createLabel({
	text: 'Login',
	height: 46,
	color: 'white',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

*/







//-------------------------------------------------------SIGN UP BUTTON--------------------------------------------------------------------


var signUpButton = Ti.UI.createButton({
	title: 'Sign Up',
	height: 45, 
	width: 200,
	bottom: 170,
	color: 'white',
	backgroundColor: '#1589FF'
});


signUpButton.addEventListener('click',function(e){
	mainScreenWin.close();
	signUpWin.open();
});



//------------------------------------------------SIGN UP SCREEN-------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------







var signUpWin = Ti.UI.createWindow({
	backgroundColor: 'white'
});
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
	height: 70,
	width: 250,
	top: 200,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var signUpEmail = Ti.UI.createTextField({
	color: '#3333333',
	hintText: 'Email',
	height: 70,
	width: 250,
	top: 300,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var signUpWedDate = Ti.UI.createTextField({
	color: '#3333333',
	hintText: 'Wedding Date',
	height: 70,
	width: 250,
	top: 400,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var personalInfoButton = Ti.UI.createButton({
	title: 'Submit',
	bottom: 200,
	width: 200,
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

signUpWin.add(signUpTopView);
signUpWin.add(signUpView);

//-----------------------------------------------------END OF SIGN UP PAGE------------------------------------------------
//========================================================================================================================







//Top Bar for main screen
mainTopView.add(smallLogoImage);
mainTopView.add(mainTitle);
//Let's add our image
mainView.add(logoImage);
//Add login button to view and view to window
mainView.add(loginButton);
//Add the "Sign Up" button to view

mainView.add(signUpButton);

mainScreenWin.add(mainTopView);
mainScreenWin.add(mainView);
