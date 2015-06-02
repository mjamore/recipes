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

Completed:
	√ only show 'Tags:' label on search results if tags exists on object