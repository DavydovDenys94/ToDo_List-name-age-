import React, { useState } from "react";
import Card from "../Ui/Card";
import classes from "./Counter.module.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Card className={classes.count}>
      <label>Counter</label>
      <input value={count} />
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={(e) => {
          setCount(count - 1);
        }}
      >
        Уменьшить
      </button>
    </Card>
  );
};
export default Counter;

// import React, { useState } from "react";

// import Card from "../Ui/Card";

// const Counter = (props) => {
//   const [count, setCount] = useState(0);
//   return (
//     <Card>
//       <label>Counter</label>
//       <input type="number" value={count} />
//       <button
//         onClick={(e) => {
//           setCount(count + 1);
//         }}
//       >
//         Add one
//       </button>
//     </Card>
//   );
// };
// export default Counter;
