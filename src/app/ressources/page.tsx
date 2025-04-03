import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FileText, ChevronRight, BookOpen, Download, Video, 
  PenTool, Calendar, Search, ExternalLink, FileDown, Clock,
  Star, BookMarked, ArrowRight, ArrowUpRight, TrendingUp
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function RessourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <Header />
      
      {/* Hero Section avec morphing background */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Blobs and decorative backgrounds */}
        <div className="absolute top-40 right-[10%] w-[800px] h-[800px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-60 left-[5%] w-[700px] h-[700px] bg-violet-400/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-[30%] w-[500px] h-[500px] bg-indigo-400/5 dark:bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.025]"></div>
        
        <div className="container max-w-6xl relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center px-4 py-1.5 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full mb-6 mx-auto w-fit"
            >
              <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 uppercase tracking-wider">
                Centre de Ressources
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
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
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-10"
            >
              Explorez notre bibliothèque complète de ressources pour maîtriser VynalDocs et optimiser la gestion de vos documents.
            </motion.p>
            
            {/* Search box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto relative"
            >
              <div className="flex items-center bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700/60 rounded-full overflow-hidden shadow-lg hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-500/40 focus-within:border-transparent transition-all duration-300">
                <Search className="ml-5 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Rechercher des ressources..." 
                  className="w-full py-4 px-3 border-none bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
                />
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 m-1 rounded-full shadow-sm hover:shadow transition-all">
                  Rechercher
                </button>
              </div>
              
              {/* Search suggestions */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="text-xs font-medium px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition-colors">Modèles</span>
                <span className="text-xs font-medium px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition-colors">API</span>
                <span className="text-xs font-medium px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition-colors">Intégration</span>
                <span className="text-xs font-medium px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition-colors">Guide débutant</span>
              </div>
            </motion.div>
          </div>
          
          {/* Categories Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
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
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ 
                  translateY: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <Link href={category.href} className="block">
                  <div className="relative group bg-white dark:bg-gray-900/60 backdrop-blur-sm pb-6">
                    {/* Category colorful header */}
                    <div className={`h-2 w-full bg-gradient-to-r ${category.gradient}`}></div>
                    
                    <div className="p-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} text-white flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                          {category.count} ressources
                        </span>
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Popular Resources Badges */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 mr-2 text-amber-500" />
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                Ressources populaires
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                "Guide démarrage rapide",
                "Modèles de contrats",
                "API Reference",
                "Intégration CRM",
                "VynalDocs Desktop",
                "Automatisation avancée",
                "Webinaire juridique"
              ].map((item, idx) => (
                <Link 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  key={idx}
                  className="group px-4 py-2.5 bg-white dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-full shadow-sm hover:shadow transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                  <Star className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Documentation Section */}
      <section id="documentation" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.025]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        
        <div className="container max-w-6xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full mb-4">
                <BookMarked className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  Documentation
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Guides & Documentation</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">Guides complets pour vous aider à maîtriser VynalDocs et tirer le maximum de toutes les fonctionnalités</p>
            </div>
            <Link 
              href="/docs" 
              className="group inline-flex items-center text-blue-600 dark:text-blue-400 font-medium mt-4 md:mt-0 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <span>Voir toute la documentation</span>
              <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center ml-2 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Guide de démarrage rapide",
                description: "Apprenez les bases de VynalDocs en moins de 10 minutes",
                icon: <Clock className="w-5 h-5" />,
                time: "10 min",
                category: "Guide",
                popular: true,
                href: "/docs/guide-demarrage"
              },
              {
                title: "Configuration avancée",
                description: "Personnalisez VynalDocs pour répondre à vos besoins spécifiques",
                icon: <FileText className="w-5 h-5" />,
                time: "20 min",
                category: "Tutoriel",
                popular: false,
                href: "/docs/configuration"
              },
              {
                title: "Référence API",
                description: "Documentation complète de l'API pour les intégrations",
                icon: <FileText className="w-5 h-5" />,
                time: "15 min",
                category: "Référence",
                popular: true,
                href: "/docs/api"
              }
            ].map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ translateY: -5 }}
                className="group"
              >
                <Link href={doc.href}>
                  <div className="h-full bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300">
                    {doc.popular && (
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium px-3 py-1">
                        Populaire
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl">
                          <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">{doc.category}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              {doc.icon}
                              {doc.time}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{doc.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{doc.description}</p>
                          
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                            <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                              <span>Lire le guide</span>
                              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Documentation Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Guides de démarrage", count: 5, href: "/docs/demarrage" },
              { title: "API & Intégrations", count: 12, href: "/docs/api" },
              { title: "Sécurité", count: 3, href: "/docs/securite" },
              { title: "Personnalisation", count: 8, href: "/docs/personnalisation" },
              { title: "Administration", count: 6, href: "/docs/administration" },
              { title: "Automatisation", count: 9, href: "/docs/automatisation" },
              { title: "Cas d'utilisation", count: 11, href: "/docs/cas-utilisation" },
              { title: "Meilleures pratiques", count: 7, href: "/docs/pratiques" }
            ].map((category, idx) => (
              <Link
                key={idx}
                href={category.href}
                className="group flex flex-col bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:border-blue-200 dark:hover:border-blue-800/60 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{category.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="mt-auto">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{category.count} articles</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tutoriels Section */}
      <section id="tutoriels" className="py-24 bg-white dark:bg-gray-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        
        <div className="container max-w-6xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-full mb-4">
                <Video className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  Tutoriels vidéo
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Apprenez visuellement</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">Vidéos courtes et tutoriels détaillés pour maîtriser chaque fonctionnalité de VynalDocs</p>
            </div>
            <Link 
              href="/tutoriels" 
              className="group inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium mt-4 md:mt-0 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              <span>Explorer tous les tutoriels</span>
              <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center ml-2 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Analyse automatique de documents",
                thumbnail: "bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30",
                duration: "16:42",
                category: "Fonctionnalité",
                href: "/tutoriels/analyse-documents",
                popular: true
              },
              {
                title: "Création de modèles personnalisés",
                thumbnail: "bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30",
                duration: "12:18",
                category: "Guide pratique",
                href: "/tutoriels/modeles-personnalises",
                popular: false
              },
              {
                title: "Collaboration en temps réel",
                thumbnail: "bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30",
                duration: "08:55",
                category: "Fonctionnalité",
                href: "/tutoriels/collaboration",
                popular: false
              }
            ].map((tutorial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ translateY: -5 }}
                className="group"
              >
                <Link href={tutorial.href}>
                  <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <div className="relative">
                      <div className={`aspect-video ${tutorial.thumbnail} flex items-center justify-center`}>
                        {/* Placeholder pour thumbnail */}
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {tutorial.duration}
                      </div>
                      {tutorial.popular && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                          Populaire
                        </div>
                      )}
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium px-2.5 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-700 dark:text-indigo-400">
                          {tutorial.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {tutorial.title}
                      </h3>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                        <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                          <span>Regarder</span>
                          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Video className="w-4 h-4 mr-1" />
                          <span>Vidéo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Webinaires Section */}
      <section id="webinaires" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.025]"></div>
        
        <div className="container max-w-6xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-full mb-4">
                <Calendar className="w-4 h-4 mr-2 text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                  Webinaires & Events
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Formation en direct</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">Sessions de formation interactives et démonstrations approfondies par nos experts</p>
            </div>
            <Link 
              href="/webinaires" 
              className="group inline-flex items-center text-violet-600 dark:text-violet-400 font-medium mt-4 md:mt-0 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
            >
              <span>Voir tous les webinaires</span>
              <div className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center ml-2 group-hover:bg-violet-200 dark:group-hover:bg-violet-800/40 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Automatisation avancée avec VynalDocs",
                description: "Découvrez les fonctionnalités avancées pour automatiser vos flux documentaires et gagner du temps sur les tâches répétitives.",
                date: "22 septembre 2023",
                time: "14:00 - 15:30",
                status: "Disponible en replay",
                presenters: ["Marie Dubois", "Thomas Laurent"],
                href: "/webinaires/automatisation-avancee",
                color: "from-violet-400 to-purple-400"
              },
              {
                title: "VynalDocs pour les cabinets juridiques",
                description: "Comment VynalDocs peut transformer la gestion documentaire dans le secteur juridique avec des cas d'utilisation concrets.",
                date: "18 octobre 2023",
                time: "11:00 - 12:30",
                status: "Disponible en replay",
                presenters: ["Sophie Martin", "Jean Dupont"],
                href: "/webinaires/secteur-juridique",
                color: "from-purple-400 to-pink-400"
              }
            ].map((webinar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl transform rotate-1 scale-[0.98] opacity-50"></div>
                <Link href={webinar.href} className="block">
                  <div className="bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden p-8 relative hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col gap-6">
                      {/* Webinar header with replay badge */}
                      <div className="flex justify-between items-start">
                        <div className="bg-violet-100 dark:bg-violet-900/30 p-3 rounded-2xl">
                          <Video className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                        </div>
                        <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                          {webinar.status}
                        </span>
                      </div>
                      
                      {/* Webinar content */}
                      <div>
                        <h3 className="text-xl font-bold mb-3">{webinar.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{webinar.description}</p>
                      </div>
                      
                      {/* Webinar details */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{webinar.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{webinar.time}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {webinar.presenters.map((presenter, i) => (
                            <div key={i} className="flex items-center">
                              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${webinar.color} text-white flex items-center justify-center text-xs font-medium shadow-sm`}>
                                {presenter.charAt(0)}
                              </div>
                              {i < webinar.presenters.length - 1 && <div className="w-2" />}
                            </div>
                          ))}
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                            Présentateurs
                          </span>
                        </div>
                      </div>
                      
                      {/* Watch button */}
                      <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                        <div className="flex items-center text-violet-600 dark:text-violet-400 text-sm font-medium">
                          <span>Voir le replay</span>
                          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-medium rounded-full">
                          Webinaire
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Upcoming webinar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-90 rounded-3xl"></div>
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
              
              <div className="relative p-8 text-white">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-2/3">
                    <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-xs font-medium">Prochain webinaire</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Nouveautés VynalDocs - Q4 2023</h3>
                    <p className="text-white/80 mb-6">Présentation des nouvelles fonctionnalités et améliorations du dernier trimestre. Découvrez en avant-première les outils qui transformeront votre productivité.</p>
                    
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-white/70" />
                        <span>5 novembre 2023</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-white/70" />
                        <span>16:00 - 17:00</span>
                      </div>
                    </div>
                    
                    <button className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all hover:bg-gray-50">
                      S'inscrire au webinaire
                    </button>
                  </div>
                  
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-56 h-56 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <Calendar className="w-24 h-24 text-white/90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Téléchargements Section */}
      <section id="telechargements" className="py-24 bg-white dark:bg-gray-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        
        <div className="container max-w-6xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 rounded-full mb-4">
                <Download className="w-4 h-4 mr-2 text-rose-600 dark:text-rose-400" />
                <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                  Ressources & Downloads
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Téléchargements</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">Modèles et ressources prêts à l'emploi pour accélérer votre productivité</p>
            </div>
            <Link 
              href="/telechargements" 
              className="group inline-flex items-center text-rose-600 dark:text-rose-400 font-medium mt-4 md:mt-0 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
            >
              <span>Tous les téléchargements</span>
              <div className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center ml-2 group-hover:bg-rose-200 dark:group-hover:bg-rose-800/40 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
          
          {/* Featured download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30"></div>
              
              <div className="relative p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 backdrop-blur-sm rounded-full mb-4">
                    <Star className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-400">Téléchargement populaire</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">VynalDocs Desktop</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">Application bureau pour Windows et Mac avec toutes les fonctionnalités de VynalDocs et un mode hors ligne.</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="inline-flex items-center px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs text-gray-700 dark:text-gray-300">
                      Version 2.4.1
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs text-gray-700 dark:text-gray-300">
                      68.2 MB
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs text-gray-700 dark:text-gray-300">
                      Windows & Mac
                    </span>
                  </div>
                  
                  <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger maintenant
                  </button>
                </div>
                
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-64 h-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-transparent bg-clip-text">VD</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Download grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pack de modèles juridiques",
                description: "20 modèles pour documents juridiques courants",
                size: "4.2 MB",
                format: "ZIP",
                downloads: "2,845",
                iconType: "file",
                color: "text-blue-500 dark:text-blue-400",
                bgColor: "bg-blue-100 dark:bg-blue-900/30",
                href: "/telechargements/pack-modeles-juridiques"
              },
              {
                title: "Modèles de contrats",
                description: "10 modèles de contrats personnalisables",
                size: "2.8 MB",
                format: "ZIP",
                downloads: "1,932",
                iconType: "file",
                color: "text-indigo-500 dark:text-indigo-400",
                bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
                href: "/telechargements/modeles-contrats"
              },
              {
                title: "Guide d'utilisation complet",
                description: "PDF détaillé de toutes les fonctionnalités",
                size: "8.5 MB",
                format: "PDF",
                downloads: "5,674",
                iconType: "book",
                color: "text-rose-500 dark:text-rose-400",
                bgColor: "bg-rose-100 dark:bg-rose-900/30",
                href: "/telechargements/guide-utilisation"
              },
              {
                title: "Extension pour navigateurs",
                description: "Pour Chrome, Firefox et Edge",
                size: "1.5 MB",
                format: "ZIP",
                downloads: "3,291",
                iconType: "download",
                color: "text-purple-500 dark:text-purple-400",
                bgColor: "bg-purple-100 dark:bg-purple-900/30",
                href: "/telechargements/extension-navigateur"
              },
              {
                title: "Kit d'intégration API",
                description: "Documentation et exemples de code",
                size: "3.1 MB",
                format: "ZIP",
                downloads: "1,548",
                iconType: "file",
                color: "text-emerald-500 dark:text-emerald-400",
                bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
                href: "/telechargements/kit-api"
              },
              {
                title: "Modèles d'automatisation",
                description: "Workflows et scripts prédéfinis",
                size: "2.3 MB",
                format: "ZIP",
                downloads: "976",
                iconType: "file",
                color: "text-amber-500 dark:text-amber-400",
                bgColor: "bg-amber-100 dark:bg-amber-900/30",
                href: "/telechargements/modeles-automatisation"
              }
            ].map((download, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ translateY: -5 }}
                className="group"
              >
                <Link href={download.href}>
                  <div className="bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 h-full p-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 ${download.bgColor} p-3 rounded-xl`}>
                        {download.iconType === "file" && <FileText className={`w-6 h-6 ${download.color}`} />}
                        {download.iconType === "book" && <BookOpen className={`w-6 h-6 ${download.color}`} />}
                        {download.iconType === "download" && <Download className={`w-6 h-6 ${download.color}`} />}
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {download.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{download.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-gray-700 dark:text-gray-300">
                            {download.format}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-gray-700 dark:text-gray-300">
                            {download.size}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                          <div className="flex items-center text-blue-600 dark:text-blue-400 text-xs font-medium">
                            <Download className="w-3.5 h-3.5 mr-1" />
                            <span>{download.downloads} téléchargements</span>
                          </div>
                          
                          <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            <Download className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.1] mix-blend-overlay"></div>
        </div>
        
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-10">
            <div className="h-full w-full bg-[url('/grid.svg')] bg-repeat bg-center"></div>
          </div>
        </div>
        
        <div className="container max-w-6xl relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 p-10 md:p-16 shadow-2xl"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Prêt à révolutionner votre gestion documentaire?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                Rejoignez des milliers de professionnels qui ont déjà transformé leur façon de travailler avec VynalDocs
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
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-1 max-w-2xl mx-auto">
                <span className="text-blue-100/80 text-sm">Déjà plus de 50,000 utilisateurs</span>
                <div className="flex -space-x-2 mx-2">
                  {[
                    "from-blue-400 to-indigo-400",
                    "from-indigo-400 to-violet-400",
                    "from-violet-400 to-purple-400",
                    "from-purple-400 to-pink-400",
                    "from-pink-400 to-rose-400"
                  ].map((gradient, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} text-white flex items-center justify-center text-xs font-medium shadow-sm border-2 border-white`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-medium shadow-sm border-2 border-white">
                    +
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}