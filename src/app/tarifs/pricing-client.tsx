"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Star, ArrowRight, Diamond, ShieldCheck, Users, Zap, Cpu, Key, HelpCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function PricingClient() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("pro");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">

      {/* Hero Section avec 3D morphing background */}
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
                Économisez 20% avec nos plans annuels
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
                <span className="relative">Tarifs</span>
              </span>{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                transparents
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
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl"
            >
              Choisissez le forfait adapté à vos besoins. Tous les plans incluent un essai gratuit de 14 jours, sans engagement et sans carte bancaire.
            </motion.p>
            
            {/* Billing cycle toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex p-1 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700 mb-16"
            >
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  billingCycle === "monthly"
                    ? "text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {billingCycle === "monthly" && (
                  <motion.div
                    layoutId="billingTabBackground"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">Mensuel</span>
              </button>
              
              <button
                onClick={() => setBillingCycle("annual")}
                className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  billingCycle === "annual"
                    ? "text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {billingCycle === "annual" && (
                  <motion.div
                    layoutId="billingTabBackground"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  Annuel
                  <span className="ml-1.5 py-0.5 px-1.5 bg-white/20 rounded-md text-xs">-20%</span>
                </span>
              </button>
            </motion.div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 max-w-6xl mx-auto perspective-1000">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ translateY: -10 }}
              className={`relative flex flex-col rounded-3xl ${
                selectedPlan === "starter" 
                  ? "border-2 border-blue-600 dark:border-blue-500 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/20" 
                  : "border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800/60"
              } bg-white dark:bg-gray-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300`}
            >
              <div className="px-6 pt-8 pb-0">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-1">Starter</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl lg:text-5xl font-bold">Gratuit</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Pour découvrir VynalDocs</p>
              </div>
              
              <div className="px-6 py-8 flex-grow">
                <ul className="space-y-4 mb-8">
                  {[
                    "10 analyses de documents",
                    "5 générations par mois",
                    "3 modèles de base",
                    "Stockage limité à 100 Mo",
                    "Support par email",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 pb-8">
                <button 
                  onClick={() => setSelectedPlan("starter")}
                  className={`w-full py-3.5 rounded-xl font-medium ${
                    selectedPlan === "starter"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                  } transition-all duration-200`}
                >
                  Commencer gratuitement
                </button>
              </div>
            </motion.div>
            
            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ translateY: -10 }}
              className={`relative flex flex-col rounded-3xl ${
                selectedPlan === "pro" 
                  ? "border-2 border-blue-600 dark:border-blue-500 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/20 scale-[1.03] lg:scale-[1.05] z-10" 
                  : "border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800/60"
              } bg-white dark:bg-gray-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300`}
            >
              <div className="absolute top-0 right-6 transform -translate-y-1/2">
                <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full shadow-lg">
                  Recommandé
                </div>
              </div>
              
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"></div>
              
              <div className="px-6 pt-8 pb-0">
                <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-1">Pro</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl lg:text-5xl font-bold">{billingCycle === "monthly" ? "39€" : "31€"}</span>
                  <span className="text-lg text-gray-500 dark:text-gray-400 ml-2">/mois</span>
                </div>
                
                {billingCycle === "annual" && (
                  <div className="mb-2 inline-block px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-medium rounded">
                    Économisez 96€ par an
                  </div>
                )}
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">Pour les professionnels indépendants</p>
              </div>
              
              <div className="px-6 py-8 flex-grow">
                <ul className="space-y-4 mb-8">
                  {[
                    "Analyses illimitées",
                    "Générations illimitées",
                    "Tous les modèles standards",
                    "Stockage de 10 Go",
                    "Support prioritaire",
                    "API de base",
                    "Formulaires personnalisables",
                    "Historique des versions",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 pb-8">
                <button 
                  onClick={() => setSelectedPlan("pro")}
                  className={`w-full relative py-3.5 rounded-xl font-medium ${
                    selectedPlan === "pro"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                  } transition-all duration-200 overflow-hidden group`}
                >
                  <span className="relative z-10">S'abonner</span>
                  {selectedPlan === "pro" && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay opacity-10"></div>
                      <div className="absolute -inset-[100%] bg-gradient-to-r from-blue-600/0 via-white/10 to-blue-600/0 skew-x-[-20deg] animate-shimmer"></div>
                    </div>
                  )}
                </button>
              </div>
            </motion.div>
            
            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ translateY: -10 }}
              className={`relative flex flex-col rounded-3xl ${
                selectedPlan === "enterprise" 
                  ? "border-2 border-blue-600 dark:border-blue-500 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/20" 
                  : "border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800/60"
              } bg-white dark:bg-gray-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
              
              <div className="px-6 pt-8 pb-0">
                <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-1">Enterprise</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl lg:text-5xl font-bold">Sur mesure</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Pour les équipes et grandes entreprises</p>
              </div>
              
              <div className="px-6 py-8 flex-grow">
                <ul className="space-y-4 mb-8">
                  {[
                    "Tout ce qui est inclus dans Pro",
                    "Stockage illimité",
                    "API avancée",
                    "Modèles sur mesure",
                    "Intégration à vos systèmes",
                    "Support dédié 24/7",
                    "Formation et onboarding",
                    "SLA personnalisé",
                    "Fonctionnalités spécifiques",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 pb-8">
                <button 
                  onClick={() => setSelectedPlan("enterprise")}
                  className={`w-full py-3.5 rounded-xl font-medium ${
                    selectedPlan === "enterprise"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                  } transition-all duration-200`}
                >
                  Nous contacter
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Avantages Section avec cards flottantes */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-400/5 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Une solution complète pour vos documents
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              VynalDocs transforme votre processus documentaire avec des outils d'intelligence artificielle de pointe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Gain de temps",
                color: "bg-gradient-to-br from-amber-400 to-orange-500",
                description: "Réduisez de 80% le temps consacré à la création et l'analyse de documents"
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Sécurité maximale",
                color: "bg-gradient-to-br from-emerald-400 to-green-500",
                description: "Vos données sont protégées avec un chiffrement de niveau bancaire"
              },
              {
                icon: <Diamond className="w-8 h-8" />,
                title: "Qualité supérieure",
                color: "bg-gradient-to-br from-blue-400 to-indigo-500",
                description: "Des documents parfaitement formatés et conformes aux exigences légales"
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "IA avancée",
                color: "bg-gradient-to-br from-violet-400 to-purple-500",
                description: "Technologie d'intelligence artificielle performante pour l'analyse de contenu"
              },
              {
                icon: <Key className="w-8 h-8" />,
                title: "Contrôle total",
                color: "bg-gradient-to-br from-pink-400 to-rose-500",
                description: "Gardez le contrôle sur tous vos documents avec des permissions avancées"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration",
                color: "bg-gradient-to-br from-sky-400 to-cyan-500",
                description: "Travaillez efficacement en équipe sur les mêmes documents en temps réel"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} text-white flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section avec accordéon */}
      <section className="py-24 bg-white dark:bg-gray-900 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        <div className="absolute -bottom-96 left-0 w-[800px] h-[800px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Questions fréquentes</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tout ce que vous devez savoir sur nos tarifs
            </p>
          </div>
          
          <div className="space-y-5">
            {[
              {
                question: "Puis-je changer de plan à tout moment ?",
                answer: "Oui, vous pouvez passer à un plan supérieur à tout moment. Si vous passez à un plan inférieur, le changement prendra effet à la fin de votre période de facturation en cours."
              },
              {
                question: "Y a-t-il des frais d'installation ou de configuration ?",
                answer: "Non, il n'y a aucun frais caché. Vous ne payez que l'abonnement mensuel ou annuel selon le plan choisi."
              },
              {
                question: "Comment fonctionne l'essai gratuit ?",
                answer: "Notre essai gratuit de 14 jours vous donne accès à toutes les fonctionnalités du plan Pro. Aucune carte de crédit n'est requise, et vous pouvez annuler à tout moment."
              },
              {
                question: "Proposez-vous des remises pour les abonnements annuels ?",
                answer: "Oui, nous offrons une réduction de 20% pour les abonnements annuels par rapport au tarif mensuel, ce qui représente une économie de 96€ par an sur le plan Pro."
              },
              {
                question: "Que se passe-t-il à la fin de ma période d'essai ?",
                answer: "À la fin de votre période d'essai, vous pouvez choisir de passer à l'un de nos plans payants ou continuer avec le plan gratuit avec ses limitations. Vous ne serez jamais facturé automatiquement."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <button className="w-full text-left p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0">
                      <HelpCircle className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section avec parallax */}
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
              Prêt à transformer votre gestion documentaire ?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-blue-100 mb-10"
            >
              Rejoignez des milliers d'entreprises qui font confiance à VynalDocs pour automatiser et optimiser leurs documents professionnels.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/signup" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-blue-600 hover:bg-blue-50 font-medium shadow-xl shadow-blue-900/20 transition-all duration-200">
                Créer un compte gratuit
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border-2 border-white/20 text-white hover:bg-white/10 font-medium transition-all duration-200">
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
} 