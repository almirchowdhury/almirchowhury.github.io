import { Layout } from '../components/layout/Layout';
import { PageTransition } from '../components/layout/PageTransition';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { ProjectCard } from '../components/projects/ProjectCard';
import { GradientLoader } from '../components/animations/GradientLoader';

const projects = [
  {
    media: { type: 'image', src: '/images/GA.png', alt: 'Generative Apparel Logo' },
  },
  {
    media: { type: 'gif', src: '/images/GAdemo.gif', alt: 'Generative Apparel Demo' },
    description: "I designed and developed GenerativeApparel.ai, an AI-powered custom apparel platform that lets users create unique designs in seconds. From building the frontend experience to integrating backend systems with AWS, MongoDB, and Stripe, I crafted a seamless tool that combines creativity and technology. This project reflects my expertise in full-stack development and my passion for bringing innovative ideas to life."
  },
  {
    title: 'Virtual Reality CubeField Endless Runner',
    media: { type: 'video', src: '/videos/cubefieldvr.mp4' },
    description: 'Experience the thrill of dodging obstacles in my VR endless runner game, inspired by classic Cube Field mechanics and built with Unity for the Oculus Quest 2. Navigate a dynamic environment where randomly spawning cubes challenge your reflexes, with collision detection bringing the action to life. Immerse yourself in a fast-paced world where every move counts!'
  },
  {
    title: 'Glowing Linear Gradient Playbar Modification to the Open Source "The Boring Notch" App',
    media: { type: 'video', src: '/videos/notch.mp4' },
    description: 'Dissatisfied with the plain white playbar, I decided to take matters into my own hands. Taking advantage of the open-source Boring Notch app for MacOS, I modified the code to create a custom linear glowing gradient bar, giving it my own unique spin!'
  },
  {
    title: 'WLED: Phone-Controlled fully addressable WS2812B LED with ESP32 Microcontroller',
    media: { type: 'video', src: '/videos/leds.mp4' },
    description: 'In a challenging venture, I developed a WiFi-controllable LED system using the WLED software and ESP32 microcontroller. Starting with an Arduino and the FastLED library, I quickly learned the limitations and sought a more efficient solution. This led me to discover ESP32, a game-changer that enabled real-time setting changes via mobile devices. Through this project, I honed my skills in soldering, Arduino programming, and IoT. The result? A visually stunning LED display and a testament to my problem-solving abilities and knack for innovation.'
  },
  {
    title: 'Dynamically Responsive Chromatic Audio-Interactive Wallpaper Engine Effect',
    media: { type: 'video', src: '/videos/hue.mp4' },
    description: 'For this project, I utilized Wallpaper Engine and its unique SceneScript language to create an audio-interactive wallpaper effect that dynamically changes hues based on the input audio. With SceneScript, I designed a reactive visual representation of audio streams, creating an immersive and engaging desktop experience. This project showcases my ability to learn and apply new scripting languages, and my commitment to creating innovative, user-friendly interactive experiences.'
  },
  {
    title: 'Pytesseract OCR Text Extraction Snipping Tool',
    media: { type: 'video', src: '/videos/pytesseract.mp4' },
    description: "Introducing my Python-based OCR Snipping Tool crafted ingeniously using Pytesseract. This isn't just a demonstration of my capabilities, but a genuine solution I personally employ. Whether I'm engrossed in research and need to swiftly extract textual data from dense documents, or when I encounter non-selectable text in web images or infographics, this tool acts as my digital ally. With a simple snip, it instantly translates visual content into editable text. This is how I combine innovation with utility, developing tools that solve real-world challenges."
  },
];

export function Projects() {
  return (
    <Layout>
      <PageTransition>
        <div className="py-24 md:py-32">
          <Container>
            <div className="text-center mb-12">
              <a
                href="/Almir-Chowdhury-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neon-cyan transition-colors font-sans underline"
              >
                View My Resume (PDF)
              </a>
            </div>

            <Section>
              {projects.map((project, index) => (
                <div key={index}>
                  <ProjectCard {...project} />
                  {index < projects.length - 1 && index === 3 && (
                    <div className="my-16">
                      <GradientLoader />
                    </div>
                  )}
                </div>
              ))}
            </Section>
          </Container>
        </div>
      </PageTransition>
    </Layout>
  );
}
