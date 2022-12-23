import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<HomePage />} />

      {/* New Note Route */}
      <Route path="/new" element={<h1>New Note</h1>} />

      {/* Details page Route*/}
      <Route path="/:id">
        <Route index element={<h1>Details</h1>} />

        {/* Edit Page Route */}
        <Route path="edit" element={<h1>Editing</h1>} />
      </Route>

      {/* Return to homepage if route doesn't match specified routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
