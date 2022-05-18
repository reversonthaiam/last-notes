import { useHighlight } from '../../context/HighlightContext'
import { useNoteForm } from '../../context/NoteFormContext';
import './styles.css'


export default function Note({id, title, description}) {
  const { highlight, setHighlight } = useHighlight();
  const { visibleForm, setVisibleForm} = useNoteForm()


  return (
    <div className={`note ${highlight === id && "highlight"}`} onClick={() => {
      if (highlight === id) {
        setHighlight(false)
        setVisibleForm(false);

      } else {
        setHighlight(id)
        setVisibleForm(true)
      }
    }}>
      <h2 className='title'>{ title}</h2>
      <hr />
      <p className="note-description">{description}
      </p>
    </div>
  )
}
