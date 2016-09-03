   $(document).ready(function(){

  var question_number=1
  var selected;
  var points;

	$('.welcome button').click(function(){


    $('.welcome').fadeOut(500, function(){
      $('.welcome').hide(0 , function(){
         $('.question-box').show();
      });
     

    })
		

		

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


      $('.question-box').fadeOut(300, function(){

        $('.question-box').hide( 0, function(){

          $('.answer-evaluator button').show();

            $('.answer-evaluator').fadeIn(300,function(){

              $('.answer-evaluator').show();
               

            })
          
        });

      })


			

			

		


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

      


       		if( selected==correct){	

       			$('.answer-evaluator h1').text('CORRECT!').css('color','#009933');

       			points=10 ;
       			console.log( 'you have now :' + points + 'points');

       		     }

       			else if (selected==good ){ 

       				$('.answer-evaluator h1').text('You were close!').css('color','#60ea60');
       				points=5}

       				else if (selected==okay){
       					$('.answer-evaluator h1').text('Not quite').css('color','#ff9933')
       					points=3}

       					else {

       						$('.answer-evaluator h1').text('Sorry, wrong answer :( !').css('color','#ff4d4d')
       						points=0
       					}
       			 
       		
           $('.answer-evaluator h2').text('The right answer was: ')   
          $('.answer-evaluator h4').text(correct + '!')

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

									    	$('.result-box h2').text('Your total score was : '+ totalPoints );

                        //......GRading feature...///

                        var letter_grade;

                        if(totalPoints == 100 ){

                          letter_grade= 'A++'
                          $('.grade').css('color','#80d4ff')

                        } else if (
                          totalPoints >= 95){

                          letter_grade= 'A+'
                          $('.grade').css('color','#4dffdb')

                        }

                        else if (
                          totalPoints >= 90){

                          letter_grade= 'A-'
                         $('.grade').css('color','#00ff99')

                        }

                        else if (
                          totalPoints >= 85){

                          letter_grade= 'B+'
                         $('.grade').css('color','#00e673')

                        }

                        else if (
                          totalPoints >= 80){

                          letter_grade= 'B-'

                        $('.grade').css('color','#00b359')

                        }

                        else if (
                          totalPoints >= 75){

                          letter_grade= 'C+'

                         $('.grade').css('color','#bfff80')

                        }

                        else if (
                          totalPoints >= 70){

                          letter_grade= 'C-'

                         $('.grade').css('color','#ffff99')

                        }

                        else if (
                          totalPoints >= 65){

                          letter_grade= 'D+'

                         $('.grade').css('color','#ffcc66')

                        }

                        else if (
                          totalPoints >= 50){

                          letter_grade= 'D-'

                         $('.grade').css('color','#ff9966')

                        }

                        else if (
                          totalPoints >= 45){

                          letter_grade= 'F'

                         $('.grade').css('color','#999966')

                        }

                        else if (
                          totalPoints < 45){

                          letter_grade= 'F'

                         $('.grade').css('color','#999966')

                        }

                        $('.result-box p').text('Your Final Grade is :')
                        $('.grade').text(letter_grade)



									    	
    								}

    								$('.result-box button').click(function(){
    									location.reload();
    								})


    										   $('.point-counter h2').text('Total Points: '+ totalPoints)
    
       })

	
      })






