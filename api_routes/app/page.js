"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Naman",
      role: "Developer"
    }

    let a = await fetch("/api/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    let res = await a.json()
    console.log(res)
  }

  return (
    <div>
      <h1 className="text-xl font-bold">
        Next.js API routes demo
      </h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
