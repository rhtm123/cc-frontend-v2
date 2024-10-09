// import Options from "./Options";

// function QuizResult({questions=[],total_correct}) {
//     return ( 
//         <div>

// <h3 style={{ textAlign:"center" }}> Your Score : {Math.round(total_correct/questions.length*100)}% ({total_correct}/{questions.length}) </h3>
// <br />
// {questions.map((question, key)=>
// <div key={key} className="card bg-base-100 shadow-lg mb-8">

//   <div class="card-body">
//   {question.right_option===question.selected ?
//     <h5 className="card-title success">{key+1}. Right Answer </h5>:
//     <h5 className="card-title failure">{key+1}. Wrong Answer </h5>
//     }
//     <div className="" dangerouslySetInnerHTML={{__html:question.question?question.question.text:question.text}} />

//     <Options question={question} questionID={question.question?question.question.id:question.id} />
//     <p className=""> EXPLANATION </p>
//     <div className=""> {question.question?question.question.answer_discription:question.answer_discription}</div>
//     <br />
//   </div>

// </div>
//     )}
// </div>
//      );
// }

// export default QuizResult;

import Options from "./Options";

function QuizResult({ questions = [], total_correct, timeTaken, timeRequired }) {
    console.log(total_correct)
    const percentage = Math.round((total_correct / questions.length * 100));
    let courseSuggestion = "";

    // Determine course suggestion based on the score
    if (percentage === 100) {
        courseSuggestion = "Congratulations! You're ready for advanced coding courses. Consider enrolling in 'Advanced Programming Techniques'.";
    } else if (percentage >= 80) {
        courseSuggestion = "Great job! You have a solid understanding. We recommend 'Intermediate Coding Skills' to further enhance your knowledge.";
    } else if (percentage >= 50) {
        courseSuggestion = "You're on the right track! To improve, consider taking the 'Computer Basics 101' course.";
    } else {
        courseSuggestion = "Keep practicing! We suggest starting with 'Introduction to Computers' to build a strong foundation.";
    }

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>
                Your Score: {percentage}% ({total_correct}/{questions.length}) | Time Taken: {Math.floor(timeTaken / 60)}:{timeTaken % 60 < 10 ? '0' : ''}{timeTaken % 60} minutes
            </h3>
                {/* <h4 style={{ textAlign: "center", marginTop: "20px" }}>{courseSuggestion}</h4> */}
            <br />
            {questions.map((question, key) => (
                <div key={key}  className={(question.right_option === question.selected?"card mb-8 border border-success bg-success bg-opacity-20":"card border border-error bg-error bg-opacity-20 mb-8")}>
                    <div className="card-body">
                        {question.right_option === question.selected ? (
                            <h5 className="card-title success">{key + 1}. Right Answer</h5>
                        ) : (
                            <h5 className="card-title failure">{key + 1}. Wrong Answer</h5>
                        )}
                        <div className="" dangerouslySetInnerHTML={{ __html: question.question ? question.question.text : question.text }} />
                        <Options question={question} questionID={question.question ? question.question.id : question.id} />
                        <p className="font-bold">EXPLANATION</p>
                        <div className="" dangerouslySetInnerHTML={{__html: question.question ? question.question.answer_discription : question.answer_discription }} />
                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default QuizResult;