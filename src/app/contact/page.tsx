"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, Send, HelpCircle, Clock, MessageSquare, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    submitted: false,
    loading: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });
    
    // Simulate form submission
    setTimeout(() => {
      setFormState({
        ...formState,
        submitted: true,
        loading: false,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">

      {/* Hero Section avec 3D morphing background */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
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
                Réponse en moins de 24h
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
                <span className="relative">Contactez</span>
              </span>{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                notre équipe
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
              Notre équipe d'experts est disponible pour répondre à toutes vos questions et vous accompagner dans votre démarche.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Section with 3D Cards */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/5 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between"
            >
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nous sommes là pour vous aider</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Que vous ayez des questions sur nos produits, nos tarifs ou que vous souhaitiez simplement en savoir plus sur VynalDocs, n'hésitez pas à nous contacter.
                </p>
              </div>
              
              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: "Assistance commerciale",
                    description: "Pour toute question concernant nos offres ou pour organiser une démo personnalisée.",
                    contact: "commercial@vynaldocs.com",
                    gradient: "from-blue-500 to-indigo-500"
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: "Support technique",
                    description: "Notre équipe de support est disponible pour vous aider avec tout problème technique.",
                    contact: "support@vynaldocs.com",
                    gradient: "from-indigo-500 to-violet-500"
                  },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Nos bureaux",
                    description: "123 Avenue de la République, 75011 Paris, France",
                    gradient: "from-violet-500 to-purple-500"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mr-5`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">{item.description}</p>
                      {item.contact && (
                        <a 
                          href={`mailto:${item.contact}`} 
                          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-medium hover:underline"
                        >
                          {item.contact}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-800/60">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  Heures d'ouverture
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span className="font-medium">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi:</span>
                    <span className="font-medium">Fermé</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche:</span>
                    <span className="font-medium">Fermé</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 backdrop-blur-sm overflow-hidden shadow-xl shadow-blue-900/5 relative">
                {/* Card Top Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"></div>
                
                <CardContent className="p-8">
                  {formState.submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-6 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Message envoyé !</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                        Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                      </p>
                      <Button
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200"
                        onClick={() => setFormState({
                          name: "",
                          email: "",
                          company: "",
                          message: "",
                          submitted: false,
                          loading: false,
                        })}
                      >
                        Envoyer un autre message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="text-xl font-semibold mb-6">Envoyez-nous un message</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative group">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Nom complet
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition duration-200"
                            placeholder="Votre nom"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 group-focus-within:w-full transition-all duration-300"></div>
                        </div>
                        
                        <div className="relative group">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Adresse email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition duration-200"
                            placeholder="votreemail@exemple.com"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 group-focus-within:w-full transition-all duration-300"></div>
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Entreprise (optionnel)
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition duration-200"
                          placeholder="Nom de votre entreprise"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 group-focus-within:w-full transition-all duration-300"></div>
                      </div>
                      
                      <div className="relative group">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition duration-200"
                          placeholder="Comment pouvons-nous vous aider ?"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 group-focus-within:w-full transition-all duration-300"></div>
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          className="w-full relative group py-3.5 px-6 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 overflow-hidden"
                          disabled={formState.loading}
                        >
                          <div className="relative flex items-center justify-center gap-2 z-10">
                            <span>{formState.loading ? "Envoi en cours..." : "Envoyer le message"}</span>
                            <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        </button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        <div className="absolute -bottom-96 left-0 w-[800px] h-[800px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Questions fréquentes
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Pour vous aider à mieux nous connaître
            </motion.p>
          </div>
          
          <div className="space-y-5">
            {[
              {
                question: "Quel est le délai de réponse ?",
                answer: "Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 heures ouvrées. Notre équipe est mobilisée pour vous apporter une réponse rapide et personnalisée."
              },
              {
                question: "Puis-je demander une démo personnalisée ?",
                answer: "Absolument ! Vous pouvez nous contacter pour organiser une démonstration personnalisée avec l'un de nos experts produit. Ils vous guideront à travers les fonctionnalités de VynalDocs adaptées à vos besoins spécifiques."
              },
              {
                question: "Proposez-vous un support téléphonique ?",
                answer: "Oui, le support téléphonique est disponible pour nos clients des plans Pro et Entreprise. Vous pouvez également planifier un appel via notre formulaire de contact pour discuter de vos besoins spécifiques."
              },
              {
                question: "Comment puis-je signaler un problème technique ?",
                answer: "Pour signaler un problème technique, vous pouvez nous contacter via le formulaire ci-dessus ou envoyer un email directement à support@vynaldocs.com. Notre équipe technique prendra en charge votre demande rapidement."
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
      
      {/* Team CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 dark:from-blue-600/5 dark:to-indigo-600/5"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        <div className="container max-w-5xl relative">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 border border-gray-200 dark:border-gray-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Une équipe dédiée à votre réussite
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Nos experts sont prêts à vous accompagner dans la transformation de vos processus documentaires. Contactez-nous dès aujourd'hui pour découvrir comment VynalDocs peut vous aider.
                </p>
                <div className="flex gap-4">
                  <Link href="/signup" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200">
                    Essayer gratuitement
                  </Link>
                  <Link href="/demo" className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                    Voir la démo
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/2 flex-shrink-0">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                      <Users className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}