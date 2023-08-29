
import Display2 from "./q&a2"

export default function Display(props) {
  // eslint-disable-next-line react/prop-types
  let dataa = props.data.data.results
  // eslint-disable-next-line react/prop-types
  let theme = props.theme

  // eslint-disable-next-line react/prop-types
  let quizComponent = dataa.map((items, id) => (
    <Display2
      key={id}
      question={items.question}
      correct_ans={items.correct_answer}
      incorrect_ans={items.incorrect_answers}
      theme={theme}
    />
  ))

  return (
    <main className={`border ${theme[0] === 'night' ? "border-dp" : "border-bbb"} mx-5 sm:mx-32 mt-32 sm:mt-0 rounded mb-10 p-2 sm:p-10`}>
      {quizComponent}
    </main>
  )
}