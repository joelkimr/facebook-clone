import React from "react";
import "./App.css";
import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import Sidebar from "./components/header/sidebar/Sidebar";
import Widgets from "./components/widgets/Widgets";

function App() {
  return (
    <div className='app'>
      <Header />

      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
