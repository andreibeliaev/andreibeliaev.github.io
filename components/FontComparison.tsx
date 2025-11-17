import {
  IBM_Plex_Mono,
  Space_Mono,
  Roboto_Mono,
  Inconsolata,
  Fira_Code,
  Source_Code_Pro,
  Ubuntu_Mono,
  Courier_Prime,
  Anonymous_Pro,
  Overpass_Mono,
  JetBrains_Mono,
  Martian_Mono,
  Red_Hat_Mono,
  Azeret_Mono,
  DM_Mono,
  Major_Mono_Display,
  Cutive_Mono,
  Share_Tech_Mono,
  PT_Mono,
  Cousine,
  Oxygen_Mono,
  // Sans-serif fonts
  Inter,
  Geist,
  Roboto,
  Open_Sans,
  Lato,
  Montserrat,
  Work_Sans,
  Manrope,
  DM_Sans,
  Space_Grotesk,
  Plus_Jakarta_Sans,
  Outfit,
  Sora,
  Bricolage_Grotesque,
  Poppins,
  Nunito,
  Raleway,
  IBM_Plex_Sans
} from "next/font/google";

// Monospace fonts
const ibmPlexMono = IBM_Plex_Mono({ weight: ["300", "400"], subsets: ["latin"] });
const spaceMono = Space_Mono({ weight: ["400"], subsets: ["latin"] });
const robotoMono = Roboto_Mono({ weight: ["300", "400"], subsets: ["latin"] });
const inconsolata = Inconsolata({ weight: ["300", "400"], subsets: ["latin"] });
const firaCode = Fira_Code({ weight: ["300", "400"], subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ weight: ["300", "400"], subsets: ["latin"] });
const ubuntuMono = Ubuntu_Mono({ weight: ["400"], subsets: ["latin"] });
const courierPrime = Courier_Prime({ weight: ["400"], subsets: ["latin"] });
const anonymousPro = Anonymous_Pro({ weight: ["400"], subsets: ["latin"] });
const overpassMono = Overpass_Mono({ weight: ["300", "400"], subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ weight: ["300", "400"], subsets: ["latin"] });
const martianMono = Martian_Mono({ weight: ["300", "400"], subsets: ["latin"] });
const redHatMono = Red_Hat_Mono({ weight: ["300", "400"], subsets: ["latin"] });
const azeretMono = Azeret_Mono({ weight: ["300", "400"], subsets: ["latin"] });
const dmMono = DM_Mono({ weight: ["300", "400"], subsets: ["latin"] });
const majorMonoDisplay = Major_Mono_Display({ weight: ["400"], subsets: ["latin"] });
const cutiveMono = Cutive_Mono({ weight: ["400"], subsets: ["latin"] });
const shareTechMono = Share_Tech_Mono({ weight: ["400"], subsets: ["latin"] });
const ptMono = PT_Mono({ weight: ["400"], subsets: ["latin"] });
const cousine = Cousine({ weight: ["400"], subsets: ["latin"] });
const oxygenMono = Oxygen_Mono({ weight: ["400"], subsets: ["latin"] });

