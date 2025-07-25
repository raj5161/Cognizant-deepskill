import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Components/CalculateScore'; // Adjust the path if needed

function App() {
  return (
    <div>
      <CalculateScore 
        Name="Steeve"
        School="DNV Public School"
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;

