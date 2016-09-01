   $(document).ready(function(){

  var question_number=1
  var selected;
  var points;

	$('.welcome button').click(function(){

		$('.welcome').hide();

		$('.question-box').show();

		if(question_number == 1) {
		current_question(question_1.question,question_1.choice_A,question_1.choice_B,question_1.choice_C,question_1.choice_D,question_1.choice_E);

	} 


	})




   	function current_question(question, choiceA, choiceB, choiceC , choiceD , choiceE){

	$('.question-box h1').text(question);
	$('.list-choice-a').text(choiceA);
	$('.list-choice-b').text(choiceB);
	$('.list-choice-c').text(choiceC);
	$('.list-choice-d').text(choiceD);
	$('.list-choice-e').text(choiceE);


       }

	
      

	$('.question-choice').click(function(){

		$('.question-choice').removeClass('selected')
		$(this).toggleClass('selected')

		$('.submit-button').show();

		 selected = $(this).find('li').text()

	})



     

		$('.submit-button').click(function(){



			event.preventDefault();



			$('.question-box').hide();

			$('.answer-evaluator').show();

			$('.answer-evaluator button').show();


       			if(question_number==1){
       				evaluator(question_1.choice_D,question_1.choice_E,question_1.choice_A,question_1.choice_C,question_1.choice_B,question_1.explanation)
				}
				if(question_number==2){
					evaluator(question_2.choice_E,question_2.choice_D,question_2.choice_C,question_2.choice_A,question_2.choice_B,question_2.explanation)
				}
				if(question_number==3){
						evaluator(question_3.choice_B,question_3.choice_A,question_3.choice_C,question_3.choice_D,question_3.choice_E,question_3.explanation)

				}
				if(question_number==4){
					   	evaluator(question_4.choice_A,question_4.choice_B,question_4.choice_D,question_4.choice_E,question_4.choice_C,question_4.explanation)

				}
				if(question_number==5){
					 	evaluator(question_5.choice_E,question_5.choice_A,question_5.choice_B,question_5.choice_D,question_5.choice_C,question_5.explanation)
				}
				if(question_number==6){
					
   						evaluator(question_6.choice_C,question_6.choice_B,question_6.choice_A,question_6.choice_D,question_6.choice_E,question_6.explanation)

				}
				if(question_number==7){
						evaluator(question_7.choice_C,question_7.choice_B,question_7.choice_A,question_7.choice_D,question_7.choice_E,question_7.explanation)
				
				}
				if(question_number==8){
					evaluator(question_8.choice_C,question_8.choice_B,question_8.choice_D,question_8.choice_A,question_8.choice_E,question_8.explanation)
				}
				if(question_number==9){
						evaluator(question_9.choice_A,question_9.choice_D,question_9.choice_E,question_9.choice_B,question_9.choice_C,question_9.explanation)
					
				}
				if(question_number==10){
						evaluator(question_10.choice_D,question_10.choice_C,question_10.choice_E,question_10.choice_D,question_10.choice_A,question_10.explanation)

					
				}
       	
       	console.log(selected)

       })

   


       function evaluator( correct, good, okay, notgood , wrong , explanation){

      


       		if(selected==correct){	

       			$('.answer-evaluator h1').text('Correct!');

       			points=10 ;
       			console.log( 'you have now :' + points + 'points');

       		     }

       			else if (selected==good ){ 

       				$('.answer-evaluator h1').text('You were close!');
       				points=5}

       				else if (selected==okay){
       					$('.answer-evaluator h1').text('Not quite')
       					points=3}

       					else {

       						$('.answer-evaluator h1').text('Sorry, wrong answer :( !')
       						points=0
       					}
       			 
       		

          $('.answer-evaluator h2').text('The Right Answer was:'+correct+ '!')

          $('.answer-evaluator p').text(explanation)


          $('.answer-evaluator h3').text('You got: '+ points +' points!')

          pointArray.push(points)

       }

				var pointArray=[]
        
		

       $('.answer-evaluator button').click(function(){

         $('.submit-button').hide();
		     
			var totalPoints = pointArray.reduce(function(a, b) { return a + b; }, 0);

			console.log(totalPoints)
    

       	$('.answer-evaluator').hide();

    	$('.question-box').show();

    	question_number+=1

    	console.log(question_number)

    	if(question_number==2){
    			$('.question-choice').removeClass('selected')
    		current_question(question_2.question,question_2.choice_A,question_2.choice_B,question_2.choice_C,question_2.choice_D,question_2.choice_E);

    	}

    	else if (question_number == 3) {
    		$('.question-choice').removeClass('selected')
    	current_question(question_3.question,question_3.choice_A,question_3.choice_B,question_3.choice_C,question_3.choice_D,question_3.choice_E);
    }
    		else if (question_number == 4) {
    			$('.question-choice').removeClass('selected')
    			current_question(question_4.question,question_4.choice_A,question_4.choice_B,question_4.choice_C,question_4.choice_D,question_4.choice_E)
    		}
    			else if (question_number == 5) {
    				$('.question-choice').removeClass('selected')
    				current_question(question_5.question,question_5.choice_A,question_5.choice_B,question_5.choice_C,question_5.choice_D,question_5.choice_E)
    			}
    				else if (question_number == 6) {
    					$('.question-choice').removeClass('selected')
    					current_question(question_6.question,question_6.choice_A,question_6.choice_B,question_6.choice_C,question_6.choice_D,question_6.choice_E)
    				}
    					else if (question_number == 7) {
    						$('.question-choice').removeClass('selected')
    						current_question(question_7.question,question_7.choice_A,question_7.choice_B,question_7.choice_C,question_7.choice_D,question_7.choice_E)
    					}
    						else if (question_number == 8) {
    							$('.question-choice').removeClass('selected')
    							current_question(question_8.question,question_8.choice_A,question_8.choice_B,question_8.choice_C,question_8.choice_D,question_8.choice_E)
    						}
    							else if (question_number == 9) {
    								$('.question-choice').removeClass('selected')
    								current_question(question_9.question,question_9.choice_A,question_9.choice_B,question_9.choice_C,question_9.choice_D,question_9.choice_E)
    							}
    								else if (question_number == 10) {
    									$('.question-choice').removeClass('selected')
    									current_question(question_10.question,question_10.choice_A,question_10.choice_B,question_10.choice_C,question_10.choice_D,question_10.choice_E)
    								}
    								else if (question_number == 11) {


									       	$('.question-box').hide();

									    	$('.result-box').show();

									    	$('.result-box button').show();

									    	$('.result-box h1').text('Congratulations! You finished this weird quiz!! ');
									    	$('.result-box h2').text('Your total score was :'+ totalPoints );
									    	
    								}

    								$('.result-box button').click(function(){
    									location.reload();
    								})


    										   $('.point-counter h2').text('Total Points: '+ totalPoints)
    
       })

	
      })






