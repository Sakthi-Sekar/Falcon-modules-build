// <!--JS for read external html file-->

$(".banner").each(function() {
    console.log('working');
    var inc = $(this);
    $.get(inc.attr("title"), function(data) {
        inc.replaceWith(data);
    });
});

// <!-- JS for OPEN CONTENT TAB-->

function openTab(evt, Name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    //To scroll back to the default top position

    tabcontent.scrollTop = window.scrollTo(0, 0);

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(Name).style.display = "block";

} // Get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();

// <!--JS for ACCORDION-->

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("accordion-down");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// <!--JS for modal images zoom-->

var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function showImg(obj) {
    var arrows = document.getElementsByClassName("zoom");
    console.log(arrows.length)
    for (var i = 0; i < arrows.length; i++) {
        if (obj == arrows[i]) {
            modal.style.display = "block";
            modalImg.src = arrows[i].src;
            captionText.innerHTML = arrows[i].alt;
        }
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
}


// <!--JS for ADD ACTIVE CLASS TO THE CURRENT BUTTON-->

// Add active class to the current button (highlight it)
var header = document.getElementById("tabActive");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

//JS for scroll to top button

//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        document.getElementById("fixed-header").classList.add("headerClass");
    } else {
        mybutton.style.display = "none";
        document.getElementById("fixed-header").classList.remove("headerClass");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//JS for read more & Read less button

function readMoreLess() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("Btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        btnText.scrollIntoView(0, 0);


    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        btnText.scrollIntoView(0, 0);
    }
}

// JQUERY for READ MORE AND LESS BUTTON

$(document).on("click", ".toggle-text-button", function() {

    if ($(this).text() == "Read More") {
        $(this).text("Read Less");

        // Use a jquery selector using the `.attr()` of the link
        $("#toggle-text-" + $(this).attr("toggle-text")).slideDown();
        $('body').scrollTo('#toggle-text-'); // Scroll screen to target element

    } else {
        $(this).text("Read More");
        // Use a jquery selector using the `.attr()` of the link
        $("#toggle-text-" + $(this).attr("toggle-text")).slideUp();

    }

});