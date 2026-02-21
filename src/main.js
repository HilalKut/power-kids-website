import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"

import "./styles/global.css"
import "./styles/hero.css"

document.querySelector("#app").innerHTML =
  MainLayout(
    Home()
  )
