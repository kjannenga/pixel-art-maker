document.addEventListener('DOMContentLoaded', function () {

    var canvas = document.getElementById("paint")

    for (var i = 0; i < 1000; i++) {
        var div = document.createElement('div')
        canvas.appendChild(div)
    }




    var painter = "white"

    document.getElementById("colors").addEventListener("click", function (e) {

        if (e.target && e.target.nodeName == "DIV") {

            painter = e.target.className
            document.getElementById("current").setAttribute('class', painter)



            console.log(e.target.className + " was clicked")
        }
    })


    document.getElementById("paint").addEventListener("click", function (e) {

        if (e.target && e.target.nodeName == "DIV") {

            e.target.setAttribute('class', painter)
            console.log(e.target.className + " was clicked")
        }
    });

});