import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Table from "../components/table";
import { shiftAsciiArr, toAscii } from "../lib";
import "../scss/pages/simpleSubstitution.scss";

export type TMode = "noLimit" | "alphabet";

const planeArr: string[] = [];
for (let i = 0; i < 26; i++) {
  const char = String.fromCharCode(i + 97);
  planeArr.push(char);
}

export default function SimpleSubstitution() {
  const [planeText, setPlaneText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [shift, setShift] = useState(0);
  const [mode, setMode] = useState<TMode>("alphabet");
  const [tableArr, setTableArr] = useState<string[][]>([]);

  const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (mode === "alphabet") {
      // If mode is alphabet, then can't input other text except lower alphabet
      const str = e.target.value;
      const lastChar = str.substring(str.length - 1, str.length);
      const ascii = lastChar.charCodeAt(0);
      if ((ascii > 96 && ascii < 123) || str === "") {
        setPlaneText(e.target.value);
      }
    } else {
      setPlaneText(e.target.value);
    }
  };

  const shiftHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShift(parseInt(value));
  };

  const optionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value as TMode);
    setPlaneText("");
    setShift(0);
  };

  useEffect(() => {
    const asciiArr = toAscii(planeText);
    const shiftArr = shiftAsciiArr(asciiArr, shift, mode);
    const cipher = String.fromCharCode(...shiftArr);
    setCipherText(cipher);

    // Set tableArr
    const cipherArr: string[] = [];
    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(...shiftAsciiArr([i + 97], shift, mode));
      cipherArr.push(char);
    }
    setTableArr([planeArr, cipherArr]);
  }, [planeText, shift, mode]);

  return (
    <div className="simpleSubstitution">
      <div className="optionArea">
        <select onChange={optionHandler}>
          <option value="alphabet">alphabet</option>
          <option value="noLimit">noLimit</option>
        </select>
      </div>
      <div className="contentArea">
        <textarea cols={30} rows={3} onChange={inputHandler} value={planeText}></textarea>
        <FontAwesomeIcon className="icon" icon={faArrowRight} />
        {mode === "alphabet" ? (
          <input type="number" value={shift} onChange={shiftHandler} min={0} max={25} />
        ) : (
          <input type="number" value={shift} onChange={shiftHandler} />
        )}

        <FontAwesomeIcon className="icon" icon={faArrowRight} />
        <textarea cols={30} rows={3} readOnly value={cipherText}></textarea>
      </div>
      <Table data={tableArr} />
    </div>
  );
}
