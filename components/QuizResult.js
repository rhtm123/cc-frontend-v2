import Options from "./Options";

function QuizResult({questions=[],total_correct}) {
    return ( 
        <div>

<h3 style={{ textAlign:"center" }}> Your Score : {Math.round(total_correct/questions.length*100)}% ({total_correct}/{questions.length}) </h3>
<br />
{questions.map((question, key)=>
                                  <div key={key} className="card" style={{'padding':24, 'margin':12}}>
                                   {question.right_option===question.selected ?
                                       <h5 className="">{key+1}. Right Answer <i className="far fa-check"></i></h5>:
                                       <h5 className="">{key+1}. Wrong Answer <i className="far fa-ban"></i> </h5>
                                   }
                                   <div className="" dangerouslySetInnerHTML={{__html:question.question?question.question.text:question.text}} />
                                   <Options question={question} questionID={question.question?question.question.id:question.id} />
                                   <p className=""> EXPLANATION </p>
                                   <div className=""> {question.question?question.question.answer_discription:question.answer_discription}</div>
                                   <br />
           
                                   </div>
    )}
</div>
     );
}

export default QuizResult;