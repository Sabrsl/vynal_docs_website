'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  Search, FileText, Video, Download, Tag, 
  Book, Calendar, ExternalLink, ChevronLeft, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Type pour les suggestions
interface SearchSuggestion {
  text: string;
  route: string;
}

// Types pour les résultats de recherche
interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'documentation' | 'tutoriel' | 'ressource' | 'téléchargement' | 'page';
  url: string;
  date?: string;
  tags?: string[];
  thumbnailUrl?: string;
}

// Suggestions pour la recherche avec leurs routes associées
const searchSuggestions: SearchSuggestion[] = [
  { text: "Documentation API", route: "/documentation" },
  { text: "Modèles de contrats", route: "/ressources/telechargements" },
  { text: "Tutoriels vidéo", route: "/ressources/tutoriels" },
  { text: "Intégration CRM", route: "/fonctionnalites/integration" },
  { text: "Analyse de documents", route: "/fonctionnalites/analyse" },
  { text: "Extraction de données", route: "/fonctionnalites/extraction" },
  { text: "Modèles personnalisés", route: "/fonctionnalites/modeles" },
  { text: "RGPD", route: "/a-propos" },
  { text: "Tarification", route: "/tarifs" },
  { text: "Automatisation", route: "/fonctionnalites" }
];

// Données mockées pour la démo
const allContent: SearchResult[] = [
  // Documentation
  {
    id: 'doc-1',
    title: 'Guide de démarrage rapide',
    description: 'Apprenez les bases de VynalDocs en moins de 10 minutes',
    type: 'documentation',
    url: '/documentation#demarrage',
    tags: ['débutant', 'guide', 'installation']
  },
  {
    id: 'doc-2',
    title: 'Configuration avancée',
    description: 'Personnalisez VynalDocs pour répondre à vos besoins spécifiques',
    type: 'documentation',
    url: '/documentation#configuration',
    tags: ['avancé', 'configuration', 'personnalisation']
  },
  {
    id: 'doc-3',
    title: 'Référence API',
    description: 'Documentation complète de l\'API pour les intégrations',
    type: 'documentation',
    url: '/documentation#api',
    tags: ['api', 'développeur', 'intégration']
  },
  
  // Tutoriels
  {
    id: 'tutoriel-1',
    title: 'Analyse automatique de documents',
    description: 'Comment utiliser l\'IA pour extraire des informations de vos documents',
    type: 'tutoriel',
    url: '/ressources/tutoriels/analyse-documents',
    date: '2025-03-15',
    tags: ['IA', 'analyse', 'extraction']
  },
  {
    id: 'tutoriel-2',
    title: 'Créer des modèles personnalisés',
    description: 'Apprenez à créer et personnaliser vos propres modèles de documents',
    type: 'tutoriel',
    url: '/ressources/tutoriels/creer-modeles',
    date: '2025-03-20',
    tags: ['modèles', 'personnalisation', 'templates']
  },
  
  // Téléchargements
  {
    id: 'download-1',
    title: 'Modèle de contrat standard',
    description: 'Un modèle de contrat juridique complet avec clauses personnalisables',
    type: 'téléchargement',
    url: '/ressources/telechargements#modele-contrat-standard',
    tags: ['contrat', 'juridique', 'modèle']
  },
  {
    id: 'download-2',
    title: 'Checklist de conformité RGPD',
    description: 'Liste exhaustive des points à vérifier pour assurer la conformité RGPD',
    type: 'téléchargement',
    url: '/ressources/telechargements#checklist-conformite-rgpd',
    tags: ['RGPD', 'conformité', 'données personnelles']
  },
  
  // Pages
  {
    id: 'page-1',
    title: 'Fonctionnalités',
    description: 'Découvrez toutes les fonctionnalités de VynalDocs',
    type: 'page',
    url: '/fonctionnalites'
  },
  {
    id: 'page-2',
    title: 'Tarifs',
    description: 'Consultez nos offres et plans tarifaires',
    type: 'page',
    url: '/tarifs'
  },
  {
    id: 'page-3',
    title: 'À propos',
    description: 'En savoir plus sur VynalDocs et notre équipe',
    type: 'page',
    url: '/a-propos'
  }
];

// Icône en fonction du type de résultat
const getResultIcon = (type: string) => {
  switch (type) {
    case 'documentation':
      return <Book className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
    case 'tutoriel':
      return <Video className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
    case 'téléchargement':
      return <Download className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
    case 'page':
      return <FileText className="w-5 h-5 text-gray-500 dark:text-gray-400" />;
    default:
      return <FileText className="w-5 h-5 text-gray-500 dark:text-gray-400" />;
  }
};

