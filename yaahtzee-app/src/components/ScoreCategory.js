import { useState } from "react";

export default function ScoreCategory(props) {
  const [categoryScore, setCategoryScore] = useState(null);
  const [used, setUsed] = useState(false);
  const handleClick = () => {
    const score = props.scoreFunction(props.diceValues);
    setCategoryScore(score);
    setUsed(true);
  };

  return (
    <div onClick={handleClick}>
      <tr>
        <td>
          <img className="upper-square" src={props.image} alt={props.alt}></img>
        </td>
        <td>{used ? categoryScore : ""}</td>
      </tr>
    </div>
  );
}