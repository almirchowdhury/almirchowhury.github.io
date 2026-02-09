import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { PageTransition } from '../components/layout/PageTransition';
import { Container } from '../components/ui/Container';
import { AnimatedButton } from '../components/animations/AnimatedButton';

export function Contact() {
  return (
    <Layout>
      <PageTransition>
        <Container className="py-24 md:py-32">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="surface-card p-10 md:p-14">
              <p className="eyebrow mb-3">Contact</p>
              <h1 className="font-display text-3xl text-ink md:text-5xl">
                Let's build something thoughtful.
              </h1>
              <p className="mt-4 text-sm text-muted md:text-base">
                Whether you want to collaborate, hire, or just say hello, I'd love to
                connect. I'm always open to new ideas and ambitious builds.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <AnimatedButton external to="mailto:almirchowdhury@gmail.com">
                  Email Me
                </AnimatedButton>
                <AnimatedButton
                  external
                  to="https://www.linkedin.com/in/almir-chowdhury-9b4637262/"
                  variant="secondary"
                >
                  LinkedIn
                </AnimatedButton>
                <AnimatedButton
                  external
                  to="https://github.com/almirchowhury"
                  variant="secondary"
                >
                  GitHub
                </AnimatedButton>
              </div>

              <div className="mt-8 text-sm text-muted">
                Prefer email? <span className="font-semibold text-ink">almirchowdhury@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </PageTransition>
    </Layout>
  );
}
