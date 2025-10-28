"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/Card'

type Question = {
  id: string
  prompt: string
  options: string[]
  answerIndex: number
}

type MiniQuizProps = {
  questions?: Question[]
}

const DEFAULT_QUESTIONS: Question[] = [
  {
    id: 'q1',
    prompt: 'Which adjective best describes this food: crispy fried chicken?',
    options: ['salty', 'crispy', 'sour', 'watery'],
    answerIndex: 1,
  },
  {
    id: 'q2',
    prompt: 'Milk is usually...?',
    options: ['spicy', 'sweet', 'creamy', 'salty'],
    answerIndex: 2,
  },
  {
    id: 'q3',
    prompt: 'Strawberries taste...?',
    options: ['bitter', 'sweet', 'spicy', 'sour'],
    answerIndex: 1,
  },
]

export function MiniQuiz({ questions = DEFAULT_QUESTIONS }: MiniQuizProps) {
  const [selected, setSelected] = React.useState<Record<string, number | undefined>>({})
  const [showResult, setShowResult] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const saved = window.localStorage.getItem('miniQuiz:selected')
      const savedShow = window.localStorage.getItem('miniQuiz:showResult')
      if (saved) setSelected(JSON.parse(saved))
      if (savedShow) setShowResult(savedShow === '1')
    } catch {}
  }, [])

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem('miniQuiz:selected', JSON.stringify(selected))
      window.localStorage.setItem('miniQuiz:showResult', showResult ? '1' : '0')
    } catch {}
  }, [selected, showResult])

  const correctCount = React.useMemo(() => {
    return questions.reduce((acc, q) => (selected[q.id] === q.answerIndex ? acc + 1 : acc), 0)
  }, [questions, selected])

  const answeredCount = React.useMemo(() => {
    return questions.reduce((acc, q) => (selected[q.id] !== undefined ? acc + 1 : acc), 0)
  }, [questions, selected])

  const progressPercent = Math.round((answeredCount / questions.length) * 100)

  return (
    <Card className="border-primary-100">
      <CardHeader>
        <h4 className="text-lg md:text-xl font-semibold text-slate-900">Mini Quiz: Food &amp; Beverage Adjectives</h4>
        <p className="mt-1 text-sm text-slate-600">Pilih jawaban yang benar. Klik Submit untuk melihat skor.</p>
        <div className="mt-4">
          <div className="mb-1 flex items-center justify-between text-xs text-slate-600">
            <span>Progress</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full bg-primary-500 transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {questions.map((q, qi) => (
          <div key={q.id} className="rounded-lg border border-slate-200 p-4">
            <p className="font-medium text-slate-900">{qi + 1}. {q.prompt}</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {q.options.map((opt, oi) => {
                const isSelected = selected[q.id] === oi
                const isCorrect = showResult && q.answerIndex === oi
                const isWrong = showResult && isSelected && q.answerIndex !== oi
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelected((s) => ({ ...s, [q.id]: oi }))}
                    className={[
                      'rounded-md border px-3 py-2 text-left text-sm transition',
                      isSelected ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:bg-slate-50',
                      isCorrect ? 'border-green-500 bg-green-50' : '',
                      isWrong ? 'border-red-500 bg-red-50' : '',
                    ].join(' ')}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setShowResult(true)}
          className="rounded-md bg-primary-600 px-4 py-2 text-white hover:bg-primary-700"
        >
          Submit
        </button>
        {showResult ? (
          <div className="text-sm font-medium text-slate-800">
            Score: {correctCount}/{questions.length}
          </div>
        ) : (
          <div className="text-sm text-slate-500">Jawab semua pertanyaan lalu Submit.</div>
        )}
      </CardFooter>
    </Card>
  )
}

