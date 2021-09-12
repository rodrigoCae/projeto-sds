import DataTable from "components/DataTable";
import Footer from "components/footer";
import NavBar from "components/navbar";

function App() {
  return (
    <>
    <NavBar/>
    <div className="App">
      <h1 className="text-primary">E AE!!!</h1>
      
      <DataTable/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
