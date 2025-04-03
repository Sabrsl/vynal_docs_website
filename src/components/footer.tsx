"use client";

import Link from "next/link";
import { useState } from "react";
import { SVGProps } from "react";
import { ChevronRight, Send } from "lucide-react";

const footerLinks = [
  {
    title: "Produit",
    links: [
      { name: "Fonctionnalités", href: "/fonctionnalites" },
      { name: "Tarifs", href: "/tarifs" },
      { name: "Témoignages", href: "/#temoignages" },
      { name: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Guides", href: "/guides" },
      { name: "Webinaires", href: "/webinaires" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { name: "À propos", href: "/a-propos" },
      { name: "Contact", href: "/contact" },
      { name: "Carrières", href: "/carrieres" },
      { name: "Mentions légales", href: "/mentions-legales" },
    ],
  },
];

const socialLinks = [
  { 
    name: "Twitter", 
    href: "#", 
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    gradient: "from-blue-500 to-blue-400"
  },
  { 
    name: "LinkedIn", 
    href: "#", 
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    gradient: "from-blue-600 to-sky-400"
  },
  { 
    name: "GitHub", 
    href: "#", 
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    gradient: "from-violet-600 to-indigo-400"
  }
];

export function Footer() {
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Merci de vous être abonné avec l'email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient and mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 opacity-95"></div>
      <div className="absolute inset-0 bg-[url('/mesh-grid.png')] bg-center opacity-5"></div>
      
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-12 w-full overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full text-gray-50 dark:text-gray-900 fill-current translate-y-1/2" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      <div className="relative border-t border-gray-200/80 dark:border-gray-800/30">
        <div className="container px-4 mx-auto max-w-7xl">
          {/* Top section with logo, description, and newsletter */}
          <div className="pt-24 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 opacity-90"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">V</span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-violet-600 opacity-40 blur-lg group-hover:opacity-70 transition-opacity duration-300 transform group-hover:scale-110"></div>
                  </div>
                  <div className="relative">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-transparent bg-clip-text">
                      VynalDocs
                    </span>
                    <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 group-hover:w-full transition-all duration-300"></div>
                  </div>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-base max-w-md leading-relaxed">
                  Logiciel intelligent d'analyse et de génération automatique de documents pour les professionnels. Transformez vos données en documents exploitables en quelques clics.
                </p>
                
                <div className="mb-10">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Restez informé</h4>
                  <form onSubmit={handleSubscribe} className="relative">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-grow group">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Votre email professionnel"
                          required
                          className="w-full py-3.5 pl-5 pr-12 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition duration-200"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 group-focus-within:w-full transition-all duration-300"></div>
                      </div>
                      <button
                        type="submit"
                        className="relative group py-3.5 px-6 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 overflow-hidden"
                      >
                        <div className="relative flex items-center justify-center gap-2 z-10">
                          <span>S'abonner</span>
                          <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      </button>
                    </div>
                    <p className="mt-2.5 text-xs text-gray-500 dark:text-gray-400">
                      Recevez nos dernières actualités et mises à jour. Pas de spam.
                    </p>
                  </form>
                </div>
                
                <div className="flex space-x-4">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 shadow-sm transition-all duration-200 hover:shadow-md"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-transparent transition-colors duration-200 z-10 bg-gradient-to-r group-hover:bg-clip-text" aria-hidden="true" />
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                  {footerLinks.map((group) => (
                    <div key={group.title} className="space-y-5">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide relative inline-block">
                        {group.title}
                        <div className="absolute left-0 bottom-0 w-1/2 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
                      </h3>
                      <ul className="space-y-4">
                        {group.links.map((link) => (
                          <li key={link.name}>
                            <Link
                              href={link.href}
                              className="group flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200"
                            >
                              <ChevronRight className="w-3.5 h-3.5 mr-1.5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                              <span>{link.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 pt-8 border-t border-gray-200/50 dark:border-gray-800/30">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span>Tous les systèmes opérationnels</span>
                    </div>
                    <div className="sm:ml-auto flex items-center gap-4">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Disponible bientot sur :</span>
                      <div className="flex space-x-3">
                        <div className="flex items-center px-2.5 py-1.5 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700/50 shadow-sm">
                          <svg className="h-4 w-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"/>
                          </svg>
                          <span className="ml-1.5 text-xs font-medium text-gray-600 dark:text-gray-300">iOS</span>
                        </div>
                        <div className="flex items-center px-2.5 py-1.5 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700/50 shadow-sm">
                          <svg className="h-4 w-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.523 15.3414c-.5511.3323-1.1022.6653-1.6527.9982-.5508.3335-1.1049.666-1.6446.9978-.3523.216-.7046.4328-1.0572.648-2.0174 1.2083-3.9888 2.4128-5.6561 3.5855-.7037.4918-1.3566.9719-1.9588 1.4394-.1499.1159-.3035.2338-.4482.343-.5089.3986-1.037.8135-1.5561 1.2224l-.096.0748c-.0912.0708-.1816.1434-.2731.2134-.0317.0247-.0633.0495-.0952.0742-.1159.0905-.2306.1815-.3465.2718-.1159.0904-.2317.1808-.3465.2712-.0545.0422-.1091.0843-.1638.1264-.1126.0867-.2251.1729-.3376.2583-.051.0394-.1023.0783-.1531.1174-.1047.0803-.2092.1603-.314.2404-.056.0429-.1115.0859-.1673.1288-.0845.0646-.1689.1293-.2534.1939-.0921.0703-.1841.1407-.2763.2107-.015.0116-.03.0231-.0451.0347-.2462.1882-.4944.3728-.7362.5528-.0762.0567-.1514.1133-.2276.1698-.0441.033-.088.0661-.1321.099-.0517.0386-.1034.0766-.1551.1144-.5264.3906-1.0241.7301-1.4244.9974-.4271.2868-.8595.5823-1.2824.8792-3.1828 2.235-1.8722.9417-1.2471.6258h.0006c.2794.185.5539.3737.8259.5658.7256.5123 1.4053.9992 2.1216 1.1166.4377.0721.8819.0153 1.3208-.1518 4.5835-1.7465 9.2022-3.4846 13.8324-5.2241 1.6023-.6043 3.2047-1.2081 4.8071-1.8119l.1224-.0464c.0186-.0067.0375-.0138.0563-.0205.1143-.043.2286-.086.343-.129 1.3947-.5264 2.7553-1.0343 4.202-1.6295l.0677-.0257c.2523-.0967.5048-.1934.7572-.2912.4921-.1903.9843-.3806 1.4764-.5709.0522-.0199.104-.0407.1565-.0605.0997-.0381.198-.0761.2977-.1142.07-.0267.1407-.0534.2109-.0809.1214-.0461.2421-.0927.3634-.1388.3655-.1397.7323-.2795 1.0862-.4089.0637-.0239.127-.0485.1907-.0723.1258-.047.2515-.0946.377-.1416.0565-.0211.1131-.0422.1696-.0633.1252-.0466.25-.093.3748-.1391.6598-.2458 1.3144-.4872 1.9619-.7241l.0253-.0093c.1724-.0636.3454-.1274.5177-.191"/>
                          </svg>
                          <span className="ml-1.5 text-xs font-medium text-gray-600 dark:text-gray-300">Android</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section with copyright and legal links */}
          <div className="border-t border-gray-200/50 dark:border-gray-800/30 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 sm:mb-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  &copy; {new Date().getFullYear()} VynalDocs. Tous droits réservés.
                </p>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>
                <a href="mailto:contact@vynaldocs.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  contact@vynaldocs.com
                </a>
              </div>
              
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                <Link 
                  href="/politique-de-confidentialite" 
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Politique de confidentialité
                </Link>
                <Link 
                  href="/cgv" 
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Conditions d'utilisation
                </Link>
                <Link 
                  href="/cookies" 
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Gestion des cookies
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-32 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-10 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </footer>
  );
}