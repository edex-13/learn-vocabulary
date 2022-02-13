import styled from 'styled-components'
import * as vars from '@styles/Variables'

import { InputStyle, ButtonStyle } from '@styles/global/FormContainer'

export const Text = styled.p`
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px;
  text-align: center;
  ${props => props.click &&
    `cursor: pointer;
    &:hover {
      color: ${vars.PINK};
    }`
  };
`
export const Input = styled.input`
  ${InputStyle}
`

export const Button = styled.button`
  ${ButtonStyle}
`
