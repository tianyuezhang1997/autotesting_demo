// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // When you select a horn from the drop down menu, the following should occur:
  // - The correct image should display
  // - The correct audio sound file should be set
  const hornSelect = document.getElementById('horn-select');
  hornSelect.addEventListener('change', event => {
    loadMultimedia(hornSelect.value);
  });
  
  // When you change the volume on the slider, the following should occur:
  // - At zero volume, the mute icon (level 0) should be displayed
  // - From 1 to < 33 volume the first volume level should be displayed
  // - From 33 to < 67 volume the second volume level should be displayed
  // - From 67 and up the third volume level should be displayed
  // - The correct volume icon should be set
  // - The corresponding volume should be set for the audio element (note: this element’s volume is not out of 100)
  const volumeSelect = document.getElementById('volume');
  volumeSelect.addEventListener('input', event => {
    updateVolume(volumeSelect.value);
  });

  // When you click the “Play Sound” button the following should occur:
  // - The corresponding sound for the horn selected should play out loud at the specified volume
  // - If the Party Horn is selected, confetti should shoot out out, as shown in the video
  const buttonSelect = document.querySelector('button');
  buttonSelect.addEventListener('click', event => {
    playAudio();
  });
}

/** Load image & audio based on the option being selected
 * @param option is a horn option from the drop down menu
 * @return N/A
 */
function loadMultimedia(option) {
  const imageSelect = document.querySelector('section > img');
  const audioSelect = document.querySelector('.hidden');

  switch (option) {
    case "air-horn" :
      imageSelect.src = "assets/images/air-horn.svg";
      imageSelect.alt = "Air Horn";
      audioSelect.src = "assets/audio/air-horn.mp3";
      break;
    case "car-horn" :
      imageSelect.src = "assets/images/car-horn.svg";
      imageSelect.alt = "Car Horn";
      audioSelect.src = "assets/audio/car-horn.mp3";
      break;
    case "party-horn" :
      imageSelect.src = "assets/images/party-horn.svg";
      imageSelect.alt = "Party Horn";
      audioSelect.src = "assets/audio/party-horn.mp3";
      break;
    default : 
      imageSelect.src = "assets/images/no-image.png";
      imageSelect.alt = "No image selected";
      audioSelect.src = "";
  }
  
  // For testing purpose only
  console.log("--------------------------------------------");
  const hornSelect = document.getElementById('horn-select');
  console.log(hornSelect.value);
  console.log(imageSelect.src);
  console.log(imageSelect.alt);
  console.log(audioSelect.src);
}

/** Update both [volume level icon] and [audio volume] based on the volume slider
 * @param volume is a value comes from the volume slider
 * @return N/A
 */
function updateVolume(volume) {
  const imageSelect = document.querySelector('#volume-controls > img');
  const audioSelect = document.querySelector('.hidden');

  audioSelect.volume = volume / 100;

  if (volume == 0) {
    imageSelect.src = "assets/icons/volume-level-0.svg";
    imageSelect.alt = "Volume level 0";
  }
  else if (volume < 33) {
    imageSelect.src = "assets/icons/volume-level-1.svg";
    imageSelect.alt = "Volume level 1";
  }
  else if (volume < 67) {
    imageSelect.src = "assets/icons/volume-level-2.svg";
    imageSelect.alt = "Volume level 2";
  }
  else {
    imageSelect.src = "assets/icons/volume-level-3.svg";
    imageSelect.alt = "Volume level 3";
  }

  // For testing purpose only
  console.log("--------------------------------------------");
  const volumeSelect = document.getElementById('volume');
  console.log(volumeSelect.value);
  console.log(imageSelect.src);
  console.log(imageSelect.alt);
  console.log(audioSelect.volume);
}

/** Play audio and display confetti if the [Party Horn] is selected
 * @param N/A
 * @return N/A
 */
function playAudio() {
  const audioSelect = document.querySelector('.hidden');
  const hornSelect = document.getElementById('horn-select');
  
  audioSelect.play();
  
  if (hornSelect.value == "party-horn") {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}

