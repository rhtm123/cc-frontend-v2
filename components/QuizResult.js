import Options from "./Options";

function QuizResult({questions=[],total_correct}) {
    return ( 
        <div>

<h3 style={{ textAlign:"center" }}> Your Score : {Math.round(total_correct/questions.length*100)}% ({total_correct}/{questions.length}) </h3>
<br />
{questions.map((question, key)=>
<div key={key} className="card bg-base-100 shadow-lg mb-8">

  <div class="card-body">
  {question.right_option===question.selected ?
    <h5 className="card-title success">{key+1}. Right Answer </h5>:
    <h5 className="card-title failure">{key+1}. Wrong Answer </h5>
    }
    <div className="" dangerouslySetInnerHTML={{__html:question.question?question.question.text:question.text}} />

    <Options question={question} questionID={question.question?question.question.id:question.id} />
    <p className=""> EXPLANATION </p>
    <div className=""> {question.question?question.question.answer_discription:question.answer_discription}</div>
    <br />
  </div>

</div>
    )}
</div>
     );
}

export default QuizResult;