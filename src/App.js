import Actions from './components/Actions'
import Header from './components/Header'
import Logo from './components/Header/Logo'
import Notes from './components/Notes'
import NotesArea from './components/NotesArea'
import HighlightProvider from './context/HighlightContext'
import NoteFormProvider from './context/NoteFormContext'
import NoteListProvider from './context/NoteListContext'

function App() {
  return (
    <NoteFormProvider>
      <NoteListProvider>
        <HighlightProvider>
          <Header>
            <Logo></Logo>
            <Actions></Actions>
          </Header>
          <NotesArea>
            <Notes></Notes>
          </NotesArea>
        </HighlightProvider>
      </NoteListProvider>
    </NoteFormProvider>
  )
}

export default App
