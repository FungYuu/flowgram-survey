// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'

import { Editor } from './editor';

const app = createRoot(document.getElementById('root')!)

app.render(
  // <StrictMode>
    <Editor />
  // </StrictMode>,
)
