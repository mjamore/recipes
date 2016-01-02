# Family Recipes Application
This is a web application that will have all of our family recipes listed with pictures, ingredient lists, and cooking directions.


### To-Do:
	- Get Gulp set up to do other cool shit
		- Minify HTML - gulp-minify-html
		- Minify images
		- Run unit tests
		- Minify and concat. JS files
		- Autoprefixer
		- Setup gulp-notify - https://www.npmjs.com/package/gulp-notify

	- Switch Bootstrap over to Sass
	- Update model to read from MongoDB
	- Learn how to set different meta data for different page
	- create login system and move model to database - render data on page from db
	- Add ability to add new recipes and edit current recipes
	- Create new Mongo collections for category and tags
	- Add count of currently filtered/listed recipes
	- Make sure recipes are sorted alphabetically by category
	- Sort tag quick filters alphabetically
	- Limit category for new recipe entries to the categories that already exist in the database
	- Fix modal animation
	- Make stateful modal windows so each recipe with have a unique URL
	- Gulp doesn't appear to be concatonating CSS/JS into single file
	- Start serving the index.html from the dist directory.  Will need to have access to the views directory.


### Completed:
	√ Only show 'Tags:' label on search results if tags exists on object
	√ Remove comma after last word in search results - ingredients/tags
	√ Fix issue where clicking on modal background (.modal) does not change url
	√ Make category and tag filters dynamically generated from model
	√ Get 'X' added to Bootstrap modal window
	√ Render quick filter buttons based on data in the model
	√ Display owner on recipe card
	√ Split Sass into separate files
	√ Setup live reload


### Feature Requests:
	- Different users
		- Only the owner of a recipe can modify it
		- Each recipe name + owner will be unique (i.e. Brenda's baked maccaroni, Paul's baked maccaroni, Nancy's baked maccaroni, etc.)


### How to Run Application:
	- Option 1:
		- Run 'npm install'
		- Run 'gulp'

	- Option 2:
		- Add the following to /private/etc/apache2/extra/httpd-vhosts.conf:
			<VirtualHost *:80>
			    DocumentRoot "/Users/ddcmichaela/Sites/recipes"
			    ServerName localhost.mjamore.com.recipes
			</VirtualHost>
		- Add the following to /etc/hosts
			127.0.0.1      localhost.mjamore.com.recipes
		- Go to localhost.mjamore.com.recipes in a web browser