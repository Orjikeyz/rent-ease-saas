import { Routes, Route } from "react-router";
import Index from "./pages/Index";
import Properties from "./pages/Properties";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/properties' element={<Properties/>} />
      </Routes>
    </>
  )
}

export default App;