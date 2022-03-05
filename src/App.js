import './App.css';
import Profile from './Profile/Component/Profile';
import test from './Profile/Component/test';




function App() {
  const details ={
     FullName : 'Amine',
     Bio: 'test',
     Profession:'teacher',
  }
  const handleName = (name) => alert (`${name}`)

  return (
    <div className="App">
     
     <Profile info={details} name={handleName} />
     
    </div>
  );
}

export default App;
