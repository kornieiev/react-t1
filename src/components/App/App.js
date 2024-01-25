import { useDispatch, useSelector } from "react-redux";
import UserForm from "../UserForm/UserForm";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/operations";
import UserInfo from "../UserInfo/UserInfo";
import { getIsUserAdded } from "../../redux/selectors";

function App() {
  const isUserAdded = useSelector(getIsUserAdded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <UserForm />
      {isUserAdded && <UserInfo />}
    </>
  );
}

export default App;
