import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const names = [
  "Rachel",
  "Fatou",
  "Diane",
  "Mike",
  "Kassidy",
  "Avi",
  "Ellery",
  "Jack",
  "Rob",
  "Oui",
  "Justin",
  "Joey",
  "Heidi"
]

const secretSanta = (people) => {
  let assignments = [...people]
  let result = []

  people.forEach((gifter) => {
    let rand = Math.floor(Math.random() * assignments.length)
    while (assignments[rand] === gifter) {
      rand = Math.floor(Math.random * assignments.length)
    }
    result.push([gifter, assignments[rand]])
    assignments.splice(rand, 1)
  })

  return result
}

const sideSanta = (people) => {
  let assignments = [...people]

  const result = []
  let n = assignments.length
  while (n) {
    let i = Math.floor(Math.random() * n--)
    let j = assignments[n]
    assignments[n] = assignments[i]
    assignments[i] = j
  }

  people.forEach((santa, idx) => {
    if (idx <= assignments.length - 1) {
      result.push([santa, assignments[idx]])
    } else {
      result.push([santa, assignments[0]])
    }
  })

  return result
}

const SecretSanta = () => {
  return (
    <Layout>
      <SEO title="Work: Not found" />
      <h1>Secret Santa</h1>
      <ul>
        {sideSanta(names).map((result, idx) => (
          <li key={idx}>
            {result[0]} &rarr; {result[1]}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default SecretSanta
