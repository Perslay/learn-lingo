// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { BrowserRouter } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import { App } from "./components/App";
// import { store, persistor } from "./redux/store";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import "normalize.css";
// import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { App } from "./components/App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter>
//           <GoogleOAuthProvider clientId="743543484063-masnnsieejb5vdo1jvcd98nr3giecho3.apps.googleusercontent.com">
//             <HelmetProvider>
//               <App />
//             </HelmetProvider>
//           </GoogleOAuthProvider>
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
