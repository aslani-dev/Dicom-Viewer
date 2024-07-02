import { useDispatch } from "react-redux";
import SelectFileRenderer from "./SelectFileRenderer";

function SelectFile() {
  const dispatch = useDispatch();
  const handleFileChange = (event) => {
    const files = event.target.files;
    // dispatch selected file
    //dispatch()
  };
  return <SelectFileRenderer handleFileChange={handleFileChange} />;
}

export default SelectFile;
