import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { PageTransition } from '../components/layout/PageTransition';
import { AnimatedButton } from '../components/animations/AnimatedButton';
import { Container } from '../components/ui/Container';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Home() {
  const resumeHref = '/Almir-Chowdhury-Resume.pdf';

  return (
    <Layout showRings>
      <PageTransition>
        <div className="pb-24 pt-8 md:pt-12">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                <motion.p variants={itemVariants} className="eyebrow">
                  Computer Science - Syracuse University
                </motion.p>

                <motion.h1
                  variants={itemVariants}
                  className="font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl"
                >
                  Almir Chowdhury
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="max-w-xl text-lg text-muted md:text-xl"
                >
                  I build full-stack products that blend thoughtful design with reliable
                  engineering. From AI-driven tools to immersive experiences, I focus on
                  delivering work that feels polished, fast, and human.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-4"
                >
                  <AnimatedButton to="/projects">View Projects</AnimatedButton>
                  <AnimatedButton to="/contact" variant="secondary">
                    Contact
                  </AnimatedButton>
                  <AnimatedButton to={resumeHref} external variant="secondary">
                    Resume
                  </AnimatedButton>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-3"
                >
                  <span className="chip">Full-Stack</span>
                  <span className="chip chip-accent">AI + Product</span>
                  <span className="chip chip-gold">AWS - MongoDB</span>
                </motion.div>
              </motion.div>

              <motion.div
                className="surface-card p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="space-y-6">
                  <div>
                    <p className="eyebrow mb-2">Featured</p>
                    <h2 className="font-display text-2xl text-ink">
                      Generative Apparel
                    </h2>
                    <p className="mt-3 text-sm text-muted">
                      An AI-powered platform for custom apparel design, built end-to-end
                      with a focus on speed, clarity, and creative freedom.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="surface-card-soft p-4">
                      <p className="eyebrow mb-2">Focus</p>
                      <p className="font-display text-lg text-ink">
                        Product UX
                      </p>
                      <p className="text-sm text-muted">
                        Clean interfaces and fast flows.
                      </p>
                    </div>
                    <div className="surface-card-soft p-4">
                      <p className="eyebrow mb-2">Stack</p>
                      <p className="font-display text-lg text-ink">
                        React + AWS
                      </p>
                      <p className="text-sm text-muted">
                        Scalable infrastructure and data.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 grid gap-6 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  title: 'Product-minded engineering',
                  text: 'I bridge design and development so products feel cohesive and intentional.',
                },
                {
                  title: 'Rapid prototyping',
                  text: 'From idea to usable prototype quickly, with polish baked in.',
                },
                {
                  title: 'Systems that scale',
                  text: 'Cloud-backed, performance-conscious builds that grow with the users.',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="surface-card-soft p-6"
                >
                  <h3 className="font-display text-lg text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </div>
      </PageTransition>
    </Layout>
  );
}
