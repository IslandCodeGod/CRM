[中文](README_zh.md)|[English](README_en.md)|German|[Español](README_es.md)|[Français](README_fr.md)|[Italiano](README_it.md)|[日本語](README_ja.md)|[한국어](README_ko.md)|[Nederlands](README_nl.md)|[Polski](README_pl.md)|[Português](README_pt.md)|[Русский](README_ru.md)|[العربية](README_ar.md)|[हिन्दी](README_hi.md)|[Svenska](README_sv.md)|[ไทย](README_th.md)|[Türkçe](README_tr.md)|[Tiếng Việt](README_vi.md)

# CRM-System

Ein voll ausgestattetes, benutzerfreundliches Kundenbeziehungsmanagementsystem, entwickelt mit Python Flask.

## Funktionen

### Kernfunktionen
- ✅ **Benutzerauthentifizierungssystem** - Anmelden, Registrieren, Sitzungsverwaltung
- ✅ **Kundenmanagement** - Komplette CRUD-Operationen, Such- und Filterfunktionen
- ✅ **Verkaufslead-Tracking** - Lead-Statusverwaltung, Bewertungssystem
- ✅ **Verkaufschancenmanagement** - Kanban-Ansicht, Verkaufsprozessmanagement
- ✅ **Kontaktmanagement** - Verwaltung von Kundenkontaktinformationen
- ✅ **Aufgabenverwaltung** - Aufgabenlisten, Prioritätsmanagement
- ✅ **Datenanalyse** - Visuelle Diagramme, Anzeige wichtiger Kennzahlen

### Technische Highlights
- 🎨 **Modernes UI-Design** - Wechsel zwischen dunklem/hellem Theme
- 📱 **Reaktives Layout** - Unterstützt den Zugriff über Mobilgeräte
- ⚡ **Flüssige Animationen** - Seitenübergänge und interaktive Animationen
- 📊 **Datenvisualisierung** - Chart.js für Datenpräsentation
- 🔍 **Echtzeit-Suche** - Intelligente Suche und Filterung
- 🎯 **Kanban-Management** - Drag-and-Drop-Verwaltung von Verkaufschancen

## Technologie-Stack

### Backend
- Python 3.x
- Flask 3.0
- SQLAlchemy (ORM)
- Flask-Login (Authentifizierung)
- SQLite (Datenbank)

### Frontend
- HTML5
- CSS3 (Nativ, keine Frameworks)
- JavaScript (ES6+)
- Chart.js (Datenvisualisierung)

## Schnellstart

### Methode 1: Starten mit Umgebungsvariablen (empfohlen)

**Umgebungsvariablen konfigurieren:**
```bash
# Erforderliche Umgebungsvariablen setzen
# SECRET_KEY: Anwendungsgeheimschlüssel (muss für Produktion komplex sein)
# DATABASE_URL: Datenbankverbindungs-URL (optional, Standard: SQLite)
# PORT: Anwendungsport (optional, Standard: 5000)

# Beispiel für Windows-Eingabeaufforderung
set SECRET_KEY=your_secure_secret_key_here
set PORT=5000

# Beispiel für Linux/Mac-Terminal
export SECRET_KEY=your_secure_secret_key_here
export PORT=5000
```

**Mit Startskripten:**

**Windows-Benutzer:**
```bash
# In Eingabeaufforderung oder PowerShell ausführen
start.bat
```

**Linux/Mac-Benutzer:**
```bash
chmod +x start.sh
./start.sh
```

### Methode 2: Manueller Start

1. Abhängigkeiten installieren:
```bash
pip install -r requirements.txt
```

2. Anwendung starten:
```bash
python app.py
```

3. Auf das System zugreifen:
Öffnen Sie Ihren Browser und besuchen Sie `http://localhost:5000`

## Standardkonto

- **Benutzername**: admin
- **Passwort**: admin123

## Projektstruktur

