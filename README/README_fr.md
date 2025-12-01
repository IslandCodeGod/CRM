[中文](README_zh.md)|[English](README_en.md)|[German](README_de.md)|[Español](README_es.md)|Français|[Italiano](README_it.md)|[日本語](README_ja.md)|[한국어](README_ko.md)|[Nederlands](README_nl.md)|[Polski](README_pl.md)|[Português](README_pt.md)|[Русский](README_ru.md)|[العربية](README_ar.md)|[हिन्दी](README_hi.md)|[Svenska](README_sv.md)|[ไทย](README_th.md)|[Türkçe](README_tr.md)|[Tiếng Việt](README_vi.md)

# Système CRM

Un système de gestion de la relation client complet et convivial, développé avec Python Flask.

## Fonctionnalités

### Fonctionnalités Principales
- ✅ **Système d'Authentification des Utilisateurs** - Connexion, inscription, gestion des sessions
- ✅ **Gestion des Clients** - Opérations CRUD complètes, support de recherche et de filtrage
- ✅ **Suivi des Prospects** - Gestion du statut des prospects, système de notation
- ✅ **Gestion des Opportunités de Vente** - Vue Kanban, gestion du processus de vente
- ✅ **Gestion des Contacts** - Gestion des informations de contact des clients
- ✅ **Gestion des Tâches** - Éléments à faire, gestion des priorités
- ✅ **Analyse des Données** - Graphiques visuels, affichage des métriques clés

### Points Forts Techniques
- 🎨 **Conception UI Moderne** - Commutation entre thèmes sombre/clair
- 📱 **Mise en Page Réactive** - Support de l'accès mobile
- ⚡ **Animations Fluides** - Transitions de page et animations interactives
- 📊 **Visualisation des Données** - Chart.js pour la représentation des données
- 🔍 **Recherche en Temps Réel** - Recherche et filtrage intelligents
- 🎯 **Gestion Kanban** - Gestion des opportunités de vente par glisser-déposer

## Pile Technologique

### Backend
- Python 3.x
- Flask 3.0
- SQLAlchemy (ORM)
- Flask-Login (Authentification)
- SQLite (Base de Données)

### Frontend
- HTML5
- CSS3 (Natif, sans frameworks)
- JavaScript (ES6+)
- Chart.js (Visualisation des données)

## Démarrage Rapide

### Méthode 1: Démarrer avec des Variables d'Environnement (Recommandé)

**Configurer les Variables d'Environnement :**
```bash
# Définir les variables d'environnement nécessaires
# SECRET_KEY : Clé secrète de l'application (doit être complexe pour la production)
# DATABASE_URL : URL de connexion à la base de données (optionnel, SQLite par défaut)
# PORT : Port de l'application (optionnel, 5000 par défaut)

# Exemple pour l'invite de commande Windows
set SECRET_KEY=your_secure_secret_key_here
set PORT=5000

# Exemple pour le terminal Linux/Mac
export SECRET_KEY=your_secure_secret_key_here
export PORT=5000
```

**Utilisation des Scripts de Démarrage :**

**Utilisateurs Windows :**
```bash
# Exécuter dans l'invite de commande ou PowerShell
start.bat
```

**Utilisateurs Linux/Mac :**
```bash
chmod +x start.sh
./start.sh
```

### Méthode 2: Démarrage Manuel

1. Installer les dépendances :
```bash
pip install -r requirements.txt
```

2. Démarrer l'application :
```bash
python app.py
```

3. Accéder au système :
Ouvrir votre navigateur et visiter `http://localhost:5000`

## Compte Par Défaut

- **Nom d'utilisateur** : admin
- **Mot de passe** : admin123

## Structure du Projet

```
trae_crm/
├── app.py                 # Point d'entrée de l'application Flask
├── config.py              # Fichier de configuration
├── requirements.txt       # Dépendances Python
├── models/                # Modèles de données
│   ├── user.py           # Modèle utilisateur
│   ├── customer.py       # Modèle client
│   ├── lead.py           # Modèle prospect
│   ├── opportunity.py    # Modèle opportunité
│   ├── contact.py        # Modèle contact
│   └── task.py           # Modèle tâche
├── routes/                # Gestionnaires de routes
│   ├── auth.py           # Routes d'authentification
│   ├── customer.py       # Routes de gestion des clients
│   ├── lead.py           # Routes de gestion des prospects
│   ├── opportunity.py    # Routes de gestion des opportunités
│   ├── contact.py        # Routes de gestion des contacts
│   ├── task.py           # Routes de gestion des tâches
│   └── dashboard.py      # Routes du tableau de bord
├── static/                # Ressources statiques
│   ├── css/              # Fichiers de style
│   └── js/               # Fichiers JavaScript
└── templates/             # Modèles HTML
    ├── base.html         # Modèle de base
    ├── auth/             # Pages d'authentification
    └── dashboard/        # Pages de gestion
```

## Guide d'Utilisation

### 1. Connexion au Système

1. Ouvrir votre navigateur et visiter `http://localhost:5000`
2. Entrer votre nom d'utilisateur et votre mot de passe
3. Cliquez sur le bouton "Connexion"

### 2. Tableau de Bord

Après la connexion, vous accédez automatiquement au tableau de bord où vous pouvez voir :
- Statistiques totales des clients, prospects, opportunités de vente et tâches
- Diagramme de tunnel de vente
- Métriques clés (nouveaux clients ce mois-ci, montant total des opportunités, taux de conversion des prospects)
- Listes des tâches récentes et des clients récents

![Interface du Tableau de Bord](screenshots/dashboard.png)

### 3. Gestion des Clients

