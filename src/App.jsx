import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="raffle">
        <div class="header">
          <div className="title">
            RAFFLE<br></br>DAPP
          </div>
          <button>Connect Wallet</button>
        </div>
        <div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            ✓ Passport XYZ
          </span>
        </div>
        <div
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Humanity Score: 130
        </div>
        <button className="enter-raffle">ENTER RAFFLE</button>
        <div
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Participants
        </div>
        <div className="participant-list">
          <div>
            <div>1. 0x0001..ABCDE</div>
            <div>2. 0x0001..ABCDE</div>
            <div>3. 0x0001..ABCDE</div>
            <div>4. 0x0001..ABCDE</div>
            <div>5. 0x0001..ABCDE</div>
            <div>6. 0x0001..ABCDE</div>
          </div>
          <div>
            <div>7. 0x0001..ABCDE</div>
            <div>8. 0x0001..ABCDE</div>
            <div>9. 0x0001..ABCDE</div>
            <div>10. 0x0001..ABCDE</div>
            <div>11. 0x0001..ABCDE</div>
            <div>12. 0x0001..ABCDE</div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
