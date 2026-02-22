export default function Home() {
  const testimonialLogos = [
    "logo1.png",
    "logo2.jpeg",
    "logo3.jpg",
    "logo4.png",
    "logo5.png",
    "logo6.png",
    "logo7.png",
    "logo8.png",
    "logo9.png",
    "logo10.png",
    "logo11.png",
    "logo12.png",
    "logo13.png",
    "logo14.png",
    "logo15.png",
    "logo16.png",
    "logo17.png",
    "logo18.png",
    "logo19.png",
    "logo20.png",
    "logo21.png",
    "logo22.png",
    "logo23.png",
    "logo24.png",
    "logo25.png",
    "logo26.png",
    "logo27.png",
    "logo28.png",
    "logo29.png",
    "logo30.png",
  ]

  return `
    <div id="top-anchor"></div>
    <nav class="top-nav">
      <div class="container nav-inner">
        <a class="logo" href="https://powerkidsapp.com" target="_blank" rel="noreferrer">
          <img class="logo-img" src="/logo/image.png" alt="PowerKids logo" />
        </a>
        <div class="nav-links">
          <a href="#ozellikler">Özellikler</a>
          <a href="#nasil-calisir">Nasıl Çalışır</a>
          <a href="#neler-var">Neler Var?</a>
          <a href="#referanslar">Referanslar</a>
          <a href="#fiyatlar">Fiyatlar</a>
        </div>
        <a class="nav-cta" href="https://api.whatsapp.com/send?phone=905412199763" target="_blank" rel="noreferrer">
          Hemen Başla
        </a>
      </div>
    </nav>

    <section class="hero section-pad">
      <span class="glow g1"></span>
      <span class="glow g2"></span>
      <div class="container hero-grid">
        <div class="hero-copy">
          <h1>
            Çocukların gelişimini
            <span>anlık takip edin</span>
          </h1>
          <p>
            PowerKids, kreş ve anaokulları için veli iletişimi, günlük akış,
            duyuru, yoklama ve etkinlik paylaşımını tek uygulamada birleştirir.
          </p>
          <div class="hero-actions">
            <a class="btn btn-red" href="https://powerkidsapp.com" target="_blank" rel="noreferrer">Web Sitesini İncele</a>
            <a class="btn btn-blue" href="https://api.whatsapp.com/send?phone=905412199763" target="_blank" rel="noreferrer">Demo Talep Et</a>
          </div>
        </div>
        <div class="hero-phone">
          <div class="phone-frame">
            <div class="phone-screen">
              <p class="phone-muted">Hoş geldin, Ece</p>
              <h3>Bugün Okulda</h3>
              <div class="kpi-card">
                <div><span>Günlük Katılım</span><strong>%92</strong></div>
                <div class="meter"><span></span></div>
              </div>
              <div class="item">
                <span class="material-symbols-outlined">restaurant</span>
                <div><h4>Yemek Menüsü</h4><p>Çorba, Köfte, Meyve</p></div>
              </div>
              <div class="item">
                <span class="material-symbols-outlined">self_improvement</span>
                <div><h4>Etkinlik</h4><p>Duyu oyunu tamamlandı</p></div>
              </div>
              <div class="item">
                <span class="material-symbols-outlined">favorite</span>
                <div><h4>Ruh Hali</h4><p>Mutlu ve enerjik</p></div>
              </div>
            </div>
          </div>
          <div class="float-box top">
            <span class="material-symbols-outlined">trending_up</span>
            <div><p>Katılım</p><strong>+%24</strong></div>
          </div>
          <div class="float-box bottom">
            <span class="material-symbols-outlined">task_alt</span>
            <div><p>Paylaşım</p><strong>Günlük Rapor</strong></div>
          </div>
        </div>
      </div>
    </section>

    <section id="ozellikler" class="section-pad bg-soft">
      <div class="container">
        <div class="section-head">
          <h2>Güçlü Özellikler</h2>
          <p>Okul yönetimi ve veli iletişimini kolaylaştıran tüm araçlar</p>
        </div>
        <div class="feature-grid">
          <article class="card">
            <div class="icon orange"><span class="material-symbols-outlined">monitoring</span></div>
            <h3>Gelişim Takibi</h3>
            <p>Çocukların günlük kazanımı ve gelişim adımları tek panelde.</p>
          </article>
          <article class="card">
            <div class="icon green"><span class="material-symbols-outlined">event_note</span></div>
            <h3>Günlük Aktivite</h3>
            <p>Sınıf etkinlikleri, fotoğraf ve notlar velilere anında ulaşır.</p>
          </article>
          <article class="card">
            <div class="icon blue"><span class="material-symbols-outlined">forum</span></div>
            <h3>Veli İletişimi</h3>
            <p>Duyuru, mesaj ve geri bildirim sürecini düzenli şekilde yönetin.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="nasil-calisir" class="section-pad">
      <div class="container">
        <div class="section-head">
          <h2>3 Adımda Başlayın</h2>
          <p>Power Kids işleyişini hızlıca uygulayın</p>
        </div>
        <div class="steps">
          <article><span>1</span><h4>Kurum Kaydını Tamamla</h4><p>Kreş/anaokulu hesabını oluşturup kurulum desteğini alın.</p></article>
          <article><span>2</span><h4>Veli Teslim Sürecini Başlat</h4><p>Anlaşmalı kargo ile basılı materyaller velilere imza karşılığı ulaşır.</p></article>
          <article><span>3</span><h4>Paylaşım ve Takibe Geç</h4><p>Etkinlik, yemek menüsü, yoklama ve duyuruları günlük yönetin.</p></article>
        </div>
        <div class="how-video">
          <a class="video-link" href="https://www.youtube.com/watch?v=oenjxaIFqh8" target="_blank" rel="noreferrer" aria-label="PowerKids kullanım videosunu YouTube'da aç">
            <img class="video-thumb" src="https://img.youtube.com/vi/oenjxaIFqh8/hqdefault.jpg" alt="PowerKids kullanım videosu önizleme görseli" />
            <span class="video-overlay">
              <span class="material-symbols-outlined">play_arrow</span>
              <span>Kullanım videosunu izleyin</span>
            </span>
          </a>
        </div>
      </div>
    </section>

    <section id="neler-var" class="section-pad capabilities bg-soft">
      <div class="container">
        <div class="section-head">
          <h2>Power Kids'te Neler Var?</h2>
          <p>PowerKids' de öne çıkan modüller</p>
        </div>
        <div class="cap-grid">
          <article class="cap-card"><span class="material-symbols-outlined">groups</span><h3>Veli Yönetimi</h3><p>Velilere özel kayıt, listeleme ve hızlı erişim ekranları.</p></article>
          <article class="cap-card"><span class="material-symbols-outlined">checklist</span><h3>Yoklama Takibi</h3><p>Sınıf bazlı devam-devamsızlık takibini dijital olarak yönetin.</p></article>
          <article class="cap-card"><span class="material-symbols-outlined">notifications_active</span><h3>Duyuru Sistemi</h3><p>Tek ekrandan tüm velilere anlık ve planlı duyuru gönderin.</p></article>
          <article class="cap-card"><span class="material-symbols-outlined">restaurant_menu</span><h3>Yemek Menüsü</h3><p>Günlük/haftalık menüleri velilerle düzenli paylaşın.</p></article>
          <article class="cap-card"><span class="material-symbols-outlined">calendar_month</span><h3>Etkinlik Takvimi</h3><p>Özel gün ve sınıf aktivitelerini velilere görünür kılın.</p></article>
          <article class="cap-card"><span class="material-symbols-outlined">photo_library</span><h3>Fotoğraf & Video</h3><p>Günlük paylaşımlarla velilerin sınıf sürecini anlık izlemesini sağlayın.</p></article>
        </div>
      </div>
    </section>

    <section class="section-pad free-services">
      <div class="container">
        <div class="section-head">
          <h2>Ücretsiz Hizmetler</h2>
          <p>Power Kids'te kurumlara sunulan destekler</p>
        </div>
        <div class="free-grid">
          <article class="free-card"><h3>Kuruma Özel Web Sitesi</h3><p>Kurumsal görünürlüğünüz için hızlı kurulumlu web sitesi desteği.</p></article>
          <article class="free-card"><h3>E-Fatura Entegrasyonu</h3><p>Ön muhasebe ve e-fatura işlemlerini tek panelden yönetin.</p></article>
          <article class="free-card"><h3>Ücretsiz Anons Sistemi</h3><p>Duyurularınızı velilere SMS/mobil bildirimle iletin.</p></article>
          <article class="free-card"><h3>Yemek Menüsü Modülü</h3><p>Menü paylaşımı için hazır sayfa ve düzenli akış altyapısı.</p></article>
          <article class="free-card"><h3>Sınırsız Paylaşım</h3><p>Fotoğraf, video ve etkinlik paylaşımlarında kullanım limiti olmadan ilerleyin.</p></article>
        </div>
      </div>
    </section>

    <section class="section-pad family">
      <div class="container family-grid">
        <figure class="family-art">
          <img src="/images/phones.png" alt="PowerKids uygulama ekran görünümleri" />
        </figure>
        <div>
          <p class="tag">AİLELER İÇİN</p>
          <h2>Her Veli İçin Rahatlık</h2>
          <p class="lead">
            Veliler çocuklarının okul gününü anlık görür, öğretmenler daha az
            telefon trafiğiyle daha verimli çalışır.
          </p>
          <ul class="checks">
            <li><span class="material-symbols-outlined">check</span> Gün sonu raporlarını otomatik paylaşım</li>
            <li><span class="material-symbols-outlined">check</span> Veli sorularına hızlı geri dönüş</li>
            <li><span class="material-symbols-outlined">check</span> Güvenli veri ve düzenli arşiv</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section-pad testimonials bg-soft">
      <div class="container">
        <h2 class="quote">"Kurum ile veliler arasındaki köprümüz güçlendi."</h2>
        
        <div class="test-grid">
          <article class="test-card">
            <div class="stars">★★★★★</div>
            <p>Paylaşımlar düzenli olduğu için velilerden gelen soru sayısı belirgin şekilde azaldı.</p>
            <strong>Okul Müdürü</strong>
          </article>
          <article class="test-card featured">
            <div class="stars">★★★★★</div>
            <p>Öğretmenler tek panelden giriyor, veliler her şeyi anında görüyor. Süreç çok rahat.</p>
            <strong>Kurucu Ortak</strong>
          </article>
          <article class="test-card">
            <div class="stars">★★★★★</div>
            <p>Çocuğumun gün içindeki etkinliklerini görmek bize güven veriyor.</p>
            <strong>Veli</strong>
          </article>
        </div>
      </div>
    </section>

    <section id="referanslar" class="section-pad logo-wall">
      <div class="container">
        <div class="section-head">
          <h2>Referans Okullar</h2>
          <p>Power Kids kullanan kurumlarımız</p>
        </div>
        <div class="logo-wall-frame">
          <div class="logo-wall-grid">
            ${testimonialLogos
              .map(
                (logo, i) => `
                  <article class="logo-item">
                    <img src="/logo/${logo}" alt="Referans okul logosu ${i + 1}" loading="lazy" />
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <section id="fiyatlar" class="section-pad pricing">
      <div class="container">
        <div class="section-head">
          <h2>Paketler</h2>
          <p>Kurumunuza uygun paket içeriklerini inceleyin</p>
        </div>

        <div class="package-grid">
          <article class="package-card" id="paket-baslangic">
            <h3>Başlangıç</h3>
            <p class="sub">Öğrenci Sayısı 30'a kadar</p>
            <p class="price-note">Aylık: Arayın</p>
            <ul>
              <li>Yeni okullara %12 indirim</li>
              <li>Yıllık fiyatlar / 3 taksit</li>
              <li>Veli sayısı sınırsız</li>
              <li>Günlük paylaşım sınırsız</li>
              <li>Kredi kartı ile ödeme alma</li>
              <li>Geriye dönük 15 gün takip</li>
            </ul>
            <a href="https://api.whatsapp.com/send?phone=905412199763" target="_blank" rel="noreferrer">Bilgi Al</a>
          </article>

          <article class="package-card" id="paket-ekonomik">
            <h3>Ekonomik</h3>
            <p class="sub">Öğrenci Sayısı 31 - 90</p>
            <p class="price-note">Aylık: Arayın</p>
            <ul>
              <li>Yeni okullara %10 indirim</li>
              <li>Yıllık fiyatlar / 3 taksit</li>
              <li>Veli sayısı sınırsız</li>
              <li>Günlük paylaşım sınırsız</li>
              <li>Kredi kartı ile ödeme alma</li>
              <li>Geriye dönük 15 gün takip</li>
            </ul>
            <a href="https://api.whatsapp.com/send?phone=905412199763" target="_blank" rel="noreferrer">Bilgi Al</a>
          </article>

          <article class="package-card popular" id="paket-ideal">
            <h3>İdeal</h3>
            <p class="sub">Öğrenci Sayısı 91 - 150</p>
            <p class="price-note">Aylık: Arayın</p>
            <ul>
              <li>Yeni okullara %10 indirim</li>
              <li>Yıllık fiyatlar / 3 taksit</li>
              <li>Veli sayısı sınırsız</li>
              <li>Günlük paylaşım sınırsız</li>
              <li>Kredi kartı ile ödeme alma</li>
              <li>Geriye dönük 15 gün takip</li>
            </ul>
            <a href="https://powerkidsapp.com" target="_blank" rel="noreferrer">Bilgi Al</a>
          </article>
        </div>
      </div>
    </section>

    <section class="cta section-pad">
      <div class="container cta-inner">
        <h2>PowerKids ile Kurumunuzu Dijitale Taşıyın</h2>
        <p>Kurulum için ekibimizle hemen iletişime geçin.</p>
        <div>
          <a class="btn white" href="https://api.whatsapp.com/send?phone=905412199763" target="_blank" rel="noreferrer">WhatsApp İletişim</a>
          <a class="btn yellow" href="https://powerkidsapp.com" target="_blank" rel="noreferrer">Resmi Site</a>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="logo" href="https://powerkidsapp.com" target="_blank" rel="noreferrer">
            <img class="logo-img" src="/logo/image.png" alt="PowerKids logo" />
          </a>
          <p>Okul öncesi eğitimde veli iletişimini güçlendiren dijital yardımcı.</p>
        </div>
        <div>
          <h4>Ürün</h4>
          <a href="#ozellikler">Özellikler</a>
          <a href="#fiyatlar">Paketler</a>
        </div>
        <div>
          <h4>Kurumsal</h4>
          <a href="https://powerkidsapp.com" target="_blank" rel="noreferrer">Hakkımızda</a>
          <a href="https://api.whatsapp.com/send?phone=905412199763" target="_blank" rel="noreferrer">İletişim</a>
        </div>
      </div>
      <p class="copyright">© ${new Date().getFullYear()} PowerKids</p>
    </footer>

    <div class="floating-actions" aria-label="Hızlı iletişim butonları">
      <a class="fab fab-whatsapp" href="https://api.whatsapp.com/send?phone=905412199763" target="_blank" rel="noreferrer" aria-label="WhatsApp ile iletişim">
        <span class="material-symbols-outlined">chat</span>
        <span>WhatsApp</span>
      </a>
      <a class="fab fab-email" href="mailto:info@powerkidsapp.com" aria-label="E-posta gönder">
        <span class="material-symbols-outlined">mail</span>
        <span>E-posta</span>
      </a>
      <a class="fab fab-top" href="#top-anchor" aria-label="Yukarı çık">
        <span class="material-symbols-outlined">keyboard_arrow_up</span>
        <span>Yukarı Çık</span>
      </a>
    </div>
  `
}
