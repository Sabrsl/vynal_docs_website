'use client';

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { 
  FileText, ChevronRight, FileSearch, Copy, Layout, Users, 
  Lock, Check, ArrowRight, MessageSquare, Star, HelpCircle, Search 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  // Features data
  const features = [
    {
      title: "Analyse IA de documents",
      description: "Extraction automatique des informations clés et des données structurées à partir de documents complexes.",
      icon: <FileSearch className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Génération automatique",
      description: "Création instantanée de contrats, rapports et documents juridiques personnalisés selon vos besoins.",
      icon: <FileText className="w-6 h-6" />,
      gradient: "from-indigo-500 to-violet-600"
    },
    {
      title: "Modèles personnalisables",
      description: "Bibliothèque complète de modèles juridiques et administratifs adaptables à votre activité.",
      icon: <Copy className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Formulaires intelligents",
      description: "Création de formulaires dynamiques qui s'adaptent en temps réel selon les réponses saisies.",
      icon: <Layout className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Collaboration en temps réel",
      description: "Travaillez à plusieurs sur les mêmes documents, avec contrôle des versions et historique des modifications.",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Sécurité des données",
      description: "Protection de vos informations confidentielles avec chiffrement de bout en bout et conformité RGPD.",
      icon: <Lock className="w-6 h-6" />,
      gradient: "from-rose-500 to-red-600"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "VynalDocs nous a permis d'automatiser la génération de nos contrats et de gagner un temps précieux sur des tâches répétitives.",
      author: "Marie Durand",
      role: "Avocate associée",
      company: "Cabinet Durand & Associés",
      rating: 5,
      avatarColor: "from-blue-400 to-indigo-400"
    },
    {
      quote: "L'analyse automatique des documents nous a fait gagner en précision et en efficacité. Un outil indispensable pour notre activité.",
      author: "Thomas Laurent",
      role: "Notaire",
      company: "Office notarial Laurent",
      rating: 5,
      avatarColor: "from-violet-400 to-purple-400"
    },
    {
      quote: "La solution idéale pour notre service juridique. Nous avons réduit de 60% le temps consacré à la préparation documentaire.",
      author: "Sophie Martin",
      role: "Directrice juridique",
      company: "Groupe Innoveo",
      rating: 5,
      avatarColor: "from-pink-400 to-rose-400"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Comment fonctionne VynalDocs ?",
      answer: "VynalDocs utilise des algorithmes d'intelligence artificielle pour analyser, classer et extraire des informations de vos documents. Notre plateforme permet également de générer automatiquement des documents personnalisés à partir de modèles prédéfinis."
    },
    {
      question: "Quels types de documents peuvent être traités ?",
      answer: "Notre système peut traiter tous types de documents juridiques et administratifs : contrats, actes notariés, procès-verbaux, statuts, rapports, formulaires administratifs, etc."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. VynalDocs implémente un chiffrement de bout en bout pour toutes les données. Nous sommes conformes au RGPD et nous n'accédons jamais au contenu de vos documents sans votre autorisation explicite."
    },
    {
      question: "Puis-je personnaliser les modèles de documents ?",
      answer: "Oui, tous nos modèles sont entièrement personnalisables selon vos besoins spécifiques. Vous pouvez également créer vos propres modèles à partir de zéro."
    },
    {
      question: "Comment démarrer avec VynalDocs ?",
      answer: "C'est simple ! Inscrivez-vous pour un essai gratuit de 14 jours, sans engagement. Vous pourrez immédiatement commencer à utiliser notre plateforme et explorer toutes ses fonctionnalités."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Blob backgrounds */}
        <div className="absolute top-20 right-[5%] w-[800px] h-[800px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-40 left-[5%] w-[600px] h-[600px] bg-violet-400/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
        
        {/* Content */}
        <div className="container max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center px-4 py-1.5 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full mb-6">
              <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 uppercase tracking-wider">
                Propulsé par l'intelligence artificielle
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="relative">
                <span className="relative">Créez.</span>
              </span>{" "}
              <span className="relative">
                <span className="relative">Automatisez.</span>
              </span>{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                Gagnez du temps.
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
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
              VynalDocs analyse et génère automatiquement vos documents juridiques et administratifs grâce à l'intelligence artificielle pour une productivité maximale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <button className="relative group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 overflow-hidden">
                  <div className="relative flex items-center justify-center gap-2 z-10">
                    <span>Essayer gratuitement</span>
                    <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </button>
              </Link>
              
              <Link href="/demo">
                <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm transition-all duration-200">
                  Voir la démo
                </button>
              </Link>
            </div>
          </div>
          
          {/* Hero App Demo */}
          <div className="relative mx-auto max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
              <div className="relative rounded-xl overflow-hidden m-1 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                {/* App Mock Toolbar */}
                <div className="flex items-center px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-xs text-gray-400">VynalDocs - Interface d'édition</div>
                </div>
                
                {/* App Content */}
                <div className="aspect-[16/9] relative overflow-hidden bg-gray-50 dark:bg-gray-900">
                  <div className="absolute inset-0 grid grid-cols-10 h-full w-full">
                    {/* Sidebar */}
                    <div className="col-span-2 border-r border-gray-200 dark:border-gray-800 p-4">
                      <div className="space-y-4">
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
                        <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded-md w-full"></div>
                        <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded-md w-full"></div>
                        <div className="h-4 bg-blue-100 dark:bg-blue-900/30 rounded-md w-full"></div>
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="col-span-8 p-6">
                      <div className="space-y-6">
                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4 mx-auto"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded-md w-full"></div>
                          <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded-md w-full"></div>
                          <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded-md w-5/6"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-1/3"></div>
                            <div className="h-8 bg-gray-100 dark:bg-gray-800 rounded-md w-full border border-gray-200 dark:border-gray-700"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-1/3"></div>
                            <div className="h-8 bg-gray-100 dark:bg-gray-800 rounded-md w-full border border-gray-200 dark:border-gray-700"></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-1/4"></div>
                          <div className="h-20 bg-gray-100 dark:bg-gray-800 rounded-md w-full border border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <div className="flex justify-end">
                          <div className="h-8 bg-blue-500 dark:bg-blue-600 rounded-md w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-110"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 dark:from-indigo-400/10 dark:to-purple-400/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-400/10 dark:to-cyan-400/10 rounded-full blur-xl"></div>
          </div>
        </div>
        
        {/* Floating stats */}
        <div className="container max-w-6xl relative z-10 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: "90%", text: "De temps gagné sur la génération de documents" },
              { number: "100+", text: "Modèles juridiques et administratifs disponibles" },
              { number: "98%", text: "De taux de satisfaction client" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-500 dark:via-indigo-500 dark:to-violet-500 text-transparent bg-clip-text mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-400/5 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Solutions intelligentes d'automatisation documentaire
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez comment VynalDocs révolutionne la gestion documentaire pour les professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                <div className="mt-6">
                  <Link 
                    href={`/fonctionnalites#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 hover:from-blue-800 hover:to-indigo-800 dark:hover:from-blue-400 dark:hover:to-indigo-400"
                  >
                    En savoir plus
                    <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/fonctionnalites">
              <Button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm">
                <span className="flex items-center gap-2">
                  Voir toutes les fonctionnalités
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ajouter d'autres sections ici si nécessaire */}
    </div>
  );
}