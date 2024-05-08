// App.js
import React, { Fragment } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Header from "./routes/header/header.component";
import TaskRoute from "./routes/task-route/task_route.component";
import Download from "./routes/download/download.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='download' element={<Download />} />
        <Route path=':task' element={<TaskRoute />} />
      </Route>
    </Routes>
  );
};

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/coloring-image' element={<ColoringImagePage />} />
//         <Route path='/regenerate-image' element={<RegenerateImagePage />} />
//         <Route path='/enhancing-image' element={<EnhancingImagePage />} />
//         <Route path='/sketch-to-image' element={<SketchToImagePage />} />
//       </Routes>
//     </Router>
//   );
// }

export default App;
