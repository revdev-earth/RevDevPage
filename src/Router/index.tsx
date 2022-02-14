//* Import reac router
import { Routes, Route } from "react-router-dom"

export default function Router() {
  return (
    <Routes>
      <Route index element={<>Home</>} />
      <Route path="/Services" element={<>Services</>} />
      <Route path="/team" element={<>team</>} />
      <Route path="/blog" element={<>Blog</>} />
      <Route path="/case" element={<>Case</>} />
    </Routes>
  )
}