// Sans-serif fonts
const inter = Inter({ weight: ["300", "400"], subsets: ["latin"] });
const geist = Geist({ weight: ["300", "400"], subsets: ["latin"] });
const roboto = Roboto({ weight: ["300", "400"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["300", "400"], subsets: ["latin"] });
const lato = Lato({ weight: ["300", "400"], subsets: ["latin"] });
const montserrat = Montserrat({ weight: ["300", "400"], subsets: ["latin"] });
const workSans = Work_Sans({ weight: ["300", "400"], subsets: ["latin"] });
const manrope = Manrope({ weight: ["300", "400"], subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["300", "400"], subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ weight: ["300", "400"], subsets: ["latin"] });
const plusJakarta = Plus_Jakarta_Sans({ weight: ["300", "400"], subsets: ["latin"] });
const outfit = Outfit({ weight: ["300", "400"], subsets: ["latin"] });
const sora = Sora({ weight: ["300", "400"], subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ weight: ["300", "400"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["300", "400"], subsets: ["latin"] });
const nunito = Nunito({ weight: ["300", "400"], subsets: ["latin"] });
const raleway = Raleway({ weight: ["300", "400"], subsets: ["latin"] });
const ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400"], subsets: ["latin"] });

export default function FontComparison() {
  const sansSerifFonts = [
    { name: "Inter", font: inter, note: "Most popular, used by GitHub, Notion", tier: "Premium" },
    { name: "Geist", font: geist, note: "Vercel's modern geometric, current font", tier: "Premium" },
    { name: "Manrope", font: manrope, note: "Geometric, modern, open apertures", tier: "Premium" },
    { name: "DM Sans", font: dmSans, note: "Minimal, refined, low-contrast", tier: "Premium" },
    { name: "Plus Jakarta Sans", font: plusJakarta, note: "Indonesian design, geometric beauty", tier: "Premium" },
    { name: "IBM Plex Sans", font: ibmPlexSans, note: "IBM's humanist sans, professional", tier: "Premium" },
    { name: "Roboto", font: roboto, note: "Google's default, used everywhere on Android", tier: "Classic" },
    { name: "Open Sans", font: openSans, note: "Most popular web font, highly readable", tier: "Classic" },
    { name: "Lato", font: lato, note: "Warm, stable, widely used", tier: "Classic" },
    { name: "Montserrat", font: montserrat, note: "Geometric, urban, inspired by Buenos Aires", tier: "Classic" },
    { name: "Work Sans", font: workSans, note: "Clean, neutral, optimized for screens", tier: "Classic" },
    { name: "Poppins", font: poppins, note: "Geometric, friendly, widely used", tier: "Classic" },
    { name: "Raleway", font: raleway, note: "Elegant, thin, sophisticated", tier: "Classic" },
    { name: "Nunito", font: nunito, note: "Rounded, friendly, warm", tier: "Classic" },
    { name: "Space Grotesk", font: spaceGrotesk, note: "Quirky, distinctive, Space Age", tier: "Distinctive" },
    { name: "Bricolage Grotesque", font: bricolage, note: "Quirky, playful, Swiss roots", tier: "Distinctive" },
    { name: "Outfit", font: outfit, note: "Rounded, friendly, modern", tier: "Modern" },
    { name: "Sora", font: sora, note: "Clean, technical, Japanese-inspired", tier: "Modern" },
  ];

  const monoFonts = [
    { name: "IBM Plex Mono", font: ibmPlexMono, note: "Clean, professional, IBM design", tier: "Premium" },
    { name: "Martian Mono", font: martianMono, note: "Modern, variable, cosmic vibe", tier: "Premium" },
    { name: "Source Code Pro", font: sourceCodePro, note: "Adobe design, elegant", tier: "Premium" },
    { name: "Red Hat Mono", font: redHatMono, note: "Corporate, clean, Red Hat design", tier: "Premium" },
    { name: "Azeret Mono", font: azeretMono, note: "Geometric, modern, Swiss-inspired", tier: "Premium" },
    { name: "DM Mono", font: dmMono, note: "Minimal, refined, sophisticated", tier: "Premium" },
    { name: "Space Mono", font: spaceMono, note: "Geometric, retro-futuristic", tier: "Distinctive" },
    { name: "Roboto Mono", font: robotoMono, note: "Modern, widely used by Google", tier: "Classic" },
    { name: "Inconsolata", font: inconsolata, note: "Classic coding font, very readable", tier: "Classic" },
    { name: "Fira Code", font: firaCode, note: "Mozilla's monospace, popular with devs", tier: "Classic" },
    { name: "JetBrains Mono", font: jetbrainsMono, note: "Developer favorite, ligatures", tier: "Classic" },
    { name: "Overpass Mono", font: overpassMono, note: "Highway-inspired, geometric", tier: "Distinctive" },
    { name: "Major Mono Display", font: majorMonoDisplay, note: "Ultra-stylized, bold, artistic", tier: "Artistic" },
    { name: "Ubuntu Mono", font: ubuntuMono, note: "Friendly, humanist", tier: "Classic" },
    { name: "Courier Prime", font: courierPrime, note: "Modern Courier, screenplay feel", tier: "Traditional" },
    { name: "Share Tech Mono", font: shareTechMono, note: "Futuristic, tech-inspired", tier: "Distinctive" },
    { name: "Cutive Mono", font: cutiveMono, note: "Typewriter style, vintage", tier: "Traditional" },
    { name: "PT Mono", font: ptMono, note: "Russian design, technical", tier: "Classic" },
    { name: "Oxygen Mono", font: oxygenMono, note: "Clean, balanced, KDE design", tier: "Classic" },
    { name: "Cousine", font: cousine, note: "Liberation Mono alternative", tier: "Classic" },
    { name: "Anonymous Pro", font: anonymousPro, note: "Highly readable, clean", tier: "Classic" },
  ];

  const FontSection = ({ title, subtitle, fonts }: { title: string; subtitle: string; fonts: typeof sansSerifFonts }) => (
    <div className="mb-32">
      <h2 className="text-3xl font-light mb-2 text-black">{title}</h2>
      <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
      <p className="text-xs text-gray-400 mb-16">Premium = Best for minimalist sites • Distinctive = Unique character • Classic = Widely used</p>

      <div className="space-y-16">
        {fonts.map((item, index) => (
          <div key={index}>
            <div className="flex items-baseline gap-4 mb-4">
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                {item.name}
              </p>
              <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded">
                {item.tier}
              </span>
              <p className="text-xs text-gray-300">
                {item.note}
              </p>
            </div>
            <h1 className={`${item.font.className} text-5xl md:text-6xl font-light tracking-tight text-black`}>
              Andrei Beliaev
            </h1>
            <p className={`${item.font.className} text-base text-gray-600 mt-3`}>
              Full-stack developer and builder of things.
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light mb-2 text-black">Font Comparison</h1>
        <p className="text-sm text-gray-500 mb-20">39 fonts total • All shown with font-light (300 weight) where available</p>

        <FontSection
          title="Sans-Serif Fonts"
          subtitle="18 clean, modern fonts • Best for readability and minimal aesthetics"
          fonts={sansSerifFonts}
        />

        <FontSection
          title="Monospace Fonts"
          subtitle="21 technical fonts • Perfect for developer/tech aesthetic"
          fonts={monoFonts}
        />
      </div>
    </div>
  );
}
