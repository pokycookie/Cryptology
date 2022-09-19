import { faArrowRight, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Table from "../components/table";
import { shuffle, toUppercase } from "../lib";
import "../scss/pages/anyPermutation.scss";

const planeArr: string[] = [];
for (let i = 0; i < 26; i++) {
  const char = String.fromCharCode(i + 97);
  planeArr.push(char);
}

export default function AnyPermutation() {
  const [planeText, setPlaneText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [cipherArr, setCipherArr] = useState<string[]>([]);

  const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const str = e.target.value;
    const lastChar = str.substring(str.length - 1, str.length);
    const ascii = lastChar.charCodeAt(0);
    if ((ascii > 96 && ascii < 123) || str === "") {
      setPlaneText(e.target.value);
    }
  };

  const shuffleCipher = () => {
    const shuffleArr = shuffle<string>(planeArr);
    setCipherArr(toUppercase(shuffleArr));
  };

  useEffect(() => {
    let tempCipher = "";
    for (let i = 0; i < planeText.length; i++) {
      const char = planeText.charAt(i);
      const index = planeArr.findIndex((value) => value === char);
      const cipher = cipherArr[index];
      tempCipher = tempCipher.concat(cipher);
    }
    setCipherText(tempCipher);
  }, [cipherArr, planeText]);

  // Initailize
  useEffect(() => {
    shuffleCipher();
  }, []);

  return (
    <div className="anyPermutation">
      <button onClick={shuffleCipher}>
        <FontAwesomeIcon icon={faArrowsRotate} />
      </button>
      <div className="contentArea">
        <textarea cols={30} rows={3} onChange={inputHandler} value={planeText}></textarea>
        <FontAwesomeIcon className="icon" icon={faArrowRight} />
        <textarea className="cipher" cols={30} rows={3} readOnly value={cipherText}></textarea>
      </div>
      <Table data={[planeArr, cipherArr]} />
    </div>
  );
}
