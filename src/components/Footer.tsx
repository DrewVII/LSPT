"use client"

import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="w-full py-8 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold tracking-wider mb-4">LE SPORT POUR TOUS!</h3>
            <p className="text-sm text-foreground/70 max-w-md">
              La nouvelle alternative pour un monde sans limite. Rejoignez notre communauté et découvrez un nouvel
              univers sportif.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h4 className="text-sm font-semibold mb-3">Liens</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#goals" className="text-foreground/70 hover:text-foreground transition-colors">
                    Goals
                  </Link>
                </li>
                <li>
                  <Link href="#nous" className="text-foreground/70 hover:text-foreground transition-colors">
                    Nous
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-foreground/70 hover:text-foreground transition-colors">
                    Connexion
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70 mb-4 md:mb-0">CY Mentality © - 2025</p>

          <div className="flex items-center space-x-4">

            <button
              onClick={scrollToTop}
              className="ml-4 p-2 rounded-full border border-foreground/10 text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Retour en haut"
            >
              UP
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

