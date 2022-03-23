const body = document.querySelector("body");

console.time("test")

for (let i = 0; i < 100; i++) {
    const rowDiv = document.createElement('div')
  for (let j = 0; j < 100; j++) {
    const colDiv = document.createElement('div')
    colDiv.classList.add("square")
    colDiv.style.backgroundColor = `rgb(0, ${Math.floor(i*2.55)}, ${Math.floor(j*2.55)})`
    rowDiv.appendChild(colDiv)
  }
  body.appendChild(rowDiv)
}

console.timeEnd("test")