import { Suspense } from "react";
import "react-sortable-tree/style.css";
// ** Router Import
import Router from "./router/Router";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
};

export default App;
