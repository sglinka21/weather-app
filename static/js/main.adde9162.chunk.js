(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){e.exports=t(71)},33:function(e,a,t){},38:function(e,a,t){},59:function(e,a,t){},61:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){},69:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),i=t.n(c),s=(t(33),t(4)),l=t(5),o=t(8),d=t(6),u=t(9),h=t(7),m=(t(38),t(26)),w=t.n(m),p=(t(59),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={city:""},t.handleChange=function(e){t.setState({city:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.fetchWeatherData(t.state.city),t.setState({city:""})},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container search-box"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m10 l8 offset-l2 offset-m1"},r.a.createElement("div",{className:"card z-depth-3"},r.a.createElement("div",{className:"card-content"},r.a.createElement("form",{className:"container",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"city"},"City"),r.a.createElement("input",{type:"text",className:"input-field",id:"city",value:this.state.city,onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn blue"},"Search"))))))))}}]),a}(n.Component)),E=Object(h.b)(null,function(e){return{fetchWeatherData:function(a){return e(function(e){var a="https://api.openweathermap.org/data/2.5/forecast?appid=".concat("70e761deab5dc24b5dab296b23a43ee5","&units=metric&q=").concat(e);return function(e){w.a.get(a).then(function(a){e({type:"SET_WEATHER_DATA",weather:a.data})}).catch(function(a){e({type:"FETCH_WEATHER_DATA_FAILED"})})}}(a))}}})(p),f=t(10),v=(t(61),t(63),function(e){return e.children}),y=(t(65),t(67),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked.bind(void 0,e.index)}):null}),b=function(e){return r.a.createElement("div",null,r.a.createElement(y,{show:e.show,clicked:e.modalClosed,index:e.index}),r.a.createElement("div",{className:"Modal "+e.colorCard,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},N=(t(69),function(e){var a=e.weatherInfo,t=e.weather,n=e.dayName,c=e.weatherIcon,i=e.cityName,s=e.hideDetails,l=e.index,o=t.map(function(e,a){return r.a.createElement("div",{className:"weather-hour-list-item",key:a},r.a.createElement("div",{className:"weather-hour-time"},e.dt_txt.substr(11,5)),r.a.createElement("div",{className:"weather-hour-temp"},Math.round(e.main.temp),"\xb0C"))});return r.a.createElement("div",{className:"weather-details-card"},r.a.createElement("div",{className:"weather-details-day"},r.a.createElement("i",{className:"material-icons close-btn",onClick:s.bind(void 0,l)},"close"),r.a.createElement("div",{className:"weather-details-day-name"},n),r.a.createElement("div",{className:"weather-details-day-icon"},r.a.createElement("i",{className:"wi "+c})),r.a.createElement("div",{className:"weather-details-day-temp"},a.maxTemperature,r.a.createElement("span",{className:"units"},"\xb0C")),r.a.createElement("h3",{className:"city-name"},i)),r.a.createElement("div",{className:"weather-hour-list"},o))}),D=function(e){var a=e.setColorCardAndIcon,t=e.getDay,n=e.getWeatherInfo,c=e.weather,i=e.showDetails,s=e.showDetailsHandler,l=e.hideDetailsHandler,o=e.cityName,d=e.index,u=n(c),h=a(c),m=t(c);return r.a.createElement(v,null,r.a.createElement("div",{className:"col s12 m6 l3"},r.a.createElement("div",{className:"weather-card hoverable "+h[0],onClick:s.bind(void 0,d)},r.a.createElement("div",{className:"day-name"},m),r.a.createElement("div",{className:"weather-icon"},r.a.createElement("i",{className:"wi "+h[1]})),r.a.createElement("div",{className:"weather-day-temp"},u.maxTemperature,r.a.createElement("span",{className:"units"},"\xb0C")),r.a.createElement("div",{className:"weather-details"},r.a.createElement("div",{className:"weather-humidity"},r.a.createElement("i",{className:"wi wi-raindrop"}),u.avgHumidity," %"),r.a.createElement("div",{className:"weather-windspeed"},r.a.createElement("i",{className:"wi wi-small-craft-advisory"}),u.avgWindSpeed," ",r.a.createElement("span",{className:"units"},"km/h"))))),r.a.createElement(b,{colorCard:h[0],index:d,show:i,modalClosed:l},r.a.createElement(N,{weatherInfo:u,weather:c,dayName:m,weatherIcon:h[1],cityName:o,hideDetails:l,index:d})))},g=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={showWeatherDetails:{}},t.showWeatherDetailsHandler=function(e){t.setState({showWeatherDetails:Object(f.a)({},e,!0)})},t.hideWeatherDetailsHandler=function(e){t.setState({showWeatherDetails:Object(f.a)({},e,!1)})},t.groupByDays=function(e){return e.reduce(function(e,a){var t=a.dt_txt.substr(0,10);return e[t]=e[t]||[],e[t].push(a),e},{})},t.getDayName=function(e){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(1e3*e[0].dt).getDay()]},t.getWeatherInfo=function(e){var a=[],t=[],n=[];e.map(function(e){a.push(e.main.temp),t.push(e.main.humidity),n.push(3.6*e.wind.speed)});var r=Math.round(Math.max.apply(Math,a));return{avgHumidity:Math.round(t.reduce(function(e,a){return e+a})/t.length),maxTemperature:r,avgWindSpeed:Math.round(n.reduce(function(e,a){return e+a})/n.length)}},t.setColorCardAndIcon=function(e){var a=[];switch(e[0].weather[0].main){case"Rain":a.push("rain"),a.push("wi-day-rain");break;case"Clear":a.push("sunny"),a.push("wi-day-sunny");break;case"Clouds":a.push("cloudy"),a.push("wi-day-cloudy");break;case"Thunderstorm":a.push("lightning"),a.push("wi-day-thunderstorm");break;case"Extreme":a.push("lightning"),a.push("wi-day-lightning");break;case"Snow":a.push("cloudy"),a.push("wi-day-snow");break;case"Drizzle":a.push("rain"),a.push("wi-day-showers");break;default:a.push("default")}return a},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=Object.values(this.groupByDays(this.props.weatherData.list)).slice(0,4).map(function(a,t){return r.a.createElement(D,{setColorCardAndIcon:e.setColorCardAndIcon,getWeatherInfo:e.getWeatherInfo,getDay:e.getDayName,weather:a,showDetailsHandler:e.showWeatherDetailsHandler,showDetails:e.state.showWeatherDetails[t],hideDetailsHandler:e.hideWeatherDetailsHandler,cityName:e.props.weatherData.city.name,index:t,key:t})});return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},a)))}}]),a}(n.Component),C=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.weather.weather,a=null===e?null:r.a.createElement(g,{weatherData:e});return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),a)}}]),a}(n.Component),O=Object(h.b)(function(e){return{weather:e.weather,error:e.error}},null)(C);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(3),k=t(14),W={weather:null,error:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_WEATHER_DATA":return Object(k.a)({},e,{weather:a.weather,error:!1});case"FETCH_WEATHER_DATA_FAILED":return Object(k.a)({},e,{error:!0});default:return e}},T=Object(j.c)({weather:A}),_=t(27),x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,S=Object(j.e)(T,x(Object(j.a)(_.a)));i.a.render(r.a.createElement(h.a,{store:S},r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.adde9162.chunk.js.map