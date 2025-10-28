import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

type VocabItem = {
  icon: React.ReactNode
  word: string
  translation: string
  note?: string
}

type VocabGridProps = {
  items?: VocabItem[]
}

const Icon = {
  Apple: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M16.5 2c-.9.6-1.6 1.6-1.5 2.7 1.1.1 2.2-.5 2.9-1.3.7-.8 1.1-1.8 1-2.8-.9 0-1.9.5-2.4 1.4zM20 8.4c-1-1.2-2.5-2-4.1-2-1 .1-1.9.4-2.6.9-.6.4-1.1.6-1.7.6s-1.1-.2-1.7-.6c-.7-.5-1.6-.8-2.6-.9-1.6-.1-3.1.8-4.1 2C1.9 11 2.5 15 4.5 17.7c.8 1.1 1.8 2.3 3.1 2.3 1.1 0 1.4-.7 2.8-.7s1.7.7 2.8.7c1.3 0 2.3-1.1 3.1-2.3C21.5 15 22.1 11 20 8.4z"/></svg>
  ),
  Bread: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M12 3c-3.3 0-6 2.2-6 5v10a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V8c0-2.8-2.7-5-6-5h-3zM6 8c0-1.7 1.8-3 4-3h5c2.2 0 4 1.3 4 3v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8z"/></svg>
  ),
  Chicken: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M20 8c-1.7 0-3-1.3-3-3 0-.4.1-.7.2-1-1.3 0-2.6.5-3.5 1.5L10 9H7l-1 2 2 2-2 2 2 2 2-2 2 2 2-2-1-1 2.5-2.5c.9-.9 2.2-1.5 3.5-1.5.3.1.6.1 1 .1 1.7 0 3-1.3 3-3s-1.3-3-3-3c0 1.7-1.3 3-3 3z"/></svg>
  ),
  Noodles: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M4 5h16v2H4V5zm0 4h16v2H4V9zm1 4h14l-1 6H6l-1-6zm5 7h4v2h-4v-2z"/></svg>
  ),
  Pizza: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M12 2C7.6 2 3.7 4.4 1.6 8l10.4 14L22.4 8C20.3 4.4 16.4 2 12 2zm0 2c3.3 0 6.3 1.8 8 4.7L12 20 4 8.7C5.7 5.8 8.7 4 12 4zm-2 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6 1a1 1 0 1 0 .001 2.001A1 1 0 0 0 16 9z"/></svg>
  ),
  Donut: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M12 4a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8zm0 2a6 6 0 1 1-6 6 6.01 6.01 0 0 1 6-6zm0 3a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/></svg>
  ),
  Strawberry: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M12 2c-1.1 0-2 .9-2 2 0 .3.1.7.3 1H8l-2 2 2 2 1-1c.3.2.7.3 1 .3s.7-.1 1-.3l1 1 2-2-2-2h-2.3c.2-.3.3-.7.3-1 0-1.1-.9-2-2-2zM6 11c0 5 3 9 6 9s6-4 6-9H6z"/></svg>
  ),
  Milk: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M9 2h6v3l2 3v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8l2-3V2zm2 3h2V4h-2v1z"/></svg>
  ),
}

const DEFAULT_ITEMS: VocabItem[] = [
  { icon: <Icon.Apple className="h-14 w-14 text-red-500" />, word: 'apple', translation: 'apel' },
  { icon: <Icon.Bread className="h-14 w-14 text-amber-600" />, word: 'bread', translation: 'roti' },
  { icon: <Icon.Chicken className="h-14 w-14 text-orange-500" />, word: 'chicken', translation: 'ayam' },
  { icon: <Icon.Noodles className="h-14 w-14 text-yellow-500" />, word: 'noodles', translation: 'mi' },
  { icon: <Icon.Pizza className="h-14 w-14 text-amber-500" />, word: 'pizza', translation: 'pizza' },
  { icon: <Icon.Donut className="h-14 w-14 text-pink-500" />, word: 'donut', translation: 'donat' },
  { icon: <Icon.Strawberry className="h-14 w-14 text-rose-500" />, word: 'strawberry', translation: 'stroberi' },
  { icon: <Icon.Milk className="h-14 w-14 text-sky-500" />, word: 'milk', translation: 'susu' },
]

export function VocabGrid({ items = DEFAULT_ITEMS }: VocabGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((it) => (
        <Card key={it.word} className="group hover:shadow-md">
          <CardHeader className="flex items-center justify-center pb-2">
            {it.icon}
          </CardHeader>
          <CardContent className="pt-2 text-center">
            <div className="text-lg font-semibold text-slate-900">{it.word}</div>
            <div className="text-sm text-slate-600">{it.translation}</div>
            {it.note ? <div className="mt-1 text-xs text-slate-500">{it.note}</div> : null}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

