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
        <Route path='download/*' element={<Download />} />
        <Route path=':task' element={<TaskRoute />} />
      </Route>
    </Routes>
  );
};

export default App;
