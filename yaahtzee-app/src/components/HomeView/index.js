import "./styles.css";
import React, { useEffect } from "react";
import DiceImage1 from "../../images/Dice1.png";
import DiceImage2 from "../../images/Dice2.png";
import DiceImage3 from "../../images/Dice3.png";
import DiceImage4 from "../../images/Dice4.png";
import DiceImage5 from "../../images/Dice5.png";
import DiceImage6 from "../../images/Dice6.png";
import DiceContainer from "../DiceContainer";
import {
  scoreOnes,
  scoreTwos,
  scoreThree,
  scoreFours,
  scoreFives,
  scoreSixes,
} from "../../ScoreItem";

function HomeView() {
  // test without actual diceValues from DiceContainer
  useEffect(() => {
    const diceValues = [1, 2, 3, 1, 5]; // replace this with your actual dice values
    const onesScore = scoreOnes(diceValues);
    document.getElementById("scoreOnes").textContent = onesScore;
  }, []);

  return (
    <div className="main-view">
      <div className="game-score">
        <h1>This is the main Game view</h1>
        <div className="score-container">
          <div className="upper-score-view">
            <table>
              <tr>
                <th>
                  <mark>Upper Section</mark>
                </th>
                <th>
                  <mark>Score</mark>
                </th>
              </tr>
              <tr>
                <td>
                  <img className="upper-square" src={DiceImage1} alt="1"></img>
                </td>
                <td id="scoreOnes">-</td>
              </tr>
              <tr>
                <td>
                  <img className="upper-square" src={DiceImage2} alt="2"></img>
                </td>
                <td id="scoreTwos">-</td>
              </tr>
              <tr>
                <td>
                  <img className="upper-square" src={DiceImage3} alt="3"></img>
                </td>
                <td id="scoreThrees">-</td>
              </tr>
              <tr>
                <td>
                  <img className="upper-square" src={DiceImage4} alt="4"></img>
                </td>
                <td id="scoreFours">-</td>
              </tr>
              <tr>
                <td>
                  <img className="upper-square" src={DiceImage5} alt="5"></img>
                </td>
                <td id="scoreFives">-</td>
              </tr>
              <tr>
                <td>
                  <img className="upper-square" src={DiceImage6} alt="6"></img>
                </td>
                <td id="scoreSixes">-</td>
              </tr>
              <tr>
                <td>Total Score</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Bonus</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>-</td>
              </tr>
            </table>
          </div>
          <div className="lower-score-view">
            <table id="upperScore">
              <tr>
                <th>
                  <mark>Lower Section</mark>
                </th>
                <th>
                  <mark>Score</mark>
                </th>
              </tr>
              <tr>
                <td>3 Of A Kind</td>
                <td id="scoreThreeOfAKind">-</td>
              </tr>
              <tr>
                <td>4 Of A Kind</td>
                <td id="scoreFourOfAKind">-</td>
              </tr>
              <tr>
                <td>Full House</td>
                <td id="scoreFullHouse">-</td>
              </tr>
              <tr>
                <td>SM Straight</td>
                <td id="scoreSmallStraight">-</td>
              </tr>
              <tr>
                <td>LG Straight</td>
                <td id="scoreLargeStraight">-</td>
              </tr>
              <tr>
                <td>YAHTZEE</td>
                <td id="scoreYahtzee">-</td>
              </tr>
              <tr>
                <td>CHANCE</td>
                <td id="scoreChanceScore">-</td>
              </tr>
              <tr>
                <td>BONUS YAHTZEE</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Total Score</td>
                <td>-</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <DiceContainer />
    </div>
  );
}

export default HomeView;
