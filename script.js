arabe.forEach((v,i)=>{

const div=document.createElement("div")
div.className="verset"

const a=document.createElement("p")
a.className="arabe"
a.innerText=v.text

const f=document.createElement("p")
f.className="fr"
f.innerText=francais[i].text

const audio=document.createElement("audio")
audio.controls=true
audio.src="https://cdn.islamic.network/quran/audio/128/ar.alafasy/"+v.number+".mp3"

div.appendChild(a)
div.appendChild(f)
div.appendChild(audio)

versetsDiv.appendChild(div)

})
