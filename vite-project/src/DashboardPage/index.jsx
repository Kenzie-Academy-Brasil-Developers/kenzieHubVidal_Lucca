import { useNavigate } from "react-router-dom";
export const DashboardPage = ({ user }) => {

    const navigate = useNavigate();
    const backRegister = () => {
        navigate("/")
    }

    return (


        <div>
            <header>
                <h3 className="header" >Kenzie Hub</h3>
                <button onClick={backRegister} className="logOut"> Sair </button>
            </header>
            <div className="note">
                <h4>Que pena! Estamos em desenvolvimento</h4>
                <p className="warning">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </div>


        </div>


    )
}