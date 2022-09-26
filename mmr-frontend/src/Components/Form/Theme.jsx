import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../../Slices/memorySlice";

function Theme() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <>
      <label>Введите название темы </label>
      <input
        value={theme}
        onChange={(e) => dispatch(setTheme(e.target.value))}
      />
    </>
  );
}

export default Theme;
