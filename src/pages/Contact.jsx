import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { PageTransition } from '../components/layout/PageTransition';
import { Container } from '../components/ui/Container';

export function Contact() {
  return (
    <Layout>
      <PageTransition>
        <Container className="min-h-screen flex items-center justify-center py-24 md:py-32">
          <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-display text-4xl md:text-6xl mb-8 text-white">
              Get In Touch
            </h1>

            <p className="font-sans text-lg md:text-xl text-white/90 mb-12">
              Interested in working together or have a question? Feel free to reach out!
            </p>

            <div className="flex flex-col gap-6">
              <motion.a
                href="mailto:almirchowdhury01@gmail.com"
                className="font-sans text-lg text-neon-cyan hover:text-neon-green transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                almirchowdhury01@gmail.com
              </motion.a>

              <div className="flex justify-center gap-8 mt-8">
                <motion.a
                  href="https://linkedin.com/in/almir-chowdhury"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-white hover:text-neon-cyan transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  LinkedIn
                </motion.a>

                <motion.a
                  href="https://github.com/almirchowhury"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-white hover:text-neon-cyan transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </Container>
      </PageTransition>
    </Layout>
  );
}
