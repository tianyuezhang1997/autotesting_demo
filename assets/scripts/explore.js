// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  if(typeof speechSynthesis === 'undefined') {
    alert("Sorry, you browser does not support speechSynthesis");
  }
  else {
    // On page load,, populate the “Select Voice” dropdown
    // Reference to https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices
    const voiceSelect = document.getElementById("voice-select");
    voiceSelect.addEventListener('load', populateVoiceList());
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    // When you click the “Press to Talk” button
    // - The text that you have typed into the “Text to speak here” textarea 
    //   should be spoken out loud using the voice that you have selected
    // - Only while the synthesizer is speaking, the face should swap to being open mouthed
    // Reference to https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
    const buttonSelect = document.querySelector('button');
    buttonSelect.addEventListener('click', event => {
      event.preventDefault();
      speak();
    });

  }
}

// Reference to https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices
function populateVoiceList() {
  const voices = speechSynthesis.getVoices();
  for(let i = 0; i < voices.length; i++) {
    let option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

// Reference to https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/start_event
//          and https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/end_event
//          and https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
function speak () {
  const textareaSelect = document.getElementById("text-to-speak");
  const utterThis = new SpeechSynthesisUtterance(textareaSelect.value);
  const imageSelect = document.querySelector('section > img');
  // Only while the synthesizer is speaking, the face should swap to being open mouthed
  utterThis.addEventListener('start', function(event) {
    imageSelect.src = "assets/images/smiling-open.png";
    imageSelect.alt = "Smiling open face";
  });
  utterThis.addEventListener('end', function(event) {
    imageSelect.src = "assets/images/smiling.png";
    imageSelect.alt = "Smiling face";
  });
  // The text that you have typed into the “Text to speak here” textarea
  // should be spoken out loud using the voice that you have selected
  const voiceSelect = document.getElementById("voice-select");
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  const voices = speechSynthesis.getVoices();
  for(let i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  speechSynthesis.speak(utterThis);
  textareaSelect.blur();
}