**Ajouter un Client :**
1. Cliquez sur "Gestion des Clients" dans le menu de gauche
2. Cliquez sur le bouton "Ajouter un Client" en haut à droite
3. Remplissez les informations du client (le nom est requis)
4. Cliquez sur "Enregistrer"

**Rechercher des Clients :**
- Entrez des mots-clés dans la zone de recherche pour rechercher par nom, entreprise ou email

**Filtrer des Clients :**
- Utilisez le menu déroulant de statut pour filtrer (Actif/Inactif/Potentiel)

**Modifier un Client :**
1. Cliquez sur le bouton "Modifier" sur la ligne du client
2. Modifiez les informations
3. Cliquez sur "Enregistrer"

**Supprimer un Client :**
1. Cliquez sur le bouton "Supprimer" sur la ligne du client
2. Confirmez la suppression

### 4. Gestion des Prospects

**Ajouter un Prospect :**
1. Cliquez sur "Prospects" dans le menu de gauche
2. Cliquez sur le bouton "Ajouter un Prospect"
3. Remplissez les informations du prospect
4. Définissez le score du prospect (0-100)
5. Sélectionnez la source du prospect
6. Cliquez sur "Enregistrer"

**Mettre à Jour le Statut du Prospect :**
- Nouveau → Contacté → Confirmé → Convertit/Perdue

### 5. Gestion des Opportunités de Vente

**Vue Kanban :**
- Les opportunités de vente sont affichées sous forme de tableau Kanban
- Comprend 5 étapes : Prospect, Qualification, Proposition, Négociation, Clôturée

**Ajouter une Opportunité :**
1. Cliquez sur le bouton "Ajouter une Opportunité"
2. Sélectionnez le client associé
3. Remplissez le nom de l'opportunité, le montant, la probabilité de clôture
4. Définissez la date prévue de clôture
5. Cliquez sur "Enregistrer"

**Mettre à Jour l'Étape par Glisser-Déposer :**
- Faites glisser directement les cartes d'opportunité dans différentes colonnes d'étape

### 6. Gestion des Contacts

**Ajouter un Contact :**
1. Cliquez sur le bouton "Ajouter un Contact"
2. Sélectionnez le client associé
3. Remplissez les informations du contact
4. Cochez éventuellement "Définir comme contact principal"
5. Cliquez sur "Enregistrer"

### 7. Gestion des Tâches

**Ajouter une Tâche :**
1. Cliquez sur le bouton "Ajouter une Tâche"
2. Remplissez le titre et la description de la tâche
3. Définissez la priorité (Basse/Moyenne/Haute/Urgente)
4. Définissez le statut (En attente/En cours/Terminé/Annulé)
5. Définissez la date d'échéance
6. Cliquez sur "Enregistrer"

**Filtrer les Tâches :**
- Filtrer par statut
- Filtrer par priorité

### 8. Commutation de Thème

Cliquez sur le bouton de commutation de thème (🌙/☀️) en bas à droite pour passer entre les thèmes sombre et clair.

## Questions Fréquemment Posées

### Q : Comment s'inscrire en tant que nouvel utilisateur ?
R : Cliquez sur le lien "Inscrivez-vous maintenant" sur la page de connexion, remplissez le nom d'utilisateur, l'email et le mot de passe pour vous inscrire.

### Q : Que faire si j'oublie mon mot de passe ?
R : La récupération de mot de passe n'est pas prise en charge dans la version actuelle. Vous pouvez vous connecter avec le compte administrateur par défaut.

### Q : Où sont stockées les données ?
R : Les données sont stockées dans le fichier de base de données SQLite `crm.db` situé dans le répertoire racine du projet.

### Q : Comment sauvegarder les données ?
R : Il suffit de copier le fichier `crm.db` pour sauvegarder toutes les données.

### Q : Prend-il en charge plusieurs utilisateurs ?
R : Oui. Chaque utilisateur ne peut voir que les données qu'il a créées.

### Q : Comment exporter des données ?
R : L'exportation de données n'est pas prise en charge dans la version actuelle. Vous pouvez accéder directement au fichier de base de données SQLite.

## Instructions de Développement

### Ajouter de Nouvelles Fonctionnalités
1. Créer des modèles de données dans `models/`
2. Ajouter des gestionnaires de routes dans `routes/`
3. Créer des modèles de page dans `templates/`
4. Enregistrer les blueprints dans `app.py`

### Migration de Base de Données
Les tables de base de données et le compte administrateur par défaut seront créés automatiquement lors du premier lancement.

### Configuration Personnalisée
Modifier le fichier `config.py` pour modifier la configuration de l'application.

## Points Clés

### Capacités Techniques
1. **Développement Full-Stack** - Implémentation complète de l'API backend + interface frontend
2. **Conception de Base de Données** - Structure de table et conception de relations raisonnables
3. **API RESTful** - Conception d'API standardisée
4. **Expérience Utilisateur** - Conception d'interaction conviviale et effets visuels

### Points Forts du Projet
1. **Processus Commercial Complet** - Processus complet du prospect au client à l'opportunité
2. **Visualisation des Données** - Représentation graphique intuitive
3. **Conception Réactive** - Support pour plusieurs appareils
4. **Commutation de Thème** - Support pour le mode sombre/clair

## Licence

Licence MIT

## Informations de Contact

Pour toute question, suggestion ou si vous avez besoin de la version complète/développement personnalisé, veuillez contacter par :

- **Email** : austinlive666@gmail.com (Recommandé)
- **Discord** : [https://discord.gg/7AN9PuGn](https://discord.gg/7AN9PuGn)

---

Merci d'utiliser ce projet !