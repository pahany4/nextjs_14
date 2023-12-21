'use client'

export default function Error({error}) {
  return (
    <div>Ooops {error.message}</div>
  )
}