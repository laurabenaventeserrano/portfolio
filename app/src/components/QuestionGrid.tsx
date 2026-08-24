export function QuestionGrid({ questions }: { questions: { qn: string; text: string }[] }) {
  return (
    <div className="qs rv">
      {questions.map((q) => (
        <div className="q" key={q.qn}>
          <span className="qn">{q.qn}</span>
          <p>{q.text}</p>
        </div>
      ))}
    </div>
  )
}
