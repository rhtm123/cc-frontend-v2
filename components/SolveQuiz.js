import React from "react";
import QuizResult from "./QuizResult";
import ContactModal from "./ContactModal";

function SolveQuiz({ quiz }) {
  const [questions, setQuestions] = React.useState([]);
  const [started, setStarted] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = React.useState({});
  const [options, setOptions] = React.useState([]);
  const [currentCount, setCurrentCount] = React.useState(0);
  const [optionLoading, setOptionLoading] = React.useState(false);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [rightCount, setRightCount] = React.useState(0);

  const [selected, setSelected] = React.useState();
  const [count, setCount] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState(null);

  // Timer state
  const [timer, setTimer] = React.useState(0); // Total time in seconds
  const [remainingTime, setRemainingTime] = React.useState(0); // Remaining time
  const [timerInterval, setTimerInterval] = React.useState(null); // Timer interval

  const handleSubmit = () => {
    addRight();
    checkRightCount();
    // console.log("Allowed to:", quiz.allowed_to); // Debugging line
    if (quiz && quiz.allowed_to === 2) {
      setIsModalOpen(true);
      stopTimer(); // Open modal if allowed_to is 2
    } else {
      // Logic to show results directly
      stopTimer();
      setShowAnswer(true);
    }
  };

  const handleModalSubmit = (details) => {
    console.log("User Details:", details); // Debugging line
    // Logic to handle user details

    setShowAnswer(true);
  };

  const startNow = () => {
    setStarted(true);
    if (quiz.time_required > 0) { // Check if time is required
      setRemainingTime(quiz.time_required * 60); // Convert minutes to seconds
      setTimer(quiz.time_required * 60); // Set total timer
      startTimer(); // Start the timer
    }
    // userQuizMapCreate();
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          handleSubmit();
          return 0; // Stop the timer when it reaches 0
        }
        return prevTime - 1; // Decrease remaining time by 1 second
      });
    }, 1000);
    setTimerInterval(interval); // Store the interval ID
  };

  const stopTimer = () => {
    clearInterval(timerInterval); // Clear the timer interval
  };

  // const handleSeeResult = () => {
  //   stopTimer(); // Stop the timer when seeing results
  //   setShowAnswer(true);
  // };


  React.useEffect(() => {
    let url = process.env.API_URL + "quiz/questions/?quiz=" + quiz.id;
    fetch(url)
      .then(async (response) => {
        if (response.ok) {
          var data = await response.json();
          setQuestions(data.results);
          loadOptions(data.results[0].id);
          setCurrentQuestion(data.results[0]);
        } else {
        }
      })
      .catch((error) => {});
  }, []);

  const checkRightCount = () => { 
    let c = 0; // Initialize correct count
    for (let question of questions) {
        // Check if the question has been answered
        if (question.selected !== undefined) {
            // Only count if the selected answer is correct
            if (question.selected == question.right_option) {
                c += 1; // Increment correct count
            }
        }
    }
    setRightCount(c);
  }

  React.useEffect(() => {
    // let question;
    // let c = rightCount;
    // for (question of questions) {
    //   if (question.selected == question.right_option) {
    //     c = c + 1;
    //   }
    // }

    // if (session && showAnswer){
    //   let url = process.env.API_URL + 'quiz/user_quiz/'+userquiz.id+'/'
    //   postDataAuth(url,user.access,{total_correct:c},'PATCH')
    //               .then(data => {
    //               }).catch(error => {
    //                 this.setState({})
    //       })
    //   }
  }, [showAnswer, isModalOpen]);

  const loadOptions = (quesID) => {
    var url = process.env.API_URL + "quiz/options/?question=" + quesID;
    fetch(url).then(async (response) => {
      if (response.ok) {
        var data = await response.json();
        setOptions(data);
        setOptionLoading(false);
        // addRight(data)
      } else {
      }
    });
  };

  const addRight = () => {
    let option;
    // addUserQuestion
    for (option of options) {
      if (option.is_right === true) {
        questions[currentCount]["right_option"] = option.id.toString();
        // addUserQuestion(selected, option.id);
      }
    }
  };

  const handleNP = (np) => {
    let new_count = np === "n" ? currentCount + 1 : currentCount - 1;
    addRight();
    setCurrentCount(new_count);
    setCurrentQuestion(questions[new_count]);
    setOptionLoading(true);
    loadOptions(questions[new_count].id);
    uncheckAll();
  };

  const uncheckAll = () => {
    let option;
    for (option of options) {
      document.getElementById(option.id).checked = false;
    }
  };

  const handleChange = (event) => {
    var selected = event.target.value;
    setSelected(selected);
    questions[currentCount]["selected"] = selected;
    for (var option of options) {
      if (option.id != selected) {
        document.getElementById(option.id).checked = false;
      } else {
        document.getElementById(option.id).checked = true;
      }
    }
  };

  return (
    <>
      {isModalOpen &&
      <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleModalSubmit}
          quizName={quiz.name}
          questions={questions} // Pass the questions array
          rightCount={rightCount} // Pass the correct count
          totalTime={timer - remainingTime} // Pass the total time taken
      />
      }

      {showAnswer && (
        <QuizResult questions={questions} total_correct={rightCount} timeTaken={timer - remainingTime} timeRequired={quiz.time_required} />
      )}

      {!showAnswer && (
        <div className="relative">
        {started && quiz.time_required > 0 && ( // Only show timer if time is required
          <div className="absolute bg-error opacity-80 text-white top-0 right-0 p-2 px-4 rounded-bl-lg rounded-tr-lg z-10">
            <div>Time Remaining: {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? '0' : ''}{remainingTime % 60}</div>
          </div>
        )}
          {started ? (
            <div>
              <div class="card card-compact bg-base-200 shadow">
                <div class="card-body">
                  <h2 class="card-title">
                    {currentCount + 1} of {questions.length}{" "}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: currentQuestion.text }}
                  />
                  {optionLoading && <div>Loading...</div>}

                  {!optionLoading && (
                    <div>
                      {options.map((option, key) => (
                        <div key={key}>
                          {/* <label>
        <input className="radio" type="radio" id={option.id} onChange={handleChange} value={option.id} /> 
        {option.text}
      </label> */}

                          <div className="form-control">
                            <label className="label justify-normal cursor-pointer">
                              <input
                                type="radio"
                                id={option.id}
                                onChange={handleChange}
                                value={option.id}
                                className="radio"
                              />

                              <span className="pl-4 label-text">
                                {option.text}
                              </span>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {!optionLoading &&
                  <div class="card-actions flex justify-between	">
                    <div>
                      {currentCount > 0 && (
                        <button
                          // data-aos="fade"
                          className="btn btn-primary"
                          onClick={() => handleNP("p")}
                        >
                          Previous 
                        </button>
                      )}
                    </div>

                    <div>
                      {currentCount < questions.length - 1 ? (
                        <button
                          // data-aos="fade"
                          className="btn btn-primary"
                          onClick={() => handleNP("n")}
                        >
                          Next
                        </button>
                      ) : (
                        <div>
                          <button
                            // data-aos="fade"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                            
                          >
                            Show Result
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  }


                </div>
              </div>

              <br />
            </div>
          ) : (
            <div
              className="border-2 border-secondary border-dashed"
              style={{ padding: "2em" }}
            >
              <h3>
                {" "}
                {quiz.name} ({questions.length} Questions){" "}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: quiz.detail }} />

              <br />

              <button
                onClick={() => startNow()}
                // data-aos="fade"
                className="btn btn-primary"
              >
                Start Quiz
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default SolveQuiz;
