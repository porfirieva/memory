import { useDispatch, useSelector } from "react-redux";
import {
  selectKeyWords,
  selectMemory,
  setAssociations,
} from "../../Slices/knowledgeSlice";

function Associations() {
  const memory = useSelector(selectMemory);
  const keyWords = useSelector(selectKeyWords);
  const dispatch = useDispatch();

  console.log(memory.keyWords);

  return (
    <>
      <label>Свяжите понятие с ассоциацией </label>
      <label>
        {keyWords[0]?.word + " - " + keyWords[0]?.difinition}
        <input
          value={keyWords[0]?.associations || ""}
          onChange={(e) => dispatch(setAssociations([0, e.target.value]))}
        />
      </label>
      <label>
        {keyWords[1]?.word + " - " + keyWords[1]?.difinition}
        <input
          value={keyWords[1]?.associations || ""}
          onChange={(e) => dispatch(setAssociations([1, e.target.value]))}
        />
      </label>
      <label>
        {keyWords[2]?.word + " - " + keyWords[2]?.difinition}
        <input
          value={keyWords[2]?.associations || ""}
          onChange={(e) => dispatch(setAssociations([2, e.target.value]))}
        />
      </label>
      <label>
        {keyWords[3]?.word + " - " + keyWords[3]?.difinition}
        <input
          value={keyWords[3]?.associations || ""}
          onChange={(e) => dispatch(setAssociations([3, e.target.value]))}
        />
      </label>
      <label>
        {keyWords[4]?.word + " - " + keyWords[4]?.difinition}
        <input
          value={keyWords[4]?.associations || ""}
          onChange={(e) => dispatch(setAssociations([4, e.target.value]))}
        />
      </label>
      <label>
        {keyWords[5]?.word + " - " + keyWords[5]?.difinition}
        <input
          value={keyWords[5]?.associations || ""}
          onChange={(e) => dispatch(setAssociations([5, e.target.value]))}
        />
      </label>
      <label>
        {keyWords[6]?.word + " - " + keyWords[6]?.difinition}
        <input
          value={keyWords[6]?.associations || ""}
          onChange={(e) => dispatch(setAssociations([6, e.target.value]))}
        />
      </label>
    </>
  );
}

export default Associations;
