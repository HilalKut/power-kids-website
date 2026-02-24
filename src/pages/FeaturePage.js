const FEATURE_MAP = {
  "veli-yonetimi": {
    title: "Veli Yönetimi",
    icon: "groups",
    summary: "Velilere özel kayıt, listeleme ve hızlı erişim ekranları.",
    details: [
      "Veli profilleri tek panelden yönetilir.",
      "Öğrenci-veli eşleşmeleri düzenli tutulur.",
      "Kurum içi iletişim süreçleri hızlanır.",
    ],
  },
  "yoklama-takibi": {
    title: "Yoklama Takibi",
    icon: "checklist",
    summary: "Sınıf bazlı devam-devamsızlık takibini dijital olarak yönetin.",
    details: [
      "Günlük yoklama tek dokunuşla işlenir.",
      "Devamsızlık kayıtları geriye dönük raporlanır.",
      "Velilere hızlı bilgilendirme yapılır.",
    ],
  },
  "duyuru-sistemi": {
    title: "Duyuru Sistemi",
    icon: "notifications_active",
    summary: "Tek ekrandan tüm velilere anlık ve planlı duyuru gönderin.",
    details: [
      "Toplu duyuru gönderimi ile zamandan tasarruf edin.",
      "Planlı paylaşımlarla kurum akışını netleştirin.",
      "Veliler tüm duyuruları tek uygulamada görsün.",
    ],
  },
  "yemek-menusu": {
    title: "Yemek Menüsü",
    icon: "restaurant_menu",
    summary: "Günlük/haftalık menüleri velilerle düzenli paylaşın.",
    details: [
      "Haftalık menü planlarını hızlı yayınlayın.",
      "Değişen menüleri anında güncelleyin.",
      "Veli tarafında şeffaf ve düzenli görünürlük sağlayın.",
    ],
  },
  "etkinlik-takvimi": {
    title: "Etkinlik Takvimi",
    icon: "calendar_month",
    summary: "Özel gün ve sınıf aktivitelerini velilere görünür kılın.",
    details: [
      "Aylık etkinlik planları tek alanda yayınlanır.",
      "Etkinlik detayları ve hatırlatmalar velilere ulaşır.",
      "Kurum içi planlama süreci sadeleşir.",
    ],
  },
  "foto-video": {
    title: "Fotoğraf & Video",
    icon: "photo_library",
    summary: "Günlük paylaşımlarla velilerin sınıf sürecini anlık izlemesini sağlayın.",
    details: [
      "Sınıf anları güvenli şekilde paylaşılır.",
      "Veliler çocuklarının gün içi sürecini takip eder.",
      "Kurum-veli bağı güçlü ve şeffaf kalır.",
    ],
  },
}

export function getFeatureBySlug(slug) {
  return FEATURE_MAP[slug] || null
}

export default function FeaturePage(feature) {
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

    <section class="section-pad subpage">
      <div class="container">
        <div class="subpage-head">
          <span class="material-symbols-outlined">${feature.icon}</span>
          <h1>${feature.title}</h1>
          <p>${feature.summary}</p>
        </div>
        <div class="subpage-grid">
          ${feature.details
            .map(
              (detail) => `
                <article class="sub-card">
                  <span class="material-symbols-outlined">task_alt</span>
                  <p>${detail}</p>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="subpage-actions">
          <a class="btn btn-blue" href="https://api.whatsapp.com/send?phone=905412199763" target="_blank" rel="noreferrer">Bilgi Al</a>
          <a class="btn btn-red" href="/#neler-var">Tüm Özellikler</a>
        </div>
      </div>
    </section>
  `
}
