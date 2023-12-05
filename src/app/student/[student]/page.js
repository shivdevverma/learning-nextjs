"use client"

export default function Student({params}) {
    return (
      <main>
        <h1>Student Details</h1>
        <h2>Student Id: {params.student}</h2>
      </main>
    )
  }
  