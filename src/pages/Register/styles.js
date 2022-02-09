import styled from 'styled-components'
import { FormContainerStyle } from '@styles/global/FormContainer'

import * as vars from '@styles/Variables'

export const RegisterContainer = styled.section`
  ${FormContainerStyle}
`
export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Subtitle = styled.p`
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
`

export const SocialContainer = styled.div`
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
  transition: background-color 0.2s ease 0s;
  transition: color 0.3s ease 0s;
  color: ${vars.GRAY};
  cursor: pointer;
  &:hover {
    color: ${vars.PINK};
  }
`
