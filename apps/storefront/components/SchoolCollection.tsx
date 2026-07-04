import Image from "next/image";
import { accentHex } from "@/data/categories";

export default function SchoolCollection() {
  const accent = accentHex.green;

  return (
    <section id="rentree-scolaire" className="mx-auto max-w-container px-6 py-20 md:px-10">
      <div className="grid gap-8 overflow-hidden bg-sand md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full md:aspect-auto">
          <Image
            src="https://picsum.photos/seed/yedei-rentree-scolaire/1200/1000"
            alt="Uniformes et tenues scolaires YEDEI"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-8 md:p-12">
          <span
            className="text-xs uppercase tracking-widest2"
            style={{ color: accent }}
          >
            Collection saisonnière
          </span>
          <h2 className="mt-4 font-display text-3xl italic leading-tight text-ink sm:text-4xl">
            Rentrée scolaire
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
            Uniformes, polos et tenues scolaires pensés pour durer toute
            l&apos;année — matières résistantes, finitions soignées, tailles
            évolutives.
          </p>
          <div className="mt-8">
            
              href="/enfants/tenues-scolaires"
              className="inline-block px-7 py-3.5 text-sm uppercase tracking-widest2 text-paper transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              Voir la collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
