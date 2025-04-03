import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "VynalDocs | À propos",
  description: "Découvrez l'histoire et la vision de VynalDocs, spécialiste de l'analyse et la génération automatique de documents par IA.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre histoire
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Nous réinventons la façon dont les professionnels interagissent avec leurs documents.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre vision</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  VynalDocs est né d'une conviction : la gestion documentaire pour les professionnels devrait être simple, intelligente et automatisée.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Notre mission est de libérer les avocats, notaires, experts et entreprises des tâches documentaires répétitives pour qu'ils puissent se concentrer sur leur véritable valeur ajoutée.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Avec l'intelligence artificielle, nous transformons des processus documentaires complexes en flux de travail simples et efficaces.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl p-2 shadow-xl">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Image de la vision VynalDocs</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-xl p-2 shadow-xl">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Image de l'histoire VynalDocs</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Notre parcours</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Fondée en 2023 par une équipe d'experts en technologies juridiques et en intelligence artificielle, VynalDocs est rapidement devenue une référence dans le domaine de l'automatisation documentaire.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Notre équipe combine des années d'expertise dans les domaines juridique, technologique et de l'expérience utilisateur pour créer une solution qui répond parfaitement aux besoins des professionnels.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Aujourd'hui, VynalDocs accompagne des centaines de professionnels dans la transformation digitale de leur gestion documentaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Les principes qui guident chacune de nos actions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Innovation",
                description: "Nous repoussons constamment les limites technologiques pour offrir des solutions toujours plus intelligentes et efficaces.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Excellence",
                description: "Nous nous engageons à fournir des produits d'une qualité irréprochable, avec une attention particulière portée aux détails.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )
              },
              {
                title: "Confiance",
                description: "La sécurité et la confidentialité des données de nos clients sont au cœur de notre approche et de nos développements.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-md bg-white dark:bg-gray-900">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre équipe
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des experts passionnés par la transformation du travail documentaire
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sophie Moreau",
                role: "Fondatrice & CEO",
                bio: "Avocate de formation et passionnée de technologie, Sophie a fondé VynalDocs pour résoudre les problèmes qu'elle rencontrait quotidiennement dans sa pratique juridique."
              },
              {
                name: "Thomas Dubois",
                role: "CTO",
                bio: "Expert en intelligence artificielle et en traitement du langage naturel, Thomas dirige le développement technologique de VynalDocs avec plus de 15 ans d'expérience."
              },
              {
                name: "Marie Laurent",
                role: "Directrice Produit",
                bio: "Spécialiste de l'expérience utilisateur, Marie veille à ce que nos produits soient non seulement puissants mais aussi intuitifs et agréables à utiliser."
              },
              {
                name: "Antoine Girard",
                role: "Responsable Juridique",
                bio: "Notaire de formation, Antoine assure que nos solutions respectent les exigences légales et réglementaires tout en apportant une réelle valeur ajoutée aux professionnels."
              },
              {
                name: "Camille Rousseau",
                role: "Responsable Commercial",
                bio: "Avec son expérience dans les LegalTech, Camille comprend parfaitement les besoins de nos clients et s'assure que nos solutions y répondent parfaitement."
              },
              {
                name: "Paul Martin",
                role: "Lead Developer",
                bio: "Architecte logiciel talentueux, Paul supervise le développement technique de nos solutions avec un souci constant de qualité et de performance."
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-md bg-white dark:bg-gray-900">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 mb-4"></div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez l'aventure VynalDocs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Vous êtes un professionnel à la recherche d'une solution d'automatisation documentaire innovante ? Essayez VynalDocs dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Démarrer l'essai gratuit
              </Button>
              <Button size="lg" variant="outline">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
} 