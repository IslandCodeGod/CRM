# Trae CRM - Kundrelationssystem

🌐 [English](README_en.md) • [中文](README_zh.md) • [Deutsch](README_de.md) • [Español](README_es.md) • [Français](README_fr.md) • [Italiano](README_it.md) • [日本語](README_ja.md) • [한국어](README_ko.md) • [Nederlands](README_nl.md) • [Polski](README_pl.md) • [Português](README_pt.md) • [Русский](README_ru.md) • [العربية](README_ar.md) • [हिन्दी](README_hi.md) • [Svenska](README_sv.md) • [ไทย](README_th.md) • [Türkçe](README_tr.md) • [Tiếng Việt](README_vi.md)

## 📋 Projektöversikt

Trae CRM är ett öppen källkod kundrelationssystem (CRM) designat för små och medelstora företag. Den erbjuder fullständiga funktioner för att hantera kunder, försäljningsmöjligheter, leads och uppföljningsaktiviteter, vilket hjälper företag att förbättra sin försäljningsresultat och kundnöjdhet.

## ✨ Huvudfunktioner

- 🎯 **Kundhantering**: Lägg till, redigera, sök och hantera kundinformation
- 📊 **Dashboard**: Visa försäljningsstatistik och nyckeltal
- 💰 **Försäljningsmöjligheter**: Följ försäljningsmöjligheter genom försäljningsfylkan
- 📈 **Leadhantering**: Hantera potentiella leads och konverteringsförhållanden
- 📞 **Kontakter**: Håll kundkontakter organiserade
- 📝 **Uppgifter**: Planera och hantera aktiviteter och uppföljningar
- 🔐 **Åtkomstkontroll**: Säker autentisering med användarroller

## 🛠️ Teknisk stack

- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Backend**: Python, Flask
- **Databas**: SQLite
- **Arkitektur**: MVC (Model-View-Controller)

## 🚀 Snabbstart

### Förutsättningar

- Python 3.8+
- pip (Python-pakethanterare)

### Installation

1. Klona lagringsplatsen
   ```bash
   git clone https://github.com/yourusername/trae_crm.git
   cd trae_crm
   ```

2. Installera beroenden
   ```bash
   pip install -r requirements.txt
   ```

3. Starta applikationen
   ```bash
   python run.py
   ```

4. Öppna webbläsaren och gå till `http://localhost:5000`

### Testkonto

- **Användarnamn**: admin
- **Lösenord**: admin123

## 📁 Projektstruktur

```
trae_crm/
├── app/
│   ├── __init__.py          # Initialisering av Flask-applikation
│   ├── models/              # Datamodeller (ORM)
│   ├── routes/              # Ruttdefinitioner (kontrollanter)
│   ├── static/              # Statiska filer (CSS, JS, bilder)
│   ├── templates/           # HTML-mallar
│   └── utils/               # Verktyg och hjälpfunktioner
├── config.py                # Applikationskonfigurationer
├── run.py                   # Huvudinfångningspunkt
├── requirements.txt         # Projektberoenden
└── README.md                # Projektdokumentation
```

## 📖 Användarhandbok

### 1. Dashboard

Dashboardet ger en översikt över dina affärers nyckeltal:

- **Försäljningsstatistik**: Totalt antal kunder, leads, möjligheter och förväntad inkomst
- **Försäljningsfylka**: Visa framsteg för försäljningsmöjligheter genom steg
- **Nyckeltal**: Nya kunder den här månaden, konverteringsförhållande och så vidare
- **Senaste aktiviteter**: Senaste aktiviteter och uppgifter

![Dashboard](screenshots/dashboard.png)

### 2. Kundhantering

- **Lägg till kund**: Fyll i formuläret för att lägga till nya kunder
- **Kundlista**: Visa alla kunder med filtrerings- och sorteringsalternativ
- **Kunddetaljer**: Visa och redigera kundinformation
- **Sök kunder**: Hitta kunder efter namn, e-post eller telefon

### 3. Försäljningsmöjligheter

- **Lägg till möjlighet**: Skapa nya försäljningsmöjligheter
- **Försäljningsfylka**: Följ status för möjligheter genom steg
- **Möjlighetsbedömning**: Tilldela värden och sannolikheter för stängning
- **Inkomstprognos**: Beräkna förväntad inkomst från försäljningsmöjligheter

### 4. Leadhantering

- **Lägg till lead**: Ange nya potentiella leads
- **Kvalificering**: Bedöm och kvalificera leads
- **Konvertering**: Följ konvertering av leads till kunder
- **Analys**: Visa konverteringsstatistik

### 5. Kontakter

- **Kontakterhantering**: Håll kundkontakter organiserade
- **Kontaktinformation**: Telefonnummer, e-post, plats och så vidare
- **Kategorisering**: Kategorisera kontakter för enkel åtkomst

### 6. Uppgifter

- **Skapa uppgift**: Planera möten, samtal eller uppgifter
- **Deadlines**: Ange deadlines för uppgifter
- **Slutförande**: Markera uppgifter som slutförda
- **Visning**: Visa uppgifter i lista eller kalender

## ❓ Vanliga frågor

**Fråga: Kan jag byta databas från SQLite till MySQL/PostgreSQL?**
Svar: Ja, du kan modifiera inställningarna i `config.py`-filen för att använda en annan databas.

**Fråga: Hur kan jag lägga till nya användarroller?**
Svar: Du kan modifiera User-modellen i `app/models/user.py` och lägga till nya roller.

**Fråga: Är det möjligt att anpassa gränssnittet?**
Svar: Ja, du kan modifiera HTML-mallarna i `app/templates/` och CSS-filerna i `app/static/css/`.

## 🛠️ Utveckling

### Utvecklingsmiljö

1. Skapa en virtuell miljö
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

2. Installera utvecklingsberoenden
   ```bash
   pip install -r requirements.txt
   ```

3. Kör applikationen i utvecklingsläge
   ```bash
   python run.py
   ```

### Bidra

1. Gör en fork av lagringsplatsen
2. Skapa en gren för din funktion (`git checkout -b feature/AmazingFeature`)
3. Gör commit för dina ändringar (`git commit -m 'Add some AmazingFeature'`)
4. Pusha till grenen (`git push origin feature/AmazingFeature`)
5. Öppna en Pull Request

## 📋 Planerade uppgifter

- [ ] Integrera e-post- och SMS-API
- [ ] Lägg till avancerade rapporteringsfunktioner
- [ ] Implementera dataexport (Excel, PDF)
- [ ] Lägg till push-meddelanden
- [ ] Förbättra mobilgränssnittet

## 📄 Licens

Detta projekt är licensierat under MIT-licensen - se [LICENSE](LICENSE)-filen för detaljer.

## 📞 Kontakter

- **Projekt**: [Trae CRM](https://github.com/yourusername/trae_crm)
- **E-post**: your.email@example.com
- **Problem**: [Rapportera ett problem](https://github.com/yourusername/trae_crm/issues)

---

Tack för att du valde Trae CRM! 🎉