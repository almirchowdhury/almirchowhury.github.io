import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { PageTransition } from '../components/layout/PageTransition';
import { SVGTextStroke } from '../components/animations/SVGTextStroke';
import { AnimatedButton } from '../components/animations/AnimatedButton';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 5.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Home() {
  return (
    <Layout showRings>
      <PageTransition>
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center text-center px-4">
            <SVGTextStroke text="Almir Chowdhury" className="mb-8 md:mb-12" />

            <motion.div
              className="flex flex-col md:flex-row gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={itemVariants}>
                <AnimatedButton to="/about">
                  About Me
                </AnimatedButton>
              </motion.div>

              <motion.div variants={itemVariants}>
                <AnimatedButton to="/projects">
                  Personal Projects
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </PageTransition>
    </Layout>
  );
}
