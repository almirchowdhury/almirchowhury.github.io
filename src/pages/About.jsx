import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { PageTransition } from '../components/layout/PageTransition';
import { Container } from '../components/ui/Container';

export function About() {
  return (
    <Layout showRings>
      <PageTransition>
        <Container className="min-h-screen flex items-center justify-center py-24 md:py-32">
          <motion.div
            className="text-center max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img
              src="/images/about.png"
              alt="Almir Chowdhury"
              className="w-32 md:w-40 h-auto mx-auto mb-8 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p className="font-sans text-white/90">
                Hi! I'm Almir Chowdhury, a computer science major at Syracuse University, but more importantly, I'm a builder at heart. My love for tech started when I stumbled into jailbreaking and creating custom app mods. By 12, I built my first computer, and ever since, I've been deep in coding, creating, and figuring out how to bring wild ideas to life.
              </p>

              <p className="font-sans text-white/90">
                I thrive on crafting efficient, eye-catching solutions, like scaling systems with AWS and MongoDB or building platforms like Generative Apparel, an AI-powered custom apparel design tool that makes creativity accessible to everyone. I'm also a proud member of Delta Tau Delta, where I've grown as a leader and built connections with an incredible group of people.
              </p>

              <p className="font-sans text-white/90">
                Beyond the keyboard, I'm all about lifting, good music, and experimenting with projects that blend creativity and functionality. The goal? To turn bold ideas into ventures that matter, and have a ton of fun doing it. Let's make something amazing together.
              </p>
            </div>
          </motion.div>
        </Container>
      </PageTransition>
    </Layout>
  );
}
