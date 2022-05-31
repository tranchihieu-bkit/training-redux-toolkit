import React from 'react';
import Header from './components/layout/Header';
import ListImage from './components/image/ListImage';
import FormImage from "./components/image/FormImage";

function App() {
    return (
        <div className="App">
            <Header/>
            <FormImage/>
            <ListImage/>
        </div>
    );
}

export default App;
