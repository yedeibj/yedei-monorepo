import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YEDEI Admin",
  description: "Espace d'administration YEDEI — gestion produits, commandes, catégories.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
