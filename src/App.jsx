import { useState } from "react";
function App() {
 const [title, setTitle] = useState("")
const [notes, setNotes] = useState([])
const [editIndex, setEditIndex] = useState(null)
  function addNote() {
if (title.trim() === "") {
      return
    }
if (editIndex !== null) {
      const updatedNotes = notes.map((note, index) =>index === editIndex ? title : note);
setNotes(updatedNotes)
setEditIndex(null)
} else {
setNotes([...notes, title])
}
setTitle("")
  }
  function deleteNote(index) {
 const updatedNotes = notes.filter((note, i) => i !== index)
setNotes(updatedNotes)
  }
  function editNote(index) {
    setTitle(notes[index])
    setEditIndex(index)
  }
return (
<div className="min-h-screen bg-sky-100 py-10 px-4">
<h1 className="text-4xl font-bold text-center text-sky-800 mb-8">
 My Notes</h1>
 <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
<input
type="text"
placeholder="Write your note..."
value={title}
 onChange={(e) => setTitle(e.target.value)}
 className="w-full border border-sky-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-400"
/>
<button
 onClick={addNote}
 className="w-full mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg"
>
{editIndex !== null ? "Update Note" : "Add Note"}
</button>
 </div>
<div className="max-w-xl mx-auto mt-8 space-y-4">
 {notes.map((note, index) => (
    <div
key={index}
    className="bg-white p-5 rounded-xl shadow-md border-l-4 border-sky-400 flex justify-between items-center"><p className="text-gray-700 text-lg">{note}</p>
 <div className="flex gap-2">
    <button onClick={() => editNote(index)}className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded-lg"> Edit</button>
    <button
    onClick={() => deleteNote(index)}
        className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
     >
         Delete
    </button>
</div>
</div>
))}
</div>
</div>)
}

export default App