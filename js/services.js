recipesApp.service('recipesService', ['$http', '$q', function($http, $q) {
	var deferred = $q.defer();
	$http.get('http://mjamore.com:8000/api/recipes').then(function(response) {
		deferred.resolve(response);
	}, function(error) {
		console.log(error);
	});

	this.getRecipes = function() {
		return deferred.promise;

		// return [
		// 	{
		// 		"name": "Aunt Rosalie's Bread Pudding",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Desserts",
		// 		"tags": ["favorites","Easy"],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Bread",
		// 				"quantity": "4",
		// 				"measure": "cups",
		// 				"preparation": "cubed"
		// 			},
		// 			{
		// 				"ingredient": "Raisins",
		// 				"quantity": "0.5",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Cinnamon",
		// 				"quantity": "1",
		// 				"measure": "teaspoon",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Salt",
		// 				"quantity": "0.25",
		// 				"measure": "teaspoon",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Vanilla (extract)",
		// 				"quantity": "1",
		// 				"measure": "teaspoon",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Eggs",
		// 				"quantity": "2",
		// 				"measure": "large",
		// 				"preparation": "beaten"
		// 			},
		// 			{
		// 				"ingredient": "Milk",
		// 				"quantity": "2",
		// 				"measure": "cups",
		// 				"preparation": "scalded"
		// 			},
		// 			{
		// 				"ingredient": "Butter",
		// 				"quantity": "0.25",
		// 				"measure": "cup",
		// 				"preparation": "melted"
		// 			},
		// 			{
		// 				"ingredient": "Sugar (white)",
		// 				"quantity": "0.5",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			}
		// 		],
		// 		"directions": "Set oven to 350 degrees. Combine all ingredients. Place into buttered pan and bake for 35 minutes. <a href=\"http://www.youtube.com\">YouTube</a>",
		// 		"images": ["http://www.gannett-cdn.com/-mm-/b075220f3ec7b17175d5f1983afa7784cfb8c8c2/c=137-0-685-548&r=x203&c=200x200/local/-/media/StCloud/2015/02/24/B9316321475Z.1_20150224131207_000_G27A0OCTJ.1-0.jpg"]
		// 	},
		// 	{
		// 		"name": "Cheesy Corn on the Cob",
		// 		"author": "Michael Amore",
		// 		"category": "Side Dishes",
		// 		"tags": ["Easy"],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "20 minutes",
		// 			"total_time": "30 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Mayonnaise",
		// 				"quantity": "0.5",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Corn",
		// 				"quantity": "5",
		// 				"measure": "ears",
		// 				"preparation": "cleaned, shucked"
		// 			},
		// 			{
		// 				"ingredient": "Parmesan Cheese",
		// 				"quantity": "1",
		// 				"measure": "cup",
		// 				"preparation": "grated"
		// 			},
		// 			{
		// 				"ingredient": "Salt",
		// 				"quantity": "1",
		// 				"measure": "teaspoon",
		// 				"preparation": "course"
		// 			},
		// 			{
		// 				"ingredient": "Pepper",
		// 				"quantity": "1",
		// 				"measure": "teaspoon",
		// 				"preparation": "course"
		// 			}
		// 		],
		// 		"directions": "Combine cheese, salt, and pepper in a shallow dish. Brush a thin layer of mayonnaise on the corn. Roll the corn in the cheese mixture. Wrap each in aluminium foil. Grill 10 - 20 minutes until tender.",
		// 		"images": ["https://s-media-cache-ak0.pinimg.com/236x/1a/4c/0d/1a4c0db03785652481664c9e7d4acfbf.jpg"]
		// 	},
		// 	{
		// 		"name": "Bacon Cheese Spread",
		// 		"author": "Paul Amore",
		// 		"category": "Appetizers",
		// 		"tags": [],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Loaf of Round Bread",
		// 				"quantity": "16",
		// 				"measure": "ounces",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Colby Cheese",
		// 				"quantity": "8",
		// 				"measure": "ounces",
		// 				"preparation": "shredded"
		// 			},
		// 			{
		// 				"ingredient": "Bacon",
		// 				"quantity": "12",
		// 				"measure": "slices",
		// 				"preparation": "cooked crisp and crumbled"
		// 			},
		// 			{
		// 				"ingredient": "Parmesan Cheese",
		// 				"quantity": "1",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Mayonnaise",
		// 				"quantity": "1",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Onion",
		// 				"quantity": "1",
		// 				"measure": "small",
		// 				"preparation": "chopped fine"
		// 			},
		// 			{
		// 				"ingredient": "Garlic",
		// 				"quantity": "1",
		// 				"measure": "clove",
		// 				"preparation": "minced"
		// 			}
		// 		],
		// 		"directions": "Cut lengthwise, slice from top of loaf, remove center, leaving 1” thick shell.  Cut removed bread into bite size pieces, set aside.  Mix remaining ingredients in small bowl.  Spoon into bread shell.  Cover shell with top of bread, place on cookie sheet.  Bake at 350º for 1 hour.  Serve with bread pieces and crackers. To reheat, microwave with top on 1-2 minutes on high, stir once.",
		// 		"images": ["https://qph.is.quoracdn.net/main-thumb-t-11707-200-gBkp8dfotq6nhO8tNBEvIa7J57vfzvBo.jpeg"]
		// 	},
		// 	{
		// 		"name": "Bacon Crisps",
		// 		"author": "Nancy Lascala Milford",
		// 		"category": "Appetizers",
		// 		"tags": [],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Parmesan Cheese",
		// 				"quantity": "0.5",
		// 				"measure": "cups",
		// 				"preparation": "grated"
		// 			},
		// 			{
		// 				"ingredient": "Ritz crackers",
		// 				"quantity": "1",
		// 				"measure": "sleeve",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Bacon",
		// 				"quantity": "1",
		// 				"measure": "pound",
		// 				"preparation": "sliced, cut in half"
		// 			}
		// 		],
		// 		"directions": "Preheat oven to 250º.  Place one teaspoon of cheese on each cracker and wrap tightly with a half strip of bacon.  Placed the wrapped crackers on a baking sheet sprayed with non-stick cooking spray and bake for 2 hours or until the bacon is done.  Drain on paper towels.  Serve hot or at room temperature.",
		// 		"images": ["https://s-media-cache-ak0.pinimg.com/236x/42/57/1a/42571ac6876dff446af283466bf885b4.jpg"]
		// 	},
		// 	{
		// 		"name": "Bacon Swirls",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Appetizers",
		// 		"tags": [],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Crescent Rolls",
		// 				"quantity": "8",
		// 				"measure": "ounces",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Onion",
		// 				"quantity": "2",
		// 				"measure": "tablespoons",
		// 				"preparation": "minced"
		// 			},
		// 			{
		// 				"ingredient": "Cream Cheese",
		// 				"quantity": "3",
		// 				"measure": "ounces",
		// 				"preparation": "softened"
		// 			},
		// 			{
		// 				"ingredient": "Milk",
		// 				"quantity": "1",
		// 				"measure": "teaspoon",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Bacon",
		// 				"quantity": "5",
		// 				"measure": "slices",
		// 				"preparation": "cooked and crumbled"
		// 			},
		// 			{
		// 				"ingredient": "Parmesan Cheese",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": "grated"
		// 			}
		// 		],
		// 		"directions": "Unroll crescent roll dough and separate into 4 rectangles; press perforations to seal.  Stir together cream cheese, bacon, onion, and milk until blended.  Spread mixture evenly on rectangles.  Roll up, jellyroll fashion, starting at a long side and press edges to seal.  Cut each roll into 8 slices and place on un-greased baking sheets.  Sprinkle swirls with parmesan cheese.  Bake at 375º for 12-15 minutes or until lightly browned.",
		// 		"images": ["http://ghk.h-cdn.co/assets/cm/15/11/54fded9d1fabe-sauteed-pear-salad-de.jpg"]
		// 	},
		// 	{
		// 		"name": "Brown Sugar Brie with Pecans",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Appetizers",
		// 		"tags": [],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Cream",
		// 				"quantity": "0.5",
		// 				"measure": "cups",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Light Brown Sugar",
		// 				"quantity": "1.25",
		// 				"measure": "cups",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Pecans",
		// 				"quantity": "1.25",
		// 				"measure": "cups",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Puff Pastry",
		// 				"quantity": "1",
		// 				"measure": "sheet",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Butter",
		// 				"quantity": "0.5",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Light Corn Syrup",
		// 				"quantity": "2",
		// 				"measure": "tablespoons",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Bourbon",
		// 				"quantity": "1",
		// 				"measure": "tablespoon",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Brie Cheese",
		// 				"quantity": "10 - 14",
		// 				"measure": "ounces",
		// 				"preparation": ""
		// 			}
		// 		],
		// 		"directions": "Preheat oven to 400 degrees.  Combine cream, butter, 1 cup of brown sugar, and corn syrup in a medium sauce pan over medium heat.   Bring to a boil whisking occasionally.  Cover and boil for one minute.  Uncover and continue to boil for 3 minutes without stirring.  Mix in one cup of chopped pecans.  Cool and then spoon around warm brie.  Stir together ¼ cup of brown sugar, ¼ cup of chopped pecans, and bourbon.  Place puff pastry sheet on a lightly floured surface and roll out fold lines.  Spread pecan mixture in a 5” circle in the center of the pastry.  Place brie on top of pecan mixture.  Wrap pastry around brie, pinching to seal tightly and place on an aluminum foil lined baking sheet.  Bake for 25 minutes or until lightly brown.  Cool for 10 minutes.",
		// 		"images": ["http://www.goffphotography.com/images/food/food_turlockcountryclub_sm.jpg"]
		// 	},
		// 	{
		// 		"name": "Bruschetta with Gorgonzola Cheese and Honey",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Appetizers",
		// 		"tags": [],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Baguette Bread",
		// 				"quantity": "36",
		// 				"measure": "slices",
		// 				"preparation": "sliced 1/4 inch thick"
		// 			},
		// 			{
		// 				"ingredient": "Olive Oil",
		// 				"quantity": "0.25",
		// 				"measure": "cups",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Gorgonzola Cheese",
		// 				"quantity": "8",
		// 				"measure": "ounces",
		// 				"preparation": "sliced"
		// 			},
		// 			{
		// 				"ingredient": "Pecan Halves",
		// 				"quantity": "36",
		// 				"measure": "",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Sugar (white)",
		// 				"quantity": "0.25",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Honey",
		// 				"quantity": "6",
		// 				"measure": "tablespoons",
		// 				"preparation": ""
		// 			}
		// 		],
		// 		"directions": "Preheat oven to 375 degrees.  Brush bread slices with olive oil.  Bake 10-12 minutes until golden brown and crisp.  Arrange the cheese on the bread. Place a pecan half on top of each slice of cheese.  Bake until the cheese is melted, approximately 3 minutes.  Drizzle the bread with honey.  Place on a serving platter and serve immediately.",
		// 		"images": ["http://decorchick.com/wp-content/uploads/2015/11/Udon-Noodles-Cooked-200x200.jpg"]
		// 	},
		// 	{
		// 		"name": "Bruschetta with Tomatoes and Basil",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Appetizers",
		// 		"tags": [],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Ripe Tomatoes",
		// 				"quantity": "1",
		// 				"measure": "cup",
		// 				"preparation": "diced"
		// 			},
		// 			{
		// 				"ingredient": "Olive Oil",
		// 				"quantity": "2",
		// 				"measure": "teaspoons",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Basil Leaves",
		// 				"quantity": "2",
		// 				"measure": "tablespoons",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Baguette Bread",
		// 				"quantity": "1",
		// 				"measure": "",
		// 				"preparation": "sliced and toasted"
		// 			},
		// 			{
		// 				"ingredient": "Salt",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Pepper",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Garlic Powder",
		// 				"quantity": "0.5",
		// 				"measure": "teaspoon",
		// 				"preparation": ""
		// 			}
		// 		],
		// 		"directions": "In a small bowl, combine the tomatoes, basil, olive oil, and garlic powder.  Mix well to combine.  Season with salt and pepper, to taste.  Spoon tomato mixture onto toasted bread slices and serve.",
		// 		"images": ["http://3.bp.blogspot.com/_uKyI89Tpv0g/THz25GG0WuI/AAAAAAAAACE/MrJ5RjTXxLs/s200/7199f1fa19e88f42_MF6512.JPG"]
		// 	},
		// 	{
		// 		"name": "Cheesy Baked Spinach and Artichoke Dip",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Appetizers",
		// 		"tags": [],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Frozen Spinach",
		// 				"quantity": "10",
		// 				"measure": "ounces",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Knorr Vegetable Soup Mix",
		// 				"quantity": "1",
		// 				"measure": "envelope",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Sour Cream",
		// 				"quantity": "1",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Mayonnaise",
		// 				"quantity": "1",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Parmesan Cheese",
		// 				"quantity": "0.25",
		// 				"measure": "cup",
		// 				"preparation": "grated"
		// 			},
		// 			{
		// 				"ingredient": "Monterrey Jack Cheese",
		// 				"quantity": "0.25",
		// 				"measure": "cups",
		// 				"preparation": "shredded"
		// 			},
		// 			{
		// 				"ingredient": "Artichoke Hearts",
		// 				"quantity": "14",
		// 				"measure": "ounces",
		// 				"preparation": "drained and chopped"
		// 			},
		// 			{
		// 				"ingredient": "Cayenne Pepper",
		// 				"quantity": "0.25",
		// 				"measure": "teaspoons",
		// 				"preparation": ""
		// 			}
		// 		],
		// 		"directions": "Preheat oven to 350 degrees.  Spray a one-quart casserole with non-stick cooking spray.  In a medium mixing bowl, combine all ingredients.  Place in baking dish and bake for 20 minutes until bubbly and hot.  Serve with club crackers or corn chips.",
		// 		"images": ["http://i0.wp.com/www.cookbetterthan.com/wp-content/uploads/2013/05/Finished-Dish-for-FB.jpg?resize=200%2C200"]
		// 	},
		// 	{
		// 		"name": "Artichoke Balls",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Appetizers",
		// 		"tags": [],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Olive Oil",
		// 				"quantity": "0.75",
		// 				"measure": "cups",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Eggs",
		// 				"quantity": "2",
		// 				"measure": "large",
		// 				"preparation": "well beaten"
		// 			},
		// 			{
		// 				"ingredient": "Garlic",
		// 				"quantity": "3",
		// 				"measure": "cloves",
		// 				"preparation": "minced"
		// 			},
		// 			{
		// 				"ingredient": "Seasoned Bread Crumbs",
		// 				"quantity": "1",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Artichoke Hearts",
		// 				"quantity": "9",
		// 				"measure": "ounces",
		// 				"preparation": "drained"
		// 			},
		// 			{
		// 				"ingredient": "Parmesan Cheese",
		// 				"quantity": "0.75",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Salt",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Pepper",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": ""
		// 			}
		// 		],
		// 		"directions": "Heat oil, add garlic and simmer.  Mash drained artichokes then add to oil and garlic.  Cook about 3 minutes.  Mix bread crumbs, cheese, and beaten eggs together with salt and pepper to taste.  Slowly add the oil, garlic, and artichokes to the cheese and egg mixture and mix thoroughly.  Roll into small balls.  Mix 1 cup bread crumbs and ½ cup parmesan.  Roll balls in mixture, place on cookie sheet.  Bake at 325 degrees for 10 minutes.",
		// 		"images": ["http://bombayoutdoors.com/wp-content/uploads/moroccan-food-lemon-pickle.jpg"]
		// 	},
		// 	{
		// 		"name": "Cheesy Chicken Empanadas",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Appetizers",
		// 		"tags": [],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Chicken",
		// 				"quantity": "1",
		// 				"measure": "cup",
		// 				"preparation": "cooked, chopped"
		// 			},
		// 			{
		// 				"ingredient": "Cream Cheese",
		// 				"quantity": "4",
		// 				"measure": "ounces",
		// 				"preparation": "softened"
		// 			},
		// 			{
		// 				"ingredient": "Colby/Jack Cheese",
		// 				"quantity": "4",
		// 				"measure": "ounces",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Salt",
		// 				"quantity": "0.5",
		// 				"measure": "teaspoon",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Pillsbury Pie Crust",
		// 				"quantity": "1",
		// 				"measure": "box",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Red Bell Pepper",
		// 				"quantity": "1",
		// 				"measure": "whole",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Jalapenos",
		// 				"quantity": "1",
		// 				"measure": "whole",
		// 				"preparation": "seeded and chopped"
		// 			},
		// 			{
		// 				"ingredient": "Cumin",
		// 				"quantity": "1",
		// 				"measure": "teaspoon",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Pepper",
		// 				"quantity": "1",
		// 				"measure": "teaspoon",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Water",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": ""
		// 			}
		// 		],
		// 		"directions": "Preheat oven to 375 degrees.  In a large bowl, combine the chicken, Colby and Monterrey jack cheeses, cream cheese, bell pepper, jalapeno, cumin, salt, and pepper. Remove the pie crusts and roll (on a lightly floured surface) each into a 15-inch circle. Using a 3-inch cookie cutter, cut out rounds. Re-roll dough as needed, making 15 – 20 rounds. Arrange one on a clean, flat surface. Lightly brush the edges of the crust with water. Place 1 heaping teaspoon of filling in the center of the round. Fold the dough over the filling, pressing the edges with a fork to seal. Repeat with remaining rounds. Bake for 15 – 20 minutes until golden brown.  Serve with queso. Empanadas can also be deep fried at 350 degrees for 3 – 5 minutes.",
		// 		"images": ["http://images.meredith.com/bhg/images/recipe/l_RU227103.jpg"]
		// 	},
		// 	{
		// 		"name": "Corn Dip",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Appetizers",
		// 		"tags": [],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Mexican Corn",
		// 				"quantity": "15",
		// 				"measure": "ounces",
		// 				"preparation": "drained"
		// 			},
		// 			{
		// 				"ingredient": "Green Chilies",
		// 				"quantity": "4",
		// 				"measure": "cans",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Green Onions",
		// 				"quantity": "8",
		// 				"measure": "whole",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Jalapenos",
		// 				"quantity": "8",
		// 				"measure": "whole",
		// 				"preparation": "seeded and chopped"
		// 			},
		// 			{
		// 				"ingredient": "Cheddar Cheese",
		// 				"quantity": "2",
		// 				"measure": "cups",
		// 				"preparation": "shredded"
		// 			},
		// 			{
		// 				"ingredient": "Red Bell Pepper",
		// 				"quantity": "1",
		// 				"measure": "whole",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Mayonnaise",
		// 				"quantity": "1",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Sour Cream",
		// 				"quantity": "4",
		// 				"measure": "ounces",
		// 				"preparation": ""
		// 			}
		// 		],
		// 		"directions": "Mix all ingredients in a medium sized bowl.  Refrigerate and allow flavors to meld, approximately 2 hours.  Serve with crackers and chips.",
		// 		"images": ["http://www.allaboutstalbans.com/media/directory/x964291_cosa,P20nostra,P20italian,P20restaurant,P20meal2,P20st,P20albans,P20200px.jpg.pagespeed.ic.JvnsITEfwD.jpg"]
		// 	},
		// 	{
		// 		"name": "Crab Cakes",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Appetizers",
		// 		"tags": [],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Vegetable Oil",
		// 				"quantity": "2",
		// 				"measure": "tablespoons",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Garlic",
		// 				"quantity": "8",
		// 				"measure": "cloves",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Parsley",
		// 				"quantity": "4",
		// 				"measure": "tablespoons",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Bread Crumbs",
		// 				"quantity": "0.5",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Parmesan Cheese",
		// 				"quantity": "0.75",
		// 				"measure": "cup",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Flour",
		// 				"quantity": "2",
		// 				"measure": "cups",
		// 				"preparation": "seasoned"
		// 			},
		// 			{
		// 				"ingredient": "Onion",
		// 				"quantity": "1",
		// 				"measure": "medium",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Lump Crab Meat",
		// 				"quantity": "1",
		// 				"measure": "pound",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Green Onions",
		// 				"quantity": "0.5",
		// 				"measure": "bunch",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Creole Mustard Mayonnaise",
		// 				"quantity": "2",
		// 				"measure": "tablespoons",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Eggs",
		// 				"quantity": "3",
		// 				"measure": "large",
		// 				"preparation": "slightly beaten"
		// 			},
		// 			{
		// 				"ingredient": "Vegetable Oil",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": "for frying"
		// 			}
		// 		],
		// 		"directions": "In two tablespoons of vegetable oil, sauté onion and garlic until tender.  Remove from heat and cool.  Add crabmeat, parsley, green onions, breadcrumbs, mustard, and parmesan.  Add just enough mayonnaise to bind the ingredients.  Shape into round cakes.  Dredge in seasoned flour, then beaten egg, and then seasoned breadcrumbs.  Fry until golden brown on both sides.  Drain well.",
		// 		"images": ["http://thegardeningcook.com/wp-content/uploads/2015/10/chicken-pot-pie-meal-200x200.jpg"]
		// 	},
		// 	{
		// 		"name": "Guacamole",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Appetizers",
		// 		"tags": [],
		// 		"time": {
		// 			"prep_time": "10 minutes",
		// 			"cook_time": "35 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Avacados",
		// 				"quantity": "4",
		// 				"measure": "whole",
		// 				"preparation": "ripe"
		// 			},
		// 			{
		// 				"ingredient": "Limes",
		// 				"quantity": "4",
		// 				"measure": "whole",
		// 				"preparation": "juiced"
		// 			},
		// 			{
		// 				"ingredient": "Garlic",
		// 				"quantity": "1",
		// 				"measure": "clove",
		// 				"preparation": "minced"
		// 			},
		// 			{
		// 				"ingredient": "Jalapenos",
		// 				"quantity": "2",
		// 				"measure": "whole",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Cilantro",
		// 				"quantity": "0.5",
		// 				"measure": "cup",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Olive Oil",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Salt",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Pepper",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": ""
		// 			}
		// 		],
		// 		"directions": "In two tablespoons of vegetable oil, sauté onion and garlic until tender.  Remove from heat and cool.  Add crabmeat, parsley, green onions, breadcrumbs, mustard, and parmesan.  Add just enough mayonnaise to bind the ingredients.  Shape into round cakes.  Dredge in seasoned flour, then beaten egg, and then seasoned breadcrumbs.  Fry until golden brown on both sides.  Drain well.",
		// 		"images": ["http://ghk.h-cdn.co/assets/cm/15/11/54fdfbbd89e0a-winter-vegetable-chowder-de.jpg"]
		// 	},
		// 	{
		// 		"name": "Chicken With Spring Macaroni",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Entrees",
		// 		"tags": ["favorites","Easy"],
		// 		"time": {
		// 			"prep_time": "5 minutes",
		// 			"cook_time": "40 minutes",
		// 			"total_time": "45 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Chicken",
		// 				"quantity": "1",
		// 				"measure": "whole cut up",
		// 				"preparation": "cleaned"
		// 			},
		// 			{
		// 				"ingredient": "Pasta (rotini)",
		// 				"quantity": "16",
		// 				"measure": "oz.",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Chicken Bouillion Cubes",
		// 				"quantity": "6",
		// 				"measure": "cubes",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Salt",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": "course"
		// 			},
		// 			{
		// 				"ingredient": "Pepper",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": "course"
		// 			},
		// 			{
		// 				"ingredient": "Garlic Powder",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": ""
		// 			}
		// 		],
		// 		"directions": "Set oven to 350 degrees. Season chicken pieces with salt, pepper, and garlic powder and place in oven safe dish. Add bouillion cubes and enough liquid to go half way up chicken. Bake until chicken is cooked (~30 minutes). While chicken is roasting, boil spring macaroni. Serve chicken with cooking liquid over pasta. Top with parmesan.",
		// 		"images": ["https://s-media-cache-ak0.pinimg.com/236x/aa/69/08/aa69089cb3a41b6b329b6510f64d7570.jpg"]
		// 	},
		// 	{
		// 		"name": "4 Cheese Stuffed Shells",
		// 		"author": "Brenda Amore Vickery",
		// 		"category": "Entrees",
		// 		"tags": ["italian","cheese!"],
		// 		"time": {
		// 			"prep_time": "20 minutes",
		// 			"cook_time": "20 minutes",
		// 			"total_time": "40 minutes"
		// 		},
		// 		"ingredients":  [
		// 			{
		// 				"ingredient": "Pasta (jumbo shells)",
		// 				"quantity": "16",
		// 				"measure": "ounces",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Mozzarella",
		// 				"quantity": "1",
		// 				"measure": "pound",
		// 				"preparation": "diced"
		// 			},
		// 			{
		// 				"ingredient": "Asiago Cheese",
		// 				"quantity": "1",
		// 				"measure": "cup",
		// 				"preparation": "shredded"
		// 			},
		// 			{
		// 				"ingredient": "Ricotta Cheese",
		// 				"quantity": "1.5",
		// 				"measure": "pounds",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Parmesan Cheese",
		// 				"quantity": "0.5",
		// 				"measure": "cup",
		// 				"preparation": "grated"
		// 			},
		// 			{
		// 				"ingredient": "Olive Oil",
		// 				"quantity": "2",
		// 				"measure": "tablespoons",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Onion",
		// 				"quantity": "1",
		// 				"measure": "small",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Garlic",
		// 				"quantity": "3",
		// 				"measure": "cloves",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Tomatoes",
		// 				"quantity": "28",
		// 				"measure": "ounces",
		// 				"preparation": "crushed"
		// 			},
		// 			{
		// 				"ingredient": "Salt",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Pepper",
		// 				"quantity": "",
		// 				"measure": "",
		// 				"preparation": ""
		// 			},
		// 			{
		// 				"ingredient": "Parsley (fresh)",
		// 				"quantity": "1/4",
		// 				"measure": "cup",
		// 				"preparation": "chopped"
		// 			},
		// 			{
		// 				"ingredient": "Basil (fresh)",
		// 				"quantity": "6",
		// 				"measure": "leaves",
		// 				"preparation": "cleaned"
		// 			}
		// 		],
		// 		"directions": "Preheat oven to 450 degrees. Bring large pot of water to a boil. Add salt and pasta and cook according to the package directions. Drain and cool. Combine riccotta, 1/2 the mozzarella, 1/2 the parmesan, and 1/2 of the asiago. Add the parsley and stir to combine. In a small saucepan over moderate heat, add oil, garlic, and onions. Saute for 5 minutes. Add tomatoes and season with salt and pepper. Simmer for 5 minutes and stir in basil leaves. Pour a little sauce into the bottom of a shallow bakin dish. Fill the shells with the cheese mixture and arrange them seam side down in the baking dish. Top the shells with the remaining sauce, mozzarella, and asiago cheese. Bake 6 - 8 minutes to melt cheese and bubble sauce.",
		// 		"images": ["https://americantrialattorneys.org/wp-content/uploads/2015/03/PCS4.jpg"]
		// 	}
		// ]
	}




	// Return Categories
	var getCategoriesDeferred = $q.defer();
	$http.get('http://mjamore.com:8000/api/categories').then(function(response) {
		getCategoriesDeferred.resolve(response);
	}, function(error) {
		console.log(error);
	});

	this.getCategories = function() {
		return getCategoriesDeferred.promise;
	}

	


	// Return Tags
	var getTagsDeferred = $q.defer();
	$http.get('http://mjamore.com:8000/api/tags').then(function(response) {
		getTagsDeferred.resolve(response);
	}, function(error) {
		console.log(error);
	});

	this.getTags = function() {
		return getTagsDeferred.promise;
	}




	// Return Ingredients
	this.getIngredients = function() {
		return [
			"Artichoke Hearts",
			"Asiago Cheese",
			"Avacados",
			"Bacon",
			"Baguette Bread",
			"Baking Powder",
			"Basil (fresh)",
			"Basil Leaves",
			"Bourbon",
			"Bread",
			"Bread Crumbs",
			"Brie Cheese",
			"Butter",
			"Cayenne Pepper",
			"Cheddar Cheese",
			"Chicken",
			"Chicken Bouillion Cubes",
			"Cilantro",
			"Cinnamon",
			"Colby Cheese",
			"Colby/Jack Cheese",
			"Corn",
			"Cream",
			"Cream Cheese",
			"Crescent Rolls",
			"Creole Mustard Mayonnaise",
			"Cumin",
			"Eggs",
			"Flour (cake)",
			"Flour",
			"Frozen Spinach",
			"Garlic",
			"Garlic Powder",
			"Garlic Salt",
			"Gorgonzola Cheese",
			"Green Chilies",
			"Green Onions",
			"Ground Beef",
			"Honey",
			"Jalapenos",
			"Knorr Vegetable Soup Mix",
			"Light Corn Syrup",
			"Light Brown Sugar",
			"Limes",
			"Loaf of Round Bread",
			"Lump Crab Meat",
			"Mayonnaise",
			"Mexican Corn",
			"Milk",
			"Monterrey Jack Cheese",
			"Mozzarella",
			"Olive Oil",
			"Onion",
			"Parmesan Cheese",
			"Parsley (fresh)",
			"Parsley",
			"Pasta (jumbo shells)",
			"Pasta (rotini)",
			"Pecans",
			"Pecan Halves",
			"Pepper",
			"Pillsbury Pie Crust",
			"Puff Pastry",
			"Raisins",
			"Red Bell Pepper",
			"Ricotta Cheese",
			"Ripe Tomatoes",
			"Salt",
			"Seasoned Bread Crumbs",
			"Sour Cream",
			"Sugar (brown)",
			"Sugar (white)",
			"Tomatoes",
			"Vanilla (bean)",
			"Vanilla (extract)",
			"Vegetable Oil",
			"Water"
		]
	}



	// Return Authorized Users
	this.getAuthorizedUsers = function() {
		return [
			"Michael Amore",
			"Brenda Amore Vickery",
			"Paul Amore",
			"Nancy Lascala Milford"
		]
	}
}]);