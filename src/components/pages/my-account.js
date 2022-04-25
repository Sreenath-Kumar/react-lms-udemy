import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function MyAccount() {
  console.log("my account render");
  const navigate = useNavigate();
  const logout = async () => {
    console.log("logout clicked");
    await signOut(auth);
    navigate("/");
  };
  return (
    <span className="logout-btn" onClick={logout}>
      Logout
    </span>
  );
}
export default MyAccount;
