export const revalidate = 3600; // Revalidation toutes les heures

export const metadata = {
  other: {
    'Cache-Control': 'public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400',
  },
};

export async function generateStaticParams() {
  // Pré-rendu de ces pages à la compilation
  return [
    { page: 'documentation' },
    { page: 'ressources' },
    { page: 'fonctionnalites' },
    { page: 'tarifs' },
    { page: 'a-propos' },
    { page: 'contact' },
  ];
} 