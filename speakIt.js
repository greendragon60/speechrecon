<script>
  var utterance = new SpeechSynthesisUtterance('Toodle pip');
  utterance.lang='en-US'; // for US english, en-GR for british
  window.speechSynthesis.speak(utterance);
</script>;
