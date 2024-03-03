import CardList from "./CardList";
import { useUserContext } from "../../context/userContext";


export default function Profile() {
  
const {currentUser} = useUserContext();
  return (
    <>
    {(currentUser.userType == 'user'||!currentUser.userType)?"You do not have permission to view":<CardList/>}
    </>
  );
}
