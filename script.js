arabe.forEach((v,i)=>{

const div=document.createElement("div")
div.className="verset"

// texte arabe
const a=document.createElement("p")
a.className="arabe"
a.innerText=v.text

// traduction
const f=document.createElement("p")
f.className="fr"
f.innerText=francais[i].text

// 🔊 AUDIO
const audio=document.createElement("audio")
audio.controls = true
audio.src = "https://cdn.islamic.network/quran/audio/128/ar.alafasy/" + v.number + ".mp3"

// ajouter tout
div.appendChild(a)
div.appendChild(f)
div.appendChild(audio)

versetsDiv.appendChild(div)

})
