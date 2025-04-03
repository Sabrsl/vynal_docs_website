import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Cookie, Shield, Eye, Settings, Clock, Server, ToggleLeft, ChevronRight } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function CookiesPolicy() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <Cookie className="w-6 h-6 text-blue-500" />,
      content: (
        <div className="space-y-4">
          <p>
            VynalDocs utilise des cookies et technologies similaires pour améliorer votre expérience sur notre plateforme. Cette page explique comment nous utilisons ces technologies, et comment vous pouvez les contrôler.
          </p>
          <p>
            En continuant à naviguer sur notre site, vous acceptez l'utilisation des cookies conformément à la présente politique.
          </p>
          <p>
            Date de dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      )
    },
    {
      id: "definition",
      title: "Qu'est-ce qu'un cookie ?",
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      content: (
        <div className="space-y-4">
          <p>
            Un cookie est un petit fichier texte qu'un site web enregistre sur votre ordinateur ou appareil mobile lorsque vous visitez ce site. Il permet au site de mémoriser vos actions et préférences pendant une certaine période, afin que vous n'ayez pas à les saisir à chaque fois que vous visitez le site ou naviguez d'une page à une autre.
          </p>
          <p>
            Les cookies peuvent être :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Temporaires</strong> (de session) : ils sont supprimés lorsque vous fermez votre navigateur</li>
            <li><strong>Permanents</strong> : ils restent stockés sur votre appareil jusqu'à leur expiration ou suppression manuelle</li>
            <li><strong>Propriétaires</strong> : déposés par le site que vous visitez</li>
            <li><strong>Tiers</strong> : déposés par d'autres domaines que celui du site visité</li>
          </ul>
        </div>
      )
    },
    {
      id: "types",
      title: "Types de cookies utilisés",
      icon: <Eye className="w-6 h-6 text-violet-500" />,
      content: (
        <div className="space-y-4">
          <p>
            VynalDocs utilise différents types de cookies pour les finalités suivantes :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Cookies essentiels</strong> : Strictement nécessaires au fonctionnement du site. Ils permettent d'utiliser les principales fonctionnalités comme l'accès à votre compte et ne peuvent pas être désactivés.
            </li>
            <li>
              <strong>Cookies fonctionnels</strong> : Permettent d'améliorer votre expérience utilisateur en mémorisant vos préférences (langue, région, personnalisation de l'interface).
            </li>
            <li>
              <strong>Cookies analytiques</strong> : Nous aident à comprendre comment les visiteurs interagissent avec notre site en collectant des informations anonymes, permettant d'optimiser le fonctionnement de notre plateforme.
            </li>
            <li>
              <strong>Cookies marketing</strong> : Utilisés pour suivre les visiteurs sur les sites web afin d'afficher des publicités pertinentes et engageantes pour l'utilisateur.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "utilisation",
      title: "Comment nous utilisons les cookies",
      icon: <Settings className="w-6 h-6 text-purple-500" />,
      content: (
        <div className="space-y-4">
          <p>
            Nous utilisons les cookies et technologies similaires pour :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Assurer le bon fonctionnement et la sécurité de notre plateforme</li>
            <li>Mémoriser vos préférences et paramètres</li>
            <li>Vous authentifier et maintenir votre session</li>
            <li>Analyser l'utilisation de notre site et améliorer nos services</li>
            <li>Personnaliser votre expérience et le contenu qui vous est présenté</li>
            <li>Mesurer l'efficacité de nos campagnes marketing</li>
          </ul>
          <p>
            Certains cookies sont déposés par VynalDocs, d'autres peuvent être déposés par des tiers qui fournissent des services sur notre site.
          </p>
        </div>
      )
    },
    {
      id: "duree",
      title: "Durée de conservation",
      icon: <Clock className="w-6 h-6 text-pink-500" />,
      content: (
        <div className="space-y-4">
          <p>
            La durée de conservation des cookies varie selon leur type :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Les cookies de session expirent à la fin de votre session de navigation</li>
            <li>Les cookies persistants peuvent rester sur votre appareil pendant une durée déterminée, pouvant aller de quelques jours à plusieurs mois</li>
          </ul>
          <p>
            Vous pouvez consulter et supprimer les cookies à tout moment via les paramètres de votre navigateur.
          </p>
        </div>
      )
    },
    {
      id: "tiers",
      title: "Cookies tiers",
      icon: <Server className="w-6 h-6 text-red-500" />,
      content: (
        <div className="space-y-4">
          <p>
            Notre site peut inclure des fonctionnalités fournies par des tiers, qui peuvent déposer leurs propres cookies sur votre appareil. Nous n'avons pas accès ni contrôle sur ces cookies.
          </p>
          <p>
            Les cookies tiers peuvent provenir de :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Services d'analyse web (Google Analytics)</li>
            <li>Réseaux sociaux (si vous utilisez des boutons de partage)</li>
            <li>Prestataires de services tiers (paiement, assistance client)</li>
          </ul>
          <p>
            Nous vous encourageons à consulter les politiques de confidentialité de ces tiers pour comprendre leur utilisation des cookies.
          </p>
        </div>
      )
    },
    {
      id: "gestion",
      title: "Gestion de vos préférences",
      icon: <ToggleLeft className="w-6 h-6 text-amber-500" />,
      content: (
        <div className="space-y-4">
          <p>
            Vous pouvez contrôler et gérer les cookies de plusieurs façons :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Via notre bannière de cookies</strong> : Lors de votre première visite sur notre site, une bannière vous propose de personnaliser vos préférences en matière de cookies.
            </li>
            <li>
              <strong>Via les paramètres de votre navigateur</strong> : Vous pouvez configurer votre navigateur pour qu'il refuse tous les cookies, accepte uniquement certains cookies, ou vous avertisse lorsqu'un site souhaite déposer un cookie.
            </li>
            <li>
              <strong>Via le panneau de préférences</strong> : Vous pouvez modifier vos choix à tout moment en cliquant sur le bouton "Paramètres des cookies" en bas de cette page.
            </li>
          </ul>
          <p>
            Notez que le blocage de certains types de cookies peut affecter votre expérience sur notre site et les services que nous sommes en mesure de vous offrir.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 -z-10"></div>
          <div className="absolute -top-5 right-0 w-1/3 aspect-square bg-gradient-to-tl from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="container max-w-6xl px-4 py-12 md:py-20">
            <Link href="/" className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 group">
              <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Retour à l'accueil
            </Link>
            
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                Gestion des cookies
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              Informations sur l'utilisation des cookies et comment gérer vos préférences sur notre plateforme.
            </p>
          </div>
        </section>
        
        {/* Table of Contents */}
        <div className="container max-w-6xl px-4 mb-12">
          <div className="bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Sommaire</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a 
                    href={`#${section.id}`}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="mr-2">{section.icon}</span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Content Sections */}
        <div className="container max-w-6xl px-4">
          <div className="max-w-3xl mx-auto space-y-16">
            {sections.map((section) => (
              <section id={section.id} key={section.id} className="scroll-mt-32">
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-100 dark:border-gray-800/50">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed ml-16">
                  {section.content}
                </div>
              </section>
            ))}
            
            {/* Final Cookie Settings Section */}
            <section id="parametres" className="scroll-mt-32">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <h2 className="text-2xl font-bold mb-4">Paramètres des cookies</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Vous pouvez modifier vos préférences concernant les cookies utilisés sur notre site à tout moment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                    Gérer mes préférences
                  </Button>
                  <Button variant="outline">
                    Accepter tous les cookies
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 