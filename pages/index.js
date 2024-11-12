import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import {
  ArrowRight,
  Shield,
  LineChart,
  Lock,
  Wallet,
  RefreshCw,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20de%20Perfil-07-smnYqEC3M68Y64DNU3uxirBPF8SpFg.png"
            alt="UVAz Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="sr-only">UVAz</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
            Benefits
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#use-cases">
            Use Cases
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Escape Inflation, embrace stability.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover our first Flacoin: An Inflation-Protected and Stable Currency.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started with UVAz
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Explore Inflation Protection
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose UVAz?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  An innovative inflation-protected stablecoin pegged initially to Argentina&apos;s UVA index and backed by inflation-indexed
                  bonds, making it a reliable asset tied to Argentina&apos;s economic reality.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden md:h-[200px] pt-3">
                <CardContent>
                  <Shield className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">Inflation Hedge</h3>
                  <p className="text-gray-500">
                    Shield your finances from rising inflation with an asset pegged to Argentina&apos;s trusted inflation index.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden md:h-[200px] pt-3">
                <CardContent>
                  <Lock className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">Bond-Backed Security</h3>
                  <p className="text-gray-500">
                    Sovereign bonds provide collateral, ensuring value stability.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden md:h-[200px] pt-3">
                <CardContent>
                  <LineChart className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">Local Relevance</h3>
                  <p className="text-gray-500">
                    Designed for Argentines, by Argentines, to reflect and adapt to Argentina&apos;s economic landscape.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A Simple Process for Complex Protection</h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">1</div>
                  <h3 className="text-xl font-bold">Backed by Bonds</h3>
                  <p className="text-gray-500">Our tokens are securely backed by Argentine-indexed bonds.</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">2</div>
                  <h3 className="text-xl font-bold">Stability</h3>
                  <p className="text-gray-500">Keep your purchasing power, forget about inflation.</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">3</div>
                  <h3 className="text-xl font-bold">Easily Exchangeable</h3>
                  <p className="text-gray-500">Access a range of exchanges and marketplaces for buying and selling UVAz.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Reliable, Predictable, Secure</h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <Card className="relative overflow-hidden md:h-[200px] pt-3">
                  <CardContent>
                    <LineChart className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold">Predictable Value</h3>
                    <p className="text-gray-500">
                      Predicted price during 30 days, making it resistant to volatility.
                    </p>
                  </CardContent>
                </Card>
                <Card className="relative overflow-hidden md:h-[200px] pt-3">
                  <CardContent>
                    <CheckCircle className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold">Transparency</h3>
                    <p className="text-gray-500">
                      Our whitepaper and ongoing audits ensure our commitment to full transparency and reliability.
                    </p>
                  </CardContent>
                </Card>
                <Card className="relative overflow-hidden md:h-[200px] pt-3">
                  <CardContent>
                    <Wallet className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold">Broad Utility</h3>
                    <p className="text-gray-500">Ideal for savings, payments, and everyday financial stability.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Financial Solutions Made for You</h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <Card className="relative overflow-hidden md:h-[150px] pt-6">
                  <CardContent>
                    <h3 className="text-xl font-bold">Everyday Expenses</h3>
                    <p className="text-gray-500">
                      Use UVAz for everyday expenses while protecting your wealth from inflation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="relative overflow-hidden md:h-[150px] pt-6">
                  <CardContent>
                    <h3 className="text-xl font-bold">Long-Term Savings</h3>
                    <p className="text-gray-500">
                      For saving and storing value reliably, UVAz provides a hedge against economic uncertainty.
                    </p>
                  </CardContent>
                </Card>
                <Card className="relative overflow-hidden md:h-[150px] pt-6">
                  <CardContent>
                    <h3 className="text-xl font-bold">Investment Security</h3>
                    <p className="text-gray-500">
                      Bond backing offers a stable foundation, perfect for safer investment growth.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Trust and Security */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A Proven System with Transparent Backing</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Regular audits and auditories underscore UVAz&apos;s foundation of trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Protect Your Wealth with UVAz Today</h2>
                <p className="mx-auto max-w-[600px] md:text-xl">
                  Join thousands of Argentines who trust UVAz for their financial stability.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Input
                    className="bg-white/90 placeholder:text-gray-500"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-black hover:bg-gray-900 text-white">Subscribe</Button>
                </form>
                <p className="text-sm text-white/90">
                  By subscribing, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms &amp; Conditions
                  </Link>
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row items-center justify-center mt-8">
                <Button className="bg-black hover:bg-gray-900 text-white">
                  Mint UVAz Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Read Whitepaper
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">About</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-primary" href="https://medium.com/@mmorcos/the-denationalisation-of-money-is-here-b53cd0831488" target="_blank">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="https://medium.com/@mmorcos/lets-escape-inflation-bd30883c201d" target="_blank">
                    Our story
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="https://t.me/matiztabilize" target="_blank">
                    Join us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-primary" href="https://ztabilize.gitbook.io/whitepaper" target="_blank">
                    Whitepaper
                  </Link>
                </li>
                {/* <li>
                  <Link className="hover:text-primary" href="#">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="#">
                    FAQs
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Community</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-primary" href="https://x.com/ztabilize" target="_blank">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="https://t.me/ztabilize" target="_blank">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="https://t.me/uvatoken" target="_blank">
                    Telegram
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="space-y-3">
              <h4 className="text-lg font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-primary" href="#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="#">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href="#">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row">
            <div className="flex items-center gap-4">
              <Link href="#">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%20de%20Perfil-07-smnYqEC3M68Y64DNU3uxirBPF8SpFg.png"
                  alt="UVAz Logo"
                  width={32}
                  height={32}
                />
              </Link>
              <p className="text-sm text-gray-400">© 2024 UVAz. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <Link className="hover:text-primary" href="#">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link className="hover:text-primary" href="#">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.1-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
