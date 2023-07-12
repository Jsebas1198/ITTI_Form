import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import ButtonSection from './components/ButtonSection';
import CardList from './components/CardsList';
import ExampleComponent from './components/Test';

function App() {
  return (  
  <>
  <header>
    <ButtonSection />
  </header>
  <main>
    <CardList/>
  </main>
  </>
  );

}

export default App;
