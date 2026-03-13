fetch("https://api.alquran.cloud/v1/surah/1/ar.alafasy")
.then(response => response.json())
.then(data => {

const versets = data.data.ayahs
const container = document.getElementById("versets")

versets.forEach(v => {

const p = document.createElement("p")
p.className="arabe"
p.textContent = v.text

container.appendChild(p)

})
})
