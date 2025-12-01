# Trae CRM - Müşteri İlişkileri Yönetim Sistemi

🌐 [English](README_en.md) • [中文](README_zh.md) • [Deutsch](README_de.md) • [Español](README_es.md) • [Français](README_fr.md) • [Italiano](README_it.md) • [日本語](README_ja.md) • [한국어](README_ko.md) • [Nederlands](README_nl.md) • [Polski](README_pl.md) • [Português](README_pt.md) • [Русский](README_ru.md) • [العربية](README_ar.md) • [हिन्दी](README_hi.md) • [Svenska](README_sv.md) • [ไทย](README_th.md) • [Türkçe](README_tr.md) • [Tiếng Việt](README_vi.md)

## 📋 Proje Hakkında

Trae CRM, küçük ve orta ölçekli işletmeler için tasarlanmış açık kaynak kodlu bir Müşteri İlişkileri Yönetim Sistemi (CRM) dir. Müşterileri, satış fırsatlarını, potansiyel müşterileri ve takip etkinliklerini yönetmek için kapsamlı özellikler sunar, bu da işletmelerin satış sonuçlarını ve müşteri memnuniyetini geliştirmelerine yardımcı olur.

## ✨ Ana Özellikler

- 🎯 **Müşteri Yönetimi**: Müşteri bilgilerini ekleyin, düzenleyin, arayın ve yönetin
- 📊 **Dashboard**: Satış istatistiklerini ve önemli göstergeleri görüntüleyin
- 💰 **Satış Fırsatları**: Satış fırsatlarını satış kanalı boyunca takip edin
- 📈 **Potansiyel Müşteri Yönetimi**: Potansiyel müşterileri ve dönüşüm oranlarını yönetin
- 📞 **İletişimler**: Müşteri iletişimlerini organize edin
- 📝 **Görevler**: Etkinlikleri ve takipçileri planlayın ve yönetin
- 🔐 **Erişim Kontrolü**: Kullanıcı rolleriyle güvenli kimlik doğrulama

## 🛠️ Teknik Stack

- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Backend**: Python, Flask
- **Veri Tabanı**: SQLite
- **Mimari**: MVC (Model-View-Controller)

## 🚀 Hızlı Başlangıç

### Önkoşullar

- Python 3.8+
- pip (Python paket yöneticisi)

### Kurulum

1. Depoyu klonlayın
   ```bash
   git clone https://github.com/yourusername/trae_crm.git
   cd trae_crm
   ```

2. Bağımlılıkları yükleyin
   ```bash
   pip install -r requirements.txt
   ```

3. Uygulamayı başlatın
   ```bash
   python run.py
   ```

4. Web tarayıcınızı açın ve `http://localhost:5000` adresine gidin

### Test Hesabı

- **Kullanıcı Adı**: admin
- **Şifre**: admin123

## 📁 Proje Yapısı

```
trae_crm/
├── app/
│   ├── __init__.py          # Flask uygulamasının başlatılması
│   ├── models/              # Veri modelleri (ORM)
│   ├── routes/              # Rota tanımları (denetleyiciler)
│   ├── static/              # Statik dosyalar (CSS, JS, resimler)
│   ├── templates/           # HTML şablonları
│   └── utils/               # Araçlar ve yardımcı fonksiyonlar
├── config.py                # Uygulama yapılandırmaları
├── run.py                   # Ana giriş noktası
├── requirements.txt         # Proje bağımlılıkları
└── README.md                # Proje belgeleri
```

## 📖 Kullanıcı Kılavuzu

### 1. Dashboard

Dashboard, işletmenizin önemli göstergelerinin genel bir görünümünü sağlar:

- **Satış İstatistikleri**: Toplam müşteri sayısı, potansiyel müşteriler, fırsatlar ve beklenen gelir
- **Satış Kanalı**: Satış fırsatlarının aşamalar boyunca ilerlemesini görüntüleyin
- **Önemli Göstergeler**: Bu ay yeni müşteriler, dönüşüm oranı vb.
- **Son Etkinlikler**: Son etkinlikler ve görevler

