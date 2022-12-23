import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewNotePage from "./pages/NewNotePage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<HomePage />} />

      {/* New Note Route */}
      <Route path="/new" element={<NewNotePage />} />

      {/* Details page Route*/}
      <Route path="/:id">
        <Route index element={<DetailsPage />} />

        {/* Edit Page Route */}
        <Route path="edit" element={<h1>Editing</h1>} />
      </Route>

      {/* Return to homepage if route doesn't match specified routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
