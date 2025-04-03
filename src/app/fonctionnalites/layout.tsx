import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "VynalDocs | Fonctionnalités",
  description: "Découvrez les fonctionnalités de VynalDocs pour l'analyse et la génération automatique de documents juridiques et administratifs.",
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
} 