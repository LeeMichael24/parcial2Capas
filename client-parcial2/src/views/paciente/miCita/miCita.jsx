import './miCita.css'
import Navbar from "../../../components/navbar/navbar";
import Menu from "../../../components/menu/menu";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PatientAppointmentsList from "./appointment/PatientAppointmentsList";

function MiCita() {
  const buttons = [
    {
      icon: <LogoutRoundedIcon />,
      name: "Record médico",
      path: "/paciente/user/record",
    },
    {
      icon: <LogoutRoundedIcon />,
      name: "Mis Citas",
      path: "/paciente/appointment/own",
    },
    { icon: <LogoutRoundedIcon />, name: "Cerrar sesión", path: "/login" },
  ];

  return (
    <section className="PadreHomeUser">
      <Navbar />
      <div className="UserHome">
        <div className="left-container-user">
          <div className="pacienteContainer pacienteCita">
            <h1>Mis Citas</h1>
            <div>
                <PatientAppointmentsList />
            </div>
          </div>
        </div>
        <div className="right-container-user">
          <Menu buttons={buttons} />
        </div>
      </div>
    </section>
  );
}

export default MiCita;
