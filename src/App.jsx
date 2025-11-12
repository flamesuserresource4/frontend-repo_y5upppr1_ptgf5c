import React from 'react'
import Spline from '@splinetool/react-spline'
import { Flame, Car, Shield, Sparkles, Clock } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-white font-semibold tracking-wide">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-red-500 to-orange-500 text-white"><Flame size={18} /></span>
          <span className="text-lg">Hotweels</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="#about" className="hover:text-white transition">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#buy" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow ring-1 ring-white/10 hover:from-red-500 hover:to-orange-500 transition-colors">Shop Now</a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b0c]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Sparkles size={14} className="text-orange-400" />
            New launch: Hotweels X — Performance reimagined
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Feel the speed. Own the street.
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            A sleek, futuristic silhouette with a glowing heart. Hotweels brings premium performance and a bold attitude to your collection.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#buy" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-900/30 ring-1 ring-white/10 hover:from-red-500 hover:to-orange-500 transition-colors">
              Preorder Now
            </a>
            <a href="#gallery" className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/20 transition-colors ring-1 ring-white/10">
              Explore Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-white/20 transition">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white">
        <Icon size={20} />
      </div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,80,60,0.15),transparent_60%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-sm uppercase tracking-widest text-orange-400/90">Performance</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Built to thrill</h2>
            <p className="mt-2 max-w-xl text-white/70">Precision-crafted details and high-end materials deliver a premium, collectible experience.</p>
          </div>
          <a href="#buy" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors ring-1 ring-white/10">Get Yours</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature icon={Car} title="Aerodynamic Design" desc="Low profile, razor-sharp lines, and a stance that screams speed." />
          <Feature icon={Shield} title="Premium Build" desc="Die-cast body with high-fidelity finishes and glow accents." />
          <Feature icon={Sparkles} title="Signature Glow" desc="Red interior lighting for an unmistakable night-drive vibe." />
          <Feature icon={Clock} title="Limited Release" desc="Numbered edition engineered for true enthusiasts." />
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="relative bg-gradient-to-b from-black to-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-orange-400/90">Gallery</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Sleek from every angle</h2>
          <p className="mt-2 max-w-xl text-white/70">A glimpse at the Hotweels X aesthetic—dark, refined, and daring.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-white/10" />
          <div className="aspect-[1/1] rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-white/10" />
          <div className="aspect-[1/1] rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-white/10" />
          <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-white/10" />
          <div className="aspect-[1/1] rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-white/10" />
          <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="buy" className="bg-[linear-gradient(180deg,#0b0b0c,rgba(11,11,12,0.9))] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 sm:p-12 text-center">
          <h3 className="text-3xl font-bold text-white">Bring Hotweels X home</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Preorders now open for the limited run. Secure your edition and be among the first to feel the future of speed.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-900/30 ring-1 ring-white/10 hover:from-red-500 hover:to-orange-500 transition-colors">
              Reserve for $49
            </button>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/20 transition-colors ring-1 ring-white/10">
              View Specs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white/80">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-red-500 to-orange-500 text-white"><Flame size={18} /></span>
          <span className="font-semibold">Hotweels</span>
        </div>
        <p className="text-sm text-white/50">© {new Date().getFullYear()} Hotweels. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
