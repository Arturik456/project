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
                box.style.top = Math.floor(Math.random() * (5 + 20)) + 'px';
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