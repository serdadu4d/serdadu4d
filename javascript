const message = [' '];
const speed = 100;
let textPosition = 0;

function typewriter() {
    document.querySelector("#message").innerHTML = message[0].substring(0, textPosition) + '<span>\u25AE</span>'
    if (textPosition++ != message[0].length)
        setTimeout(typewriter, speed)
}
window.addEventListener("load", typewriter)



function setup() {

    let value = ['7000.000', '500.000', '600.000', '1.250.0000', '2.000.0000', '1.750.000', '5.000.000', '300.000', '500.888', '100.000', '500.000', '200.000', '400.000', '110.000', '69.000', '70.000', '750.00', '95.000', '70.000', '50.000', '100.000', '88.000', '2.000.000', '155.000', '400.000', '120.000', '600.000', '50.000', '80.000', '100.000', '50.000', '50.000', '30.100', '200.000', '95.000', '51.000', '50.000', '580.000', '30.000', '150.000'];

    let value2 = ['10.000.000', '500.000', '600.000', '1.300.0000', '25.000.0000', '10.700.000', '5.000.000', '900.000', '500.000', '550.000', '45.000.000', '25.000.000', '4.900.000', '1.100.000', '1.700.000', '6.500.000', '700.000', '15.000.000', '200.000', '400.000', '4.800.000', '900.000', '9.000.000', '15.000.000', '4.000.000', '7.500.000', '6.000.000', '1.300.000', '700.000', '900.000', '20.000.000', '22.000.000', '4.100.000', '14.000.000', '950.000', '790.000', '750.000', '5.800.000', '3.000.000', '1.600.000', '12.000.000', ];
    let i = 1;


    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }


    let currentIndex2 = Math.floor(Math.random() * 39) + 1;
    let currentInde2 = Math.floor(Math.random() * 40) + 1;

    document.getElementById('dp').innerHTML = makeid(3) + '***' + ' DEPOSIT ' + value[currentIndex2];
    document.getElementById('wd').innerHTML = makeid(3) + '***' + ' WITHDRAW ' + value2[currentInde2];
    setInterval(() => {

        currentIndex2 = Math.floor(Math.random() * 39) + 1;
        currentInde2 = Math.floor(Math.random() * 40) + 1;

        document.getElementById('dp4').innerHTML = document.getElementById('dp3').innerHTML;
        document.getElementById('wd4').innerHTML = document.getElementById('wd3').innerHTML;

        document.getElementById('dp3').innerHTML = document.getElementById('dp2').innerHTML;
        document.getElementById('wd3').innerHTML = document.getElementById('wd2').innerHTML;

        document.getElementById('dp2').innerHTML = document.getElementById('dp1').innerHTML;
        document.getElementById('wd2').innerHTML = document.getElementById('wd1').innerHTML;

        document.getElementById('dp1').innerHTML = document.getElementById('dp').innerHTML;
        document.getElementById('wd1').innerHTML = document.getElementById('wd').innerHTML;

        document.getElementById('dp').innerHTML = makeid(3) + '***' + ' DEPOSIT ' + value[currentIndex2];
        document.getElementById('wd').innerHTML = makeid(3) + '***' + ' WITHDRAW ' + value2[currentInde2];


    }, 5000)
}
window.addEventListener("load", setup)


function ok() {
    var a = document.getElementById('user2').value
    if (a.length >= 4) {
        document.getElementById('user').innerHTML = document.getElementById('user2').value;
        document.getElementById('container').style.display = "none";
        document.getElementById('container2').style.display = "block";
        var i = 0;
        var i2 = 0;
        var i3 = 0;
        var i4 = 0;
        var i5 = 0;
        var i6 = 0;
        var i7 = 0;
        setInterval(() => {
            if (i < 30) {
                document.getElementById("ss1").style.color = "red";

            } else if (i < 70) {
                document.getElementById("ss1").style.color = "yellow";
            } else {
                document.getElementById("ss1").style.color = "green";
            }
            document.getElementById("ss1").innerHTML = i + "%";
            if (i < 100) {
                i++;
            } else {
                document.getElementById("ss1").innerHTML = "AKTIF";
            }
        }, 70)

        setInterval(() => {
            if (i2 < 30) {
                document.getElementById("d2").style.color = "red";

            } else if (i2 < 70) {
                document.getElementById("d2").style.color = "yellow";
            } else {
                document.getElementById("d2").style.color = "green";
            }
            document.getElementById("d2").innerHTML = i2 + "%";
            if (i2 < 100) {
                i2++;
            } else {
                document.getElementById("d2").innerHTML = "AKTIF";
            }
        }, 65)

        setInterval(() => {
            if (i3 < 30) {
                document.getElementById("d3").style.color = "red";

            } else if (i3 < 70) {
                document.getElementById("d3").style.color = "yellow";
            } else {
                document.getElementById("d3").style.color = "green";
            }
            document.getElementById("d3").innerHTML = i3 + "%";
            if (i3 < 100) {
                i3++;
            } else {
                document.getElementById("d3").innerHTML = "AKTIF";
            }
        }, 55)



        setInterval(() => {
            if (i4 < 30) {
                document.getElementById("d4").style.color = "red";

            } else if (i4 < 70) {
                document.getElementById("d4").style.color = "yellow";
            } else {
                document.getElementById("d4").style.color = "green";
            }
            document.getElementById("d4").innerHTML = i4 + "%";
            if (i4 < 100) {
                i4++;
            } else {
                document.getElementById("d4").innerHTML = "AKTIF";
            }
        }, 46)



        setInterval(() => {
            if (i5 < 30) {
                document.getElementById("d5").style.color = "red";

            } else if (i5 < 70) {
                document.getElementById("d5").style.color = "yellow";
            } else {
                document.getElementById("d5").style.color = "green";
            }
            document.getElementById("d5").innerHTML = i5 + "%";
            if (i5 < 100) {
                i5++;
            } else {
                document.getElementById("d5").innerHTML = "AKTIF";
            }
        }, 51)

        setInterval(() => {
            if (i6 < 30) {
                document.getElementById("d6").style.color = "red";

            } else if (i6 < 70) {
                document.getElementById("d6").style.color = "yellow";
            } else {
                document.getElementById("d6").style.color = "green";
            }
            document.getElementById("d6").innerHTML = i6 + "%";
            if (i6 < 100) {
                i6++;
            } else {
                document.getElementById("d6").innerHTML = "AKTIF";
            }
        }, 20)

        setInterval(() => {
            if (i7 < 30) {
                document.getElementById("d7").style.color = "red";

            } else if (i7 < 70) {
                document.getElementById("d7").style.color = "yellow";
            } else {
                document.getElementById("d7").style.color = "green";
            }
            document.getElementById("d7").innerHTML = i7 + "%";
            if (i7 < 100) {
                i7++;
            } else {
                document.getElementById("d7").innerHTML = "AKTIF";
            }
        }, 45)

        setTimeout(
            function() {
                document.getElementById("pros").style.color = "green";
                document.getElementById("pros").innerHTML = "AKTIF";
            },
            7000);
        setTimeout(
            function() {
                document.getElementById("pros").style.color = "green";
                document.getElementById("pros").innerHTML = "MENUJU KE SITUS CHEAT..";
            },
            8000);

        setTimeout(
            function() {
                window.location = "https://serdadujitu.com"
            },
            10000);


    } else {
        alert('MASUKKAN USERNAME DENGAN BENAR')
    }
}
