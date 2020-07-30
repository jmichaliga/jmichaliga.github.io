import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Box, H2, H3, Flex } from "../../components/elements"

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
  "Heidi",
]

const secretSanta = (people) => {
  let assignments = [...people]
  let result = []

  people.forEach((gifter) => {
    let personIdx = assignments.indexOf(gifter)
    if (personIdx > -1) {
      assignments.splice(personIdx, 1)
    }
    let rand = Math.floor(Math.random() * assignments.length)
    result.push([gifter, assignments[rand]])
    assignments.splice(rand, 1)
    if (personIdx > -1) {
      assignments.push(gifter)
    }
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
      <SEO title="Work: Secret Santa Algorithm" />

      <H2>Secret Santa</H2>
      <Flex style={{justifyContent: 'space-between'}}>
        <Box>
          <H3>Algo 1</H3>
          <ul>
            {secretSanta(names).map((result, idx) => (
              <li key={idx}>
                {result[0]} &rarr; {result[1]}
              </li>
            ))}
          </ul>
        </Box>
        <Box>
          <H3>Algo 2</H3>
          <ul>
            {sideSanta(names).map((result, idx) => (
              <li key={idx}>
                {result[0]} &rarr; {result[1]}
              </li>
            ))}
          </ul>
        </Box>
      </Flex>
    </Layout>
  )
}

export default SecretSanta
