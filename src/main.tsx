import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentList from './views/dev/ComponentList'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ComponentList />
  </React.StrictMode>
)
