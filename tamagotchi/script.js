//(с)Давай сегодня закостылим, а завтра нормально напишем

let food = Math.floor((Math.random() * (101 - 49) + 49));
let clean = Math.floor((Math.random() * (101 - 49) + 49));
let happiness = Math.floor((Math.random() * (101 - 49) + 49));
let seconds;
let timer;
let timerc;
let secondsc;

function init() {
  sec = 0;
  seconds = setInterval(tick, 1000);
}

function tick() {
  sec++;
  document.getElementById("second").
  childNodes[0].nodeValue = sec;
}

function initс() {
  secс = 0;
  secondsс = setInterval(tickс, 1000);
}

function tickс() {
  secс++;
  document.getElementById("secondс").
  childNodes[0].nodeValue = secс;
}

let a = document.getElementById("main-button1")

function blockhid1() {
  Start1();
  init();
  document.getElementsByClassName('wrapper')[0].style.display = "block";
  document.getElementById('main-button1').disabled = true;
  document.getElementById('main-button2').disabled = true;
}
a.addEventListener("click", blockhid1)


let b = document.getElementById("main-button2")

function blockhid2() {
  Start2();
  initс();
  document.getElementsByClassName('wrapper-2')[0].style.display = "block";
  document.getElementById('main-button2').disabled = true;
  document.getElementById('main-button1').disabled = true;
}
b.addEventListener("click", blockhid2)


function TamagochiDog(time = 2) {


  let total = food + clean + happiness;

  if (food == 0 || clean == 0 || happiness == 0) {
    clearInterval(timer);
    clearInterval(seconds);
  }
  if (food > 70) {
    food = 72;
  }
  if (clean > 70) {
    clean = 72;
  }
  if (happiness > 70) {
    happiness = 72;
  }
  if (food < 2) {
    food = 2;
  }
  if (clean < 2) {
    clean = 2;
  }
  if (happiness < 2) {
    happiness = 2;
  }

  if (food <= 2 || clean <= 2 || happiness <= 2) {
    document.getElementById("pet").src = "img/runaway.jpg";
    document.getElementById('run').innerHTML = 'Your pet ran away from you';
    document.getElementById("reload").style.display = "block";
    document.getElementById('eat').disabled = true;
    document.getElementById('wash').disabled = true;
    document.getElementById('walk').disabled = true;
  } else if (total > 200) {
    document.getElementById("pet").src = "img/happymops.jpg";
  } else if (total > 100) {
    document.getElementById("pet").src = "img/tiredmops.jpg";
  } else if (total > 50) {
    document.getElementById("pet").src = "img/badmops.jfif";
  }

  food = food - parseInt(time);
  clean = clean - parseInt(time);
  happiness = happiness - parseInt(time);


  document.getElementById('food').style.width = food + 'px';
  document.getElementById('clean').style.width = clean + 'px';
  document.getElementById('happiness').style.width = happiness + 'px';


  document.getElementById('food').innerHTML = food + '%';
  document.getElementById('clean').innerHTML = clean + '%';
  document.getElementById('happiness').innerHTML = happiness + '%';

}


function Start1() {
  timer = setInterval(TamagochiDog, 1000);

}

function TamagochiCat(timec = 1) {


  let total = food + clean + happiness;

  if (food == 0 || clean == 0 || happiness == 0) {
    clearInterval(timerc);
    clearInterval(secondsс);
  }
  if (food > 100) {
    food = 101;
  }
  if (clean > 100) {
    clean = 101;
  }
  if (happiness > 100) {
    happiness = 101;
  }
  if (food < 1) {
    food = 1;
  }
  if (clean < 1) {
    clean = 1;
  }
  if (happiness < 1) {
    happiness = 1;
  }

  if (food <= 1 || clean <= 1 || happiness <= 1) {
    document.getElementById("petc").src = "img/cat4.jpg";
    document.getElementById('runc').innerHTML = 'Your pet ran away from you';
    document.getElementById("reloadc").style.display = "block";
    document.getElementById('eatc').disabled = true;
    document.getElementById('washc').disabled = true;
    document.getElementById('walkc').disabled = true;
  } else if (total > 200) {
    document.getElementById("petc").src = "img/cat1.jpg";
  } else if (total > 100) {
    document.getElementById("petc").src = "img/cat3.jpg";
  } else if (total > 50) {
    document.getElementById("petc").src = "img/cat2.jpg";
  }

  food = food - parseInt(timec);
  clean = clean - parseInt(timec);
  happiness = happiness - parseInt(timec);


  document.getElementById('foodc').style.width = food + 'px';
  document.getElementById('cleanc').style.width = clean + 'px';
  document.getElementById('happinessc').style.width = happiness + 'px';


  document.getElementById('foodc').innerHTML = food + '%';
  document.getElementById('cleanc').innerHTML = clean + '%';
  document.getElementById('happinessc').innerHTML = happiness + '%';

}


function Start2() {
  timerc = setInterval(TamagochiCat, 1000);

}


function Eat() {
  food += 30;
  clean -= 20;
}


function Wash() {
  clean += 40;
  happiness -= 20;
}


function Run() {
  happiness += 15;
  food -= 10;
}

function Eatc() {
  food += 30;
  clean -= 20;
}


function Washc() {
  clean += 40;
  happiness -= 20;
}


function Runc() {
  happiness += 15;
  food -= 10;
}