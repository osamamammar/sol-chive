import { useState } from "react";

const useToggle = ({ initialstate = false }) => {
  const [toggle, setToggle] = useState(initialstate);

  const display = () => setToggle(!toggle);

  return [display, toggle];
};

export default useToggle;
