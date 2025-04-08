import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-blue-500">Hello from React 🎉</h1>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
