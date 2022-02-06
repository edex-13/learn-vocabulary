import React from 'react'
import { Headers, Container, Img, SectionLeft, SectionRight, Title } from './styles'

export const Header = () => {
  return (
    <Headers>
      <Container>
        <SectionLeft>
          <Img src='https://i.pinimg.com/originals/4d/16/65/4d166536fe0468f0e5ede72652ec753f.png' alt='Logo vocabulario' />
          <Title>Vocabulario</Title>
        </SectionLeft>
        <SectionRight />
      </Container>
    </Headers>
  )
}
