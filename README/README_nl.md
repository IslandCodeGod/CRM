# Trae CRM - Klantbeheersysteem

🌐 [English](README_en.md) • [中文](README_zh.md) • [Deutsch](README_de.md) • [Español](README_es.md) • [Français](README_fr.md) • [Italiano](README_it.md) • [日本語](README_ja.md) • [한국어](README_ko.md) • [Nederlands](README_nl.md) • [Polski](README_pl.md) • [Português](README_pt.md) • [Русский](README_ru.md) • [العربية](README_ar.md) • [हिन्दी](README_hi.md) • [Svenska](README_sv.md) • [ไทย](README_th.md) • [Türkçe](README_tr.md) • [Tiếng Việt](README_vi.md)

## 📋 Projectoverzicht

Trae CRM is een open-source Klantrelatiebeheer (CRM) systeem ontworpen voor kleine en middelgrote ondernemingen. Het biedt volledige functionaliteit om klanten, verkoopkansen, leads en follow-up activiteiten te beheren, waardoor bedrijven hun verkoopprestaties en klanttevredenheid kunnen verbeteren.

## ✨ Hoofdkenmerken

- 🎯 **Klantbeheer**: Voeg klantinformatie toe, bewerk, zoek en beheer
- 📊 **Dashboard**: Visualiseer verkoopstatistieken en belangrijke metrisch
- 💰 **Verkoopkansen**: Volg verkoopkansen door de verkoopfunnel
- 📈 **Leadbeheer**: Beheer potentiële leads en conversieratio's
- 📞 **Contactpersonen**: Houd klantcontactpersonen georganiseerd
- 📝 **Taken**: Plan en beheer activiteiten en follow-ups
- 🔐 **Toegangscontrole**: Veilig authenticatiesysteem met gebruikersrollen

## 🛠️ Technologie Stack

- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Backend**: Python, Flask
- **Database**: SQLite
- **Structuur**: MVC (Model-View-Controller)

## 🚀 Snelstart

### Vereisten

- Python 3.8+
- pip (Python package manager)

### Installatie

1. Clone de repository
   ```bash
   git clone https://github.com/yourusername/trae_crm.git
   cd trae_crm
   ```

2. Installeer de afhankelijkheden
   ```bash
   pip install -r requirements.txt
   ```

3. Start de applicatie
   ```bash
   python run.py
   ```

4. Open uw browser en ga naar `http://localhost:5000`

### Testaccount

- **Gebruikersnaam**: admin
- **Wachtwoord**: admin123

## 📁 Projectstructuur

```
trae_crm/
├── app/
│   ├── __init__.py          # Flask applicatie initialisatie
│   ├── models/              # Datamodellen (ORM)
│   ├── routes/              # Route definities (controllers)
│   ├── static/              # Statische bestanden (CSS, JS, afbeeldingen)
│   ├── templates/           # HTML templates
│   └── utils/               # Hulpmiddelen en ondersteunende functies
├── config.py                # Applicatieconfiguraties
├── run.py                   # Hoofdingangspunt
├── requirements.txt         # Projectafhankelijkheden
└── README.md                # Projectdocumentatie
```

## 📖 Gebruikershandleiding

### 1. Dashboard

Het dashboard biedt een overzicht van de belangrijke metrisch van uw bedrijf:

- **Verkoopmetrisch**: Totaal aantal klanten, leads, kansen en verwachte omzet
- **Verkoopfunnel**: Visualiseer de voortgang van verkoopkansen
- **Belangrijke metrisch**: Nieuwe klanten deze maand, conversieratio, etc.
- **Recente activiteiten**: Laatste activiteiten en taken

![Dashboard](screenshots/dashboard.png)

### 2. Klantbeheer

- **Voeg klant toe**: Vul het formulier in om nieuwe klanten toe te voegen
- **Klantlijst**: Toon alle klanten met filter- en sorteerfunctionaliteit
- **Klantdetails**: Bekijk en bewerk klantinformatie
- **Zoek klanten**: Vind klanten op naam, e-mail of telefoonnummer

### 3. Beheer van verkoopkansen

- **Voeg kans toe**: Maak nieuwe verkoopkansen
- **Verkoopfunnel**: Volg de status van kansen door de fasen
- **Kansenbeoordeling**: Ken bedragen en sluitingskansen toe
- **Omzetvoorspelling**: Bereken de verwachte omzet uit kansen

### 4. Leadbeheer

- **Voeg lead toe**: Voer nieuwe potentiële leads in
- **Kwalificering**: Evalueer en kwalificeer leads
- **Conversie**: Volg de conversie van leads naar klanten
- **Analyse**: Toon conversiestatistieken

### 5. Contactpersonen

- **Contactbeheer**: Houd klantcontactpersonen georganiseerd
- **Contactgegevens**: Telefoonnummer, e-mail, locatie, etc.
- **Categorisering**: Categoriseer contactpersonen voor gemakkelijke toegang

### 6. Taken

- **Maak taak**: Plan meetings, telefonate of taken
- **Einddatums**: Stel deadlines in voor taken
- **Voltooiing**: Markeer taken als voltooid
- **Weergave**: Toon taken in een lijst of kalender

## ❓ Veelgestelde vragen

**V: Kan ik de database van SQLite veranderen naar MySQL/PostgreSQL?**
A: Ja, u kunt de instellingen in het `config.py` bestand wijzigen om een andere database te gebruiken.

**V: Hoe voeg ik nieuwe gebruikersrollen toe?**
A: U kunt het User-model in `app/models/user.py` wijzigen om nieuwe rollen toe te voegen.

**V: Is het mogelijk om de interface aan te passen?**
A: Ja, u kunt de HTML-templates in `app/templates/` en de CSS-bestanden in `app/static/css/` wijzigen.

## 🛠️ Ontwikkeling

### Ontwikkelomgeving

1. Maak een virtuele omgeving
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

2. Installeer ontwikkelingsafhankelijkheden
   ```bash
   pip install -r requirements.txt
   ```

3. Draai de app in ontwikkelingsmodus
   ```bash
   python run.py
   ```

### Bijdragen

1. Fork de repository
2. Maak een functiebranch (`git checkout -b feature/AmazingFeature`)
3. Commit uw wijzigingen (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📋 Te doen

- [ ] Integreer e-mail en SMS API's
- [ ] Voeg geavanceerde rapportagemogelijkheden toe
- [ ] Implementeer gegevensexport (Excel, PDF)
- [ ] Voeg pushnotificaties toe
- [ ] Verbeter de mobiele interface

## 📄 Licentie

Dit project is gelicentieerd onder de MIT-licentie - bekijk het bestand [LICENSE](LICENSE) voor details.

## 📞 Contact

- **Project**: [Trae CRM](https://github.com/yourusername/trae_crm)
- **E-mail**: your.email@example.com
- **Issues**: [Meld een probleem](https://github.com/yourusername/trae_crm/issues)

---

Bedankt dat u Trae CRM hebt gekozen! 🎉