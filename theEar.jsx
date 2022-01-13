import React from 'react'

export default function theEar() {
    const texts = document.querySelector(".texts");

    window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    let Gcommand = "run"; //change this to Terminate and it will stop

    let p = document.createElement("p");
    p.classList.add("RecognizedText");

    recognition.addEventListener("result", (e) => {
  // console.log(e.results);
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  texts.appendChild(p);
  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }
    if (text.includes("portal off")) {
      p = document.createElement("p");
      Gcommand = "Terminate";
      // recognition.removeEventListener(bob);
      if (Gcommand !== "Terminate") {
        console.log("non-termination concluded");
      } else {
        p.classList.add("replay");
        p.innerText = "self termination process initiated";
        console.log("termination concluded");

        texts.appendChild(p);
      }
    }
    p = document.createElement("p");
  }
});

const bob = recognition.addEventListener("end", () => {
  // some kind of conditional restart is needed to shut this off for good.
  // then a button push to restart it maybe.
  console.log(Gcommand);
  //recognition.start();

  if (Gcommand !== "Terminate") {
    console.log("restarting it here boss");
    recognition.start();
  } else {
    console.log("no restart requested here boss");
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "I be back...";
    texts.appendChild(p);
    // at this point you must hit the restart button
  }
});

function commandSwitchBoard(t) {
  // a function that array.find over an array of commands
  // the find would return the command array index that triggered it
  //causing the switch statement to fire numericly

  // VoiceInstructions[
  vI = [
    ("wake up",
    "stop now",
    "Sleep",
    "start",
    "thinking about making",
    "post this",
    "whats your name",
    "list Commands",
    "portal say hello",
    "portal talk to me",
    "hey command"),
  ];
  //everybody does this first.
  p = document.createElement("p");
  p.classList.add("instructions");

  switch (
    vI.find((item, index) => {
      if (text.contains(item)) {
        return index;
      }
    })
  ) {
    // should maybe be 0,1,2
    // or else if you are overlaying with a personal version
    // of commands, you need to associate their commands to ours some how.
    case vI.indexOf("wake up"): {
      p = document.createElement("p");
      p.innerText = " I am awake";
      p.classList.add("instructions");
      texts.appendChild(p);
      break;
    }
    case vI.indexOf("stop now"): {
      recognition.stop();
      p.innerText = " Portal closed";
      break;
    }
    case vI.indexOf("Sleep"): {
      p.innerText = " listening for the words -wake up-";
      break;
    }
    case vI.indexOf("start"): {
      p.innerText = " starting nothing";
      break;
    }
    case vI.indexOf("thinking about making"):
      p.innerText = "I am thinking about making : start, stop, sleep, wake up";
      break;
    case vI.indexOf("post this"): {
      p.innerText = "the message has been posted";
      console.log("opening youtube");
      //window.open("https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ");
      break;
    }
    case vI.indexOf("whats your name"): {
      p.classList.add("replay");
      p.innerText =
        "I am the Personal Family Communications Portal, but you can call me Portal";
      break;
    }
    case vI.indexOf("list Commands"): {
      p.innerText = `the words -list commands- will show this information.
        1)the word -hey- causes the message to be addressed to a -person-, i.e. the -word- after hey  2) saying -post this- while speaking will cause the speech to be posted  3)start now 4)sleep 5)wake up 6)stop now`;
      break;
    }
    //("portal say hello")
    case vI.indexOf("portal say hello"): {
      p.classList.add("replay");
      p.innerText = "Welcome, beenvinou, bon jour, -nin hao";
      break;
    }
    case vI.indexOf("portal talk to me"):
      {
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
      }
      break;
    case vI.indexOf("how are you"): {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);

      break;
    }
    case vI.indexOf("hey command"): {
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
      }
    }
    //  else {
    // texts.appendChild(p);

    default:
      break;
  }
  // everybody does this last
  texts.appendChild(p);
    }
    
function handleButtonClick() {
    console.log("hi from the button");
    const MyButton = document.getElementById("restartButton1");

  if (Gcommand === "Terminate") {
    Gcommand = "run";
      myButton.style.backgroundColor = "black";
      recognition.start();
  } else {
    Gcommand = "Terminate";
  }
}
const myButton = document.getElementById("restartButton1");
myButton.onclick = () => handleButtonClick();
// this should be done in the restart button.
recognition.start();
    return (
        <div>
            <button id="restartButton1" class="restart" onClick="handleButtonClick"></button>
        </div>
    )
}
