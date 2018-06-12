let btn = document.querySelector('.btn');

function myAnimation() {
    let box = document.querySelector('.box'),
        pos = 0,
        id = setInterval(frame,10);

        function frame() {
            if (pos == 600) {
                clearInterval(id);
            } else {
                pos++;
                box.style.left = pos + 'px';
                box.style.top = Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction);
            }
        }
}

btn.addEventListener('click', myAnimation);

/*let globalId = setTimeout(log, 2000)


function repeatOften() {
  $("<div />").appendTo("body");
  globalID = requestAnimationFrame(repeatOften);
}

  globalID = requestAnimationFrame(repeatOften);

$("#stop").on("click", function() {
  cancelAnimationFrame(globalID);
});
$("#start").on("click", function() {
  globalID = requestAnimationFrame(repeatOften);
}); */