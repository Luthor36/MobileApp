
var Cloud = require('ti.cloud');

//Integrating Moment.js into the app

/*npm install moment;

var moment = require('moment');
moment().format();
*/

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

//-------------------------------------------------------SIGN UP BUTTON------------------------------------------------------------------
//=======================================================================================================================================
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


//-------------------------------------------------------DATABASE------------------------------------------------------------------------
//=======================================================================================================================================







//-------------------------------------------------------TO DO SCREEN--------------------------------------------------------------------
//=======================================================================================================================================

/*
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
//--------------------------------------------------------TO DO SCREEN----------------------------------------------------
//========================================================================================================================

//var toDoList = Ti.UI.createTabGroup();

var toDoTab1win = Ti.UI.createWindow({
	title: 'To Do',
	backgroundColor: 'white'
});

var viewTab1 = Ti.UI.createView({
	layout: 'vertical',
	backgroundColor: 'white'
});
/*
var toDoTab2win = Ti.UI.createWindow({
	title: 'Done',
	backgroundColor: 'white'
});

var viewTab2 = Ti.UI.createView({
	layout: 'vertical',
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
*/

//We need a function to create the custom objects
/*
function createTasks(task_name,task_description/*monthsTillDue*//*)
{*/
	var data = [
	
	//Tasks 9-16 months in advance
{title:'Start a wedding folder or binder', desc:'Begin leafing through bridal, lifestyle, fashion, gardening, design, and food magazines for inspiration', color: 'black'},
{title:'Work out your budget', desc:'Determine how much you have to spend, based on your families’ contributions and your own', color: 'black'},
{title:'Pick your wedding party', desc:'As soon as you’re engaged, people will start wondering who’s in', color: 'black'},
{title:'Start the guest list', desc:'Make a head count database to use throughout your planning process, with columns for contact info, RSVPs, gifts, and any other relevant information. (Want to keep costs low? It may be brutal, but the best way to do it is to reduce your guest list)', color: 'black'},
{title:'Reserve your date and venues', desc:'Decide whether to have separate locations for the ceremony and the reception, factoring in travel time between the two places', color: 'black'},
{title:'Book your officiant', desc:'Book your officiant', color: 'black'},
{title:'Research photographers', desc:'Keep their contact information in your binder', color: 'black'},
{title:'Research caterers', desc:'Keep their contact information in your binder', color: 'black'},
{title:'Research bands', desc:'Keep their contact information in your binder', color: 'black'},
{title:'Research florists', desc:'Keep their contact information in your binder', color: 'black'},
{title:'Throw an engagement party, if you wish', desc:'But remember that your invitees should be on your wedding guest list as well', color: 'black'},

//Tasks 8 months in advance
{title:'Hire the photographer/videographer', desc:'No need to talk specifics yet, but be sure that the people you hire are open to doing the shots that you want', color: 'black'},
{title:'Book the entertainment', desc:'Attend gigs of potential acts to see how they perform in front of audiences, then reserve your favorite', color: 'black'},
{title:'Meet caterers', desc:'If your wedding venue doesn’t offer its own catering service, look for one now and hire the service this month or early next', color: 'black'},
{title:'Purchase a dress', desc:'You’ll need to schedule time for at least three fittings. Veil shopping can be postponed for another two to three months', color: 'black'},
{title:'Reserve a block of hotel rooms for out-of-town guests', desc:'Pick three hotels at different price points close to the reception venue', color: 'black'},
{title:'Register', desc:'Sign up at a minimum of three retailers', color: 'black'},
{title:'Launch a wedding website', desc:'Create your personal page through a free provider such as weddingchannel.com. Note the date of the wedding, travel information, and accommodations. Then send the link to invitees.', color: 'black'},

//Tasks 7 months in advance
{title:'Select and purchase invitations', desc:'Hire a calligrapher, if desired. Addressing cards is time-consuming, so you need to budget accordingly.', color: 'black'},
{title:'Start planning a honeymoon', desc:'Make sure that your passports are up-to-date, and schedule doctors’ appointments for any shots you may need', color: 'black'},
{title:'Shop for bridesmaids’ dresses', desc:'Allow at least six months for the dresses to be ordered and sized', color: 'black'},
{title:'Meet with the officiant', desc:'Map out the ceremony and confirm that you have all the official documents for the wedding (these vary by country and religion).', color: 'black'},

//Tasks 6 months in advance
{title:'Send save-the-date cards', color: 'black'},
{title:'Reserve structural and electrical necessities', desc:'Book portable toilets for outdoor events, extra chairs if you need them, lighting components, and so on.', color: 'black'},
{title:'Book a florist', desc:'Florists can serve multiple clients on one day, which is why you can wait a little longer to engage one. Plus, at this point, you’ll be firm on what your wedding palette will be.', color: 'black'},
{title:'Arrange transportation', desc:'Consider limos, minibuses, trolleys, and town cars. (But know that low-to-the-ground limos can make entries and exits dicey if you’re wearing a fitted gown.)', color: 'black'},
{title:'Start composing a day-of timeline', desc:'Draw up a schedule of the event and slot in each component (the cake-cutting, the first dance).', color: 'black'},

//Tasks 5 months in advance
{title:'Book the rehearsal and rehearsal-dinner venues', desc:'Negotiate the cost and the menu. If you’re planning to host a day-after brunch for guests, book that place as well.', color: 'black'},
{title:'Check on the wedding invitations', desc:'Ask the stationer for samples of the finished invitations and revise them to suit your needs.', color: 'black'},
{title:'Select and order the cake', desc:'Some bakers require a long lead time. Attend several tastings before committing to any baker.', color: 'black'},
{title:'Send your guest list to the host of your shower', desc:'Provided you, ahem, know about the shower.', color: 'black'},

//Tasks 4 months in advance
{title:'Purchase wedding shoes and start dress fittings', desc:'Bring the shoes along to your first fitting so the tailor can choose the appropriate length for your gown.', color: 'black'},
{title:'Schedule hair and makeup artists', desc:'Make a few appointments with local experts to try them out. Snap a photo at each so you can compare results.', color: 'black'},
{title:'Choose your music', desc:'What should be playing when the wedding party is announced? During dinner? To kick off the dancing? Keep a running list of what you want—and do not want—played.', color: 'black'},

//Tasks 3 months in advance
{title:'Finalize the menu', desc:'You’ll want to wait until now to see what will be available, since food and flowers are affected by season.', color: 'black'},
{title:'Finalize the flowers', desc:'You’ll want to wait until now to see what will be available, since food and flowers are affected by season.', color: 'black'},
{title:'Order favors, if desired', desc:'Some safe bets: monogrammed cookies or a treat that represents your city or region. If you’re planning to have welcome baskets for out-of-town guests, plan those now too.', color: 'black'},
{title:'Make a list of the people giving toasts', desc:'Which loved ones would you like to have speak at the reception? Ask them now.', color: 'black'},
{title:'Finalize the readings', desc:'Determine what you would like to have read at the ceremony—and whom you wish to do the readings.', color: 'black'},
{title:'Purchase your undergarments', desc:'And schedule your second fitting.'},
{title:'Finalize the order of the ceremony and the reception'},
{title:'Print menu cards', desc:'No need to go to a printer, if that’s not in your budget: You can easily create these on your computer.', color: 'black'},
{title:'Purchase the rings', desc:'This will give you time for resizing and engraving.', color: 'black'},
{title:'Send your event schedule to the vendors', desc:'Giving them a first draft now allows ample time for tweaks and feedback.', color: 'black'},

//Tasks 2 months in advance
{title:'Touch base again with all the vendors', desc:'Make sure any questions you or they had on your first draft have been answered.', color: 'black'},
{title:'Meet with the photographer', desc:'Discuss specific shots, and walk through the locations to note spots that appeal to you.', color: 'black'},
{title:'Review the playlist with the band or deejay', desc:'Though you probably won’t be able to dictate every single song played, you should come prepared with a wish list.', color: 'black'},
{title:'Send out the invitations', desc:'The rule of thumb: Mail invitations six to eight weeks before the ceremony, setting the RSVP cutoff at three weeks after the postmark date.', color: 'black'},
{title:'Submit a newspaper wedding announcement', desc:'If you’re planning to include a photograph, check the publication’s website: Some have strict rules about how the photo should look.', color: 'black'},
{title:'Enjoy a bachelorette party', desc:'Arranging a night out with your girlfriends generally falls to the maid of honor. But if she hasn’t mentioned one to you by now, feel free to ask—for scheduling purposes, of course!—if a celebration is in the works.', color: 'black'},

//Tasks 1 month in advance
{title:'Enter RSVPs into your guest-list database', desc:'Phone people who have not yet responded', color: 'black'},
{title:'Get your marriage license', desc:'The process can take up to six days, but it’s good to give yourself some leeway. If you are changing your name, order several copies.', color: 'black'},
{title:'Mail the rehearsal-dinner invitations', color: 'black'},
{title:'Visit the dressmaker for (with luck!) your last dress fitting', desc:'For peace of mind, you may want to schedule a fitting the week of your wedding. You can always cancel the appointment if you try on the dress then and it fits perfectly.', color: 'black'},
{title:'Stock the bar', desc:'Now that you have a firm head count you can order accordingly.', color: 'black'},
{title:'Send out as many final payments as you can', color: 'black'},
{title:'Confirm times for hair and makeup and all vendors', color: 'black'},
{title:'E-mail and print directions for drivers of transport vehicles', desc:'This gives the chauffeurs ample time to navigate a route.', color: 'black'},
{title:'Assign seating', desc:'Draw out table shapes on a layout of the room to help plan place settings. Write the names of female guests on pink sticky notes and the names of male guests on blue sticky notes so you can move people about without resketching the entire setting.', color: 'black'},
{title:'Purchase bridesmaids’ gifts', desc:'You’ll present them at the rehearsal dinner.', color: 'black'},
{title:'Write vows, if necessary', color: 'black'},
{title:'Get your hair cut and colored, if desired', color: 'black'},

//Tasks the week of
{title:'Reconfirm arrival times with vendors', color: 'black'},
{title:'Delegate small wedding-day tasks', desc:'Choose someone to bustle your dress, someone to carry your things, someone to be in charge of gifts (especially the enveloped sort), someone to hand out tips, and someone to be the point person for each vendor.', color: 'black'},
{title:'Send a timeline to the bridal party', desc:'Include every member’s contact information, along with the point people you’ve asked to deal with the vendors, if problems arise.', color: 'black'},
{title:'Pick up your dress', desc:'Or make arrangements for a delivery.', color: 'black'},
{title:'Check in one last time with the photographer', desc:'Supply him or her with a list of moments you want captured on film.', color: 'black'},
{title:'Set aside checks for the vendors', desc:'And put tips in envelopes to be handed out at the event.', color: 'black'},
{title:'Book a spa treatment', desc:'Make an appontment for a manicure and a pedicure the day before the wedding. (You might want to get a stress-relieving massage, too.)', color: 'black'},
{title:'Send the final guest list to the caterer and all venues hosting your wedding-related events', desc:'Typically, companies close their lists 72 hours in advance.', color: 'black'},
{title:'Break in your shoes', color: 'black'},
{title:'Assemble and distribute the welcome baskets', color: 'black'},
{title:'Pack for your honeymoon', color: 'black'}


	];
	
