import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { db } from "./config/firebase-config";
import { getDocs , collection, addDoc, deleteDoc, doc } from "firebase/firestore";



function App() {
  const [notes, setNotes] = useState([]);

  const notesCollectionRef = collection(db, "notes");

  useEffect(() =>{
    const getNotes = async () =>{

      try{
      const data = await getDocs(notesCollectionRef);
      const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setNotes(filteredData);
      }catch (err){
        console.error(err)
      }
    };
    getNotes();
},[]);

  const addNote = async (newNote) => {
    try{
    const docRef = await addDoc(notesCollectionRef, newNote);
    setNotes((prevNotes) => [...prevNotes, {...newNote, id: docRef.id}]);
  }catch(err){
    console.error(err);
  }
  };

  const deleteNote = async (id) => {
    try{
    const noteDoc = doc(db, "notes", id);
    await deleteDoc(noteDoc);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }catch(err){
    console.error(err);
  }
  };


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note 
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
