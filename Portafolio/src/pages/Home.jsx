import Layout from '../components/layout/Layout';
import Hero from '../sections/Hero';
import QaWork from '../sections/QaWork';
import ProjectsShowcase from '../sections/Projects';
import About from '../sections/About';
import Contact from '../sections/Contact';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle();

  return (
    <Layout>
      <Hero />
      <QaWork />
      <ProjectsShowcase />
      <About />
      <Contact />
    </Layout>
  );
}
