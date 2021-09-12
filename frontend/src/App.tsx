import Barchart from "components/barchart";
import DataTable from "components/DataTable";
import Donutchart from "components/donutchart";
import Footer from "components/footer";
import NavBar from "components/navbar";

function App() {
  return (
    <>
    <NavBar/>
    <div className="App">
      <h1 className="text-primary py-3">Dashboard Teste</h1>
      
      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary"> Taxa de sucesso (%)</h5>
          <Barchart/>
        </div>
        <div className="col-sm-6">
          <h5> Todas as vendas</h5>
          <Donutchart/>
        </div>
      </div>

      <div className="py-3">
        <div className="text-primary">Todas as vendas
        
        </div>
      </div>
      <DataTable/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
