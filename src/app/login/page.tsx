import { login, signup } from "./actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Header from "@/components/Header"

export default function LoginPage() {
  return (
    <div className="dark flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <Header />
      <Card className="w-full max-w-md border-none bg-[#f0af4c]/90 shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-[#ededed]">Connexion</CardTitle>
          <CardDescription className="text-center text-[#ededed]/80">
            Entrez vos identifiants pour accéder à votre compte
          </CardDescription>
        </CardHeader>
        <form className="space-y-4">
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#ededed]">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="exemple@email.com"
                required
                className="w-full border-[#ededed]/20 bg-[#ededed]/10 text-[#ededed] placeholder:text-[#ededed]/50 focus:border-[#ededed]/30 focus:ring-[#ededed]/20"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-[#ededed]">
                  Mot de passe
                </Label>
                <a href="#" className="text-sm font-medium text-[#ededed] hover:text-white hover:underline">
                  Mot de passe oublié?
                </a>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="w-full border-[#ededed]/20 bg-[#ededed]/10 text-[#ededed] focus:border-[#ededed]/30 focus:ring-[#ededed]/20"
              />
            </div>
            <div className="flex flex-col space-y-3 pt-4">
              <Button formAction={login} className="w-full bg-[#ededed] text-[#f0af4c] hover:bg-white">
                Se connecter
              </Button>
              <Button
                formAction={signup}
                variant="outline"
                className="w-full border-[#ededed] text-[#ededed] hover:bg-[#ededed]/10"
              >
                Créer un compte
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  )
}

