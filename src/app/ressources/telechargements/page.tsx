'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Download, FileText, Calendar, 
  ChevronLeft, CheckCircle, FileArchive, File, Clock, Tag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { optimizePerformance } from '@/lib/optimizations';

// Types pour les ressources téléchargeables
interface DownloadableResource {
  id: string;
  title: string;
  description: string;
  category: string;
  fileType: 'pdf' | 'doc' | 'xls' | 'zip' | 'img';
  fileSize: string; // en format lisible (ex: "2.5 MB")
  downloadCount: number;
  date: string;
  tags: string[];
  thumbnailUrl: string;
  downloadUrl: string;
  premium: boolean;
}

// Catégories de ressources
const categories = [
  { id: 'all', name: 'Toutes les ressources' },
  { id: 'templates', name: 'Modèles de documents' },
  { id: 'guides', name: 'Guides pratiques' },
  { id: 'checklists', name: 'Checklists' },
  { id: 'tools', name: 'Outils & Scripts' },
  { id: 'resources', name: 'Ressources complémentaires' }
];

// Données des ressources téléchargeables
const downloadableResources: DownloadableResource[] = [
  {
    id: 'modele-contrat-standard',
    title: 'Modèle de contrat standard',
    description: 'Un modèle de contrat juridique complet avec clauses personnalisables pour différents cas d\'usage professionnels.',
    category: 'templates',
    fileType: 'doc',
    fileSize: '285 KB',
    downloadCount: 1250,
    date: '2025-02-15',
    tags: ['contrat', 'juridique', 'modèle'],
    thumbnailUrl: '/images/downloads/contract-template.webp',
    downloadUrl: '/downloads/modele-contrat-standard.docx',
    premium: false
  },
  {
    id: 'checklist-conformite-rgpd',
    title: 'Checklist de conformité RGPD',
    description: 'Liste exhaustive des points à vérifier pour assurer la conformité de votre entreprise avec le Règlement Général sur la Protection des Données.',
    category: 'checklists',
    fileType: 'pdf',
    fileSize: '1.2 MB',
    downloadCount: 3450,
    date: '2025-03-10',
    tags: ['RGPD', 'conformité', 'données personnelles'],
    thumbnailUrl: '/images/downloads/gdpr-checklist.webp',
    downloadUrl: '/downloads/checklist-conformite-rgpd.pdf',
    premium: false
  },
  {
    id: 'guide-analyse-documents-ia',
    title: 'Guide d\'analyse de documents par IA',
    description: 'Guide complet sur l\'utilisation des fonctionnalités d\'intelligence artificielle de VynalDocs pour l\'analyse et l\'extraction de données documentaires.',
    category: 'guides',
    fileType: 'pdf',
    fileSize: '4.7 MB',
    downloadCount: 890,
    date: '2025-03-22',
    tags: ['IA', 'analyse', 'extraction', 'guide'],
    thumbnailUrl: '/images/downloads/ai-analysis-guide.webp',
    downloadUrl: '/downloads/guide-analyse-documents-ia.pdf',
    premium: true
  },
  {
    id: 'pack-modeles-rh',
    title: 'Pack de modèles RH complet',
    description: 'Ensemble complet de modèles pour la gestion des ressources humaines incluant contrats, avenants, et documents d\'onboarding.',
    category: 'templates',
    fileType: 'zip',
    fileSize: '8.5 MB',
    downloadCount: 750,
    date: '2025-04-05',
    tags: ['RH', 'modèles', 'onboarding', 'contrats'],
    thumbnailUrl: '/images/downloads/hr-templates.webp',
    downloadUrl: '/downloads/pack-modeles-rh.zip',
    premium: true
  },
  {
    id: 'script-integration-api',
    title: 'Script d\'intégration API VynalDocs',
    description: 'Script prêt à l\'emploi pour intégrer l\'API VynalDocs à vos systèmes existants, avec exemples pour plusieurs langages de programmation.',
    category: 'tools',
    fileType: 'zip',
    fileSize: '1.8 MB',
    downloadCount: 620,
    date: '2025-04-12',
    tags: ['API', 'intégration', 'développement'],
    thumbnailUrl: '/images/downloads/api-integration.webp',
    downloadUrl: '/downloads/script-integration-api.zip',
    premium: true
  },
  {
    id: 'livre-blanc-transformation-documentaire',
    title: 'Livre blanc : Transformation documentaire 2025',
    description: 'Livre blanc sur les tendances et meilleures pratiques en matière de gestion documentaire et transformation numérique pour 2025 et au-delà.',
    category: 'resources',
    fileType: 'pdf',
    fileSize: '6.3 MB',
    downloadCount: 1820,
    date: '2025-01-20',
    tags: ['livre blanc', 'tendances', 'transformation numérique'],
    thumbnailUrl: '/images/downloads/whitepaper.webp',
    downloadUrl: '/downloads/livre-blanc-transformation-documentaire.pdf',
    premium: false
  },
  {
    id: 'modeles-contrats-internationaux',
    title: 'Modèles de contrats internationaux',
    description: 'Collection de modèles de contrats adaptés aux réglementations internationales, couvrant plusieurs juridictions.',
    category: 'templates',
    fileType: 'zip',
    fileSize: '5.2 MB',
    downloadCount: 980,
    date: '2025-03-30',
    tags: ['international', 'contrats', 'juridique'],
    thumbnailUrl: '/images/downloads/international-contracts.webp',
    downloadUrl: '/downloads/modeles-contrats-internationaux.zip',
    premium: true
  },
  {
    id: 'guide-integration-crm',
    title: 'Guide d\'intégration avec votre CRM',
    description: 'Guide étape par étape pour intégrer VynalDocs avec les principales solutions CRM du marché.',
    category: 'guides',
    fileType: 'pdf',
    fileSize: '3.8 MB',
    downloadCount: 730,
    date: '2025-04-25',
    tags: ['CRM', 'intégration', 'guide'],
    thumbnailUrl: '/images/downloads/crm-integration.webp',
    downloadUrl: '/downloads/guide-integration-crm.pdf',
    premium: false
  }
];

