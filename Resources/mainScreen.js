
var Cloud = require('ti.cloud');

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
var toLoginButton = Titanium.UI.createButton({
	title: 'Login',
	height: 45,
	width: 200,
	bottom: 225,
	color: 'white',
	backgroundColor: '#1589FF'
});

toLoginButton.addEventListener('click',function(e){
	mainScreenWin.close();
	loginWin.open();
});
//-------------------------------------------------------DATABASE------------------------------------------------------------------------
//=======================================================================================================================================







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
/*
//Let's put up the title of the page
var toDoTitle = Ti.UI.createLabel({
	text: 'To Do List',
	height: 46,
	color: 'white',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});
*/




//-----------------------------------------------------------SQLite---------------------------------------------------------------------
//======================================================================================================================================

/*
//add a single variable to the global scope to which we may choose to
	//intentionally add items to
	var globals = {};
	
	//create a private scope to prevent further polluting the global object
	(function() {
		var AppTabGroup = require('ui/AppTabGroup').AppTabGroup,
			ListWindow = require('ui/ListWindow').ListWindow,
			AddWindow = require('ui/AddWindow').AddWindow;
		
		// Initialize local storage
		require('db').createDb();
		
		//create our global tab group	
		globals.tabs = new AppTabGroup(
			{
				title: 'To Do List',
				icon: 'images/KS_nav_ui.png',
				window: new ListWindow({
					title: 'To Do',
					backgroundColor: '#fff',
					navBarHidden: false,
					isDone: 0,
					activity: {
						onCreateOptionsMenu: function(e) {
							var menu = e.menu;
						    var menuItem = menu.add({ title: "Add Task" });
						    menuItem.setIcon("images/ic_menu_add.png");
						    menuItem.addEventListener("click", function(e) {
						        new AddWindow().open();
						    });
						}
					}
				})
			},
			{
				title: 'Done',
				icon: 'images/KS_nav_views.png',
				window: new ListWindow({
					title: 'Done',
					backgroundColor: '#fff',
					navBarHidden: false,
					isDone: 1
				})
			}
		);
		
		globals.tabs.open();
	})();
	
	
	
	*/
	
	
	
	
	
/*
var toDoList = Ti.UI.createTabGroup({editable: true});
	
var db = Ti.Database.install('bb.db', 'bbdatabase1');

var sql = db.execute("SELECT tasks FROM todo");

var data = [];

while(sql.isValidRow()) {
	
	
}
*/
/*
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

*/
toDoTopView.add(smallLogoImage);
//toDoTopView.add(toDoTitle);


toDoWin.add(toDoTopView);
toDoWin.add(toDoView);

//------------------------------------------------------------DATABASE-------------------------------------------------------------------------
//=============================================================================================================================================

/*var testSQLwin = Ti.UI.createWindow();

 

function writeName(){
//Name of table is todo
//Name of column is tasks


var db = Ti.Database.open('bbdatabase1');
db.execute("INSERT INTO todo (tasks) VALUES ('Save the date!')");

var sql = db.execute("SELECT tasks FROM todo");

var name = sql.fieldByName('tasks');

var test = alert(name);

db.close();
}



























//Top Bar for main screen







*/
//------------------------------------------------------LOGIN SCREEN---------------------------------------------------------------------
//=======================================================================================================================================


//Figure out later --- Confusing
/*
//Add event listener - this will open the login window
toLoginButton.addEventListener('click',function(e){
	Ti.UI.loginWin.open();
});
*/



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

var loginUser = Ti.UI.createTextField({
	color: 'black',
	hintText: 'Your username or email',
	height: 70,
	width: 250,
	top: 50,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT
});

loginWin.addEventListener("click", function(e){
	loginUser.blur();
});

var loginPassword = Ti.UI.createTextField({
	color: 'black',
	hintText: 'Your password',
	height: 70,
	width: 250,
	top: 100,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT
});

loginWin.addEventListener("click", function(e){
	loginPassword.blur();
});

var loginButton = Ti.UI.createButton({
	title: 'Login',
	height: 45,
	width: 200,
	bottom: 225,
	color: 'white',
	backgroundColor: '#1589FF'
});
//Login to the mobile app

loginButton.addEventListener("click", function(e){
	
Cloud.Users.login({
    login: loginUser.value,
    password: loginPassword.value
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
});

//Add top view
loginTopView.add(smallLogoImage);
loginTopView.add(loginTitle);

loginWin.add(loginTopView);
loginWin.add(loginView);


loginView.add(loginUser);
loginView.add(loginPassword);
loginView.add(loginButton);





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

var userName = Ti.UI.createTextField({
	color: 'black',
	hintText: 'Your username',
	height: 70,
	width: 250,
	top: 50,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT
});

var password = Ti.UI.createTextField({
	color: 'black',
	hintText: 'Your password',
	height: 70,
	width: 250,
	top: 100,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT
});

var passwordConfirm = Ti.UI.createTextField({
	color: 'black',
	hintText: 'Psst...its the same thing as above',
	height: 70,
	width: 250,
	top: 150,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT
});
var firstName = Ti.UI.createTextField({
	color: 'black',
	hintText: 'First Name',
	height: 70,
	width: 250,
	top: 200,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT
});

var lastName = Ti.UI.createTextField({
	color: 'black',
	hintText: 'Last Name',
	height: 70,
	width: 250,
	top: 250,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT
});

var email = Ti.UI.createTextField({
	color: 'black',
	hintText: 'Email',
	height: 70,
	width: 250,
	top: 300,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_EMAIL
});


signUpWin.addEventListener("click", function(e){
	firstName.blur();
});
signUpWin.addEventListener("click", function(e){
	lastName.blur();
});
signUpWin.addEventListener("click", function(e){
	email.blur();
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


personalInfoButton.addEventListener('click',function(e){

Cloud.Users.create({
	username: userName.value,
	password: password.value,
	password_confirmation: passwordConfirm.value,
    email: email.value,
    first_name: firstName.value,
    last_name: lastName.value,
    weddingDate: weddingDate.value
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
});


//Top Bar for main screen
signUpTopView.add(smallLogoImage);
signUpTopView.add(signUpTitle);

//Add the text fields to the view
signUpView.add(userName);
signUpView.add(password);
signUpView.add(passwordConfirm);
signUpView.add(firstName);
signUpView.add(lastName);

signUpView.add(email);
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
mainView.add(toLoginButton);
//Add the "Sign Up" button to view

mainView.add(signUpButton);

mainScreenWin.add(mainTopView);
mainScreenWin.add(mainView);
