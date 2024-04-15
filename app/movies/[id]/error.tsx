"use client"

export default function ErrorOMG({error:{message}}:{error:{message:string}}) {
  
  return <h1>{message}</h1>
}