// Icône en fonction du type de fichier
const getFileIcon = (fileType: string) => {
  switch (fileType) {
    case 'pdf':
      return <FileText className="w-full h-full text-red-500/80" />;
    case 'doc':
      return <FileText className="w-full h-full text-blue-500/80" />;
    case 'xls':
      return <FileText className="w-full h-full text-green-500/80" />;
    case 'zip':
      return <FileArchive className="w-full h-full text-yellow-500/80" />;
    default:
      return <File className="w-full h-full text-gray-500/80" />;
  }
};

export default function TelechargementPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  const [filteredResources, setFilteredResources] = useState<DownloadableResource[]>(downloadableResources);
  
  // Optimisation des performances au chargement
  useEffect(() => {
    optimizePerformance();
  }, []);
  
  // Filtrer les ressources en fonction des critères
  useEffect(() => {
    let filtered = downloadableResources;
    
    // Filtre par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(query) || 
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filtre par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(resource => resource.category === selectedCategory);
    }
    
    // Filtre par contenu premium
    if (showPremiumOnly) {
      filtered = filtered.filter(resource => resource.premium);
    }
    
    setFilteredResources(filtered);
  }, [searchQuery, selectedCategory, showPremiumOnly]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-40 right-[10%] w-[500px] h-[500px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-60 left-[5%] w-[400px] h-[400px] bg-violet-400/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-6xl relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center px-4 py-1.5 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full mb-6 mx-auto w-fit">
              <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 uppercase tracking-wider">
                Centre de Ressources
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Nos 
              <span className="relative ml-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 dark:from-blue-400 dark:via-purple-400 dark:to-violet-400">
                téléchargements
                <svg className="absolute -bottom-2 -left-1 w-[calc(100%+8px)] opacity-70" viewBox="0 0 120 8" preserveAspectRatio="none">
                  <path d="M0,5.5 C40,0 80,8 120,2.5" stroke="url(#gradient)" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Accédez à notre bibliothèque de ressources téléchargeables pour optimiser votre utilisation de VynalDocs
            </p>
            
            {/* Search box */}
            <div className="max-w-2xl mx-auto relative">
              <div className="flex items-center bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 rounded-xl overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-purple-500/50 focus-within:border-transparent">
                <Search className="ml-4 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Rechercher des ressources..." 
                  className="w-full py-3.5 px-3 border-none bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-2.5 px-5 m-1 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' 
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center">
              <button 
                onClick={() => setShowPremiumOnly(!showPremiumOnly)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  showPremiumOnly 
                    ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span className={`w-3 h-3 rounded-full ${showPremiumOnly ? 'bg-amber-500' : 'bg-gray-300 dark:bg-gray-600'}`}></span>
                Premium uniquement
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Downloads Grid */}
      <section className="py-16">
        <div className="container max-w-6xl">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800 h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 p-8 flex items-center justify-center">
                      {/* Badge Premium */}
                      {resource.premium && (
                        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                          Premium
                        </div>
                      )}
                      
                      {/* Icône du type de fichier */}
                      <div className="w-20 h-20 opacity-90">
                        {getFileIcon(resource.fileType)}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(resource.date).toLocaleDateString('fr-FR', { 
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {resource.downloadCount.toLocaleString()}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                        {resource.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">
                        {resource.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full flex items-center">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                          <span className={`uppercase ${
                            resource.fileType === 'pdf' ? 'text-red-500' : 
                            resource.fileType === 'doc' ? 'text-blue-500' : 
                            resource.fileType === 'xls' ? 'text-green-500' : 
                            resource.fileType === 'zip' ? 'text-yellow-500' : 'text-gray-500'
                          }`}>
                            {resource.fileType}
                          </span>
                          <span className="text-gray-400 dark:text-gray-500">•</span>
                          {resource.fileSize}
                        </span>
                        
                        <Link href={resource.downloadUrl}>
                          <Button className={`${
                            resource.premium
                              ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600'
                              : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                          } text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2`}>
                            <Download className="w-4 h-4" />
                            Télécharger
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aucune ressource trouvée</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Essayez de modifier vos critères de recherche ou consultez toutes nos ressources.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setShowPremiumOnly(false);
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              >
                Voir toutes les ressources
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Resources Navigation */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-800">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Explorez nos autres ressources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/ressources/tutoriels">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tutoriels</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Découvrez nos guides vidéo et tutoriels écrits pour maîtriser VynalDocs
                </p>
              </div>
            </Link>
            
            <Link href="/ressources/webinaires">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-purple-500 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Webinaires</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Participez à nos sessions en ligne et apprenez des experts VynalDocs
                </p>
              </div>
            </Link>
            
            <Link href="/ressources/documentation">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Consultez notre documentation technique complète et nos guides de référence
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="container max-w-4xl relative z-10 text-center py-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <CheckCircle className="w-6 h-6" />
            <span className="text-lg font-medium">Débloquez l'accès Premium</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin de ressources sur mesure ?
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Accédez à l'ensemble de notre bibliothèque premium et bénéficiez de ressources personnalisées pour votre organisation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/tarifs">
              <Button className="bg-white text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-xl text-base font-medium min-w-[200px]">
                Voir nos offres Premium
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl text-base font-medium min-w-[200px]">
                Contacter l'équipe
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 