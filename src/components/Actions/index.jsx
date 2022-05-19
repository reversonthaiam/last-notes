import './styles.css'
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'
import { useNoteForm } from '../../context/NoteFormContext'
import { useHighlight } from '../../context/HighlightContext'
import { useNoteList } from '../../context/NoteListContext';

export default function Actions() {
  const { visibleForm, setVisibleForm, setTitle, setDescription } = useNoteForm();
  const { highlight, setHighlight } = useHighlight();
  const { noteList, setNoteList } = useNoteList()

  function editHandler() {
    if (highlight) {
      const highlightedNote = noteList.find((note) => note.id === highlight)

      setTitle(highlightedNote.title);
      setDescription(highlightedNote.description);

      setVisibleForm(!visibleForm)
    }
  }

  function deleteHandler() {
    if (highlight) {
      setTitle("")
      setDescription("")
      setHighlight(false)

      const highlightedNote = noteList.findIndex((note) => note.id === highlight)
      noteList.splice(highlightedNote, 1)
      setNoteList([...noteList])
    }
  }

  return (
    <div className="actions">
      <button onClick={() => {
        if (visibleForm && highlight) {
          setTitle("")
          setDescription("")
          setHighlight(false)
        } else {
          setVisibleForm(!visibleForm)
        }

      }}
        className="create">
        <FaPlus className='icon'></FaPlus>

      </button>

      <button onClick={editHandler} className="edit">
        <FaPencilAlt className={`icon ${!highlight && "disabled"}`}></FaPencilAlt>
      </button>

      <button onClick={deleteHandler} className="delete">
        <FaTrash className={`icon ${!highlight && "disabled"}`}></FaTrash>

      </button>
    </div>
  )
}
