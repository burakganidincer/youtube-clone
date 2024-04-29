import { useState } from "react";
import { SiPanasonic } from "react-icons/si";

const StringArea = ({ text }) => {
  const [expand, setExpand] = useState(false);

  let shortText = text;
  /*Bu alan kapalıysa ve yazı 300 harften uzunsa
  yazıyı kes ve sonuna ...'DAHA FAZLA' yaz. */

  if (!expand && text.length > 300) {
    shortText = text.slice(0, 300) + " .. daha fazla";
  }

  return (
    <div onClick={() => setExpand(!expand)}>
      {shortText.split("\n").map((line) => (
        <span>
          {line} <br />
        </span>
      ))}
    </div>
  );
};

export default StringArea;