// Filtrer les résultats en fonction de la requête
const filterResults = (query: string): SearchResult[] => {
  // Si la requête est vide, retourner tous les résultats
  if (!query) return allContent;
  
  const lowercaseQuery = query.toLowerCase();
  
  return allContent.filter(item => 
    item.title.toLowerCase().includes(lowercaseQuery) || 
    item.description.toLowerCase().includes(lowercaseQuery) ||
    (item.tags && item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
  );
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  // Filtrer les suggestions en fonction de la saisie
  useEffect(() => {
    if (searchQuery.length >= 1) {
      const filtered = searchSuggestions.filter(
        suggestion => suggestion.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 5)); // Limiter à 5 suggestions
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchQuery]);
  
  // Gérer la sélection d'une suggestion
  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchQuery(suggestion.text);
    setShowSuggestions(false);
    // Rediriger vers la route spécifique
    router.push(suggestion.route);
  };
  
  // Gérer la soumission du formulaire
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Si la recherche correspond exactement à une suggestion, aller vers sa route
      const exactMatch = searchSuggestions.find(
        suggestion => suggestion.text.toLowerCase() === searchQuery.toLowerCase()
      );
      
      if (exactMatch) {
        router.push(exactMatch.route);
      } else {
        // Sinon, rester sur la page de recherche mais mettre à jour les résultats
        router.push(`/ressources/search?q=${encodeURIComponent(searchQuery)}`);
        setSearchResults(filterResults(searchQuery));
      }
    }
  };
  
  useEffect(() => {
    // Simuler un délai de chargement
    setLoading(true);
    const timer = setTimeout(() => {
      setSearchResults(filterResults(searchQuery || initialQuery));
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [initialQuery]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-40 right-[10%] w-[500px] h-[500px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-60 left-[5%] w-[400px] h-[400px] bg-indigo-400/5 dark:bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-5xl relative">
          <div className="flex items-center mb-6 text-sm">
            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              Accueil
            </Link>
            <ChevronLeft className="mx-2 w-4 h-4 text-gray-400" />
            <span className="text-gray-800 dark:text-gray-200 font-medium">
              Résultats de recherche
            </span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6">
            Résultats pour "{searchQuery}"
          </h1>
          
          {/* Search box */}
          <div className="max-w-3xl mb-10 relative">
            <form action="/ressources/search" method="GET" 
                  className="flex items-center bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 rounded-xl overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-transparent"
                  onSubmit={handleSearchSubmit}>
              <Search className="ml-4 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                name="q"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher dans VynalDocs..." 
                className="w-full py-3.5 px-3 border-none bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2.5 px-5 m-1 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                Rechercher
              </button>
            </form>
            
            {/* Suggestions */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden z-50">
                <ul className="max-h-60 overflow-y-auto">
                  {filteredSuggestions.map((suggestion, index) => (
                    <li 
                      key={index}
                      className="px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center text-gray-800 dark:text-gray-200"
                      onClick={() => handleSuggestionClick(suggestion)}
                      onMouseDown={(e) => e.preventDefault()} // Empêche le onBlur de se déclencher avant le onClick
                    >
                      <Search className="mr-2 w-4 h-4 text-blue-500" />
                      <span>{suggestion.text}</span>
                    </li>
                  ))}
                  <li className="px-4 py-2.5 bg-gray-50 dark:bg-gray-700/60 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 font-medium">
                    Appuyez sur Entrée pour rechercher
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Results section */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 p-8">
            <div className="flex justify-between items-center mb-8">
              <div className="font-medium">
                {loading ? (
                  <span className="text-gray-500 dark:text-gray-400">Recherche en cours...</span>
                ) : (
                  <span>{searchResults.length} résultat{searchResults.length !== 1 ? 's' : ''} trouvé{searchResults.length !== 1 ? 's' : ''}</span>
                )}
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Trié par pertinence
              </div>
            </div>
            
            {loading ? (
              <div className="py-16 flex justify-center">
                <div className="animate-pulse flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 mb-4"></div>
                  <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                  <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {searchResults.map((result) => (
                  <div key={result.id} className="py-6 first:pt-0 last:pb-0">
                    <Link 
                      href={result.url} 
                      className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors rounded-lg p-4 -m-4 block"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(result.type)}
                        <span className="text-xs font-medium px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full capitalize text-gray-600 dark:text-gray-300">
                          {result.type}
                        </span>
                        {result.date && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(result.date).toLocaleDateString('fr-FR', { 
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {result.title}
                        <ExternalLink className="inline-block ml-2 w-4 h-4 text-gray-400" />
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {result.description}
                      </p>
                      
                      {result.tags && result.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {result.tags.map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full flex items-center">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {result.url}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Aucun résultat trouvé</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                  Nous n'avons trouvé aucun résultat correspondant à votre recherche. Essayez avec d'autres termes ou explorez nos ressources populaires.
                </p>
                <Link href="/ressources">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    Explorer les ressources
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Popular Searches */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Recherches populaires</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Documentation API", "Modèles de contrats", "Tutoriels vidéo", "Intégration CRM",
              "Analyse de documents", "Extraction de données", "Modèles personnalisés", "RGPD",
              "Tarification", "Automatisation"
            ].map((term, idx) => (
              <Link 
                key={idx} 
                href={`/ressources/search?q=${encodeURIComponent(term)}`}
                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 