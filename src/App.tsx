import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<h1>Home</h1>} />

      {/* Details page */}
      <Route path="/:id" element={<h1>Details</h1>} />

      {/* Return to homepage if route doesn't match specified routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
