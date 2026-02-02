import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Template from "./pages/Template";
import ViewTemplate from "./components/ViewTemplate";
import CreateTemplate from "./components/CreateTemplate";
import CreateGoogleForm from "./components/CreateGoogleForm";
import ViewGoogleForms from "./components/ViewGoogleForms";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />

      <Route path="/Login" element={<Login />} />

      <Route path="/Template" element={<Template />}>

        <Route
          index
          element={
            <h1 className="text-3xl text-gray-500 text-center">
              Welcome !!
            </h1>
          }
        />

        <Route path="create" element={<CreateTemplate />} />

        <Route path="view" element={<ViewTemplate />} />

        <Route path="google-form" element={<CreateGoogleForm />} />
        <Route path="view-forms" element={<ViewGoogleForms />} />

      </Route>
    </Routes>
  );
}
