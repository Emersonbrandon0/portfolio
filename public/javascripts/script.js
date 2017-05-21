$(document).ready(function(){
	$('#artMuseum').click(function(){
	   $('#modalImage').attr('src', 'img/background5.jpg');
	   $('#modalTitle').text('Art Museum Website');
	   $('#modalText').text('A website for an art museum. Materialize.css framework used to incorporate material design principles. ScrollReveal Javascript library was used to add the animate-on-scroll effects as well as the scroll-in animations. The website was an excercise in incorporating better UX into projects.');
	});	
	$('#synthesizerStore').click(function(){
	   $('#modalImage').attr('src', 'img/day6home.jpg');
	   $('#modalTitle').text('Synthesizer Store');
	   $('#modalText').text('A website for a synthesizer/drum machine store. Designed with a retro influence using duo-tone images, teletype fonts, and astronaut-esque lingo. Uses jQuery to provide interactivity to the site and make the website a cohesive experience instead of a collection of pages. ');
	});	
	$('#cosmicJazz').click(function(){
	   $('#modalImage').attr('src', 'img/day8home.jpg');
	   $('#modalTitle').text('Cosmic Jazz Website');
	   $('#modalText').text('A website that serves as an intro into cosmic jazz. jQuery animations and interactions for better UI. A CSS slide-out sidebar used for navigation around the homepage and to other pages. Users can come to the page for history and a sample of the music as well. Utilizes the Amplitude.js library for a music player. ');
	});	
	$('#clothingStore').click(function(){
	   $('#modalImage').attr('src', 'img/day4home.jpg');
	   $('#modalTitle').text('Clothing Store');
	   $('#modalText').text('A store-front for a boutique clothing store. Uses modals and CSS3 animations for better UX and more attractive design. Design is flat and minimal. Bootstrap grid used for responsive layout and grids to display photos. ');
	});	
	$('#photographer').click(function(){
	   $('#modalImage').attr('src', 'img/day5home.jpg');
	   $('#modalTitle').text('Photographer Portfolio');
	   $('#modalText').text('A portfolio for a photographer. Uses Masonry JavaScript library for responsive grid. Photo grid is used to display a sample of the photographer\'s work to potential clients. ');
	});	
	$('#blog').click(function(){
	   $('#modalImage').attr('src', 'img/day13home.jpg');
	   $('#modalTitle').text('Personal Blog');
	   $('#modalText').text('A Node.js/Express based blog that allows users to post blog posts and categorize the posts. Monk used to drive MongoDB database and multer allows users the ability to upload images from their computers to complement their post. ');
	});	
	$('#model').click(function(){
	   $('#modalImage').attr('src', 'img/day18home.jpg');
	   $('#modalTitle').text('Modeling Website');
	   $('#modalText').text('A modeling website for an agency to manage their models and potential clients to view the agency\'s talent. Parallax scrolling incorporated through Rellax.js library ');
	});	
	$('#recipeBook').click(function(){
	   $('#modalImage').attr('src', 'img/day25home.jpg');
	   $('#modalTitle').text('RecipBook');
	   $('#modalText').text('AngularJS based Recipe Book social network served on a Node.JS/Express server. The application will allow users to create recipes and store them as well as share recipes. Members will be able to see new recipes from old friends and "company pages" that provide recipes. ');
	});
	$('#chat').click(function(){
	   $('#modalImage').attr('src', 'img/day16home.jpg');
	   $('#modalTitle').text('Just Between Us Char');
	   $('#modalText').text('Simple chatroom utilizing Node.js and socket.io for communication between users. Future improvements include: multiple chatrooms, chatroom activity info, improved UI. Material design principles applied for better UI. ');
	});
});


