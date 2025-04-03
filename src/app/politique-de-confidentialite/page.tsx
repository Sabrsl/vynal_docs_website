import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, FileText, Clock, Server, HardDrive, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      content: (
        <div className="space-y-4">
          <p>
            Chez VynalDocs, nous accordons une importance primordiale à la confidentialité de vos données. Cette politique explique quelles informations nous collectons, comment nous les utilisons et les mesures que nous prenons pour les protéger.
          </p>
          <p>
            En utilisant notre service, vous acceptez les pratiques décrites dans cette politique de confidentialité. Nous vous encourageons à la lire attentivement pour comprendre notre approche concernant vos informations personnelles.
          </p>
          <p>
            Date de dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      )
    },
    {
      id: "collecte",
      title: "Informations collectées",
      icon: <Eye className="w-6 h-6 text-indigo-500" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium mb-2">Informations que vous nous fournissez</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Informations de compte (nom, adresse email, mot de passe)</li>
              <li>Informations de profil et préférences</li>
              <li>Contenu des documents que vous créez ou importez</li>
              <li>Communications avec notre équipe de support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-2">Informations collectées automatiquement</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Données d'utilisation et analytiques</li>
              <li>Informations sur l'appareil et le navigateur</li>
              <li>Adresse IP et localisation approximative</li>
              <li>Cookies et technologies similaires</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "utilisation",
      title: "Utilisation des données",
      icon: <FileText className="w-6 h-6 text-violet-500" />,
      content: (
        <div className="space-y-4">
          <p>
            Nous utilisons vos informations personnelles pour les finalités suivantes :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fournir, maintenir et améliorer nos services</li>
            <li>Traiter vos transactions et gérer votre compte</li>
            <li>Personnaliser votre expérience utilisateur</li>
            <li>Communiquer avec vous concernant nos services</li>
            <li>Assurer la sécurité de notre plateforme</li>
            <li>Se conformer aux obligations légales</li>
          </ul>
          <p>
            VynalDocs ne vend pas vos données personnelles à des tiers. Nous limitons strictement leur utilisation aux finalités décrites dans cette politique.
          </p>
        </div>
      )
    },
    {
      id: "conservation",
      title: "Conservation des données",
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      content: (
        <div className="space-y-4">
          <p>
            Nous conservons vos informations personnelles aussi longtemps que nécessaire pour fournir nos services et pour les autres finalités essentielles telles que :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Se conformer à nos obligations légales</li>
            <li>Résoudre les litiges</li>
            <li>Faire appliquer nos accords</li>
          </ul>
          <p>
            Lorsque vous supprimez votre compte, nous supprimons ou anonymisons vos informations personnelles dans un délai de 30 jours, sauf si nous sommes légalement tenus de les conserver plus longtemps.
          </p>
        </div>
      )
    },
    {
      id: "securite",
      title: "Sécurité des données",
      icon: <Lock className="w-6 h-6 text-pink-500" />,
      content: (
        <div className="space-y-4">
          <p>
            La sécurité de vos informations est notre priorité. Nous mettons en œuvre des mesures techniques et organisationnelles robustes pour protéger vos données contre tout accès, divulgation, altération ou destruction non autorisés.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Chiffrement de bout en bout des documents sensibles</li>
            <li>Authentification multi-facteurs</li>
            <li>Audits de sécurité réguliers</li>
            <li>Formation de notre personnel aux meilleures pratiques</li>
            <li>Surveillance continue des menaces potentielles</li>
          </ul>
          <p>
            Malgré nos efforts, aucune méthode de transmission ou de stockage n'est totalement sécurisée. Nous ne pouvons garantir une sécurité absolue de vos données.
          </p>
        </div>
      )
    },
    {
      id: "partage",
      title: "Partage des données",
      icon: <Server className="w-6 h-6 text-red-500" />,
      content: (
        <div className="space-y-4">
          <p>
            Nous pouvons partager vos informations personnelles avec les catégories de destinataires suivantes :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Fournisseurs de services</strong> : Entreprises qui nous aident à fournir nos services (hébergement, traitement des paiements, support client, etc.)
            </li>
            <li>
              <strong>Partenaires commerciaux</strong> : Uniquement avec votre consentement pour des services intégrés
            </li>
            <li>
              <strong>Autorités légales</strong> : Lorsque la loi l'exige ou pour protéger nos droits
            </li>
          </ul>
          <p>
            Tous nos fournisseurs de services sont soumis à des obligations strictes de confidentialité et ne peuvent utiliser vos données que pour les finalités spécifiques que nous autorisons.
          </p>
        </div>
      )
    },
    {
      id: "droits",
      title: "Vos droits",
      icon: <HardDrive className="w-6 h-6 text-amber-500" />,
      content: (
        <div className="space-y-4">
          <p>
            En fonction de votre localisation, vous disposez de certains droits concernant vos informations personnelles :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification des données inexactes</li>
            <li>Droit à l'effacement de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition au traitement</li>
            <li>Droit de retirer votre consentement</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à <a href="mailto:privacy@vynaldocs.com" className="text-blue-600 hover:underline">privacy@vynaldocs.com</a>. Nous répondrons à votre demande dans les délais prévus par la loi applicable.
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
                Politique de confidentialité
              </h1>
              
              <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 group">
                English version
                <ChevronRight className="inline ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              Nous nous engageons à protéger votre vie privée et à assurer la sécurité de vos données personnelles.
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
                <h2 className="text-2xl font-bold mb-4">Des questions sur notre politique de confidentialité ?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité ou nos pratiques en matière de données, n'hésitez pas à nous contacter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                    Contacter notre équipe
                  </Button>
                  <Button variant="outline">
                    Consulter nos FAQ
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