import { RouterProvider } from 'react-router-dom'
import { appRoute } from './routes'

function App() {
  window.onload = () => {
    document.querySelector('body')?.classList.add('dark')
  };
  return (
    <RouterProvider router={appRoute} />
  )
}

export default App
