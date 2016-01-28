# Family Recipes Application
This is a web application that will have all of our family recipes listed with pictures, ingredient lists, and cooking directions.


### To-Do (first number is cost, second number is value - to help determine prioritization):
	- Update adding of new ingredients with autocomplete
	- Set default heights so layout isn't repainted (jumping) when new elements are added to DOM (i.e. Facebook promise is completed and "Add New Recipe button is added to DOM")
	- Redirect all pages to /login and only allow our family to view the recipes
	- Make sure these pages are not indexed by web crawlers
	- Add validation to addNewRecipeModal recipe name field on blur that verifies if the user already has a recipe with the same name

	- Update view to center title/image when less than 768px - 1 - 7
	- Update model to read from MongoDB - 3 - 9
	- Add login check so only authorized users (me, mom, Paul, Nancy) can perform CRUD operations - 3 - 8
	- Create new Mongo collections for category and tags - 2 - 7
	- Limit category for new recipe entries to the categories that already exist in the database - 3 - 6
	- Allow HTML inside of recipes inside of recipe directions or include an optional "external link" section for newly created recipes - 3 - 4
	- Add count of currently filtered/listed recipes - 2 - 4
	- Fix modal animation - 4 - 2
	- Get Gulp set up to do other cool shit - 3 - 1
		- Minify HTML - gulp-minify-html
		- Minify images
		- Run unit tests
		- Minify and concat. JS files
		- Autoprefixer
		- Setup gulp-notify - https://www.npmjs.com/package/gulp-notify
	- Switch Bootstrap over to Sass - 1 - 1

	Unsure (depending on whether recipes should be viewable to public):
		- Make stateful modal windows so each recipe with have a unique URL - 5 - 
		- Learn how to set different meta data for different page - 2


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
	√ Make sure recipes are sorted alphabetically by category
	√ Sort tag quick filters alphabetically
	√ When filtering the recipeSearchResults, the index is changing, so the modal shows the wrong recipe.  Additionally, the sorting is causing the same issue.
	√ Different users
		√ Only the owner of a recipe can modify it
	√ create login system
	√ Add ability to add new recipes and edit current recipes
	√ Get editRecipeModal to load tags from model with autocomplete functionality
	√ Update addNewRecipeModal and editRecipeModal to display ingredients properly (ingredient, quantity, measure, preparation) with ability to click "plus button" to add additional ingredients



### Bugs:
	- When using quick filters, make the filter only apply to the category/tag.  Right now it filters by all text within the recipe.
	- Gulp doesn't appear to be concatonating CSS/JS into single file
	- Start serving the index.html from the dist directory.  Will need to have access to the views directory.
	- Edit menu is not setting the 'selected' attribute on the category of the selected recipe.


### Feature Requests:
	√ Different users
		√ Only the owner of a recipe can modify it
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