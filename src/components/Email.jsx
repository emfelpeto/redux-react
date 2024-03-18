import { useSelector, useDispatch } from "react-redux";
import { changeEmail } from "../redux/userSlice";

export function Email() {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const handleForm = (event) => {
    event.preventDefault();
    dispatch(changeEmail(event.target.elements.inputEmail.value))
  }

  return (
    // <input
    //   type="email"
    //   value={email}
    //   onChange={(event) => dispatch(changeEmail(event.target.value))}
    // />
    <form onSubmit={handleForm}>
      <input
        type="email"
        name="inputEmail" />
      <input type="submit" value="Change Email" />
    </form>
  );
}
