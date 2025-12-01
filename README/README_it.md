# Trae CRM - Gestione Clienti e Vendite

🌐 [English](README_en.md) • [中文](README_zh.md) • [Deutsch](README_de.md) • [Español](README_es.md) • [Français](README_fr.md) • [Italiano](README_it.md) • [日本語](README_ja.md) • [한국어](README_ko.md) • [Nederlands](README_nl.md) • [Polski](README_pl.md) • [Português](README_pt.md) • [Русский](README_ru.md) • [العربية](README_ar.md) • [हिन्दी](README_hi.md) • [Svenska](README_sv.md) • [ไทย](README_th.md) • [Türkçe](README_tr.md) • [Tiếng Việt](README_vi.md)

## 📋 Panoramica del Progetto

Trae CRM è un sistema di gestione delle relazioni con i clienti (CRM) open-source progettato per piccole e medie imprese. Offre funzionalità complete per gestire clienti, opportunità di vendita, lead e attività di follow-up, aiutando le aziende a migliorare le loro performance di vendita e la soddisfazione dei clienti.

## ✨ Caratteristiche Principali

- 🎯 **Gestione dei Clienti**: Aggiungi, modifica, cerca e gestisci informazioni sui clienti
- 📊 **Dashboard**: Visualizza statistiche di vendita e metriche chiave
- 💰 **Opportunità di Vendita**: Traccia le opportunità di vendita attraverso il funnel di vendita
- 📈 **Lead Management**: Gestisci lead potenziali e转化率
- 📞 **Contatti**: Mantieni i contatti dei clienti organizzati
- 📝 **Attività**: Pianifica e gestisci attività e follow-up
- 🔐 **Controllo degli Accessi**: Sistema di autenticazione sicuro con ruoli utente

## 🛠️ Stack Tecnologico

- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Backend**: Python, Flask
- **Database**: SQLite
- **Struttura**: MVC (Model-View-Controller)

## 🚀 Avvio Rapido

### Prerequisiti

- Python 3.8+
- pip (gestore pacchetti Python)

### Installazione

1. Clona il repository
   ```bash
   git clone https://github.com/yourusername/trae_crm.git
   cd trae_crm
   ```

2. Installa le dipendenze
   ```bash
   pip install -r requirements.txt
   ```

3. Avvia l'applicazione
   ```bash
   python run.py
   ```

4. Apri il browser e vai a `http://localhost:5000`

### Account di Prova

- **Username**: admin
- **Password**: admin123

## 📁 Struttura del Progetto

```
trae_crm/
├── app/
│   ├── __init__.py          # Inizializzazione dell'app Flask
│   ├── models/              # Modelli di dati (ORM)
│   ├── routes/              # Definizioni delle rotte (controller)
│   ├── static/              # File statici (CSS, JS, immagini)
│   ├── templates/           # Template HTML
│   └── utils/               # Utility e funzioni di supporto
├── config.py                # Configurazioni dell'applicazione
├── run.py                   # Punto di ingresso principale
├── requirements.txt         # Dipendenze del progetto
└── README.md                # Documentazione del progetto
```

## 📖 Guida all'uso

### 1. Dashboard

La dashboard fornisce una panoramica delle metriche chiave del tuo business:

- **Metriche di Vendita**: Totale clienti, lead, opportunità e entrate previste
- **Funnel di Vendita**: Visualizzazione del progresso delle opportunità di vendita
- **Metriche Chiave**: Nuovi clienti del mese, tasso di conversione, etc.
- **Attività Recenti**: Ultime attività e task

![Dashboard](screenshots/dashboard.png)

### 2. Gestione dei Clienti

- **Aggiungi Clienti**: Compila il modulo per aggiungere nuovi clienti
- **Elenco Clienti**: Visualizza tutti i clienti con filtri e ordinamento
- **Dettagli Clienti**: Visualizza e modifica le informazioni dei clienti
- **Cerca Clienti**: Trova clienti per nome, email o telefono

### 3. Gestione delle Opportunità

- **Aggiungi Opportunità**: Crea nuove opportunità di vendita
- **Funnel di Vendita**: Traccia lo stato delle opportunità attraverso le fasi
- **Valutazione delle Opportunità**: Assegna importi e probabilità di chiusura
- **Stima delle Entrate**: Calcola le entrate previste dalle opportunità

### 4. Gestione dei Lead

- **Aggiungi Lead**: Inserisci nuovi lead potenziali
- **Qualificazione**: Valuta e qualifica i lead
- **Conversione**: Traccia la conversione dei lead in clienti
- **Analisi**: Visualizza statistiche di conversione

### 5. Contatti

- **Gestione Contatti**: Mantieni i contatti dei clienti organizzati
- **Informazioni di Contatto**: Numero di telefono, email, posizione, etc.
- **Categorizzazione**: Categorizza i contatti per facilità di accesso

### 6. Attività

- **Crea Attività**: Pianifica meeting, chiamate o task
- **Scadenze**: Imposta date di scadenza per le attività
- **Completamento**: Contrassegna le attività come completate
- **Visualizzazione**: Visualizza le attività in una lista o calendario

## ❓ Domande Frequenti

**Q: Posso cambiare il database da SQLite a MySQL/PostgreSQL?**
A: Sì, puoi modificare le impostazioni nel file `config.py` per utilizzare un database diverso.

**Q: Come posso aggiungere nuovi ruoli utente?**
A: Puoi modificare il modello User in `app/models/user.py` e aggiungere nuovi ruoli.

**Q: È possibile personalizzare l'interfaccia?**
A: Sì, puoi modificare i template HTML in `app/templates/` e i file CSS in `app/static/css/`.

## 🛠️ Sviluppo

### Ambiente di Sviluppo

1. Crea un ambiente virtuale
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

2. Installa le dipendenze di sviluppo
   ```bash
   pip install -r requirements.txt
   ```

3. Esegui l'app in modalità di sviluppo
   ```bash
   python run.py
   ```

### Contribuire

1. Fork il repository
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📋 To Do

- [ ] Integrare API per email e SMS
- [ ] Aggiungere reportistica avanzata
- [ ] Implementare esportazione dati (Excel, PDF)
- [ ] Aggiungere notifiche push
- [ ] Migliorare l'interfaccia mobile

## 📄 Licenza

Questo progetto è concesso in licenza sotto la Licenza MIT - vedere il file [LICENSE](LICENSE) per i dettagli.

## 📞 Contatti

- **Progetto**: [Trae CRM](https://github.com/yourusername/trae_crm)
- **Email**: your.email@example.com
- **Issues**: [Segnala un problema](https://github.com/yourusername/trae_crm/issues)

---

Grazie per aver scelto Trae CRM! 🎉