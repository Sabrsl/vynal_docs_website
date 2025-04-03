'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { 
  ChevronLeft, Clock, Calendar, Tag, Download, 
  PlayCircle, BookOpen, Share2, Bookmark, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { optimizePerformance } from '@/lib/optimizations';

// Types pour les tutoriels
interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  duration: number; // en minutes
  thumbnail: string;
  date: string;
  tags: string[];
  videoUrl?: string;
  docUrl?: string;
  content?: string;
  sections?: {
    title: string;
    content: string;
    image?: string;
  }[];
}

// Données de tutoriels
const tutorials: Tutorial[] = [
  {
    id: 'analyse-documents',
    title: 'Analyser automatiquement des documents juridiques',
    description: 'Apprenez à extraire automatiquement les informations clés de vos documents juridiques en utilisant notre moteur d\'analyse IA.',
    category: 'document-analysis',
    level: 'débutant',
    duration: 15,
    thumbnail: '/images/tutorials/doc-analysis.webp',
    date: '2025-03-15',
    tags: ['IA', 'analyse', 'extraction', 'documents juridiques'],
    videoUrl: '/tutorials/analyse-documents',
    content: `L'analyse automatique de documents juridiques est une fonctionnalité puissante de VynalDocs qui vous permet d'extraire rapidement les informations essentielles de vos documents.`,
    sections: [
      {
        title: "Introduction à l'analyse automatique",
        content: "L'analyse automatique de documents juridiques utilise l'intelligence artificielle pour identifier et extraire les informations clés de vos documents sans intervention manuelle. Cette fonctionnalité vous fait gagner un temps précieux dans le traitement des contrats, des accords et autres documents juridiques.",
        image: "/images/tutorials/analyse-intro.webp"
      },
      {
        title: "Configuration de l'analyse",
        content: "Pour configurer l'analyse automatique, accédez au tableau de bord et sélectionnez 'Nouvelle analyse'. Vous pourrez ensuite choisir le type de document à analyser et les informations spécifiques que vous souhaitez extraire.",
        image: "/images/tutorials/analyse-config.webp"
      },
      {
        title: "Personnalisation du modèle d'analyse",
        content: "VynalDocs vous permet de personnaliser vos modèles d'analyse en fonction de vos besoins spécifiques. Vous pouvez définir des champs personnalisés, ajuster la sensibilité de l'IA et créer des règles métier pour améliorer la précision des résultats.",
        image: "/images/tutorials/analyse-custom.webp"
      },
      {
        title: "Vérification et validation des résultats",
        content: "Une fois l'analyse terminée, vous pouvez vérifier les résultats et apporter des corrections si nécessaire. VynalDocs met en évidence les zones d'incertitude pour faciliter la validation manuelle des informations extraites.",
        image: "/images/tutorials/analyse-validation.webp"
      },
      {
        title: "Exportation et intégration des données",
        content: "Les données extraites peuvent être exportées dans différents formats (CSV, JSON, Excel) ou intégrées directement à vos systèmes existants via notre API. Vous pouvez également configurer des actions automatiques basées sur les résultats de l'analyse.",
        image: "/images/tutorials/analyse-export.webp"
      }
    ]
  },
  {
    id: 'creer-modeles',
    title: 'Créer des modèles de documents personnalisés',
    description: 'Découvrez comment créer et personnaliser vos propres modèles de documents pour accélérer la génération de contrats.',
    category: 'templates',
    level: 'intermédiaire',
    duration: 25,
    thumbnail: '/images/tutorials/custom-templates.webp',
    date: '2025-03-20',
    tags: ['modèles', 'personnalisation', 'contrats'],
    docUrl: '/tutorials/creer-modeles',
    content: `La création de modèles personnalisés vous permet d'automatiser la génération de documents tout en maintenant votre identité visuelle et vos exigences légales spécifiques.`,
    sections: [
      {
        title: "Comprendre l'éditeur de modèles",
        content: "L'éditeur de modèles de VynalDocs combine la simplicité d'utilisation avec des fonctionnalités avancées. Il vous permet de créer des documents dynamiques avec des variables, des conditions et des boucles pour s'adapter à différents contextes d'utilisation.",
        image: "/images/tutorials/modeles-editeur.webp"
      },
      {
        title: "Création de votre premier modèle",
        content: "Pour créer un nouveau modèle, accédez à la section 'Modèles' et cliquez sur 'Nouveau modèle'. Vous pouvez partir de zéro ou utiliser l'un de nos modèles prédéfinis comme point de départ. L'interface intuitive vous permet d'ajouter du texte, des images, des tableaux et d'autres éléments.",
        image: "/images/tutorials/modeles-creation.webp"
      },
      {
        title: "Ajout de champs dynamiques",
        content: "Les champs dynamiques sont au cœur de la personnalisation des modèles. Ils vous permettent d'insérer des variables qui seront remplacées par des données spécifiques lors de la génération du document. Pour ajouter un champ, utilisez la syntaxe {{nom_du_champ}} dans votre texte.",
        image: "/images/tutorials/modeles-champs.webp"
      },
      {
        title: "Gestion des sections conditionnelles",
        content: "Les sections conditionnelles vous permettent d'inclure ou d'exclure certaines parties du document en fonction de critères spécifiques. Par exemple, vous pouvez avoir des clauses différentes selon le pays du client ou le type de contrat.",
        image: "/images/tutorials/modeles-conditions.webp"
      },
      {
        title: "Test et publication du modèle",
        content: "Avant de publier votre modèle, vous devriez le tester avec différentes données pour vous assurer qu'il fonctionne comme prévu. Une fois satisfait, vous pouvez le publier pour le rendre accessible à votre équipe.",
        image: "/images/tutorials/modeles-publication.webp"
      }
    ]
  }
];

