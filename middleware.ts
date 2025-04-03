import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Optimisation des en-têtes pour les ressources statiques
  if (
    request.nextUrl.pathname.match(/\.(jpg|jpeg|gif|png|svg|ico|webp|mp4|webm|woff|woff2|ttf|otf|css|js)$/)
  ) {
    // Cache de longue durée pour les ressources statiques
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }

  // Activer gzip et brotli si supporté
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Content-Type-Options', 'nosniff');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 