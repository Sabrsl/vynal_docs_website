import Link from "next/link";
import { 
  FileText, ChevronRight, BookOpen, Download, Video, 
  PenTool, Calendar, Search, ExternalLink, FileDown, Clock
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RessourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-40 right-[10%] w-[500px] h-[500px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-60 left-[5%] w-[400px] h-[400px] bg-violet-400/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-6xl relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center px-4 py-1.5 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full mb-6 mx-auto w-fit">
              <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 uppercase tracking-wider">
                Centre de Ressources
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tout ce dont vous avez 
              <span className="relative ml-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                besoin
                <svg className="absolute -bottom-2 -left-1 w-[calc(100%+8px)] opacity-70" viewBox="0 0 120 8" preserveAspectRatio="none">
                  <path d="M0,5.5 C40,0 80,8 120,2.5" stroke="url(#gradient)" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explorez notre bibliothèque complète de ressources pour maîtriser VynalDocs et optimiser la gestion de vos documents.
            </p>
            
            {/* Search box */}
            <div className="max-w-2xl mx-auto relative">
              <div className="flex items-center bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 rounded-xl overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-transparent">
                <Search className="ml-4 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Rechercher des ressources..." 
                  className="w-full py-3.5 px-3 border-none bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
                />
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2.5 px-5 m-1 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  Rechercher
                </button>
              </div>
            </div>
          </div>
          
          {/* Categories Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Documentation",
                icon: <BookOpen className="w-6 h-6" />,
                description: "Guides d'utilisation et documentation technique",
                count: 24,
                href: "#documentation",
                gradient: "from-blue-500 to-indigo-600"
              },
              { 
                title: "Tutoriels",
                icon: <PenTool className="w-6 h-6" />,
                description: "Tutoriels pas à pas et études de cas",
                count: 18,
                href: "#tutoriels",
                gradient: "from-indigo-500 to-violet-600"
              },
              { 
                title: "Webinaires",
                icon: <Video className="w-6 h-6" />,
                description: "Sessions de formation et démonstrations enregistrées",
                count: 12,
                href: "#webinaires",
                gradient: "from-violet-500 to-purple-600"
              },
              { 
                title: "Téléchargements",
                icon: <Download className="w-6 h-6" />,
                description: "Modèles et ressources prêts à l'emploi",
                count: 36,
                href: "#telechargements",
                gradient: "from-rose-500 to-red-600"
              }
            ].map((category, idx) => (
              <Link 
                href={category.href} 
                key={idx}
                className="group bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.gradient} text-white flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500">{category.count} ressources</span>
                    <span className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Documentation Section */}
      <section id="documentation" className="py-16 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        
        <div className="container max-w-6xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Documentation</h2>
              <p className="text-gray-600 dark:text-gray-300">Guides complets pour vous aider à maîtriser VynalDocs</p>
            </div>
            <Link 
              href="/docs" 
              className="group inline-flex items-center text-blue-600 dark:text-blue-400 font-medium mt-4 md:mt-0"
            >
              Voir toute la documentation
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Guide de démarrage rapide",
                description: "Apprenez les bases de VynalDocs en moins de 10 minutes",
                icon: <Clock className="w-5 h-5" />,
                time: "10 min",
                category: "Guide",
                href: "/docs/guide-demarrage"
              },
              {
                title: "Configuration avancée",
                description: "Personnalisez VynalDocs pour répondre à vos besoins spécifiques",
                icon: <FileText className="w-5 h-5" />,
                time: "20 min",
                category: "Tutoriel",
                href: "/docs/configuration"
              },
              {
                title: "Référence API",
                description: "Documentation complète de l'API pour les intégrations",
                icon: <FileText className="w-5 h-5" />,
                time: "15 min",
                category: "Référence",
                href: "/docs/api"
              }
            ].map((doc, idx) => (
              <Link 
                href={doc.href} 
                key={idx}
                className="group bg-white dark:bg-gray-800/70 rounded-xl border border-gray-200 dark:border-gray-700/50 hover:shadow-lg transition-all p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">{doc.category}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        {doc.icon}
                        {doc.time}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{doc.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{doc.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tutoriels Section */}
      <section id="tutoriels" className="py-16 bg-white dark:bg-gray-950 relative">
        <div className="container max-w-6xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Tutoriels vidéo</h2>
              <p className="text-gray-600 dark:text-gray-300">Apprenez visuellement avec nos tutoriels détaillés</p>
            </div>
            <Link 
              href="/tutoriels" 
              className="group inline-flex items-center text-blue-600 dark:text-blue-400 font-medium mt-4 md:mt-0"
            >
              Explorer tous les tutoriels
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Analyse automatique de documents",
                thumbnail: "bg-gray-200 dark:bg-gray-800",
                duration: "16:42",
                category: "Fonctionnalité",
                href: "/tutoriels/analyse-documents"
              },
              {
                title: "Création de modèles personnalisés",
                thumbnail: "bg-gray-200 dark:bg-gray-800",
                duration: "12:18",
                category: "Guide pratique",
                href: "/tutoriels/modeles-personnalises"
              },
              {
                title: "Collaboration en temps réel",
                thumbnail: "bg-gray-200 dark:bg-gray-800",
                duration: "08:55",
                category: "Fonctionnalité",
                href: "/tutoriels/collaboration"
              }
            ].map((tutorial, idx) => (
              <Link 
                href={tutorial.href} 
                key={idx} 
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative">
                  <div className={`aspect-video ${tutorial.thumbnail} flex items-center justify-center`}>
                    {/* Placeholder pour thumbnail - À remplacer par une vraie image */}
                    <Video className="w-12 h-12 text-gray-400 dark:text-gray-600" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/20 backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {tutorial.duration}
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-400">
                      {tutorial.category}
                    </span>
                  </div>
                  <h3 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {tutorial.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Webinaires Section */}
      <section id="webinaires" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-5"></div>
        
        <div className="container max-w-6xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Webinaires</h2>
              <p className="text-gray-600 dark:text-gray-300">Sessions de formation en direct et démonstrations approfondies</p>
            </div>
            <Link 
              href="/webinaires" 
              className="group inline-flex items-center text-blue-600 dark:text-blue-400 font-medium mt-4 md:mt-0"
            >
              Voir tous les webinaires
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: "Automatisation avancée avec VynalDocs",
                description: "Découvrez les fonctionnalités avancées pour automatiser vos flux documentaires",
                date: "22 septembre 2023",
                time: "14:00 - 15:30",
                status: "Disponible en replay",
                href: "/webinaires/automatisation-avancee"
              },
              {
                title: "VynalDocs pour les cabinets juridiques",
                description: "Comment VynalDocs peut transformer la gestion documentaire dans le secteur juridique",
                date: "18 octobre 2023",
                time: "11:00 - 12:30",
                status: "Disponible en replay",
                href: "/webinaires/secteur-juridique"
              },
              {
                title: "Nouveautés VynalDocs - Q4 2023",
                description: "Présentation des nouvelles fonctionnalités et améliorations du dernier trimestre",
                date: "5 novembre 2023",
                time: "16:00 - 17:00",
                status: "À venir",
                href: "/webinaires/nouveautes-q4-2023"
              }
            ].map((webinar, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-gray-900/60 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="mt-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        webinar.status === "À venir" 
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" 
                          : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                      }`}>
                        {webinar.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{webinar.description}</p>
                    <Link 
                      href={webinar.href}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      {webinar.status === "À venir" ? "S'inscrire" : "Voir le replay"}
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Téléchargements Section */}
      <section id="telechargements" className="py-16 bg-white dark:bg-gray-950 relative">
        <div className="container max-w-6xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Téléchargements</h2>
              <p className="text-gray-600 dark:text-gray-300">Modèles et ressources prêts à l'emploi</p>
            </div>
            <Link 
              href="/telechargements" 
              className="group inline-flex items-center text-blue-600 dark:text-blue-400 font-medium mt-4 md:mt-0"
            >
              Tous les téléchargements
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pack de modèles juridiques",
                description: "20 modèles pour documents juridiques courants",
                size: "4.2 MB",
                format: "ZIP",
                iconType: "file",
                href: "/telechargements/pack-modeles-juridiques"
              },
              {
                title: "Modèles de contrats",
                description: "10 modèles de contrats personnalisables",
                size: "2.8 MB",
                format: "ZIP",
                iconType: "file",
                href: "/telechargements/modeles-contrats"
              },
              {
                title: "Guide d'utilisation complet",
                description: "PDF détaillé de toutes les fonctionnalités",
                size: "8.5 MB",
                format: "PDF",
                iconType: "book",
                href: "/telechargements/guide-utilisation"
              },
              {
                title: "VynalDocs Desktop",
                description: "Application bureau pour Windows et Mac",
                size: "68.2 MB",
                format: "EXE/DMG",
                iconType: "download",
                href: "/telechargement"
              },
              {
                title: "Extension pour navigateurs",
                description: "Pour Chrome, Firefox et Edge",
                size: "1.5 MB",
                format: "ZIP",
                iconType: "download",
                href: "/telechargements/extension-navigateur"
              },
              {
                title: "Kit d'intégration API",
                description: "Documentation et exemples de code",
                size: "3.1 MB",
                format: "ZIP",
                iconType: "file",
                href: "/telechargements/kit-api"
              }
            ].map((download, idx) => (
              <Link 
                href={download.href} 
                key={idx}
                className="group bg-white dark:bg-gray-900/60 rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-lg transition-all flex items-start gap-4"
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${
                  idx === 3 ? "bg-gradient-to-r from-blue-600 to-violet-600" : "bg-gray-100 dark:bg-gray-800"
                } flex items-center justify-center`}>
                  {idx === 3 ? (
                    <Download className="text-white w-5 h-5" />
                  ) : (
                    <>
                      {download.iconType === "file" && (
                        <FileText className={`w-5 h-5 ${
                          download.format === "PDF" ? "text-red-500" : "text-blue-500"
                        } dark:text-gray-300`} />
                      )}
                      {download.iconType === "book" && (
                        <BookOpen className={`w-5 h-5 ${
                          download.format === "PDF" ? "text-red-500" : "text-blue-500"
                        } dark:text-gray-300`} />
                      )}
                      {download.iconType === "download" && (
                        <Download className={`w-5 h-5 ${
                          download.format === "PDF" ? "text-red-500" : "text-blue-500"
                        } dark:text-gray-300`} />
                      )}
                    </>
                  )}
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {download.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{download.description}</p>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <span className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded mr-2">{download.format}</span>
                    <span>{download.size}</span>
                    {idx === 3 && (
                      <span className="ml-auto flex items-center px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                        <FileDown className="w-3.5 h-3.5 mr-1" />
                        Populaire
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="absolute top-0 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container max-w-6xl relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à commencer avec VynalDocs ?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Rejoignez des milliers de professionnels qui ont déjà transformé leur gestion documentaire
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/telechargement">
              <button className="relative group px-8 py-4 bg-white text-blue-700 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden">
                <div className="relative flex items-center justify-center gap-2 z-10">
                  <Download className="w-5 h-5" />
                  <span>Télécharger gratuitement</span>
                </div>
                <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="px-8 py-4 bg-transparent text-white font-medium rounded-xl border border-white/30 hover:bg-white/10 transition-all duration-200">
                Demander une démo
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 