import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card username="john_doe" description="Noteworthy technology acquisitions 2021" btnText="Click me" />
    <Card username="steve_jobs" description="Here are the biggest enterprise technology acquisitions" btnText="Visit me" />
    <Card username="sam_smith" description="A deep dive into the most significant tech mergers and acquisitions." btnText="Learn more" />
    <Card username="john_doe" description="Noteworthy technology acquisitions 2021" btnText="Click me" />
    <Card username="steve_jobs" description="Here are the biggest enterprise technology acquisitions." btnText="Visit me" />
    <Card username="sam_smith" description="A deep dive into the most significant tech mergers and acquisitions." btnText="Learn more" />

  </StrictMode>,
)
