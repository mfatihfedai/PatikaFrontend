let name = prompt("Lütfen isminizi giriniz");
let nameQuery = document.querySelector("#myName");
nameQuery.innerHTML = `${name}`

function tarihSaat(){
    var element = document.getElementById("myClock");
    var now = new Date();
    var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    var day = days[now.getDay() - 1];
    var date = now.toLocaleDateString();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //var result = `${day} ${date} ${hour} ${minute} ${second}`;
    var result =  date + ' - ' + hour + ':' + minute + ':' + second + '  ' + day;
    element.innerHTML = result;
}
tarihSaat();
setInterval(tarihSaat, 1000);