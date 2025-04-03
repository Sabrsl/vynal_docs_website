import Link from "next/link";
import {
  Book,
  Code,
  Filter,
  Search,
  Zap,
  ChevronRight,
  ExternalLink,
  BookOpen,
  FileText,
  CheckCircle,
  ArrowRight,
  Bookmark,
  Share2
} from "lucide-react";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-40 right-[10%] w-[500px] h-[500px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-60 left-[5%] w-[400px] h-[400px] bg-violet-400/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-7/12">
              <div className="flex items-center mb-6">
                <div className="flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                  <Book className="w-3.5 h-3.5 mr-1.5" />
                  <span>Documentation</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Tout ce que vous devez savoir sur
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                  VynalDocs
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Documentation complète et guides détaillés pour vous aider à maîtriser notre plateforme de gestion documentaire.
              </p>
              
              {/* Search box */}
              <div className="relative max-w-lg">
                <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
                  <Search className="ml-4 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Rechercher dans la documentation..." 
                    className="w-full py-3.5 px-3 border-none bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
                  />
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2.5 px-5 m-1 rounded-lg">
                    Rechercher
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                    API
                  </span>
                  <span className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                    Installation
                  </span>
                  <span className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                    Modèles
                  </span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-5/12 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-md">
              <h3 className="font-semibold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <Zap className="w-5 h-5 mr-2" />
                <span>Accès rapide</span>
              </h3>
              
              <div className="space-y-3">
                {[
                  { title: "Guide de démarrage", href: "#demarrage" },
                  { title: "Fonctionnalités principales", href: "#fonctionnalites" },
                  { title: "Intégration API", href: "#api" },
                  { title: "Configuration avancée", href: "#configuration" },
                  { title: "Personnalisation", href: "#personnalisation" }
                ].map((item, idx) => (
                  <Link 
                    key={idx}
                    href={item.href} 
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group transition-colors"
                  >
                    <span className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                <Link 
                  href="/contact"
                  className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  <span>Besoin d'aide ? Contactez le support</span>
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Content Section */}
      <section className="pb-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-4 sticky top-24">
                <div className="flex items-center mb-4">
                  <Filter className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="font-semibold">Catégories</span>
                </div>
                
                <nav className="space-y-1">
                  {[
                    { title: "Guide de démarrage", href: "#demarrage", active: true },
                    { title: "Installation", href: "#installation", active: false },
                    { title: "Fonctionnalités principales", href: "#fonctionnalites", active: false },
                    { title: "Créer des modèles", href: "#modeles", active: false },
                    { title: "Intégration API", href: "#api", active: false },
                    { title: "Configuration avancée", href: "#configuration", active: false },
                    { title: "Sécurité et permissions", href: "#securite", active: false },
                    { title: "Personnalisation", href: "#personnalisation", active: false },
                    { title: "FAQ", href: "#faq", active: false }
                  ].map((item, idx) => (
                    <Link 
                      key={idx}
                      href={item.href} 
                      className={`flex items-center p-2 rounded-lg text-sm transition-colors ${
                        item.active 
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium" 
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-x-3 mb-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <Bookmark className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-medium">Ressources utiles</span>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { title: "Exemples de code", href: "/ressources/code" },
                      { title: "Tutoriels vidéo", href: "/ressources/videos" },
                      { title: "Modèles prêts à l'emploi", href: "/ressources/modeles" }
                    ].map((item, idx) => (
                      <Link 
                        key={idx}
                        href={item.href} 
                        className="flex items-center text-sm p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ArrowRight className="w-3.5 h-3.5 mr-2" />
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Guide de démarrage */}
              <div id="demarrage" className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Guide de démarrage</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Commencez à utiliser VynalDocs en quelques minutes
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      <span>Mise à jour</span>
                    </div>
                  </div>
                </div>
                
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    VynalDocs est une plateforme complète de gestion documentaire qui vous permet de créer, analyser et automatiser vos documents. Ce guide vous aidera à prendre en main rapidement les fonctionnalités essentielles.
                  </p>
                  
                  <h3>Étape 1: Créer votre compte</h3>
                  <p>
                    Pour commencer, vous devez créer un compte sur VynalDocs :
                  </p>
                  <ul>
                    <li>Rendez-vous sur la page <Link href="/inscription" className="text-blue-600 dark:text-blue-400 hover:underline">d'inscription</Link></li>
                    <li>Remplissez le formulaire avec vos informations</li>
                    <li>Validez votre adresse email via le lien reçu</li>
                    <li>Connectez-vous à votre nouveau compte</li>
                  </ul>
                  
                  <h3>Étape 2: Configurer votre espace de travail</h3>
                  <p>
                    Une fois connecté, vous pouvez configurer votre espace de travail en quelques étapes :
                  </p>
                  <ul>
                    <li>Ajouter les membres de votre équipe</li>
                    <li>Créer des dossiers pour organiser vos documents</li>
                    <li>Configurer les permissions d'accès</li>
                    <li>Personnaliser l'apparence selon vos préférences</li>
                  </ul>
                  
                  <h3>Étape 3: Créer votre premier document</h3>
                  <p>
                    Maintenant, vous pouvez créer votre premier document :
                  </p>
                  <ol>
                    <li>Cliquez sur le bouton "Nouveau document" dans le tableau de bord</li>
                    <li>Choisissez un modèle ou partez d'une page vierge</li>
                    <li>Utilisez l'éditeur pour personnaliser votre document</li>
                    <li>Enregistrez et partagez votre document avec votre équipe</li>
                  </ol>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg my-6">
                    <h4 className="text-blue-700 dark:text-blue-400 font-medium flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Conseil
                    </h4>
                    <p className="text-blue-800 dark:text-blue-300 mt-1 text-sm">
                      Pour une prise en main plus rapide, commencez par explorer nos modèles prédéfinis adaptés à votre secteur d'activité. Ils vous permettront de gagner un temps précieux.
                    </p>
                  </div>
                  
                  <h3>Étape 4: Explorer les fonctionnalités avancées</h3>
                  <p>
                    VynalDocs offre de nombreuses fonctionnalités avancées que vous pourrez explorer progressivement :
                  </p>
                  <ul>
                    <li>Extraction automatique de données</li>
                    <li>Workflows d'approbation</li>
                    <li>Signatures électroniques</li>
                    <li>Intégration avec vos outils existants</li>
                    <li>Automatisation via l'API</li>
                  </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <Share2 className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-500 dark:text-gray-400">Partager cette page</span>
                  </div>
                  
                  <Link 
                    href="#installation" 
                    className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Suite: Installation</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Installation */}
              <div id="installation" className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Installation</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Comment installer et configurer VynalDocs sur votre environnement
                    </p>
                  </div>
                </div>
                
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    VynalDocs est disponible en version cloud (SaaS) et en version auto-hébergée pour les entreprises ayant des exigences spécifiques de conformité et de sécurité.
                  </p>
                  
                  <h3>Version Cloud (SaaS)</h3>
                  <p>
                    La version cloud est la solution la plus simple et rapide à mettre en place :
                  </p>
                  <ul>
                    <li>Aucune installation requise</li>
                    <li>Mises à jour automatiques</li>
                    <li>Sauvegarde et sécurité gérées par nos équipes</li>
                    <li>Support technique premium inclus</li>
                  </ul>
                  <p>
                    Pour accéder à la version cloud, il vous suffit de <Link href="/inscription" className="text-blue-600 dark:text-blue-400 hover:underline">créer un compte</Link> et de choisir la formule qui correspond à vos besoins.
                  </p>
                  
                  <h3>Version Auto-hébergée</h3>
                  <p>
                    Pour les organisations ayant des exigences spécifiques de conformité ou souhaitant conserver leurs données en interne, nous proposons une version auto-hébergée :
                  </p>
                  
                  <h4>Prérequis système</h4>
                  <ul>
                    <li>Serveur Linux (Ubuntu 20.04 LTS recommandé)</li>
                    <li>4 Go de RAM minimum (8 Go recommandés)</li>
                    <li>20 Go d'espace disque</li>
                    <li>Docker et Docker Compose</li>
                    <li>Connexion internet pour les mises à jour</li>
                  </ul>
                  
                  <h4>Instructions d'installation</h4>
                  <p>Installation via Docker (recommandée) :</p>
                  
                  <pre><code>
                    # Télécharger l'image Docker<br/>
                    docker pull vynaldocs/server:latest<br/><br/>
                    
                    # Créer le fichier docker-compose.yml<br/>
                    wget https://vynaldocs.com/docker-compose.yml<br/><br/>
                    
                    # Configurer les variables d'environnement<br/>
                    cp .env.example .env<br/>
                    nano .env<br/><br/>
                    
                    # Lancer l'application<br/>
                    docker-compose up -d
                  </code></pre>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg my-6">
                    <h4 className="text-yellow-700 dark:text-yellow-400 font-medium flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Note importante
                    </h4>
                    <p className="text-yellow-800 dark:text-yellow-300 mt-1 text-sm">
                      La version auto-hébergée nécessite une licence d'entreprise. Contactez notre équipe commerciale pour obtenir votre clé de licence.
                    </p>
                  </div>
                  
                  <h3>Installation via l'application bureau</h3>
                  <p>
                    Pour une utilisation en mode hors ligne ou pour une meilleure intégration avec votre système d'exploitation, vous pouvez installer notre application bureau :
                  </p>
                  <ul>
                    <li><a href="/downloads/vynaldocs-windows.exe" className="text-blue-600 dark:text-blue-400 hover:underline">Télécharger pour Windows</a></li>
                    <li><a href="/downloads/vynaldocs-mac.dmg" className="text-blue-600 dark:text-blue-400 hover:underline">Télécharger pour macOS</a></li>
                    <li><a href="/downloads/vynaldocs-linux.AppImage" className="text-blue-600 dark:text-blue-400 hover:underline">Télécharger pour Linux</a></li>
                  </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <Link 
                    href="#demarrage" 
                    className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
                    <span>Précédent: Guide de démarrage</span>
                  </Link>
                  
                  <Link 
                    href="#fonctionnalites" 
                    className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Suite: Fonctionnalités principales</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
              
              {/* Autres sections de documentation - à afficher lorsque sélectionnées */}
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-8">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Documentation en cours de rédaction</h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8">
                    Les autres sections de notre documentation sont actuellement en cours de rédaction. Revenez bientôt pour plus de contenu.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                  >
                    <span>Contactez-nous pour plus d'informations</span>
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Vous avez des questions ? Consultez notre FAQ pour trouver rapidement des réponses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                question: "VynalDocs est-il disponible en plusieurs langues ?",
                answer: "Oui, VynalDocs est disponible en français, anglais, espagnol, allemand et italien. D'autres langues seront ajoutées prochainement."
              },
              {
                question: "Puis-je importer mes documents existants ?",
                answer: "Absolument ! VynalDocs prend en charge l'importation de documents aux formats PDF, Word, Excel, PowerPoint et plusieurs autres formats courants."
              },
              {
                question: "Comment fonctionne la tarification ?",
                answer: "VynalDocs propose différentes formules d'abonnement adaptées aux besoins des particuliers, petites entreprises et grandes organisations. Consultez notre page Tarifs pour plus de détails."
              },
              {
                question: "Mes données sont-elles sécurisées ?",
                answer: "La sécurité est notre priorité. Toutes les données sont chiffrées, stockées de manière sécurisée et protégées selon les normes de sécurité les plus strictes du marché."
              }
            ].map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/faq"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span>Voir toutes les questions fréquentes</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
} 