// typewriter

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<p class="wrap">' + this.txt + '</span>';

    var that = this;
    // to simulate different typing speed letter by letter
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 4;
    }

    if (!this.isDeleting && this.txt === fullTxt && this.loopNum < 2) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '' && this.loopNum < 2) {
        this.isDeleting = false;
        this.loopNum++;
        delta = 200;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};





// password
const submitBtn = document.getElementById("submit-password");
const passwordInput = document.getElementById("password");

submitBtn.addEventListener("click", function () {
    if (passwordInput.value === "password") {
        const nsfwElements = document.getElementsByClassName("nsfw");
        for (let i = 0; i < nsfwElements.length; i++) {
            nsfwElements[i].classList.remove("nsfw");
        }
        masonry.layout();
    } else {
        alert("Incorrect password!");
    }
});

// .password