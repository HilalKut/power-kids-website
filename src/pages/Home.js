export default function Home() {
  return `
    <nav class="top-nav">
      <div class="container nav-inner">
        <a class="logo" href="https://powerkidsapp.com" target="_blank" rel="noreferrer">
          <span class="logo-mark">P</span>
          <span>PowerKids</span>
        </a>
        <div class="nav-links">
          <a href="#ozellikler">Özellikler</a>
          <a href="#nasil-calisir">Nasıl Çalışır</a>
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
          <p>Kurulum hızlı, kullanım pratiktir</p>
        </div>
        <div class="steps">
          <article><span>1</span><h4>Okul Hesabını Oluştur</h4><p>Yönetici ve öğretmen profillerini dakikalar içinde açın.</p></article>
          <article><span>2</span><h4>Sınıfları Tanımla</h4><p>Öğrenci listeleri, yoklama ve veli bağlantılarını eşleştirin.</p></article>
          <article><span>3</span><h4>Paylaşımlara Başla</h4><p>Günlük akış, yemek, etkinlik ve duyuruları düzenli yayınlayın.</p></article>
        </div>
      </div>
    </section>

    <section class="section-pad family">
      <div class="container family-grid">
        <div class="family-art" aria-hidden="true"></div>
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

    <section id="fiyatlar" class="section-pad pricing">
      <div class="container">
        <div class="section-head">
          <h2>Paket Seçenekleri</h2>
          <p>İhtiyacınıza göre esnek kurulum</p>
        </div>
        <div class="price-grid">
          <article class="price-card">
            <h3>Temel</h3>
            <p class="sub">Küçük ölçekli kurumlar</p>
            <p class="price">İletişime Geçin</p>
            <ul>
              <li>Günlük akış paylaşımı</li>
              <li>Yoklama ve duyuru</li>
              <li>Temel destek</li>
            </ul>
            <a href="https://api.whatsapp.com/send?phone=905412199763" target="_blank" rel="noreferrer">Bilgi Al</a>
          </article>
          <article class="price-card popular">
            <span class="badge">EN ÇOK TERCİH EDİLEN</span>
            <h3>Premium</h3>
            <p class="sub">Tam yönetim paketi</p>
            <p class="price">Kurumunuza Özel</p>
            <ul>
              <li>Temel paketteki tüm özellikler</li>
              <li>Gelişmiş raporlama</li>
              <li>Öncelikli destek</li>
              <li>Kurulum danışmanlığı</li>
            </ul>
            <a href="https://powerkidsapp.com" target="_blank" rel="noreferrer">Teklif Al</a>
          </article>
        </div>
      </div>
    </section>

    <section class="cta section-pad">
      <div class="container cta-inner">
        <h2>PowerKids ile kurumunuzu dijitale taşıyın</h2>
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
            <span class="logo-mark">P</span>
            <span>PowerKids</span>
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
  `
}
