import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Note from "./components/note/note";

const App=()=>{
    return(
        <div >
            <Header />
            <Note />
            <Footer />
        </div>
    )
}

export default App;