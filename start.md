const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
p.classList.add("RecognizedText");

recognition.addEventListener("result", (e) => {
  console.log(e.results);
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  let heyCommand = "hey";

  //if (e.results[0].isFinal && text.includes("hey")) {
  if (e.results[0].isFinal && text.includes(heyCommand)) {
    np = document.createElement("p");
    //NP is not recognized voice np.classList.add("givetoshane");
    let textArray = text.split(" ");
    let arrayHeyLoc = textArray.indexOf("hey");
    np.classList.add("directions");
    console.log(arrayHeyLoc, "-", textArray);
    let heyName = textArray[arrayHeyLoc + 1];
    np.innerText =
      "@" + textArray[arrayHeyLoc + 1] + " the above message is for you";

    //console.log("the above message is for", textArray[arrayHeyLoc + 1]);
    let difText = "the above message is for" + textArray[arrayHeyLoc + 1];
    //console.log("difText", difText);
    // np.innerText = difText;
    texts.appendChild(np);
    //     textArray[arrayHeyLoc] = "@";
    //     text = text + arrayHeyLoc;
    //     text = textArray.join("");
  } else {
    texts.appendChild(p);
  }

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }
    if (text.includes("portal talk to me")) {
      p = document.createElement("p");
      //p.classList.add("v2");
      p.classList.add("replay");
      var Butterance = new SpeechSynthesisUtterance("Toodle pip");
      //Butterance.voice=
      Butterance.volume = 1.0;
      //Butterance.onresume;
      var Futterance = new SpeechSynthesisUtterance(
        "your deaf, what good would that do?"
      );

      Futterance.lang = "fr-fr"; // for US english, en-GR for british
      Butterance.lang = "en-GR"; // for US english, en-GR for british
      window.speechSynthesis.speak(Futterance);
      window.speechSynthesis.speak(Butterance);
      p.innerText = "you Americans cant keep your pie holes shut, can you?";
      texts.appendChild(p);
    }
    if (text.includes("portal say hello")) {
      p = document.createElement("p");
      //p.classList.add("v2");
      p.classList.add("replay");

      p.innerText = "Welcome, beenvinou, bon jour, -ni hao";
      texts.appendChild(p);
    }

    if (text.includes("List Commands") || text.includes("list commands")) {
      p = document.createElement("p");
      p.classList.add("directions");
      p.innerText = `the words -list commands- will show this information.
        1)the word -hey- causes the message to be addressed to a -person-, i.e. the -word- after hey  2) saying -post this- while speaking will cause the speech to be posted  3)start now 4)sleep 5)wake up 6)stop now`;
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "I am the Personal Family Communications Portal, but you can call me Portal";
      texts.appendChild(p);
    }

    if (text.includes("post this") || text.includes("Post this")) {
      p = document.createElement("p");
      p.classList.add("instructions");
      p.innerText = "the message has been posted";
      texts.appendChild(p);
      console.log("opening youtube");
      // window.open("https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ");
    }
    if (
      text.includes("thinking about making") ||
      text.includes("Thinking about making")
    ) {
      p = document.createElement("p");
      p.classList.add("instructions");
      p.innerText = "I am thinking about making : start, stop, sleep, wake up";
      texts.appendChild(p);
      console.log("opening youtube");
    }
    if (text.includes("start") || text.includes("Start")) {
      p = document.createElement("p");
      p.classList.add("instructions");
      p.innerText = " starting nothing";
      texts.appendChild(p);
      console.log("opening youtube");
    }
    if (text.includes("sleep") || text.includes("Sleep")) {
      p = document.createElement("p");
      p.classList.add("instructions");
      p.innerText = " listening for the words -wake up-";
      texts.appendChild(p);
      console.log("opening youtube");
    }
    if (text.includes("stop now") || text.includes("Stop now")) {
      recognition.stop();
      p = document.createElement("p");
      p.classList.add("instructions");
      p.innerText = " Portal closed";
      texts.appendChild(p);
      console.log("opening youtube");
    }
    if (text.includes("wake up") || text.includes("Wake up")) {
      p = document.createElement("p");
      p.classList.add("instructions");
      p.innerText = " I am awake";
      texts.appendChild(p);
      console.log("opening youtube");
      // window.open("https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ");
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
