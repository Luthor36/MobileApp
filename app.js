//Creating the window for the app
var mainWin = Titanium.UI.createWindow({
	//Make background color - in this case we will make it white
	backgroundColor: 'white'
});
var loginWin = Titanium.UI.createWindow({
	backgroundColor: 'white'
});
var signUpWin = Ti.UI.createWindow({
	backgroundColor: 'white'
});
//Create the view for the app or it doesn't display anything but the window
var mainView = Titanium.UI.createView();
var mainTopView = Titanium.UI.createView({
	backgroundColor: 'purple',
	top: 1,
	height: 50
});
var loginView = Titanium.UI.createView();

var signUpView = Titanium.UI.createView();

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
//Let's create a button for the app
var loginButton = Titanium.UI.createButton({
	title: 'Login',
	height: 45,
	width: 200,
	bottom: 225,
	color: 'white',
	backgroundColor: '#1589FF'
});
//Add event listener - this will open the login window
loginButton.addEventListener('click',function(e){
	loginWin.open();
});

var signUpButton = Ti.UI.createButton({
	title: 'Sign Up',
	height: 45,
	width: 200,
	bottom: 170,
	color: 'white',
	backgroundColor: '#1589FF'
});

signUpButton.addEventListener('click',function(e){
	signUpWin.open();
});
//Top Bar for main screen
mainTopView.add(smallLogoImage);
mainTopView.add(mainTitle);
//Let's add our image
mainView.add(logoImage);
//Add login button to view and view to window
mainView.add(loginButton);
//Add the "Sign Up" button to view

mainView.add(signUpButton);

loginWin.add(loginView);
signUpWin.add(signUpView);

mainWin.add(mainTopView);
mainWin.add(mainView);
//Open window
mainWin.open();
