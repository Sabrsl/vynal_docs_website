'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Search, ChevronRight, Clock, Filter, PlayCircle, BookOpen,
  Calendar, ArrowUpRight, FileText, Download, Tag, CheckCircle
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
}

// Catégories de tutoriels
const categories = [
  { id: 'all', name: 'Tous les tutoriels' },
  { id: 'document-analysis', name: 'Analyse de documents' },
  { id: 'templates', name: 'Modèles de documents' },
  { id: 'automation', name: 'Automatisation' },
  { id: 'integration', name: 'Intégration' },
  { id: 'ai-features', name: 'Fonctionnalités IA' }
];

// Données de tutoriels
const tutorials: Tutorial[] = [
  {
    id: 'tutorial-1',
    title: 'Analyser automatiquement des documents juridiques',
    description: 'Apprenez à extraire automatiquement les informations clés de vos documents juridiques en utilisant notre moteur d\'analyse IA.',
    category: 'document-analysis',
    level: 'débutant',
    duration: 15,
    thumbnail: '/images/tutorials/doc-analysis.webp',
    date: '2025-03-15',
    tags: ['IA', 'analyse', 'extraction', 'documents juridiques'],
    videoUrl: '/tutorials/analyse-documents',
  },
  {
    id: 'tutorial-2',
    title: 'Créer des modèles de documents personnalisés',
    description: 'Découvrez comment créer et personnaliser vos propres modèles de documents pour accélérer la génération de contrats.',
    category: 'templates',
    level: 'intermédiaire',
    duration: 25,
    thumbnail: '/images/tutorials/custom-templates.webp',
    date: '2025-03-20',
    tags: ['modèles', 'personnalisation', 'contrats'],
    docUrl: '/tutorials/creer-modeles'
  },
  {
    id: 'tutorial-3',
    title: 'Automatiser les workflows documentaires',
    description: 'Ce tutoriel vous montre comment configurer des workflows automatisés pour vos processus documentaires.',
    category: 'automation',
    level: 'avancé',
    duration: 35,
    thumbnail: '/images/tutorials/workflow-automation.webp',
    date: '2025-03-25',
    tags: ['automatisation', 'workflow', 'processus'],
    videoUrl: '/tutorials/automatisation-workflow'
  },
  {
    id: 'tutorial-4',
    title: 'Intégration avec votre CRM',
    description: 'Apprenez à intégrer VynalDocs avec votre système CRM existant pour une gestion documentaire unifiée.',
    category: 'integration',
    level: 'intermédiaire',
    duration: 20,
    thumbnail: '/images/tutorials/crm-integration.webp',
    date: '2025-04-01',
    tags: ['CRM', 'intégration', 'API'],
    docUrl: '/tutorials/integration-crm'
  },
  {
    id: 'tutorial-5',
    title: 'Utiliser l\'IA pour générer des résumés de documents',
    description: 'Découvrez comment utiliser nos fonctionnalités d\'IA pour générer automatiquement des résumés pertinents de vos documents volumineux.',
    category: 'ai-features',
    level: 'débutant',
    duration: 12,
    thumbnail: '/images/tutorials/ai-summaries.webp',
    date: '2025-04-05',
    tags: ['IA', 'résumés', 'génération'],
    videoUrl: '/tutorials/resumes-ia'
  },
  {
    id: 'tutorial-6',
    title: 'Configurer des règles de validation de documents',
    description: 'Apprenez à définir des règles de validation personnalisées pour garantir la conformité de vos documents.',
    category: 'automation',
    level: 'avancé',
    duration: 30,
    thumbnail: '/images/tutorials/validation-rules.webp',
    date: '2025-04-10',
    tags: ['validation', 'règles', 'conformité'],
    docUrl: '/tutorials/regles-validation'
  }
];

