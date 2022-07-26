setInterval(function () {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
  
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
  }, 1000);
  

// setInterval(function(){
//     var a = new Date();
//     hourtime = a.getHours();
//     minutetime = a.getMinutes();
//    secondtime = a.getSeconds();

//   var hourserotation = 30 * hourtime + minutetime /2;
//   var minuterotation = 6 * minutetime;
//   var  secondrotation = 6 * secondtime;


//    hour.style.transform = `rotate(${hourserotation}deg)`;
//    minute.style.transform = `rotate(${minuterotation}deg)`;
//    second.style.transform = `rotate(${srotation}deg)`;


// },1000);