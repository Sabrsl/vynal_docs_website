"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileSearch, FileText, FileSpreadsheet, Users, ArrowRight, Check } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

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

export default function FeaturesPage() {
  const features = [
    {
      title: "Analyse intelligente de documents",
      description: "Notre technologie d'IA avancée analyse vos documents pour extraire automatiquement les informations clés, identifier les clauses importantes et structurer les données.",
      icon: <FileSearch className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-600",
      image: "/placeholder-feature.jpg",
      direction: "ltr",
      features: [
        "Extraction automatique des données",
        "Reconnaissance de modèles et structures de documents",
        "Classification et catégorisation automatique",
        "Identification des clauses et termes clés",
      ],
    },
    {
      title: "Génération automatique de documents",
      description: "Créez instantanément des documents juridiques et administratifs personnalisés à partir de modèles prédéfinis ou personnalisés. Gagnez un temps précieux en automatisant les tâches répétitives.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-violet-500 to-purple-600",
      image: "/placeholder-feature.jpg",
      direction: "rtl",
      features: [
        "Bibliothèque de modèles juridiques et administratifs",
        "Personnalisation avancée selon vos besoins",
        "Remplissage automatique de formulaires",
        "Génération en masse pour les traitements par lots",
      ],
    },
    {
      title: "Formulaires intelligents",
      description: "Créez des formulaires dynamiques qui s'adaptent en temps réel selon les réponses de l'utilisateur. Récoltez exactement les informations dont vous avez besoin pour générer des documents sur mesure.",
      icon: <FileSpreadsheet className="w-8 h-8" />,
      gradient: "from-amber-500 to-orange-600",
      image: "/placeholder-feature.jpg",
      direction: "ltr",
      features: [
        "Formulaires conditionnels et adaptatifs",
        "Champs préremplis et suggestions intelligentes",
        "Validation des données en temps réel",
        "Intégration facile sur votre site web ou intranet",
      ],
    },
    {
      title: "Gestion et collaboration",
      description: "Travaillez efficacement en équipe avec nos outils de collaboration. Partagez, commentez et modifiez vos documents en temps réel avec un contrôle précis des accès et des versions.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-600",
      image: "/placeholder-feature.jpg",
      direction: "rtl",
      features: [
        "Contrôle des versions et historique des modifications",
        "Gestion fine des permissions d'accès",
        "Commentaires et annotations collaboratives",
        "Notifications et alertes personnalisables",
      ],
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Blob backgrounds */}
        <div className="absolute top-20 right-[5%] w-[800px] h-[800px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-[5%] w-[600px] h-[600px] bg-violet-400/5 dark:bg-violet-500/10 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="container max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center px-4 py-1.5 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full mb-6"
            >
              <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 uppercase tracking-wider">
                Technologie d'IA avancée
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="relative">
                <span className="absolute -left-2 -top-2 w-10 h-10 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-xl opacity-70"></span>
                <span className="relative">Fonctionnalités</span>
              </span>{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                puissantes
                <svg className="absolute -bottom-4 -left-2 w-[calc(100%+16px)] opacity-70" viewBox="0 0 120 8" preserveAspectRatio="none">
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
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl"
            >
              Découvrez les outils avancés de VynalDocs pour automatiser l'analyse et la génération de documents juridiques et administratifs avec une précision et une efficacité inégalées.
            </motion.p>
          </div>
          
          {/* Feature Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative rounded-3xl bg-white dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute h-1.5 top-0 left-0 right-0 bg-gradient-to-r ${feature.gradient}`}></div>
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl mb-6 bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{feature.description.split('.')[0]}.</p>
                  <Link 
                    href={`#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    En savoir plus
                    <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        
        <div className="container max-w-6xl">
          {features.map((feature, index) => (
            <motion.div
              id={feature.title.toLowerCase().replace(/\s+/g, '-')}
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col ${
                feature.direction === "rtl" ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-16 items-center mb-32 last:mb-0`}
            >
              {/* Content */}
              <div className="flex-1 relative">
                <div className={`absolute -left-4 top-0 h-12 w-1 rounded-full bg-gradient-to-b ${feature.gradient}`}></div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-4">
                    {feature.features.map((item, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3 border border-gray-100 dark:border-gray-800"
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mr-3 mt-0.5`}>
                          <Check className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-200">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              {/* Image/Illustration */}
              <motion.div 
                className="flex-1 w-full"
                initial={{ opacity: 0, x: feature.direction === "rtl" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">Illustration de la fonctionnalité</p>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-tr ${feature.gradient} opacity-10`}></div>
                  <div className="aspect-[4/3] w-full"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/20 dark:bg-white/5 backdrop-blur-xl"></div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 rounded-lg bg-white/20 dark:bg-white/5 backdrop-blur-lg"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        <div className="absolute -bottom-96 left-0 w-[800px] h-[800px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Comparez nos fonctionnalités
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Découvrez les avantages de chaque fonctionnalité pour optimiser votre processus documentaire
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 backdrop-blur-sm shadow-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="px-6 py-5 text-left text-gray-500 dark:text-gray-400 text-sm font-medium">Fonctionnalité</th>
                    <th className="px-6 py-5 text-left text-gray-500 dark:text-gray-400 text-sm font-medium">Description</th>
                    <th className="px-6 py-5 text-left text-gray-500 dark:text-gray-400 text-sm font-medium">Avantages</th>
                    <th className="px-6 py-5 text-left text-gray-500 dark:text-gray-400 text-sm font-medium">Disponibilité</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, idx) => (
                    <tr key={idx} className="border-b border-gray-200 dark:border-gray-800 last:border-0">
                      <td className="px-6 py-5">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center mr-3`}>
                            {feature.icon}
                          </div>
                          <span className="font-medium">{feature.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-gray-600 dark:text-gray-300">
                        {feature.description.split('.')[0]}.
                      </td>
                      <td className="px-6 py-5">
                        <ul className="space-y-1">
                          {feature.features.slice(0, 2).map((item, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <Check className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                          Tous les plans
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-900">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.15] mix-blend-overlay"></div>
        </div>
        
        <div className="absolute -top-10 -right-10 w-[300px] h-[300px] bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] bg-indigo-400/30 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20">
            <div className="h-full w-full bg-[url('/grid.svg')] bg-repeat bg-center"></div>
          </div>
        </div>
        
        <div className="container max-w-5xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
            >
              Prêt à découvrir VynalDocs ?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-blue-100 mb-10"
            >
              Commencez votre essai gratuit aujourd'hui et découvrez comment nos fonctionnalités peuvent transformer votre gestion documentaire.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/signup" className="w-full sm:w-auto">
                <button className="relative w-full sm:w-auto group py-4 px-8 bg-white hover:bg-gray-50 text-blue-600 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="flex items-center justify-center gap-2">
                    Démarrer l'essai gratuit
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="relative w-full sm:w-auto py-4 px-8 bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium rounded-xl transition-all duration-300">
                  Nous contacter
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}