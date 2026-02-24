import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import ContactPage from "./pages/ContactPage"
import FeaturePage, { getFeatureBySlug } from "./pages/FeaturePage"

import "./styles/global.css"
import "./styles/hero.css"

function NotFoundPage() {
  return `
    <section class="section-pad subpage">
      <div class="container">
        <div class="subpage-head">
          <span class="material-symbols-outlined">error</span>
          <h1>Sayfa Bulunamadı</h1>
          <p>Aradığınız sayfa mevcut değil. Ana sayfaya dönebilirsiniz.</p>
        </div>
        <div class="subpage-actions">
          <a class="btn btn-blue" href="/">Ana Sayfa</a>
        </div>
      </div>
    </section>
  `
}

function routeToPage(pathname) {
  const cleanPath = pathname.replace(/\/+$/, "") || "/"

  if (cleanPath === "/") return Home()
  if (cleanPath === "/iletisim") return ContactPage()

  if (cleanPath.startsWith("/ozellik/")) {
    const slug = cleanPath.slice("/ozellik/".length)
    const feature = getFeatureBySlug(slug)
    if (feature) return FeaturePage(feature)
  }

  return NotFoundPage()
}

function wireInternalNavigation() {
  document.querySelectorAll("a[href^='/']").forEach((link) => {
    if (link.target === "_blank" || link.hasAttribute("download")) return

    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href")
      if (!href) return
      if (href.startsWith("/#")) return

      event.preventDefault()
      if (window.location.pathname !== href) {
        window.history.pushState({}, "", href)
      }
      renderApp()
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  })
}

function renderApp() {
  document.querySelector("#app").innerHTML = MainLayout(routeToPage(window.location.pathname))
  wireInternalNavigation()
}

window.addEventListener("popstate", renderApp)
renderApp()
