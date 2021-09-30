import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import BookList from './components/BookList';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Hello from './components/Hello';
import SingleBook from './components/SingleBook';
import Horror from './data/horror.json'




function App() {
  return (
    <div className="App">
      <MyNav />
      <Hello />
      <WarningSign text='Bruh 💀☠️'/>
      <SingleBook book={Horror[0]}/>
      <BookList />
      <MyFooter />
    </div>
  );
}


export default App;