var table = Ti.UI.createTableView({
	data: data
});

if(
table.addEventListener('click', function(e){
	var infoDetails = Ti.UI.createAlertDialog({
		title: e.rowData.title,
		message: e.rowData.desc
	});
	infoDetails.show();
	/*infoDetails.addEventListener('click', function(e){
		
	});*/
})
);


viewTab1.add(table);
/*Cloud.Objects.create({
    classname: 'tasks',
    fields: {
        taskName: task_name,
        taskDescription: task_description,
        taskStatus: 0
        //dueDate: weddingDateResult.subtract('months', monthsTillDue).diff()
    }
}, function (e) {
    if (e.success) {
        var task = e.tasks[0];
        alert('Success:\n' +
            'id: ' + task.id + '\n' +
            'Task: ' + task.taskName + '\n' +
            'Description: ' + task.taskDescription /*+ '\n' +
            'Days Left: ' + task.dueDate*//*);
            
            var taskLabel = Ti.UI.createLabel({
            	text: task.taskName.value
            });
            
            
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});*/

//};



/*
toDoList.addTab(toDo);
toDoList.addTab(doneToDo);
*/
/*
toDoTopView.add(smallLogoImage);
toDoTopView.add(toDoTitle);
*/

toDoTab1win.add(viewTab1);
//toDoTab2win.add(viewTab2);
/*
toDoWin.add(toDoTopView);
toDoWin.add(toDoView);
*/
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
        
        //alert('You successfully logged in!  Congratulations!');
        loginWin.close();
        toDoTab1win.open();
        
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
	width: 500,
	top: 50,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT
});

var password = Ti.UI.createTextField({
	color: 'black',
	hintText: 'Your password',
	height: 70,
	width: 500,
	top: 100,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT
});

var passwordConfirm = Ti.UI.createTextField({
	color: 'black',
	hintText: 'Psst...its the same thing as above',
	height: 70,
	width: 500,
	top: 150,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT
});
var firstName = Ti.UI.createTextField({
	color: 'black',
	hintText: 'First Name',
	height: 70,
	width: 500,
	top: 200,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT
});

var lastName = Ti.UI.createTextField({
	color: 'black',
	hintText: 'Last Name',
	height: 70,
	width: 500,
	top: 250,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT
});

var email = Ti.UI.createTextField({
	color: 'black',
	hintText: 'Email',
	height: 70,
	width: 500,
	top: 300,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_EMAIL
});

signUpWin.addEventListener("click", function(e){
	userName.blur();
});
signUpWin.addEventListener("click", function(e){
	password.blur();
});
signUpWin.addEventListener("click", function(e){
	passwordConfirm.blur();
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
	weddingDateResult.value = e.value;
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
       /* var user = e.users[0];
            signUpWin.close();
            loginWin.open();
            */
           toDoTab1win.open();
            
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






