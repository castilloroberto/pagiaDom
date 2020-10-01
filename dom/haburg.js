/*
roberto castillo
*/
//delegacion de eventos
export default function showMenu(btn, panel, link) {
  const d = document
  d.addEventListener("click", (e) => {
    console.log(e.target)
    if (
      e.target.matches(btn) ||
      e.target.matches(`${btn} *`) ||
      e.target.matches(link)
    ) {
      console.log("matches")
      d.querySelector(panel).classList.toggle("panel-show")
      d.querySelector(btn).classList.toggle("is-active")
    }
  })
}
