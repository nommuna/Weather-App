var jsonurl = "http://api.openweathermap.org/data/2.5/weather?q=Redlands&units=imperial&APPID=5eea63b2ee3505c58713d9149832d4c5";

$(function (){
    var $temp = $('#numberTemp');
    var $namex = $('#cityName');
    var $description = $('#description');
    var $wind = $('#wind');
    var $cloudiness = $('#cloudiness');
    var $humidity = $('#humidity');
    var $pressure = $('#pressure');
    var $mintemp = $('#mintemp');
    var $maxtemp = $('#maxtemp');
    var date = [];
    var datetemp =[];


    $('#inputtxt').keyup(function(event){
        if (event.keyCode == 13) {
            $('#submitbtn').click();

        var location = $('#inputtxt').val();
        $.ajax({
            type: 'GET',
            url: "http://api.openweathermap.org/data/2.5/weather?q="+location+"&units=imperial&APPID=5eea63b2ee3505c58713d9149832d4c5",
            success: function(data){
                $temp.html('<h2>'+data.main.temp+'</h2>');
                $namex.html('<h2>'+data.name+'</h2>');
                $description.html('<p>'+data.weather[0].description+'</p>');
                $wind.html('<td>'+data.wind.speed+'</td>');
                $cloudiness.html('<td>'+data.weather[0].main+'</td>');
                $humidity.html('<td>'+data.main.humidity+'</td>');
                $pressure.html('<td>'+data.main.pressure+'</td>');
                $mintemp.html('<td>'+data.main.temp_min+'</td>');
                $maxtemp.html('<td>'+data.main.temp_max+'</td>');
            }


        });

        $.ajax({
            type: 'GET',
            url: "http://api.openweathermap.org/data/2.5/forecast?q=Redlands,us&mode=json&units=imperial&cnt=20&APPID=5eea63b2ee3505c58713d9149832d4c5",
            success: function(data){
                //console.log(data.list[0].main.temp);
            //trying to parse through data for graph


            }


        });

    }
    });
// For the graph data
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


});

/**
$.each(data,function(index, data){
    if (index === "main") {
        $temp.append('<h2>'+data.temp+'</h2>');
    }

});
**/
