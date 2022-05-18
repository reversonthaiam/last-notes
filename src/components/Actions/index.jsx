import './styles.css'
import { FaPlus, FaPencilAlt, FaTrash} from 'react-icons/fa'
import { useNoteForm } from '../../context/NoteFormContext'

export default function Actions() {
  const {visibleForm, setVisibleForm} = useNoteForm()

  return (
    <div className="actions">
      <button onClick={() => setVisibleForm(!visibleForm)} className="create">
        <FaPlus className='icon'></FaPlus>

      </button>

      <button className="edit">
        <FaPencilAlt className="icon disabled"></FaPencilAlt>
      </button>

      <button className="delete">
        <FaTrash className="icon disabled"></FaTrash>

      </button>
    </div>
  )
}
