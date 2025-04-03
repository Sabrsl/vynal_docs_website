import * as React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Shield, Scale, Clock, Scroll, AlertCircle, BookOpen, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      content: (
        <div className="space-y-4">
          <p>
            Bienvenue sur VynalDocs. Les présentes Conditions Générales d'Utilisation régissent votre utilisation de notre plateforme et de nos services.
          </p>
          <p>
            En accédant ou en utilisant VynalDocs, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
          </p>
          <p>
            Date de dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      )
    },
    {
      id: "definitions",
      title: "Définitions",
      icon: <BookOpen className="w-6 h-6 text-indigo-500" />,
      content: (
        <div className="space-y-4">
          <p>Dans les présentes conditions générales d'utilisation, les termes suivants ont la signification indiquée :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>VynalDocs</strong> : désigne la plateforme et les services fournis par notre société.</li>
            <li><strong>Utilisateur</strong> : toute personne qui accède à ou utilise VynalDocs.</li>
            <li><strong>Compte</strong> : l'espace personnel créé par un utilisateur sur VynalDocs.</li>
            <li><strong>Contenu</strong> : tous les documents, textes, images, et autres informations téléchargés, créés ou partagés via VynalDocs.</li>
            <li><strong>Services</strong> : ensemble des fonctionnalités et outils proposés par VynalDocs.</li>
          </ul>
        </div>
      )
    },
    {
      id: "inscription",
      title: "Inscription et compte",
      icon: <FileText className="w-6 h-6 text-violet-500" />,
      content: (
        <div className="space-y-4">
          <p>
            Pour utiliser pleinement nos services, vous devez créer un compte en fournissant des informations exactes et complètes.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vous êtes responsable de la confidentialité de vos identifiants de connexion.</li>
            <li>Vous devez nous informer immédiatement de toute utilisation non autorisée de votre compte.</li>
            <li>Nous nous réservons le droit de suspendre ou de supprimer votre compte en cas de violation des présentes conditions.</li>
            <li>Une personne physique ne peut créer qu'un seul compte, sauf autorisation expresse de notre part.</li>
          </ul>
          <p>
            Vous pouvez supprimer votre compte à tout moment, mais certaines informations peuvent être conservées conformément à nos obligations légales.
          </p>
        </div>
      )
    },
    {
      id: "service",
      title: "Description du service",
      icon: <Scroll className="w-6 h-6 text-purple-500" />,
      content: (
        <div className="space-y-4">
          <p>
            VynalDocs propose une plateforme d'automatisation et de gestion documentaire avec les fonctionnalités suivantes :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Analyse et extraction d'informations à partir de documents</li>
            <li>Génération automatique de documents personnalisés</li>
            <li>Modèles de documents personnalisables</li>
            <li>Formulaires intelligents</li>
            <li>Collaboration en temps réel</li>
            <li>Stockage sécurisé de documents</li>
          </ul>
          <p>
            Nous nous réservons le droit de modifier, suspendre ou interrompre tout aspect du service à tout moment, avec ou sans préavis.
          </p>
        </div>
      )
    },
    {
      id: "conditions",
      title: "Conditions financières",
      icon: <Scale className="w-6 h-6 text-pink-500" />,
      content: (
        <div className="space-y-4">
          <p>
            VynalDocs propose différentes formules d'abonnement dont les prix et caractéristiques sont détaillés sur notre page Tarifs.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Les paiements sont effectués par avance, mensuellement ou annuellement selon la formule choisie.</li>
            <li>Les prix indiqués sont hors taxes et peuvent être modifiés à tout moment.</li>
            <li>En cas de modification des tarifs, les utilisateurs seront informés au moins 30 jours avant l'entrée en vigueur des nouveaux prix.</li>
            <li>Aucun remboursement n'est accordé pour les périodes d'abonnement non utilisées, sauf disposition légale contraire.</li>
          </ul>
          <p>
            L'utilisation de VynalDocs peut être soumise à des limites d'utilisation selon la formule choisie (nombre de documents, espace de stockage, etc.).
          </p>
        </div>
      )
    },
    {
      id: "propriete",
      title: "Propriété intellectuelle",
      icon: <Clock className="w-6 h-6 text-red-500" />,
      content: (
        <div className="space-y-4">
          <p>
            VynalDocs et son contenu (à l'exclusion du contenu fourni par les utilisateurs) sont protégés par les droits de propriété intellectuelle.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vous conservez tous les droits sur le contenu que vous créez ou téléchargez sur VynalDocs.</li>
            <li>En téléchargeant du contenu sur VynalDocs, vous nous accordez une licence mondiale, non exclusive et sans redevance pour utiliser, reproduire et traiter ce contenu uniquement dans le but de vous fournir nos services.</li>
            <li>Vous ne pouvez pas copier, modifier, distribuer ou utiliser notre plateforme, notre code source ou notre contenu sans notre autorisation expresse.</li>
            <li>Les noms, logos et marques VynalDocs sont notre propriété exclusive et ne peuvent être utilisés sans notre autorisation écrite préalable.</li>
          </ul>
        </div>
      )
    },
    {
      id: "responsabilite",
      title: "Limitation de responsabilité",
      icon: <AlertCircle className="w-6 h-6 text-amber-500" />,
      content: (
        <div className="space-y-4">
          <p>
            Dans les limites autorisées par la loi, VynalDocs ne pourra être tenu responsable :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Des dommages indirects, spéciaux, accessoires ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser nos services.</li>
            <li>De la perte de données, de profits, d'opportunités commerciales ou d'autres pertes intangibles.</li>
            <li>Des erreurs, inexactitudes ou omissions dans les documents générés automatiquement.</li>
            <li>Des interruptions ou dysfonctionnements temporaires de la plateforme.</li>
            <li>Du contenu téléchargé ou partagé par les utilisateurs.</li>
          </ul>
          <p>
            Vous êtes seul responsable de la vérification et de la validation juridique des documents générés via notre plateforme.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">

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
                Conditions d'utilisation
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              Les termes et conditions qui régissent votre utilisation de VynalDocs et de nos services.
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
            
            {/* Final Contact Section */}
            <section id="contact" className="scroll-mt-32">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <h2 className="text-2xl font-bold mb-4">Des questions sur nos conditions d'utilisation ?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Si vous avez des questions ou des préoccupations concernant nos conditions d'utilisation, n'hésitez pas à nous contacter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                    Contacter notre équipe
                  </Button>
                  <Button variant="outline">
                    Consulter la FAQ
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

    </div>
  );
} 