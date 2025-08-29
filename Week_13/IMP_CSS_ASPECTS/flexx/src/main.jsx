import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Flex from './Flex'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Flex />
  </StrictMode>,
)
