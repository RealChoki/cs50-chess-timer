// Get references to various HTML elements using their IDs and classes.
const timerSettingBtn = document.getElementById("change-time")
const timerSettingBtn2 = document.getElementById("sec-change-time")
const timerSetting = document.querySelector(".adjust-time")
const timerSetting2 = document.querySelector(".adjust-time2")
const buttons = document.querySelectorAll("button")

let isGameOn = false
let disableGame = false

// Add a click event listener to the first timer button.
timerSettingBtn.addEventListener("click", () => {
  // Show the time setting and dim the background.
  timerSetting.classList.remove("hidden")
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
  disableGame = true
  // Disable buttons except those within an element with class "papa."
  buttons.forEach(button => {
    if (button.parentElement.classList != "papa"){
        button.disabled = true
    }
  })
})

// Add a click event listener to the second timer button (similar to the first timer).
timerSettingBtn2.addEventListener("click", () => {
  timerSetting2.classList.remove("hidden")
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
  disableGame = true
  buttons.forEach(button => {
    if (button.parentElement.classList != "papa"){
        button.disabled = true
    }
  })
})

// Execute code when the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", () => {
    if(disableGame == false){
      isGameOn = true
      startGame()
    }
  })

  const cancelBtn = document.getElementById("cancel")
  const saveBtn = document.getElementById("save")
  const firstClock = document.getElementById("clock")

  // Add event listeners for the "cancel" and "save" buttons for the first timer.
  cancelBtn.addEventListener("click", () => {
    timerSetting.classList.add("hidden")
    document.body.style.backgroundColor = ""
    disableGame = true
    buttons.forEach(button => {
      button.disabled = false
    })
  })
  // Add a click event listener to the save button
  saveBtn.addEventListener("click", () => {
    // Retrieve user input for hours, minutes, and seconds.
    const hoursInput = parseInt(document.getElementById("hours").value, 10)
    const minutesInput = parseInt(document.getElementById("minutes").value, 10)
    const secondsInput = parseInt(document.getElementById("seconds").value, 10)

    timerSetting.classList.add("hidden")
    document.body.style.backgroundColor = ""
    disableGame = true

    // Enable buttons in your code (if necessary).
    buttons.forEach((button) => {
      button.disabled = false
    })

    // Start the timer with the provided input values
    startTimer(hoursInput, minutesInput, secondsInput, firstClock)
  })

  // Similar event listeners for the second timer (cancel and save).
  const cancelBtn2 = document.getElementById("cancel2")
  const saveBtn2 = document.getElementById("save2")
  const secondClock = document.getElementById("sec-clock")

  cancelBtn2.addEventListener("click", () => {
    timerSetting2.classList.add("hidden")
    document.body.style.backgroundColor = ""
    disableGame = false
    buttons.forEach(button => {
      button.disabled = false
    })
  })

  saveBtn2.addEventListener("click", () => {
    const hoursInput2 = parseInt(document.getElementById("hours2").value, 10)
    const minutesInput2 = parseInt(document.getElementById("minutes2").value, 10)
    const secondsInput2 = parseInt(document.getElementById("seconds2").value, 10)
  
    timerSetting2.classList.add("hidden")
    document.body.style.backgroundColor = ""
    disableGame = false
    buttons.forEach(button => {
      button.disabled = false
    })

    // Start the timer with the provided input values
    startTimer(hoursInput2, minutesInput2, secondsInput2, secondClock)
  })
})

  // Function to update the clock display with formatted time.
  function updateClock(clockElement, hours, minutes, seconds) {
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    clockElement.textContent = formattedTime
  }


  
  
  function startTimer(hours, minutes, seconds, clockElement) {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds
    
    const timerInterval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(timerInterval)
        console.log("Timer expired")
      } else {
        const hoursRemaining = Math.floor(totalSeconds / 3600)
        const minutesRemaining = Math.floor((totalSeconds % 3600) / 60)
        const secondsRemaining = totalSeconds % 60
        
        // Update the clock display with the formatted time
        updateClock(clockElement, hoursRemaining, minutesRemaining, secondsRemaining)
        
        totalSeconds--
      }
    }, 1000)
  }
  
  const volumeBtn = document.getElementById("volume-btn")
  const spanVolumeOn = document.getElementById("volume-on")
  const spanVolumeOff = document.getElementById("volume-off")
  
  // Toggle the volume icon
  volumeBtn.addEventListener("click", () => {
    spanVolumeOn.hidden = !spanVolumeOn.hidden
    spanVolumeOff.hidden = !spanVolumeOff.hidden
  })

  function startGame() {
    let moveCounter1 = 0;
    let moveCounter2 = 0;
    // let startGameMoveCounter = 0;
  
    // Define the event listener function for "first-tap."
    function firstTapClickHandler(e) {
      if (e.target.parentElement.id !== "change-time") {
        isGameOn = true;
        moveCounter1++;
  
        // if (startGameMoveCounter <= 2) {
        //   startGameMoveCounter++;
        //   // Clock Information
        //   const firstClock = document.getElementById("clock");
  
        //   const hoursInput = parseInt(document.getElementById("hours").value, 10);
        //   const minutesInput = parseInt(
        //     document.getElementById("minutes").value,
        //     10
        //   );
        //   const secondsInput = parseInt(
        //     document.getElementById("seconds").value,
        //     10
        //   );
  
        //   // Start the timer with the provided input values
        //   startTimer(hoursInput, minutesInput, secondsInput, firstClock);
        // }
  
        document.getElementById("move-counter-1").textContent = moveCounter1;
  
        document
          .querySelector(".first-tapping-field")
          .removeEventListener("click", firstTapClickHandler);
        document
          .querySelector(".second-tapping-field")
          .addEventListener("click", secondTapClickHandler);
  
        // Hide elements with class "hide."
        document.querySelectorAll(".hide").forEach((element) => {
          element.classList.add("hidden");
        });
      }
    }
  
    // Define the event listener function for "second-tap."
    function secondTapClickHandler(e) {
      if (e.target.parentElement.id !== "sec-change-time") {
        isGameOn = true;
        moveCounter2++;
  
        // if (startGameMoveCounter <= 2) {
        //   startGameMoveCounter++;
        //   // Clock Information
        //   const secondClock = document.getElementById("clock");
  
        //   const hoursInput2 = parseInt(
        //     document.getElementById("hours").value,
        //     10
        //   );
        //   const minutesInput2 = parseInt(
        //     document.getElementById("minutes").value,
        //     10
        //   );
        //   const secondsInput2 = parseInt(
        //     document.getElementById("seconds").value,
        //     10
        //   );
  
        //   // Start the timer with the provided input values
        //   startTimer(hoursInput2, minutesInput2, secondsInput2, secondClock);
        // }
  
        document.getElementById("move-counter-2").textContent = moveCounter2;
  
        document
          .querySelector(".second-tapping-field")
          .removeEventListener("click", secondTapClickHandler);
        document
          .querySelector(".first-tapping-field")
          .addEventListener("click", firstTapClickHandler);
  
        // Hide elements with class "hide."
        document.querySelectorAll(".hide").forEach((element) => {
          element.classList.add("hidden");
        });
      }
    }
  
    // Add click event listeners to elements with class "first-tap" and "second-tap."
    document
      .querySelector(".first-tapping-field")
      .addEventListener("click", firstTapClickHandler);
    document
      .querySelector(".second-tapping-field")
      .addEventListener("click", secondTapClickHandler);
  }
  