import Description from "./Components/Description/Description";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Description
        title="Привет, давай учиться вместе!"
        text="Здесь можно закрепить знания."
      />
      <Form />
    </div>
  );
}

export default App;
