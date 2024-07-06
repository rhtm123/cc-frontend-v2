import React from "react";
import QuizResult from "./QuizResult";

function SolveQuiz({quiz}) {

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


    const startNow = () => {
        setStarted(true);
        // userQuizMapCreate();
    }

    React.useEffect(() => {
        let url = process.env.API_URL + 'quiz/questions/?quiz='+quiz.id;
        fetch(url)
        .then(async (response) => {
          if (response.ok) {
            var data = await response.json();
            setQuestions(data.results);
            loadOptions(data.results[0].id);
            setCurrentQuestion(data.results[0]);
           } else {   
          }
        }).catch(error=>{  })
    },[]);

    React.useEffect(() => {
        let question;
        let c = rightCount
        for (question of questions){
            if (question.selected==question.right_option){
              c = c+1
            }
        }
        setRightCount(c);
  
        // if (session && showAnswer){
        //   let url = process.env.API_URL + 'quiz/user_quiz/'+userquiz.id+'/'
        //   postDataAuth(url,user.access,{total_correct:c},'PATCH')
        //               .then(data => {
        //               }).catch(error => {
        //                 this.setState({})
        //       })
        //   }
      },[showAnswer]);

      const loadOptions = (quesID) => {
        var url = process.env.API_URL + 'quiz/options/?question='+quesID;
        fetch(url)
        .then(async (response) => {
            if (response.ok) {
                var data = await response.json();
                setOptions(data);
                setOptionLoading(false);
                // addRight(data)
                }
            else{}
            })
      }

      const addRight = () =>{
        let option;
        // addUserQuestion
        for (option of options){
            if (option.is_right===true){
                questions[currentCount]['right_option'] = option.id.toString();
                // addUserQuestion(selected, option.id);
            }
        }
      }

      const handleNP = (np) => {
        let new_count = np==='n' ? currentCount+1:currentCount-1
        addRight();
        setCurrentCount(new_count);
        setCurrentQuestion(questions[new_count]);
        setOptionLoading(true);
        loadOptions(questions[new_count].id)
        uncheckAll();
  }

  const uncheckAll = () =>{
      let option;
      for (option of options) {
              document.getElementById(option.id).checked=false;
      }
  }

  const handleChange = (event) =>{
    var selected = event.target.value;
    setSelected(selected);
    questions[currentCount]['selected'] = selected;
    for (var option of options) {
        if (option.id != selected){
            document.getElementById(option.id).checked=false;
        }
        else{
            document.getElementById(option.id).checked=true;
        }
    }
}

    const handleSubmit = () => {
        // startQuiz()
        addRight();  
        setShowAnswer(true);
        // setAlreadyAttempted(true);

    }
  
      


    return ( 
        <>

    {showAnswer &&  
        <QuizResult questions={questions} total_correct={rightCount} />
        
    }

        
        {!showAnswer && <div>  

{started ?

<div>

<div class="card card-compact bg-base-100 shadow-xl">
  <div class="card-body">
  <h2 class="card-title"> {currentCount+1} of {questions.length} </h2>
  <div dangerouslySetInnerHTML={{__html:currentQuestion.text}} />

  {optionLoading && <div>Loading...</div>}

{!optionLoading && <div>
  {options.map((option,key)=>
    <div key={key}>
      {/* <label>
        <input className="radio" type="radio" id={option.id} onChange={handleChange} value={option.id} /> 
        {option.text}
      </label> */}

      <div className="form-control">
      <label className="label justify-normal cursor-pointer">
          <input type="radio" id={option.id} onChange={handleChange} value={option.id} className="radio" />

          <span className="pl-4 label-text">{option.text}</span> 
      </label>
      </div>
                  
    </div>

  )}
  
</div>}
    
    <div class="card-actions flex justify-between	">

    <div > {currentCount>0 && <button data-aos="flip-right" className="btn btn-primary" onClick={()=>handleNP('p')}>Previous</button>}</div>

<div> 
          {currentCount<questions.length-1 ? <button data-aos="flip-right" className="btn btn-primary" onClick={()=>handleNP('n')}>Next</button>: <div>
              
              <button data-aos="flip-right" className="btn btn-primary" onClick={()=>handleSubmit()}>See the Result</button>
              </div>

           }
  </div>

    </div>
  </div>
</div>

  

  <br />


</div>:

    <div  className="border-2 border-secondary border-dashed" style={{ 'padding':'2em' }}>

    <h3> {quiz.name} ({questions.length} Questions) </h3>
    <div dangerouslySetInnerHTML={{__html:quiz.detail}} />

    <br />

    <button onClick={()=>startNow()} data-aos="flip-right" className="btn btn-primary">
          Start Quiz
    </button>
    
    </div>

}
</div>}


        </>
     );
}

export default SolveQuiz;