import { useEffect, useState } from "react";

export default function App() {
  const [flag, setFlag] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636861`
    )
      .then((res) => res.text())
      .then((data) => {
        setFlag(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      let index = 0;
      const intervalID = setInterval(() => {
        setDisplayText((prev) => prev + flag[index]);
        index++;
        if (index === flag.length) {
          clearInterval(intervalID);
        }
      }, 500);
    }
  }, [loading, flag]);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
      <ul>
        {displayText.split(``).map((char, index) => (
          <li key={index}>{char}</li>
        ))}
      </ul>
    </div>
  );
}

// Bonus: Script used to obtain the URL in step 2
// document.querySelectorAll('code[data-class^="23"] div[data-tag$="93"] span[data-id*="21"] i.char')
//    .forEach(el => console.log(el.getAttribute('value')));

//<FLAG> and <LINK> Below
//charity - https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636861