![Dashboard](screenshots/dashboard.png)

### 2. Müşteri Yönetimi

- **Müşteri Ekle**: Yeni müşteriler eklemek için formu doldurun
- **Müşteri Listesi**: Filtreleme ve sıralama seçenekleriyle tüm müşterileri görüntüleyin
- **Müşteri Detayları**: Müşteri bilgilerini görüntüleyin ve düzenleyin
- **Müşteri Ara**: Ad, e-posta veya telefon numarasına göre müşteriler bulun

### 3. Satış Fırsatları

- **Fırsat Ekle**: Yeni satış fırsatları oluşturun
- **Satış Kanalı**: Aşamalar boyunca fırsatların durumunu takip edin
- **Fırsat Değerlendirmesi**: Kapama değerleri ve olasılıkları atayın
- **Gelir Tahmini**: Satış fırsatlarından beklenen geliri hesaplayın

### 4. Potansiyel Müşteri Yönetimi

- **Potansiyel Müşteri Ekle**: Yeni potansiyel müşterileri belirtin
- **Kalite Kontrol**: Potansiyel müşterileri değerlendirin ve nitelendirin
- **Dönüşüm**: Potansiyel müşterilerin müşteriye dönüşümünü takip edin
- **Analiz**: Dönüşüm istatistiklerini görüntüleyin

### 5. İletişimler

- **İletişim Yönetimi**: Müşteri iletişimlerini organize edin
- **İletişim Bilgileri**: Telefon numarası, e-posta, konum vb.
- **Kategorilendirme**: Kolay erişim için iletişimleri kategorilendirin

### 6. Görevler

- **Görev Oluştur**: Toplantılar, aramalar veya görevleri planlayın
- **Son Tarihler**: Görevler için son tarihler belirleyin
- **Tamamlama**: Görevleri tamamlandı olarak işaretleyin
- **Görüntüleme**: Görevleri liste veya takvimde görüntüleyin

## ❓ Sık Sorulan Sorular

**Soru: SQLite'dan MySQL/PostgreSQL'e veri tabanı değiştirebilir miyim?**
Cevap: Evet, farklı bir veri tabanı kullanmak için `config.py` dosyasındaki ayarları değiştirebilirsiniz.

**Soru: Yeni kullanıcı rolleri nasıl eklerim?**
Cevap: `app/models/user.py` içindeki User modelini değiştirebilir ve yeni roller ekleyebilirsiniz.

**Soru: Arayüzü özelleştirebilir miyim?**
Cevap: Evet, `app/templates/` içindeki HTML şablonlarını ve `app/static/css/` içindeki CSS dosyalarını değiştirebilirsiniz.

## 🛠️ Geliştirme

### Geliştirme Ortamı

1. Sanal ortam oluşturun
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

2. Geliştirme bağımlılıklarını yükleyin
   ```bash
   pip install -r requirements.txt
   ```

3. Uygulamayı geliştirme modunda çalıştırın
   ```bash
   python run.py
   ```

### Katkıda Bulunma

1. Depoyu forklayın
2. Özelliğiniz için bir dal oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Dala push edin (`git push origin feature/AmazingFeature`)
5. Bir Pull Request açın

## 📋 Planlanan İşler

- [ ] E-posta ve SMS API entegrasyonu
- [ ] Gelişmiş raporlama özellikleri ekleyin
- [ ] Veri dışa aktarma (Excel, PDF) uygulayın
- [ ] Push bildirimleri ekleyin
- [ ] Mobil arayüzü geliştirin

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - Ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Proje**: [Trae CRM](https://github.com/yourusername/trae_crm)
- **E-posta**: your.email@example.com
- **Sorunlar**: [Bir sorun bildirin](https://github.com/yourusername/trae_crm/issues)

---

Trae CRM'yi seçtiğiniz için teşekkür ederiz! 🎉