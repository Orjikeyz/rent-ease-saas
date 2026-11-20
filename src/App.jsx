import { Routes, Route } from "react-router";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import NotFound from "./pages/404";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/properties' element={<Properties/>} />


        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App;