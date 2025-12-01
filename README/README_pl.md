# Trae CRM - System Zarządzania Relacjami z Klientami

🌐 [English](README_en.md) • [中文](README_zh.md) • [Deutsch](README_de.md) • [Español](README_es.md) • [Français](README_fr.md) • [Italiano](README_it.md) • [日本語](README_ja.md) • [한국어](README_ko.md) • [Nederlands](README_nl.md) • [Polski](README_pl.md) • [Português](README_pt.md) • [Русский](README_ru.md) • [العربية](README_ar.md) • [हिन्दी](README_hi.md) • [Svenska](README_sv.md) • [ไทย](README_th.md) • [Türkçe](README_tr.md) • [Tiếng Việt](README_vi.md)

## 📋 Przegląd Projektu

Trae CRM to otwarty system zarządzania relacjami z klientami (CRM) zaprojektowany dla małych i średnich firm. Oferuje pełną funkcjonalność do zarządzania klientami, oportunnościami sprzedaży, leadami i aktywnościami follow-up, pomagając firmom poprawić swoje wyniki sprzedaży i zadowolenie klientów.

## ✨ Główne Cechy

- 🎯 **Zarządzanie Klientami**: Dodawanie, edycja, wyszukiwanie i zarządzanie informacjami o klientach
- 📊 **Dashboard**: Wizualizacja statystyk sprzedaży i kluczowych metryk
- 💰 **Oportunity Sprzedaży**: Śledzenie oportunności sprzedaży przez funnel sprzedaży
- 📈 **Zarządzanie Leadami**: Zarządzanie potencjalnymi leadami i wskaźnikami konwersji
- 📞 **Kontakty**: Utrzymywanie zorganizowanych kontaktów z klientami
- 📝 **Zadania**: Planowanie i zarządzanie aktywnościami i follow-upami
- 🔐 **Kontrola Dostępu**: Bezpieczny system uwierzytelniania z rolami użytkowników

## 🛠️ Stos Technologiczny

- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Backend**: Python, Flask
- **Baza Danych**: SQLite
- **Struktura**: MVC (Model-View-Controller)

## 🚀 Szybki Start

### Wymagania

- Python 3.8+
- pip (menedżer pakietów Pythona)

### Instalacja

1. Sklonuj repozytorium
   ```bash
   git clone https://github.com/yourusername/trae_crm.git
   cd trae_crm
   ```

2. Zainstaluj zależności
   ```bash
   pip install -r requirements.txt
   ```

3. Uruchom aplikację
   ```bash
   python run.py
   ```

4. Otwórz przeglądarkę i przejdź do `http://localhost:5000`

### Konto Testowe

- **Nazwa użytkownika**: admin
- **Hasło**: admin123

## 📁 Struktura Projektu

```
trae_crm/
├── app/
│   ├── __init__.py          # Inicjalizacja aplikacji Flask
│   ├── models/              # Modele danych (ORM)
│   ├── routes/              # Definicje tras (kontrolery)
│   ├── static/              # Pliki statyczne (CSS, JS, obrazy)
│   ├── templates/           # Szablony HTML
│   └── utils/               # Narzędzia i funkcje pomocnicze
├── config.py                # Konfiguracje aplikacji
├── run.py                   # Główny punkt wejścia
├── requirements.txt         # Zależności projektu
└── README.md                # Dokumentacja projektu
```

## 📖 Przewodnik Użytkownika

### 1. Dashboard

Dashboard zapewnia przegląd kluczowych metryk Twojego biznesu:

- **Metryki Sprzedaży**: Całkowita liczba klientów, leadów, oportunności i przewidywane przychody
- **Funnel Sprzedaży**: Wizualizacja postępu oportunności sprzedaży
- **Kluczowe Metryki**: Nowi klienci w tym miesiącu, wskaźnik konwersji itp.
- **Ostatnie Aktywności**: Najnowsze aktywności i zadania

![Dashboard](screenshots/dashboard.png)

### 2. Zarządzanie Klientami

- **Dodaj Klienta**: Wypełnij formularz, aby dodać nowego klienta
- **Lista Klientów**: Wyświetl wszystkich klientów z funkcją filtrowania i sortowania
- **Szczegóły Klienta**: Wyświetl i edytuj informacje o kliencie
- **Wyszukaj Klientów**: Znajdź klientów po imieniu, adresie e-mail lub numerze telefonu

### 3. Zarządzanie Oportunity Sprzedaży

- **Dodaj Oportunity**: Utwórz nowe oportunity sprzedaży
- **Funnel Sprzedaży**: Śledź status oportunity przez etapy
- **Ocena Oportunity**: Przypisz kwoty i prawdopodobieństwa zamknięcia
- **Przewidywane Przychody**: Oblicz przewidywane przychody z oportunity

### 4. Zarządzanie Leadami

- **Dodaj Lead**: Wprowadź nowe potencjalne leady
- **Kwalifikacja**: Oceniaj i kwalifikuj leady
- **Konwersja**: Śledź konwersję leadów na klientów
- **Analiza**: Wyświetl statystyki konwersji

### 5. Kontakty

- **Zarządzanie Kontaktami**: Utrzymuj zorganizowane kontakty z klientami
- **Dane Kontaktowe**: Numer telefonu, e-mail, lokalizacja itp.
- **Kategoryzacja**: Kategoryzuj kontakty dla łatwiejszego dostępu

### 6. Zadania

- **Utwórz Zadanie**: Planuj spotkania, telefony lub zadania
- **Terminy**: Ustaw terminy końcowe dla zadań
- **Ukończenie**: Oznacz zadania jako ukończone
- **Wyświetlanie**: Wyświetl zadania na liście lub kalendarzu

## ❓ Często Zadawane Pytania

**P: Czy mogę zmienić bazę danych z SQLite na MySQL/PostgreSQL?**
O: Tak, możesz zmodyfikować ustawienia w pliku `config.py`, aby korzystać z innej bazy danych.

**P: Jak mogę dodać nowe role użytkowników?**
O: Możesz zmodyfikować model User w `app/models/user.py` i dodać nowe role.

**P: Czy jest możliwość dostosowania interfejsu?**
O: Tak, możesz zmodyfikować szablony HTML w `app/templates/` i pliki CSS w `app/static/css/`.

## 🛠️ Rozwój

### Środowisko Rozwojowe

1. Utwórz środowisko wirtualne
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

2. Zainstaluj zależności deweloperskie
   ```bash
   pip install -r requirements.txt
   ```

3. Uruchom aplikację w trybie deweloperskim
   ```bash
   python run.py
   ```

### Współpraca

1. Forkuj repozytorium
2. Utwórz gałąź funkcjonalności (`git checkout -b feature/AmazingFeature`)
3. Zatwierdź swoje zmiany (`git commit -m 'Add some AmazingFeature'`)
4. Wypchnij do gałęzi (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

## 📋 Do Zrobienia

- [ ] Integrowanie API poczty elektronicznej i SMS
- [ ] Dodawanie zaawansowanych funkcji raportowania
- [ ] Implementacja eksportu danych (Excel, PDF)
- [ ] Dodawanie powiadomień push
- [ ] Ulepszanie interfejsu mobilnego

## 📄 Licencja

Ten projekt jest licencjonowany na zasadach Licencji MIT - zobacz plik [LICENSE](LICENSE) dla szczegółów.

## 📞 Kontakty

- **Projekt**: [Trae CRM](https://github.com/yourusername/trae_crm)
- **E-mail**: your.email@example.com
- **Problemy**: [Zgłoś problem](https://github.com/yourusername/trae_crm/issues)

---

Dziękujemy za wybranie Trae CRM! 🎉