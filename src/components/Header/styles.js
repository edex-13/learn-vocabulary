import styled from 'styled-components'
import { wrapper } from '@styles/Wrapper'

export const Headers = styled.header`
  width:100%;
  height:80px;
`
export const Container = styled.div`
  ${wrapper()}
  display:flex;
  justify-content:space-between;
  align-items:center;
`
export const Img = styled.img`
  width:50px;
`

const Section = styled.div`
  display:flex;
  align-items:center;
`
export const SectionRight = styled(Section)`
`
export const SectionLeft = styled(Section)`
`

export const Title = styled.h1`
  font-size:1.5rem;
  font-weight:bold;
  margin:0;
  padding:0;
`
