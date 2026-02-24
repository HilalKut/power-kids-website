export default function ContactPage() {
  return `
    <div id="top-anchor"></div>
    <nav class="top-nav">
      <div class="container nav-inner">
        <a class="logo" href="/">
          <img class="logo-img" src="/logo/image.png" alt="PowerKids logo" />
        </a>
        <div class="nav-links">
          <a href="/#ozellikler">Özellikler</a>
          <a href="/#nasil-calisir">Nasıl Çalışır</a>
          <a href="/#neler-var">Neler Var?</a>
          <a href="/#fiyatlar">Paketler</a>
          <a href="/iletisim">İletişim</a>
        </div>
        <a class="nav-cta" href="https://api.whatsapp.com/send?phone=905412199763" target="_blank" rel="noreferrer">
          Hemen Başla
        </a>
      </div>
    </nav>

    <section class="section-pad subpage contact-page">
      <div class="container">
        <div class="subpage-head">
          <span class="material-symbols-outlined">support_agent</span>
          <h1>POWER KIDS İletişim Bilgileri</h1>
          <p>
            POWER KIDS anaokulu ve kreş uygulamasına kayıt olmak, sistemi kurdurmak
            veya teknik destek/öneriler için bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <article class="contact-card">
          <h2>Detaylı bilgi için bizi arayabilirsiniz</h2>
          <a class="contact-phone" href="tel:+903426060515">0342 606 05 15</a>
          <div class="contact-actions">
            <a class="btn btn-blue" href="tel:+903426060515">Hemen Ara</a>
            <a class="btn btn-red" href="https://api.whatsapp.com/send?phone=905412199763" target="_blank" rel="noreferrer">WhatsApp Yaz</a>
          </div>
        </article>
      </div>
    </section>
  `
}