```
trae_crm/
├── app.py                 # Flask-Anwendungseinstiegspunkt
├── config.py              # Konfigurationsdatei
├── requirements.txt       # Python-Abhängigkeiten
├── models/                # Datenmodelle
│   ├── user.py           # Benutzermodell
│   ├── customer.py       # Kundenmodell
│   ├── lead.py           # Verkaufslead-Modell
│   ├── opportunity.py    # Verkaufschancen-Modell
│   ├── contact.py        # Kontaktmodell
│   └── task.py           # Aufgabenmodell
├── routes/                # Routenhandler
│   ├── auth.py           # Authentifizierungsrouten
│   ├── customer.py       # Kundenmanagementrouten
│   ├── lead.py           # Lead-Managementrouten
│   ├── opportunity.py    # Chancen-Managementrouten
│   ├── contact.py        # Kontakt-Managementrouten
│   ├── task.py           # Aufgaben-Managementrouten
│   └── dashboard.py      # Dashboardrouten
├── static/                # Statische Ressourcen
│   ├── css/              # Stylesheets
│   └── js/               # JavaScript-Dateien
└── templates/             # HTML-Vorlagen
    ├── base.html         # Basistemplate
    ├── auth/             # Authentifizierungsseiten
    └── dashboard/        # Verwaltungsseiten
```

## Benutzeranleitung

### 1. Anmelden beim System

1. Öffnen Sie Ihren Browser und besuchen Sie `http://localhost:5000`
2. Geben Sie Ihren Benutzernamen und Ihr Passwort ein
3. Klicken Sie auf die Schaltfläche "Anmelden"

### 2. Dashboard

Nach der Anmeldung gelangen Sie automatisch zum Dashboard, wo Sie sehen können:
- Gesamtanzahl der Kunden, Verkaufsleads, Verkaufschancen und Aufgabenstatistiken
- Verkaufstrichterdiagramm
- Wichtige Kennzahlen (neue Kunden diesen Monat, Gesamtwert der Verkaufschancen, Lead-Umwandlungsrate)
- Listen mit kürzlichen Aufgaben und kürzlichen Kunden

![Dashboard-Oberfläche](screenshots/dashboard.png)

### 3. Kundenmanagement

**Kunde hinzufügen:**
1. Klicken Sie auf "Kundenmanagement" im linken Menü
2. Klicken Sie auf die Schaltfläche "Kunde hinzufügen" oben rechts
3. Geben Sie die Kundendaten ein (Name ist erforderlich)
4. Klicken Sie auf "Speichern"

**Kunden suchen:**
- Geben Sie Schlüsselwörter in das Suchfeld ein, um nach Kundennamen, Unternehmen oder E-Mail zu suchen

**Kunden filtern:**
- Verwenden Sie das Status-Dropdown zum Filtern (Aktiv/Inaktiv/Potentiell)

**Kunde bearbeiten:**
1. Klicken Sie auf die Schaltfläche "Bearbeiten" in der Kundenzeile
2. Ändern Sie die Informationen
3. Klicken Sie auf "Speichern"

**Kunde löschen:**
1. Klicken Sie auf die Schaltfläche "Löschen" in der Kundenzeile
2. Bestätigen Sie die Löschung

### 4. Verkaufslead-Management

**Lead hinzufügen:**
1. Klicken Sie auf "Verkaufsleads" im linken Menü
2. Klicken Sie auf die Schaltfläche "Lead hinzufügen"
3. Geben Sie die Lead-Informationen ein
4. Setzen Sie den Lead-Score (0-100)
5. Wählen Sie die Lead-Quelle
6. Klicken Sie auf "Speichern"

**Lead-Status aktualisieren:**
- Neu → Kontakt aufgenommen → Bestätigt → Konvertiert/Verloren

### 5. Verkaufschancen-Management

**Kanban-Ansicht:**
- Verkaufschancen werden in einem Kanban-Board angezeigt
- Beinhaltet 5 Phasen: Lead, Qualifizierung, Angebot, Verhandlung, Geschlossen

**Chance hinzufügen:**
1. Klicken Sie auf die Schaltfläche "Chance hinzufügen"
2. Wählen Sie den zugehörigen Kunden
3. Geben Sie den Chancennamen, Betrag und Schließwahrscheinlichkeit ein
4. Setzen Sie das voraussichtliche Schließdatum
5. Klicken Sie auf "Speichern"

**Drag-and-Drop zum Aktualisieren der Phase:**
- Ziehen Sie Chancenkarten direkt in unterschiedliche Phasenkolonnen

