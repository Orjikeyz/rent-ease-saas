import { Routes, Route } from "react-router";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>} />
      </Routes>
    </>
  )
}

export default App;