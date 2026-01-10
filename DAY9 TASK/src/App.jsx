import { Card } from "./components/Card"
import './App.css'
function App() {
  
  return (
    <div className="CardContainer">
        <Card title="HTML" description="HTML is a language"/>
        <Card title="CSS" description="CSS is a language"/>
        <Card title="JAVA" description="JAVA is a language"/>
        <Card/>
        
    </div>
  )
}

export default App
