$(document).ready(function(){
	$('#submitWeather').click(function()
	{
		var city=$("#city").val();
		if(city!='')
		{
			$.ajax({
				url:"http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric"+"&APPID=d97f7b846f7eb3a47776539ade8cf4b0",
				type:"GET",
				dataType:"jsonp",
				success:function(data){
					var widget =show(data);
					$("#show").html(widget);
				}
			});
		}
		else
		{$("#error").html('Field cannot be empty');}
	});	
});
function show(data){
	return "<h3>WEATHER REPORT for "+data.name+","+data.sys.country+"</h3>"+
	
	"<h3><strong>Weather</strong>:"+data.weather[0].main +"</h3>"+"<h3><strong>Description</strong><img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+".png'>:"+data.weather[0].description +"</h3>"+"<h3><strong>temperature</strong>:"+data.main.temp +"&deg;C</h3>"+"<h3><strong>Pressure</strong>:"+data.main.pressure +"hPa</h3>"+"<h3><strong>Humidity</strong>:"+data.main.humidity +"%</h3>"+"<h3><strong>Min_temp</strong>:"+data.main.temp_min +"&deg;C</h3>"+"<h3><strong>Max_temp</strong>:"+data.main.temp_max +"&deg;C</h3>"+"<h3><strong>windSpeed</strong>:"+data.wind.speed +"m/s</h3>"+"<h3><strong>windDiarection</strong>:"+data.wind.deg +"&deg</h3>";
}