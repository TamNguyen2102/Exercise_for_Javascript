window.addEventListener("load", () => {
  let long;
  let lat;
  const apiKey = "a04aed2d993132350b809ea0fc2e689c";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      //   const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${long}&appid=${apiKey}`;

      //Fetch api
      fetch(api)
        //Rensponse API
        .then((res) => {
          return res.json();
        })
        //Return a temparature data in object
        .then((data) => {
          console.log(data.list[0]);
          const CDegree = Number.parseFloat(
            data.list[0].main.temp - 273.15
          ).toFixed(2);
          return {
            timezone: data.list[0].name,
            degree: CDegree,
            weather: data.list[0].weather[0].description,
            icon: data.list[0].weather[0].icon,
          };
        })
        //View data
        .then((temp) => {
          document.querySelector(".time-zone").textContent = temp.timezone;
          document.querySelector(".temparature-degree").textContent =
            temp.degree;
          document.querySelector(".temparature-description").textContent =
            temp.weather;
          document.querySelector(".weather-icon").innerHTML = `
            <img src= 'http://openweathermap.org/img/wn/${temp.icon}@2x.png'>
            `;
        });
    });
  }
});
