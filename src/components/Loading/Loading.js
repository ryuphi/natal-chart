import React from 'react'
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`

const Loading = styled.div.attrs(props => ({
  className: 'ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64'
}))`
    border-top-color: #3498db;
    animation: ${rotate} 1.5s linear infinite;
`

export default Loading
