import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import ProjectsShowcase from '../sections/Projects';
import LinksSection from '../sections/Links';

const mainVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.15 },
  },
};

export default function Home() {
  return (
    <Layout>
      <Header />
      <motion.main initial="hidden" animate="visible" variants={mainVariants} className="space-y-8">
        <Hero />
        <About />
        <Experience />
        <ProjectsShowcase />
        <LinksSection />
        <Contact />
      </motion.main>
      <Footer />
    </Layout>
  );
}
