function titleCase(str) {

  var newSentence = str.toLowerCase().split(" ");

  for (var i=0; i<newSentence.length; i++){
    var capitilizedFirst = newSentence[i].split("");
    capitilizedFirst[0] = capitilizedFirst[0].toUpperCase();
    newSentence[i] = capitilizedFirst.join("")
  }
  return newSentence.join(" ");
}
titleCase("I'm a little tea pot");