import { RouterProvider } from 'react-router-dom'
import { appRoute } from './routes'
import useStore from '@/zustand'

function App() {
  window.onload = () => {
    document.querySelector('body')?.classList.add('dark')
    useStore.setState({
      userInfos: {
        name: 'Caio Magalhães',
        role: 'specialist'
      }
    })
  };
  return (
    <RouterProvider router={appRoute} />
  )
}

export default App
