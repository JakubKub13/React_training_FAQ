import questions from './data';
import Question from "./components/Question";


const App = () => {
  return (
    <div className='all-questions'>
    {
      questions.map( (oneQuestion) => {
        // ...oneQuestion is the same as id={oneQuestion.id} title={oneQuestion.title} info={oneQuestion.info}
        return <Question  key={oneQuestion.id} {...oneQuestion}/>
      })
    }
    </div>
  )
}

export default App;