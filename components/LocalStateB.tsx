import React, { VFC } from "react"
import { useReactiveVar } from "@apollo/client"
import { todoVar } from "../cache"
import Link from "next/link"

const LocalStateB: VFC = () => {
  const todos = useReactiveVar(todoVar)
  return (
    <>
      {todos?.map((task, index) => (
        <p className="mb-3" key={index}>
          {task.title}
        </p>
      ))}
      <Link href="/local-state-a">
        <a>Back</a>
      </Link>
    </>
  )
}

export default LocalStateB
