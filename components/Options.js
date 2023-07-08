

import React from 'react'

const Options = ({question, questionID}) => {

    const [loading, setLoading] = React.useState(true);
    const [options, setOptions] = React.useState([])
  
    React.useEffect(() => {
  
      var url = process.env.API_URL + 'quiz/options/?question='+questionID;
      fetch(url)
      .then(async (response) => {
          if (response.ok) {
              var data = await response.json();
              setOptions(data);
              setLoading(false);
              }
          else{}
          })
  },[]);
  
    return(
      <div>
        {loading && <div>loading...</div>}
  
        <div style={{ 'margin':'1em 0px' }}>
                          {question.right_option == question.selected ? <div>
                              {options.map((option,key)=>
                                  <div key={key}>
                                  {(question.right_option==option.id) &&
                                      <div style={{ 'margin':'0.3em 0em', 'padding':'0.4em', 'border': '1px solid green', 'borderRadius':'1em' }}>
                                      <span style={{ paddingLeft:"5px"  }}>{option.text}</span>
                                      
                                      </div> ||
                                  (question.right_option != option.id) && <div style={{ 'margin':'0.3em 0em', 'padding':'0.4em'}}>
                                          <span style={{ paddingLeft:"5px"  }}>{option.text}</span>
                                      </div>
                                  }
                                  </div>
                              )}
  
  
  
                          </div>: 
                              <div>
                              {options.map((option,key)=>
                                  <div key={key}>
                                      { (question.right_option==option.id) &&
                                      <div style={{ 'margin':'0.3em 0em', 'padding':'0.4em', 'border': '1px solid green', 'borderRadius':'1em'}}>
  
                                      <span style={{ paddingLeft:"5px"  }}>{option.text}</span>
                                      
                                      </div>  ||
  
                                       (question.selected==option.id) &&
                                      <div style={{ 'margin':'0.3em 0em', 'padding':'0.4em', 'border': '1px solid red', 'borderRadius':'1em'}}>
  
                                      <span style={{ paddingLeft:"5px"  }}>{option.text}</span>
                                      
                                      </div> ||
                                          (true) && <div style={{ 'margin':'0.3em 0em', 'padding':'0.4em'}}>
                                           <span style={{ paddingLeft:"5px"  }}>{option.text}</span>
                                       </div>
                                      }
                                  </div>
                               )}
  
                          </div>
  
                          }
              </div>
      </div>
    )
}

export default Options