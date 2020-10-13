function vaihdaVari() {
  const varit = ["blue", "orange", "olive", "pink"]
  const random = Math.floor(Math.random() * varit.length);
  document.getElementById("otsikko").style.color = varit[random];
}
