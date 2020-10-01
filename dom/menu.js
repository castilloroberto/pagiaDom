const btnPanel = document.getElementById("panel-btn")

const aside = document.getElementById("aside")

const allA = document.querySelectorAll(".go")

allA.forEach((e) => {
  e.addEventListener("click", () => {
    aside.classList.toggle("panel-show")
    btnPanel.classList.toggle("is-active")
  })
})

btnPanel.addEventListener("click", () => {
  aside.classList.toggle("panel-show")
  btnPanel.classList.toggle("is-active")
})