### 6. Kontakt-Management

**Kontakt hinzufügen:**
1. Klicken Sie auf die Schaltfläche "Kontakt hinzufügen"
2. Wählen Sie den zugehörigen Kunden
3. Geben Sie die Kontaktdaten ein
4. Markieren Sie optional "Als Hauptkontakt setzen"
5. Klicken Sie auf "Speichern"

### 7. Aufgaben-Management

**Aufgabe hinzufügen:**
1. Klicken Sie auf die Schaltfläche "Aufgabe hinzufügen"
2. Geben Sie den Aufgaben-Titel und die Beschreibung ein
3. Setzen Sie die Priorität (Niedrig/Mittel/Hoch/Dringend)
4. Setzen Sie den Status (Ausstehend/In Bearbeitung/Abgeschlossen/Abgebrochen)
5. Setzen Sie das Fälligkeitsdatum
6. Klicken Sie auf "Speichern"

**Aufgaben filtern:**
- Nach Status filtern
- Nach Priorität filtern

### 8. Theme-Wechsel

Klicken Sie auf die Theme-Umschalttaste (🌙/☀️) unten rechts, um zwischen dunklen und hellen Themes zu wechseln.

## Häufig gestellte Fragen

### F: Wie registriere ich einen neuen Benutzer?
A: Klicken Sie auf den Link "Jetzt registrieren" auf der Anmeldeseite, geben Sie Benutzername, E-Mail und Passwort ein und registrieren Sie sich.

### F: Was tun, wenn ich mein Passwort vergessen habe?
A: Die Passwortwiederherstellung wird in der aktuellen Version nicht unterstützt. Sie können sich mit dem Standardadministratorkonto anmelden.

### F: Wo werden die Daten gespeichert?
A: Die Daten werden in der SQLite-Datenbankdatei `crm.db` gespeichert, die sich im Projektstammverzeichnis befindet.

### F: Wie sichere ich meine Daten?
A: Kopieren Sie einfach die Datei `crm.db`, um alle Daten zu sichern.

### F: Unterstützt es mehrere Benutzer?
A: Ja. Jeder Benutzer kann nur Daten sehen, die er selbst erstellt hat.

### F: Wie exportiere ich Daten?
A: Der Datenexport wird in der aktuellen Version nicht unterstützt. Sie können direkt auf die SQLite-Datenbankdatei zugreifen.

## Entwicklungsanweisungen

### Neue Funktionen hinzufügen
1. Erstellen Sie Datenmodelle in `models/`
2. Fügen Sie Routenhandler in `routes/` hinzu
3. Erstellen Sie Seitentemplates in `templates/`
4. Registrieren Sie Blueprints in `app.py`

### Datenbankmigration
Datenbanktabellen und das Standardadministratorkonto werden beim ersten Ausführen automatisch erstellt.

### Benutzerdefinierte Konfiguration
Bearbeiten Sie die Datei `config.py`, um die Anwendungskonfiguration zu ändern.

## Hauptpunkte

### Technische Fähigkeiten
1. **Full-Stack-Entwicklung** - Komplette Implementierung von Backend-API + Frontend-Oberfläche
2. **Datenbankdesign** - Vernünftige Tabellenstruktur und Beziehungsdesign
3. **RESTful API** - Standardisierte API-Design
4. **Benutzererfahrung** - Freundliches Interaktionsdesign und visuelle Effekte

### Projekthighlights
1. **Vollständiger Geschäftsprozess** - Gesamter Prozess von Lead über Kunde bis zur Chance
2. **Datenvisualisierung** - Intuitive Diagrammdarstellung
3. **Reaktives Design** - Unterstützung für mehrere Geräte
4. **Theme-Wechsel** - Unterstützung für dunkles/helles Modus

## Lizenz

MIT-Lizenz

## Kontaktinformationen

Bei Fragen, Vorschlägen oder wenn Sie die Vollversion/benutzerdefinierte Entwicklung benötigen, kontaktieren Sie uns bitte über:

- **E-Mail**: austinlive666@gmail.com (Empfohlen)
- **Discord**: [https://discord.gg/7AN9PuGn](https://discord.gg/7AN9PuGn)

---

Vielen Dank für die Nutzung dieses Projekts!