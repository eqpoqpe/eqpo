import { useEffect } from "react";
import { useStateLock } from "react-state-lock";

function App() {
  const fetchData = useStateLock(
    () => {
      fetch("https://eqpo.ml/display.json")
        .then((response) = > response.json())
        .then((result) = > { });
    }
  );
  
  return (
    <div onClick={fetchData}>
      <p>Sync Profiles</p>
    </div>
  );
}
