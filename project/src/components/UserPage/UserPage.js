import { useState } from 'react'
import WishLists from '../WishLists/WishLists'
import { Container } from 'react-bootstrap'
import PersonalBoard from '../PersonalBoard/PersonalBoard'

export default function UserPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <PersonalBoard count={count} setCount={setCount} />
        <hr />
        <WishLists count={count} setCount={setCount} />
      </Container>
    </>
  )
}
