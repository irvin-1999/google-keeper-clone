import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Note from "./components/note/note";
import notes from "./note";

// const createNote=

const App=()=>{
    return(
        <div >
            <Header />
            {notes.map((note)=>{
                        return <Note key={note.id}
                                    title={note.title}
                                    content={note.content}/>
            })}
            <Footer />
        </div>
    )
}

export default App;