export default function TutorielsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [filteredTutorials, setFilteredTutorials] = useState<Tutorial[]>(tutorials);
  
  // Optimisation des performances au chargement
  useEffect(() => {
    optimizePerformance();
  }, []);
  
  // Filtrer les tutoriels en fonction des critères
  useEffect(() => {
    let filtered = tutorials;
    
    // Filtre par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(tutorial => 
        tutorial.title.toLowerCase().includes(query) || 
        tutorial.description.toLowerCase().includes(query) ||
        tutorial.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filtre par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(tutorial => tutorial.category === selectedCategory);
    }
    
    // Filtre par niveau
    if (selectedLevel) {
      filtered = filtered.filter(tutorial => tutorial.level === selectedLevel);
    }
    
    setFilteredTutorials(filtered);
  }, [searchQuery, selectedCategory, selectedLevel]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-40 right-[10%] w-[500px] h-[500px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-60 left-[5%] w-[400px] h-[400px] bg-violet-400/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-6xl relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center px-4 py-1.5 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full mb-6 mx-auto w-fit">
              <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 uppercase tracking-wider">
                Centre d'Apprentissage
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Nos 
              <span className="relative ml-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                tutoriels
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
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Explorez nos guides pas à pas pour maîtriser toutes les fonctionnalités de VynalDocs
            </p>
            
            {/* Search box */}
            <div className="max-w-2xl mx-auto relative">
              <div className="flex items-center bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 rounded-xl overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-transparent">
                <Search className="ml-4 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Rechercher des tutoriels..." 
                  className="w-full py-3.5 px-3 border-none bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2.5 px-5 m-1 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-6 bg-gray-50 dark:bg-gray-900/80 border-y border-gray-200 dark:border-gray-800">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="font-medium text-gray-700 dark:text-gray-300">Filtres :</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((category) => (
                <button 
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 dark:text-gray-400">Niveau :</span>
              {['débutant', 'intermédiaire', 'avancé'].map((level) => (
                <button 
                  key={level}
                  onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedLevel === level 
                      ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' 
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Tutorials Grid */}
      <section className="py-16">
        <div className="container max-w-6xl">
          {filteredTutorials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials.map((tutorial) => (
                <motion.div
                  key={tutorial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href={`/ressources/tutoriels/${tutorial.id}`} className="block group">
                    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800 h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                            {tutorial.videoUrl ? (
                              <PlayCircle className="w-8 h-8 text-white" />
                            ) : (
                              <BookOpen className="w-8 h-8 text-white" />
                            )}
                          </div>
                        </div>
                        <div className="absolute top-3 right-3 z-10">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                            tutorial.level === 'débutant' 
                              ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                              : tutorial.level === 'intermédiaire'
                                ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' 
                                : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                          }`}>
                            {tutorial.level.charAt(0).toUpperCase() + tutorial.level.slice(1)}
                          </span>
                        </div>
                        
                        <div className="w-full h-full bg-gray-200 dark:bg-gray-800">
                          {/* Image placeholder - In a real app, use Image component with proper src */}
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                            {tutorial.videoUrl ? (
                              <PlayCircle className="w-10 h-10 text-gray-400 dark:text-gray-500" />
                            ) : (
                              <FileText className="w-10 h-10 text-gray-400 dark:text-gray-500" />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(tutorial.date).toLocaleDateString('fr-FR', { 
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {tutorial.duration} min
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {tutorial.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">
                          {tutorial.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tutorial.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full flex items-center">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center">
                            {tutorial.videoUrl ? 'Tutoriel Vidéo' : 'Guide Écrit'}
                          </span>
                          <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aucun tutoriel trouvé</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Essayez de modifier vos critères de recherche ou consultez tous nos tutoriels.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedLevel(null);
                }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
              >
                Voir tous les tutoriels
              </Button>
            </div>
          )}
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
            <span className="text-lg font-medium">Accédez à tous nos contenus premium</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Découvrez notre bibliothèque complète de ressources ou contactez notre équipe pour une formation personnalisée.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-xl text-base font-medium min-w-[180px]">
                Demander une formation
              </Button>
            </Link>
            
            <Link href="/ressources">
              <Button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl text-base font-medium min-w-[180px]">
                Toutes les ressources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 