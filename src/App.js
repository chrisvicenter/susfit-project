import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/Footer";
import { Main } from "./styles/Main.css";
import MaterialTable from "material-table";
import { SusfitRouter } from "./router/SusfitRouter";
import { Modal } from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(true);
  }, []);

  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <SusfitRouter></SusfitRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
