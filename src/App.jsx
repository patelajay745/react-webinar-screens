import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  return (
    <div className="bg-blue-700 min-h-screen flex items-center justify-center">
      <div className="space-x-4">
        <Card />
      </div>
    </div>
  );
}

export default App;
