fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(res => res.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("author").textContent = `Image by: ${data.user.name}`
  })
  .catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDQwNDEzNTZ8&ixlib=rb-4.0.3&q=85
    )`

    document.getElementById("author").textContent = 'Image by: Claire C'

  })
  
  fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
      if (!res.ok){
        throw Error("Something went wrong")
      }
      return res.json()
    })
    .then(data => {
      document.getElementById("crypto-top").innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
      `
      document.getElementById("crypto-info").innerHTML += `
        <p>🎯: $${data.market_data.current_price.usd}</p>
        <p>📈: $${data.market_data.high_24h.usd}</p>
        <p>📉: $${data.market_data.low_24h.usd}</p>
      `
    })
    .catch(err => console.error(err))

navigator.geolocation.getCurrentPosition(position => {
  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    .then(res => {
      if (!res.ok){
        throw Error("Weather data not available")
      }
      return res.json()
    })
    .then(data => {
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      document.getElementById("weather").innerHTML =`
        <img src=${iconUrl} />
        <p>${Math.round(data.main.temp)}</p>
        <p>${data.name}</p>
      `
    })
    .catch(err => console.log(err))
})