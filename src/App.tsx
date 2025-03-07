import Demo from "./app/demo";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <Navbar />
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<Demo />} />
      </Routes>
    </>
  );
}

export default App;
