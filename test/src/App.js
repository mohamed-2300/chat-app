import logo from './logo.svg';
import './App.css';
// import ProductList from './test';

// import Salutation from './test';
// import Calcule from './test';
// import Jme3Rask from './ana';
// import TaskList from './test';
// import Gallery from './test';

function App() {
  // const tasks=['wahed','jouj','tlata'];
  // const produits = [
  //   { name: "Chaussures de sport", price: 50, category: "Chaussures" },
  //   { name: "T­shirt en coton", price: 20, category: "Vêtements" },
  //   { name: "Casque audio", price: 70, category: "Électronique" }];
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Salutation name="Mohamed" color='green' /> */}
        {/* <Calcule n1={5} /> */}
        {/* <Jme3Rask nom='mohamed' /> */}
        {/* <TaskList taskList={tasks} /> */}
        {/* <Gallery listPhoto={foto} /> */}
        {/* <ProductList products={produits} /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
