import { Layout } from '../components/layout/Layout';
import { PageTransition } from '../components/layout/PageTransition';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { ProjectCard } from '../components/projects/ProjectCard';

const projects = [
  {
    title: 'Generative Apparel',
    subtitle: 'AI-powered apparel design platform',
    media: { type: 'gif', src: '/images/GAdemo.gif', alt: 'Generative Apparel Demo' },
    description: "I designed and developed GenerativeApparel.ai, an AI-powered custom apparel platform that lets users create unique designs in seconds. From building the frontend experience to integrating backend systems with AWS, MongoDB, and Stripe, I crafted a seamless tool that combines creativity and technology.",
    tags: ['React', 'AWS', 'MongoDB', 'Stripe', 'AI'],
  },
  {
    title: 'Virtual Reality CubeField Endless Runner',
    subtitle: 'Immersive VR arcade experience',
    media: { type: 'video', src: '/videos/cubefieldvr.mp4' },
    description: 'A fast-paced VR endless runner inspired by classic Cube Field mechanics. Built in Unity for Oculus Quest 2, the experience challenges reflexes with dynamic obstacles and responsive collision design.',
    tags: ['Unity', 'Oculus Quest 2', 'XR', 'Gameplay'],
  },
  {
    title: 'Glowing Linear Gradient Playbar Modification to the Open Source "The Boring Notch" App',
    subtitle: 'Open-source UI enhancement',
    media: { type: 'video', src: '/videos/notch.mp4' },
    description: 'I customized an open-source macOS app by redesigning the media playbar into a glowing linear gradient. The result: a more expressive, polished interface that elevates a small but visible detail.',
    tags: ['macOS', 'Open Source', 'UI Polish'],
  },
  {
    title: 'WLED: Phone-Controlled fully addressable WS2812B LED with ESP32 Microcontroller',
    subtitle: 'Connected hardware build',
    media: { type: 'video', src: '/videos/leds.mp4' },
    description: 'Built a WiFi-controllable LED system using WLED and an ESP32 microcontroller. The project blends soldering, microcontroller programming, and IoT control to deliver a responsive, customizable lighting setup.',
    tags: ['ESP32', 'WLED', 'IoT', 'Hardware'],
  },
  {
    title: 'Dynamically Responsive Chromatic Audio-Interactive Wallpaper Engine Effect',
    subtitle: 'Audio-reactive visual system',
    media: { type: 'video', src: '/videos/hue.mp4' },
    description: 'An audio-reactive wallpaper built with Wallpaper Engine and SceneScript that shifts hues based on real-time input. It turns sound into a living, immersive desktop environment.',
    tags: ['Wallpaper Engine', 'SceneScript', 'Audio Reactive'],
  },
  {
    title: 'Pytesseract OCR Text Extraction Snipping Tool',
    subtitle: 'Productivity tool',
    media: { type: 'video', src: '/videos/pytesseract.mp4' },
    description: "A Python-based OCR snipping tool using Pytesseract for fast text extraction. It's a daily driver for pulling editable text from images, documents, and research screenshots.",
    tags: ['Python', 'OCR', 'Productivity'],
  },
];

export function Projects() {
  return (
    <Layout>
      <PageTransition>
        <div className="py-24 md:py-32">
          <Container>
            <div className="mb-12 space-y-4 text-center">
              <p className="eyebrow">Selected Work</p>
              <h1 className="font-display text-3xl text-ink md:text-4xl">
                Projects that blend engineering and craft.
              </h1>
              <p className="mx-auto max-w-2xl text-sm text-muted md:text-base">
                A mix of AI products, immersive experiences, and hands-on builds. Each
                project reflects a focus on clarity, performance, and user impact.
              </p>
              <a
                href="/Almir-Chowdhury-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-accent hover:text-accent"
              >
                View Resume (PDF)
              </a>
            </div>

            <Section className="space-y-8 md:space-y-10">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} flip={index % 2 === 1} />
              ))}
            </Section>
          </Container>
        </div>
      </PageTransition>
    </Layout>
  );
}
