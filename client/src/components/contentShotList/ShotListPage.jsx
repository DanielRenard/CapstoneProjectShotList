import { useUserContext } from "../../context/userContext";
import ShotList from "./ShotList";


export default function ShotListPage() {
  
const {currentUser} = useUserContext();
  return (
    <>
    {(currentUser.userType == 'user'||!currentUser.userType)?"You do not have permission to view":<ShotList/>}
    </>
  );
}