export default function TutorialPage() {
  const params = useParams();
  const tutorialId = params.id as string;
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  
  // Optimisation des performances au chargement
  useEffect(() => {
    optimizePerformance();
  }, []);
  
  // Récupérer les données du tutoriel
  useEffect(() => {
    setIsLoading(true);
    
    // Dans une application réelle, vous feriez un appel API ici
    // Pour notre démo, nous utilisons les données statiques
    const foundTutorial = tutorials.find(t => t.id === tutorialId);
    
    if (foundTutorial) {
      setTutorial(foundTutorial);
    }
    
    setIsLoading(false);
  }, [tutorialId]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }
  
  if (!tutorial) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 pt-32">
        <div className="container max-w-4xl text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Tutoriel non trouvé</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Le tutoriel que vous recherchez n'existe pas ou a été déplacé.
          </p>
          <Link href="/ressources/tutoriels">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              Retour aux tutoriels
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-40 right-[10%] w-[400px] h-[400px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-60 left-[5%] w-[300px] h-[300px] bg-violet-400/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8 text-sm">
            <Link href="/ressources" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              Ressources
            </Link>
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <Link href="/ressources/tutoriels" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              Tutoriels
            </Link>
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <span className="text-gray-800 dark:text-gray-200 font-medium">
              {tutorial.title}
            </span>
          </nav>
          
          {/* Tutorial header */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                tutorial.level === 'débutant' 
                  ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                  : tutorial.level === 'intermédiaire'
                    ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' 
                    : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
              }`}>
                {tutorial.level.charAt(0).toUpperCase() + tutorial.level.slice(1)}
              </span>
              
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-full">
                {tutorial.videoUrl ? 'Tutoriel Vidéo' : 'Guide Écrit'}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {tutorial.title}
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              {tutorial.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                {new Date(tutorial.date).toLocaleDateString('fr-FR', { 
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              
              <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                {tutorial.duration} minutes
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {tutorial.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-full flex items-center">
                  <Tag className="w-3 h-3 mr-1.5" />
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {tutorial.videoUrl && (
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Regarder la vidéo
                </Button>
              )}
              
              {tutorial.docUrl && (
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Lire le guide
                </Button>
              )}
              
              <Button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Télécharger PDF
              </Button>
              
              <Button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Partager
              </Button>
              
              <Button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                <Bookmark className="w-5 h-5" />
                Sauvegarder
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tutorial content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Side navigation */}
            <div className="md:w-1/4">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-800 sticky top-24">
                <h3 className="font-medium text-lg mb-4">
                  Dans ce tutoriel
                </h3>
                
                <nav className="flex flex-col gap-2">
                  {tutorial.sections?.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`text-left p-2 rounded-lg text-sm transition-colors ${
                        activeSection === index
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            
            {/* Main content */}
            <div className="md:w-3/4">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-800">
                <div className="prose dark:prose-invert prose-blue max-w-none">
                  <p className="text-lg mb-8">{tutorial.content}</p>
                  
                  {tutorial.sections?.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      id={`section-${index}`}
                      className="mb-12"
                    >
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      <p className="mb-6">{section.content}</p>
                      
                      {section.image && (
                        <div className="my-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                          {/* Use a placeholder div with gradient background */}
                          <div className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                            <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Tutorial navigation */}
              <div className="mt-8 flex justify-between">
                <Button 
                  onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                  disabled={activeSection === 0}
                  className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
                >
                  Section précédente
                </Button>
                
                <Button 
                  onClick={() => setActiveSection(Math.min((tutorial.sections?.length || 1) - 1, activeSection + 1))}
                  disabled={activeSection === (tutorial.sections?.length || 1) - 1}
                  className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
                >
                  Section suivante
                </Button>
              </div>
              
              {/* Related tutorials placeholder */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Tutoriels associés</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tutorials.filter(t => t.id !== tutorialId).slice(0, 2).map((relatedTutorial) => (
                    <Link href={`/ressources/tutoriels/${relatedTutorial.id}`} key={relatedTutorial.id}>
                      <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 line-clamp-2">
                            {relatedTutorial.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {relatedTutorial.duration} min
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="container max-w-4xl relative z-10 text-center py-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <CheckCircle className="w-6 h-6" />
            <span className="text-lg font-medium">Progressez avec VynalDocs</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à mettre en pratique ce que vous avez appris ?
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Explorez d'autres tutoriels ou contactez notre équipe pour une démonstration personnalisée des fonctionnalités présentées.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-xl text-base font-medium min-w-[200px]">
                Demander une démo
              </Button>
            </Link>
            
            <Link href="/ressources/tutoriels">
              <Button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl text-base font-medium min-w-[200px]">
                Tous les tutoriels
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 