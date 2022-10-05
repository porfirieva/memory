import { useDispatch, useSelector } from "react-redux";
import {
  selectKeyWords,
  selectMemory,
  setDifinition,
} from "../../Slices/knowledgeSlice";

function Difinition() {
  const memory = useSelector(selectMemory);
  const keyWords = useSelector(selectKeyWords);
  const dispatch = useDispatch();

  console.log(memory.keyWords);

  return (
    <>
      <label>Дайте определения ключевым понятиям в 5-ти - 7-ми словах </label>
      <label>
        {keyWords[0]?.word}
        <input
          value={keyWords[0]?.difinition || ""}
          onChange={(e) => dispatch(setDifinition([0, e.target.value]))}
        />
      </label>
      <label>
        {keyWords[1]?.word}
        <input
          value={keyWords[1]?.difinition || ""}
          onChange={(e) => dispatch(setDifinition([1, e.target.value]))}
        />
      </label>
      <label>
        {keyWords[2]?.word}
        <input
          value={keyWords[2]?.difinition || ""}
          onChange={(e) => dispatch(setDifinition([2, e.target.value]))}
        />
      </label>
      <label>
        {keyWords[3]?.word}
        <input
          value={keyWords[3]?.difinition || ""}
          onChange={(e) => dispatch(setDifinition([3, e.target.value]))}
        />
      </label>
      <label>
        {keyWords[4]?.word}
        <input
          value={keyWords[4]?.difinition || ""}
          onChange={(e) => dispatch(setDifinition([4, e.target.value]))}
        />
      </label>
      <label>
        {keyWords[5]?.word}
        <input
          value={keyWords[5]?.difinition || ""}
          onChange={(e) => dispatch(setDifinition([5, e.target.value]))}
        />
      </label>
      <label>
        {keyWords[6]?.word}
        <input
          value={keyWords[6]?.difinition || ""}
          onChange={(e) => dispatch(setDifinition([6, e.target.value]))}
        />
      </label>
    </>
  );
}

export default Difinition;
