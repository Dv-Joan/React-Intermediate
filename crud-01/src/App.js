import './App.css';
import ContactForm from './Components/ContactForm';
import CrudApp from './Components/CrudApp';
import Modals from './Components/Modals';

function App() {
  return (
    <div className='App'>
      <CrudApp />
      <ContactForm />
      <Modals/>
    </div>
  );
}

export default App;
