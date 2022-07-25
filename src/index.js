import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {Home, About} from './app.js';
import './style/home.css'


// function App() {
//   // var results = ['devdash','sajan chale sashural','oo istri kal aaana'];
//     return (
//       <>
//         <>hello</>
//         </>
//       );

// }

const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
root.render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:imdbID" element={<About />} />
          </Routes>
      </BrowserRouter>
);