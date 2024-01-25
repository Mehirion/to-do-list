const myNodelist = document.getElementsByTagName("li")

for (i=0; i<myNodelist.length; i++){
    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    myNodelist[i].appendChild(span)
}

const close = document.getElementsByClassName("close")
for(i =0; i<close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement
        div.style.display ="none"
    }
}

newElement = () => {
    const li = document.createElement("li")
    let inputValue = document.getElementById("myInput").value
    let t = document.createElement("span")
    const max_chars = 48
    t.textContent = inputValue
    li.appendChild(t)

    if (inputValue.trim() == null || inputValue.trim() == "" || inputValue.trim() === " ") {
        alert("Space cannot be blank") 
    } else if (inputValue.length > max_chars) {
        alert("You can input maximum of 48 characters")
     } else {
        let span = document.createElement("span")
        let txt = document.createTextNode("\u00D7")
        span.className = "close"
        span.appendChild(txt)
        li.appendChild(span)

        document.getElementById("myUL").appendChild(li)

        span.onclick = function () {
            let div = this.parentElement
            div.style.display = "none"
        }
    }

    document.getElementById("myInput").value = ""
}

  let list = document.querySelector('ul')
  list = addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked')
      }
  }, false )
  

