import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PacientsList from "./components/PacientsList";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";

function App() {
  const [pacientsList, setPacientsList] = useState([]);
  const [pacient, setPacient] = useState({});

  useEffect(() => {
    const getLS = () => {
      const pacientsLS = JSON.parse(localStorage.getItem("pacients")) ?? [];
      setPacientsList(pacientsLS);
    };
    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacients", JSON.stringify(pacientsList));
  }, [pacientsList]);

  const deletePacient = (id) => {
    //Update the pacientsList with the options not deleted

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedPacients = pacientsList.filter((pacient) => pacient.id !== id);
        setTimeout(() => {
          setPacientsList(updatedPacients);
        }, 500);
      }
    });
  };

  return (
    <div className="bg-slate-100 min-h-screen">
      <Header></Header>
      <div className="sm:block md:flex">
        <Form
          pacientsList={pacientsList}
          setPacientsList={setPacientsList}
          pacientToUpdate={pacient}
          setPacientToUpdate={setPacient}
        ></Form>
        <PacientsList
          pacientsList={pacientsList}
          setPacient={setPacient}
          deletePacient={deletePacient}
        ></PacientsList>
      </div>
    </div>
  );
}

export default App;
