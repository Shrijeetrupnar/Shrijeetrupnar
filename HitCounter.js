for (i = 0; i < 2500; i++) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //do Something
        }
    };
    xhttp.open("GET", "https://camo.githubusercontent.com/378d92500e9d4799b90d31157424c489802b1a33eef11c3571686ea338500901/68747470733a2f2f70726f66696c652d636f756e7465722e676c697463682e6d652f536872696a6565747275706e61722f636f756e742e737667", true);
    xhttp.send();
}