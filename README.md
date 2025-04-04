# VynalDocs

![VynalDocs](https://img.shields.io/badge/VynalDocs-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC)

VynalDocs est une plateforme avancée d'automatisation documentaire propulsée par l'intelligence artificielle. Elle permet aux professionnels du droit et aux entreprises de créer, gérer et automatiser leurs documents juridiques et administratifs.

## Fonctionnalités clés

- **Analyse IA de documents** - Extraction automatique des informations clés à partir de documents complexes
- **Génération automatique** - Création instantanée de contrats et documents juridiques personnalisés
- **Modèles personnalisables** - Bibliothèque complète de modèles juridiques adaptables
- **Formulaires intelligents** - Création de formulaires dynamiques adaptés en temps réel
- **Collaboration en temps réel** - Travail collaboratif sur documents avec contrôle des versions
- **Sécurité des données** - Protection avec chiffrement de bout en bout et conformité RGPD

## Technologies utilisées

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Framer Motion, Lucide Icons
- **Thème**: Mode clair/sombre avec next-themes
- **Déploiement**: Vercel

## Installation et démarrage

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/vynaldocs/vynaldocs.com.git
cd vynaldocs.com
npm install
```

### Développement

Lancez le serveur de développement :

```bash
npm run dev
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000) (ou sur un autre port si 3000 est déjà utilisé).

> **Note**: Le serveur utilise Turbopack et peut automatiquement utiliser les ports 3001, 3002, etc. si le port 3000 est occupé.

### Production

Créez une version optimisée pour la production :

```bash
npm run build
npm run start
```

## Structure du projet

```
vynaldocs.com/
├── src/
│   ├── app/               # Pages et routes Next.js
│   ├── components/        # Composants React réutilisables
│   │   ├── header.tsx     # Navigation principale et menu mobile
│   │   └── footer.tsx     # Pied de page avec liens
│   ├── lib/               # Utilitaires et fonctions
│   └── styles/            # Styles globaux et configurations Tailwind
├── public/                # Fichiers statiques
└── ...
```

## Multilinguisme

L'application prend en charge plusieurs langues :
- Français (par défaut)
- Anglais

Les pages de confidentialité sont disponibles dans les deux langues :
- `/privacy` - Version anglaise
- `/politique-de-confidentialite` - Version française

## Problèmes connus et solutions

- **Menu mobile**: Le menu mobile est configuré avec un z-index élevé pour s'afficher correctement sur tous les types d'écrans
- **Images manquantes**: Certaines images (mesh-grid.png, grid.svg, noise.png) sont actuellement manquantes

## Développement futur

- Intégration d'une API d'IA pour l'analyse de documents
- Système de paiement avec Stripe
- Application mobile avec React Native
- Intégration avec des outils juridiques existants

## Licence

[MIT](LICENSE)

## Contact

Pour toute question ou suggestion, n'hésitez pas à nous contacter à [contact@vynaldocs.com](mailto:contact@vynaldocs.com)
