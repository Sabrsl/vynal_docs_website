// Script pour supprimer les imports et utilisations de Header et Footer dans les pages
// Cela évitera le doublon avec ceux définis dans layout.tsx

const fs = require('fs');
const path = require('path');

// Liste des fichiers pages qui pourraient contenir Header et Footer
const pageFiles = [
  'src/app/page.tsx',
  'src/app/ressources/page.tsx',
  'src/app/documentation/page.tsx',
  'src/app/a-propos/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/fonctionnalites/page.tsx',
  'src/app/tarifs/pricing-client.tsx',
  'src/app/privacy/page.tsx',
  'src/app/politique-de-confidentialite/page.tsx',
  'src/app/cookies/page.tsx',
  'src/app/cgv/page.tsx'
];

// Parcourir tous les fichiers
pageFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    console.log(`Traitement du fichier: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Supprimer les imports de Header et Footer
    content = content.replace(/import\s+{\s*Header\s*}\s+from\s+["']@\/components\/header["'];?/g, '');
    content = content.replace(/import\s+{\s*Footer\s*}\s+from\s+["']@\/components\/footer["'];?/g, '');
    
    // Supprimer les balises <Header /> et <Footer />
    content = content.replace(/<Header\s*\/>/g, '');
    content = content.replace(/<Footer\s*\/>/g, '');
    
    // Nettoyer les lignes vides consécutives
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Enregistrer le fichier modifié
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fichier modifié: ${filePath}`);
  } else {
    console.log(`Fichier non trouvé: ${filePath}`);
  }
});

console.log('Opération terminée avec succès!'); 