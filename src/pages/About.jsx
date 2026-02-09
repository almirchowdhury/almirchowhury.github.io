import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { PageTransition } from '../components/layout/PageTransition';
import { Container } from '../components/ui/Container';

export function About() {
  return (
    <Layout showRings>
      <PageTransition>
        <Container className="py-24 md:py-32">
          <motion.div
            className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="surface-card p-8 text-center lg:text-left">
              <motion.img
                src="/images/about.png"
                alt="Almir Chowdhury"
                className="mx-auto h-auto w-40 rounded-2xl lg:mx-0"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="mt-6 space-y-3">
                <p className="eyebrow">Profile</p>
                <h2 className="font-display text-2xl text-ink">
                  Builder, designer, developer.
                </h2>
                <p className="text-sm text-muted">
                  Computer Science at Syracuse University, focused on shipping products
                  that feel clean, fast, and useful.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="chip">Full-Stack</span>
                  <span className="chip chip-accent">AWS</span>
                  <span className="chip chip-gold">MongoDB</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="eyebrow mb-2">About</p>
                <h1 className="font-display text-3xl text-ink md:text-4xl">
                  A maker at heart with a product mindset.
                </h1>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-muted">
                <p>
                  I got my start by tinkering with devices and building custom app mods.
                  That curiosity turned into a habit: prototype quickly, learn fast, and
                  refine until it feels right. I built my first PC at 12 and have been
                  deep in code and product ever since.
                </p>

                <p>
                  Today I focus on full-stack systems and polished interfaces. I enjoy
                  taking projects from concept to launch, whether that means building
                  an AI-powered apparel platform or experimenting with immersive VR
                  experiences.
                </p>

                <p>
                  Outside of engineering, I'm into lifting, music, and projects that mix
                  creativity with utility. I aim to turn bold ideas into ventures that
                  feel meaningful and fun.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="surface-card-soft p-5">
                  <p className="eyebrow mb-2">Strengths</p>
                  <p className="font-display text-lg text-ink">Systems + UX</p>
                  <p className="text-sm text-muted">
                    Bridging infrastructure with human-centered design.
                  </p>
                </div>
                <div className="surface-card-soft p-5">
                  <p className="eyebrow mb-2">Values</p>
                  <p className="font-display text-lg text-ink">Clarity + Craft</p>
                  <p className="text-sm text-muted">
                    Clean interfaces, clear intent, and dependable execution.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </PageTransition>
    </Layout>
  );
}
