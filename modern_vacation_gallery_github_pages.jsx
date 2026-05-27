export default function VacationGallery() {
  const photos = [
    {
      title: 'Sonnenuntergang',
      location: 'Italien',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Berge',
      location: 'Österreich',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Stadtlichter',
      location: 'Tokyo',
      image:
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Meerblick',
      location: 'Kroatien',
      image:
        'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Waldweg',
      location: 'Schweden',
      image:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Roadtrip',
      location: 'USA',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Travel Gallery</h1>
            <p className="text-sm text-zinc-400">Meine Urlaubsfotos</p>
          </div>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10">
            Neue Fotos
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Galerie
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Erinnerungen aus aller Welt
            </h2>
          </div>

          <p className="max-w-md text-zinc-400">
            Minimalistische Galerie zum Teilen deiner schönsten Reisebilder.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-xl font-semibold">{photo.title}</h3>
                  <p className="text-sm text-zinc-300">{photo.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-zinc-500">
        © 2026 Travel Gallery
      </footer>
    </div>
  );
}
