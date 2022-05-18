import { useState } from 'react'
import { FaBan, FaCheck } from 'react-icons/fa'
import { useNoteForm } from '../../context/NoteFormContext'
import { useNoteList } from '../../context/NoteListContext'
import './styles.css'

export default function NoteForm() {


  const { noteList, setNoteList } = useNoteList()
  const { title, setTitle, description, setDescription, visibleForm, setVisibleForm} = useNoteForm()

  function submitHandler(e) {
    e.preventDefault();

    setNoteList([
      ...noteList,
      {
        id: String(Math.floor(Math.random() * 1000)),
        title,
        description,
      }
    ])

  }

  return (
    <form className='note-menu' onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Titulo</label>
        <input id='title' value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Informe um titulo' />
      </div>

      <div>
        <label htmlFor="note">Nota</label>
        <textarea id="note" rows="10" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Escreva a sua nota'>

        </textarea>
      </div>

      <div className='buttons'>
        <button onClick={() => setVisibleForm(false)} className="cancel">
          <FaBan className='icon' />
        </button>
        <button type="submit" className="confirm">
          <FaCheck className='icon' />
        </button>
      </div>
    </form>
  )
}
