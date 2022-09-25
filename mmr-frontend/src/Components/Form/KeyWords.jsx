import { useDispatch, useSelector } from "react-redux";
import {
  selectKeyWords,
  selectMemory,
  setKeyWords,
} from "../../Slices/memorySlice";

function KeyWords() {
  const memory = useSelector(selectMemory);
  const keyWords = useSelector(selectKeyWords);
  const dispatch = useDispatch();

  console.log(memory.keyWords);

  return (
    <>
      <label>Введите ключевые понятия </label>
      <input
        value={keyWords[0]?.word || ""}
        onChange={(e) => dispatch(setKeyWords([0, e.target.value]))}
      />
      <input
        value={keyWords[1]?.word || ""}
        onChange={(e) => dispatch(setKeyWords([1, e.target.value]))}
      />
      <input
        value={keyWords[2]?.word || ""}
        onChange={(e) => dispatch(setKeyWords([2, e.target.value]))}
      />
      <input
        value={keyWords[3]?.word || ""}
        onChange={(e) => dispatch(setKeyWords([3, e.target.value]))}
      />
      <input
        value={keyWords[4]?.word || ""}
        onChange={(e) => dispatch(setKeyWords([4, e.target.value]))}
      />
      <input
        value={keyWords[5]?.word || ""}
        onChange={(e) => dispatch(setKeyWords([5, e.target.value]))}
      />
      <input
        value={keyWords[6]?.word || ""}
        onChange={(e) => dispatch(setKeyWords([6, e.target.value]))}
      />
    </>
  );
}

export default KeyWords;
