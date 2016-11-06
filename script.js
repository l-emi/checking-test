window.onload = function() {

var questionArea = document.getElementsByClassName('questions')[0],
    answerArea = document.getElementsByClassName('answers')[0],
    checker = document.getElementsByClassName('checker')[0],
    current = 0,

    allQuestions = {
        '68470': ['56503', '68470', '94921', '26557', '53697', 1],
        '53543': ['26188', '57800', '19059', '53543', '89513', 3],
        '61321': ['91980', '72060', '42490', '79767', '61321', 4],
        '62422': ['85033', '83805', '94155', '47686', '62422', 4],
        '56019': ['60207', '27252', '99346', '56019', '93583', 3],
        '56949': ['66657', '56949', '27583', '32273', '50296', 1],
        '46535': ['91365', '19033', '76314', '46535', '64427', 3],
        '86061': ['84787', '96852', '39163', '86061', '61298', 3],
        '11025': ['79853', '11025', '58294', '17317', '76648', 1],
        '17193': ['17193', '41824', '21216', '59215', '23408', 0],
        '80242': ['71450', '69003', '98196', '80242', '73347', 3],
        '39413': ['45541', '48678', '39413', '15702', '86331', 2],
        '31612': ['31612', '32593', '27942', '26310', '67882', 0],
        '31970': ['31970', '50236', '24219', '55119', '86256', 0],
        '88914': ['43597', '36662', '57222', '64248', '88914', 4],
        '90110': ['87919', '90110', '37104', '50433', '58542', 1],
        '38506': ['61822', '52154', '38506', '51407', '57796', 2],
        '45172': ['82656', '44256', '14658', '45172', '32444', 3],
        '29140': ['32498', '51446', '29140', '96267', '89085', 2],
        '65047': ['65047', '12682', '32786', '72243', '35050', 0],
        '58263': ['26023', '95724', '34447', '58263', '69850', 3],
        '11729': ['41813', '31388', '61664', '36628', '11729', 4],
        '71523': ['59776', '64887', '13242', '80409', '71523', 4],
        '81749': ['13708', '34095', '81749', '20227', '36391', 2],
        '28332': ['28332', '15403', '83170', '88621', '26516', 0],
        '82183': ['70418', '82183', '56554', '92106', '31609', 1],
        '33679': ['15979', '22758', '47974', '33679', '59429', 3],
        '96330': ['98999', '82275', '96330', '31382', '17529', 2],
        '53664': ['10216', '44230', '53664', '97091', '37198', 2],
        '82868': ['12959', '80295', '10583', '82868', '43721', 3],
        '29463': ['29463', '13062', '64789', '27479', '74341', 0],
        '45362': ['45362', '61689', '83686', '15573', '13005', 0],
        '67481': ['26056', '67481', '66045', '65515', '41788', 1],
        '61035': ['80580', '31987', '61035', '34711', '63652', 2],
        '23154': ['52586', '87027', '21458', '23154', '84633', 3],
        '35693': ['35693', '41501', '83107', '55519', '68524', 0],
        '28349': ['58907', '28349', '85855', '92265', '72429', 1],
        '89578': ['42314', '15732', '29144', '19268', '89578', 4],
        '18070': ['98565', '23801', '91892', '18070', '11779', 3],
        '89661': ['24126', '75050', '89661', '49572', '22798', 2],
        '26475': ['22699', '50561', '26475', '20462', '94841', 2],
        '89751': ['79835', '25323', '26904', '80323', '89751', 4],
        '33030': ['61446', '48027', '14978', '33030', '81009', 3],
        '68721': ['52106', '68721', '29006', '53329', '55959', 1],
        '49463': ['59606', '59266', '92920', '49463', '88982', 3],
        '66617': ['20589', '66617', '95283', '76315', '49899', 1],
        '71802': ['54399', '32615', '36688', '71802', '90499', 3],
        '99623': ['75093', '78027', '14882', '99623', '86040', 3],
        '47973': ['25074', '71401', '48896', '47973', '30215', 3],
        '22666': ['89070', '45594', '78406', '75475', '22666', 4] 
    };


    function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Done!';
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
  function addChecker(bool) {
  // This function adds a div element to the page
  // Used to see if it was correct or false
  
    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }
  
  loadQuestion(current);
  loadAnswers(current);

};