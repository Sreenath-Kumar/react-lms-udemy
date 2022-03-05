import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

function MyAccount() {
  const logout = async () => {
    await signOut(auth);
  };
  return <span onClick={logout}>Logout</span>;
}
export default MyAccount;
