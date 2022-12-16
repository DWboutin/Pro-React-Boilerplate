import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 10px;
  background-color: blue;
`

export interface Props {
  children: ReactNode
}

const Button: FunctionComponent<Props> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Button
