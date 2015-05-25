(function() {
	$(function() {

		var $answers = $('.answers'),
			$overlay = $('.overlay'),
			$message = $overlay.find('.message h1');
		var INITIAL_MODEL_LENGTH = model.length;
		var totalCount = 0;
		var currentScore = 0;

		$('.total-amendments').text(INITIAL_MODEL_LENGTH);

		/*
		This will choose a random amendment from the model array. Call once per question.
		Returns an amendment object that consists of 'num', 'roman_num', and 'description'.
		*/
		var getRandomAmendment = function() {
			// get random number
			var randomNum = Math.floor(Math.random()*model.length);
			// get amendment object from model array
			var randomAmendment = model[randomNum];
			// remove amendment object from model array
			model.splice(randomNum, 1);

			return randomAmendment;
		}

		/*
		This will generate random numbers between 1 and 27. This function takes an integer, which is the number of random numbers you'd like returned.
		Returns an array with the number of random numbers requested.
		*/
		var getRandomAmendmentNumbers = function(howManyRandoms, questionModel) {
			var randomNumbers = [];

			var romanize = function(num) {
			    if (!+num)
			        return false;
			    var digits = String(+num).split(""),
			        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
			               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
			               "","I","II","III","IV","V","VI","VII","VIII","IX"],
			        roman = "",
			        i = 3;
			    while (i--)
			        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
			    return Array(+digits.join("") + 1).join("M") + roman;
			}

			// loop the number of times the user put in
			for(var i = 0; i < howManyRandoms; i++)
			{
				var number = 0;
				var validateRandomNum = function() {
					var number = getRandomNum1to27();
					if(number === 0 || number === questionModel.correct_num)
					{
						number = validateRandomNum();
					}
					for(var i = 0; i < randomNumbers.length; i++)
					{
						if( romanize(number) == randomNumbers[i] )
						{
							number = validateRandomNum();
						}
					}
					return number;
				}
				number = validateRandomNum();

				// push random number into array, as roman numberal
				randomNumbers.push(romanize(number));
			}

			return randomNumbers;
		}

		// generate random number between 1 and 27
		var getRandomNum1to27 = function() {
			return Math.floor(Math.random()*INITIAL_MODEL_LENGTH);
		}

		/*
		This will generate the correct answer. Call once per question
		Returns either 'A', 'B', 'C', or 'D'
		*/
		var getRandomCorrectLetter = function() {
			var randomNum = Math.floor(Math.random()*4);
			var letter = "";
			if(randomNum === 0) { letter = "A"; }
			else if (randomNum === 1) { letter = "B"; }
			else if (randomNum === 2) { letter = "C"; }
			else if (randomNum === 3) { letter = "D"; }
			return letter;
		}



		/*
		This will call the other helper functions to generate random questions.
		Returns a 'questionsModel' object with properties:
			- amendment_description
			- correct_letter
			- A
			- B
			- C
			- D
		*/
		var generateQuestion = function() {
			// init function for generating questions

			var setCorrectValue = function() {
				if(correctLetter === "A") { questionModel.A = amendmentObj.roman_num; }
				else if (correctLetter === "B") { questionModel.B = amendmentObj.roman_num; }
				else if (correctLetter === "C") { questionModel.C = amendmentObj.roman_num; }
				else if (correctLetter === "D") { questionModel.D = amendmentObj.roman_num; }
			}

			var questionModel = {
				"amendment_description" : "",
				"correct_letter": "",
				"correct_num": "",
				"correct_roman": "",
				"A": "",
				"B": "",
				"C": "",
				"D": ""
			}

			// Call once
			var amendmentObj = getRandomAmendment();
			questionModel.amendment_description = amendmentObj.description;
			questionModel.correct_num = amendmentObj.num;
			questionModel.correct_roman = amendmentObj.roman_num;

			// Call once
			var correctLetter = getRandomCorrectLetter();
			questionModel.correct_letter = correctLetter;

			setCorrectValue();

			var incorrectAnswers = getRandomAmendmentNumbers(3, questionModel);

			
			/*
			This will set the other 3 answers to random values
			*/
			var setOtherLetters = function(incorrectAnswers) {
				if( questionModel.A === "" )
				{
					questionModel.A = incorrectAnswers[incorrectAnswers.length - 1];
					incorrectAnswers.pop();
				}
				if( questionModel.B === "" )
				{
					questionModel.B = incorrectAnswers[incorrectAnswers.length - 1];
					incorrectAnswers.pop();
				}
				if( questionModel.C === "" )
				{
					questionModel.C = incorrectAnswers[incorrectAnswers.length - 1];
					incorrectAnswers.pop();
				}
				if( questionModel.D === "" )
				{
					questionModel.D = incorrectAnswers[incorrectAnswers.length - 1];
					incorrectAnswers.pop();
				}
			}
			setOtherLetters(incorrectAnswers);

			console.log(questionModel);
			return questionModel;
		}
		questionModel = generateQuestion();

		var renderQuestion = function(questionModel) {
			var $amendmentDescription = $('.amendment-description'),
				$a = $answers.find('.a span'),
				$b = $answers.find('.b span'),
				$c = $answers.find('.c span'),
				$d = $answers.find('.d span');

			$amendmentDescription.text(questionModel.amendment_description);
			$a.text(questionModel.A);
			$b.text(questionModel.B);
			$c.text(questionModel.C);
			$d.text(questionModel.D);

			totalCount++;
			$('.total-count').text(totalCount);
			$('.current-question').text(totalCount);
		}
		renderQuestion(questionModel);




		// Handle user answer selection logic
		/*
		* This function is called when a user selects an answer for each question
		*/
		var checkAnswer = function(value) {
			if( value === questionModel.correct_letter )
			{
				$message.removeClass('incorrect').addClass('correct').text('Correct!');
				currentScore++;
			}
			else {
				$message.removeClass('correct').addClass('incorrect').text('Incorrect!');
			}

			$overlay.fadeIn();
			setTimeout(function() {
				$overlay.fadeOut();

				console.log('totalCount: ' + totalCount);
				if(totalCount === INITIAL_MODEL_LENGTH)
				{
					// display end screen and restart button
					displayEndScreen();
				}

				setTimeout(function() {
					questionModel = generateQuestion();
					renderQuestion(questionModel);
					$('.current-score').text(currentScore);
				}, 500);
			}, 2000);
		}

		$answers.on('click', 'a', function() {
			var value = $(this).text().charAt(0);
			checkAnswer(value);
		});


		var displayEndScreen = function() {
			$overlay.fadeIn();
			$message.removeClass('correct').addClass('incorrect').text('Game Over!');
			$message.next().removeClass('hide');
		}
		
	});
})();