
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
	toDoList.open();
});


//-------------------------------------------------------TO DO SCREEN--------------------------------------------------------------------
//=======================================================================================================================================

/*
var toDoWin = Ti.UI.createWindow({
	backgroundColor: 'white'
});
var toDoView = Titanium.UI.createView();
*/

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
	text: 'To Do List',
	height: 46,
	color: 'white',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

var toDoList = Ti.UI.createTabGroup({
	top: 50
});

var toDoTab1win = Ti.UI.createWindow({
	title: 'To Do',
	backgroundColor: 'white'
});

var toDoTab2win = Ti.UI.createWindow({
	title: 'Done',
	backgroundColor: 'white'
});


var toDo = Ti.UI.createTab({
	title: 'To Do',
	icon: 'KS_nav_views.png',
	window: toDoTab1win
});

var doneToDo = Ti.UI.createTab({
	title: 'Done',
	icon: 'KS_nav_ui.png',
	window: toDoTab2win
});

toDoList.addTab(toDo);
toDoList.addTab(doneToDo);


toDoTopView.add(smallLogoImage);
toDoTopView.add(toDoTitle);

/*
toDoWin.add(toDoTopView);
toDoWin.add(toDoView);
*/
//------------------------------------------------------------DATABASE-------------------------------------------------------------------------
//=============================================================================================================================================

/*
 var db = Ti.Database.install('bb.db', 'bbdatabase');


function writeName(){
//Name of table is todo
//Name of column is tasks

var db = Ti.Database.open('bbdatabase');
db.execute("INSERT INTO todo (tasks) VALUES ('Save the date!')");

var sql = db.execute("SELECT tasks FROM todo");

var name = sql.fieldByName('tasks');

alert(name);

db.close();
}
*/


























//Top Bar for main screen








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

//The following are variables to get the current day, month and year

var currentTime = new Date();

var currentDay = currentTime.getDate();
var currentMonth = currentTime.getMonth();
var currentYear = currentTime.getFullYear();


//Now we set the max, min, and set values for our date picker
var minDate = new Date();

minDate.setFullYear(currentYear - 10);
minDate.setMonth(00);
minDate.setDate(01);

var maxDate = new Date();

maxDate.setFullYear(currentYear+10);
maxDate.setMonth(11);
maxDate.setDate(31);

var setValue = new Date();

setValue.setFullYear(currentYear);
setValue.setMonth(currentMonth); //Months = Actual months - 1 => Nov = 11-1 = 10
setValue.setDate(currentDay);


var weddingDateResult = Ti.UI.createLabel({
	text: "When is the big day?",
	width: "auto",
	textAlign: "center",
	top: 400
});

var weddingDate = Ti.UI.createPicker({
	selectionIndicator: true,
	minDate: minDate,
	maxDate: maxDate,
	value: setValue,
	type: Ti.UI.PICKER_TYPE_DATE,
	bottom: 150

});

weddingDate.addEventListener("change",function(e){
	weddingDateResult.text = e.value;
});

var personalInfoButton = Ti.UI.createButton({
	title: 'Submit',
	bottom: 50,
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
signUpView.add(weddingDateResult);
signUpView.add(weddingDate);

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
