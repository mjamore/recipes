# recipes
This is a website that will have all of our family recipes listed with pictures, ingredient lists, and cooking directions.


To-Do:
	- get Gulp set up to do other cool shit
		- minify HTML - gulp-minify-html
		- minify images
		- setup live reload
		- run unit tests
		- minify and concat. CSS/JS files
		- autoprefixer

	- Get 'X' added to Bootstrap modal window
	- Remove comma after last word in search results - ingredients/tags
	- Switch Bootstrap over to Sass
	- update model to read from MongoDB
	- learn how to set different meta data for different page
	- render quick filter buttons based on data in the model - loop over getRecipesMetaData().categories
	- create login system and move model to database - render data on page from db
	- add ability to add new recipes and edit current recipes
	- Fix issue where clicking on modal background (.modal) does not change url 

Completed:
	√ only show 'Tags:' label on search results if tags exists on object

Feature Requests;
	- different users
		- only the owner of a recipe can modify it
		- display owner on recipe card
		- each recipe name + owner will be unique (i.e. Brenda's baked maccaroni, Paul's baked maccaroni, Nancy's baked maccaroni, etc.)


How to Run Application:
	- Add the following to /private/etc/apache2/extra/httpd-vhosts.conf:
		<VirtualHost *:80>
		    DocumentRoot "/Users/ddcmichaela/Sites/recipes"
		    ServerName localhost.mjamore.com.recipes
		</VirtualHost>
	- Add the following to /etc/hosts
		127.0.0.1      localhost.mjamore.com.recipes
	- Go to localhost.mjamore.com.recipes in a web browser