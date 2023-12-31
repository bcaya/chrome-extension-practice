fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=cyberpunk")
  .then(res => res.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("author").textContent = `Image by: ${data.user.name}`
  })