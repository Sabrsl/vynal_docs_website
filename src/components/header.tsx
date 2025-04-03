"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronRight, Search, Sun, Moon } from "lucide-react";

const features = [
  {
    title: "Analyse IA",
    description: "Extraction intelligente des données de vos documents",
    href: "/fonctionnalites/analyse",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-500",
    hoverGradient: "from-cyan-600 to-blue-600",
  },
  {
    title: "Génération de documents",
    description: "Automation complète de vos contrats et formulaires",
    href: "/fonctionnalites/generation",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-500",
    hoverGradient: "from-violet-600 to-purple-600",
  },
  {
    title: "Formulaires intelligents",
    description: "Workflows dynamiques adaptés à votre secteur d'activité",
    href: "/fonctionnalites/formulaires",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: "from-fuchsia-500 to-pink-500",
    hoverGradient: "from-fuchsia-600 to-pink-600",
  },
  {
    title: "Modèles personnalisés",
    description: "Bibliothèque complète de templates juridiques et professionnels",
    href: "/fonctionnalites/modeles",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500",
    hoverGradient: "from-amber-600 to-orange-600",
  },
];

// Suggestions pour la recherche avec leurs routes associées
interface SearchSuggestion {
  text: string;
  route: string;
}

const searchSuggestions: SearchSuggestion[] = [
  { text: "Documentation API", route: "/documentation" },
  { text: "Modèles de contrats", route: "/ressources/telechargements" },
  { text: "Tutoriels vidéo", route: "/ressources/tutoriels" },
  { text: "Intégration CRM", route: "/fonctionnalites/integration" },
  { text: "Analyse de documents", route: "/fonctionnalites/analyse" },
  { text: "Extraction de données", route: "/fonctionnalites/extraction" },
  { text: "Modèles personnalisés", route: "/fonctionnalites/modeles" },
  { text: "RGPD", route: "/a-propos" },
  { text: "Automatisation", route: "/fonctionnalites" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Récupérer la position de défilement actuelle
      const scrollY = window.scrollY;
      
      // Définir un seuil pour éviter les déclenchements trop fréquents
      const threshold = 10;
      
      // Ne mettre à jour l'état que si la position de défilement a dépassé le seuil
      if (scrollY > threshold && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollY <= threshold && isScrolled) {
        setIsScrolled(false);
      }
    };

    // Mettre en place l'écouteur d'événement avec une option de passivité pour améliorer les performances
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Appel initial pour définir l'état correct au chargement
    handleScroll();
    
    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // Close mobile menu when path changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Fonction pour vérifier si un lien est actif
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Montage du composant - permet d'éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Rendu initial du bouton de thème pendant l'hydratation pour éviter le flash
  useEffect(() => {
    // Ajouter une classe au body pour indiquer que le thème est en cours de chargement
    document.body.classList.add('theme-loading');
    
    // Une fois monté, retirer la classe
    if (mounted) {
      document.body.classList.remove('theme-loading');
    }
  }, [mounted]);

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
    // Rediriger vers la route spécifique associée à la suggestion
    router.push(suggestion.route);
    setSearchOpen(false);
  };

  // Gérer la soumission du formulaire de recherche
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
        // Sinon, aller vers la page de recherche avec le terme en query
        router.push(`/ressources/search?q=${encodeURIComponent(searchQuery)}`);
      }
      setSearchOpen(false);
    }
  };

  // Fonction pour fermer le menu mobile
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  // Bouton de changement de thème pour desktop
  const renderThemeChanger = () => {
    if (!mounted) return (
      <div
        className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 cursor-default"
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <div className="animate-pulse h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>
      </div>
    );

    const isCurrentlyDark = theme === "dark";
    const IconComponent = isCurrentlyDark ? Sun : Moon;
    const iconColor = isCurrentlyDark ? "text-amber-500" : "text-blue-600";

    return (
      <button
        onClick={() => setTheme(isCurrentlyDark ? "light" : "dark")}
        className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 group overflow-hidden"
        aria-label={`Passer au mode ${isCurrentlyDark ? "clair" : "sombre"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-400/10 dark:to-indigo-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="sr-only">Changer de thème</span>
        <div className="relative w-5 h-5 flex items-center justify-center">
          <IconComponent className={`h-4 w-4 ${iconColor}`} />
        </div>
      </button>
    );
  };

  // Bouton de changement de thème pour mobile
  const renderMobileThemeChanger = () => {
    if (!mounted) return (
      <div 
        className="p-2 text-gray-600 dark:text-gray-300 cursor-default"
      >
        <div className="animate-pulse h-5 w-5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      </div>
    );

    const isCurrentlyDark = theme === "dark";
    const IconComponent = isCurrentlyDark ? Sun : Moon;
    const iconColor = isCurrentlyDark ? "text-amber-500" : "text-blue-600";

    return (
      <button 
        onClick={() => setTheme(isCurrentlyDark ? "light" : "dark")}
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        aria-label={`Passer au mode ${isCurrentlyDark ? "clair" : "sombre"}`}
      >
        <IconComponent className={`w-5 h-5 ${iconColor}`} />
      </button>
    );
  };

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/95 border-b border-gray-100/30 dark:border-gray-800/30 py-3 backdrop-blur-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]" 
          : "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md py-5"
      )}
      style={{ willChange: 'transform', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group z-20">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-violet-600 opacity-40 blur-lg group-hover:opacity-70 transition-opacity duration-300 transform group-hover:scale-110"></div>
          </div>
          <div className="relative">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-transparent bg-clip-text">
              VynalDocs
            </span>
            <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 group-hover:w-full transition-all duration-300"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className={cn(
                  "text-gray-800 dark:text-gray-200 font-medium text-sm",
                  (isLinkActive("/fonctionnalites") || features.some(f => isLinkActive(f.href))) && 
                    "bg-gray-100/80 dark:bg-gray-800/80 text-blue-600 dark:text-blue-400"
                )}
              >
                Fonctionnalités
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-6 w-[850px] flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Explorez nos outils</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 max-w-md">Découvrez comment VynalDocs peut transformer votre workflow documentaire</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature) => (
                      <Link
                        key={feature.title}
                        href={feature.href}
                        className="relative group flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      >
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                          <div className="relative z-10">{feature.icon}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-1 mb-1">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">{feature.title}</h4>
                            <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-transform" />
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{feature.description}</p>
                        </div>
                        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gray-200/50 dark:group-hover:border-gray-700/50 transition-colors duration-300"></div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <Link 
                      href="/fonctionnalites" 
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      Voir toutes les fonctionnalités
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/tarifs" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  isLinkActive("/tarifs") && "bg-gray-100/80 dark:bg-gray-800/80 text-blue-600 dark:text-blue-400"
                )}>
                  Tarifs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/ressources" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  isLinkActive("/ressources") && "bg-gray-100/80 dark:bg-gray-800/80 text-blue-600 dark:text-blue-400"
                )}>
                  Ressources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  isLinkActive("/contact") && "bg-gray-100/80 dark:bg-gray-800/80 text-blue-600 dark:text-blue-400"
                )}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <button 
            onClick={toggleSearch}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Rechercher"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <div className="h-5 w-px bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition duration-300"></div>
            <Button 
              className="relative bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white text-sm font-medium px-5 rounded-full shadow-md transition-all duration-200 border-0"
            >
              Télécharger
            </Button>
          </div>

          {/* Theme toggle button */}
          {renderThemeChanger()}
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center gap-4 lg:hidden">
          {renderMobileThemeChanger()}
          
          <button 
            onClick={toggleSearch}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Rechercher"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors z-[101]"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 shadow-md z-50"
          >
            <div className="container mx-auto px-4">
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Rechercher dans VynalDocs..."
                    className="flex-1 py-2 bg-transparent border-none outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                    autoComplete="off"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
                  />
                  <button 
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
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
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu - full screen overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 w-full h-full bg-white dark:bg-gray-900 z-40"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              overflow: 'auto',
              display: 'block',
              zIndex: 100
            }}
          >
            <div className="pt-24 container mx-auto px-4 py-8 flex flex-col gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Fonctionnalités
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <Link
                      key={feature.title}
                      href={feature.href}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-lg transition-colors",
                        isLinkActive(feature.href)
                          ? `bg-gradient-to-r from-${feature.gradient.split(' ')[1]}/10 to-${feature.gradient.split(' ')[3]}/10 dark:from-${feature.gradient.split(' ')[1]}/20 dark:to-${feature.gradient.split(' ')[3]}/20`
                          : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      )}
                      onClick={closeMobileMenu}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className={cn(
                          "text-base font-medium mb-1",
                          isLinkActive(feature.href) 
                            ? "text-blue-600 dark:text-blue-400" 
                            : "text-gray-900 dark:text-white"
                        )}>
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                      {isLinkActive(feature.href) && (
                        <div className="ml-auto flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Pages
                </h3>
                <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { name: 'Tarifs', href: '/tarifs' },
                    { name: 'Ressources', href: '/ressources' },
                    { name: 'À propos', href: '/a-propos' },
                    { name: 'Blog', href: '/blog' },
                    { name: 'Contact', href: '/contact' },
                    { name: 'FAQ', href: '/faq' },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "py-3 px-4 rounded-lg flex items-center justify-between transition-colors",
                        isLinkActive(item.href) 
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium" 
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400"
                      )}
                      onClick={closeMobileMenu}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className={cn(
                        "w-4 h-4",
                        isLinkActive(item.href) 
                          ? "text-blue-500 dark:text-blue-400" 
                          : "text-gray-400"
                      )} />
                    </Link>
                  ))}
                </nav>
              </div>
              
              {/* Theme toggle section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Apparence
                </h3>
                {mounted ? (
                  <button
                    onClick={() => {
                      const newTheme = theme === "dark" ? "light" : "dark";
                      setTheme(newTheme);
                    }}
                    className="w-full py-3 px-4 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 dark:from-blue-400 dark:to-indigo-500 flex items-center justify-center">
                        {theme === "dark" ? (
                          <Sun className="w-4 h-4 text-white" />
                        ) : (
                          <Moon className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span>Passer au mode {theme === "dark" ? "clair" : "sombre"}</span>
                    </div>
                    <div className="relative w-10 h-5 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors">
                      <div className={`absolute top-0.5 ${theme === "dark" ? "left-0.5" : "left-[calc(100%-1.25rem)]"} w-4 h-4 bg-white dark:bg-gray-300 rounded-full transition-all duration-200`}></div>
                    </div>
                  </button>
                ) : (
                  <div className="w-full py-3 px-4 rounded-lg text-gray-700 dark:text-gray-200 flex items-center">
                    <div className="animate-pulse h-8 w-full bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-gray-100 dark:border-gray-800/50">
                <Button 
                  size="lg"
                  className="w-full justify-center bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white text-base font-medium shadow-md border-0"
                  onClick={closeMobileMenu}
                >
                  Télécharger gratuitement sur PC
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}