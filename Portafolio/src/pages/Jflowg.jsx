import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import img1 from '../assets/jflowg-1-home.jpg';
import img2 from '../assets/jflowg-2-catalogo.jpg';
import img3 from '../assets/jflowg-3-login.jpg';
import img4 from '../assets/register.jpg'
import img5 from '../assets/jflowg-4-carrito.jpg';
import img6 from '../assets/jflowg-5-payment.jpg';
import img7 from '../assets/jflowg-6-dashboard.jpg';
import img8 from '../assets/jflowg-7-crud.jpg';
import img9 from '../assets/crud2.jpg';
import img10 from '../assets/devoluciones y ordenes .jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const gallery = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function JflowgPage() {
  return (
    <Layout>
      <Header />
      <motion.main initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
        <motion.section
          variants={fadeUp}
          className="mt-6 rounded-[32px] border border-[#1f1f1f] bg-[#111111] p-9 shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
        >
          <div className="space-y-4">
            <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4d4d4]">
              Proyecto destacado
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl font-semibold text-white sm:text-5xl">
              Proyecto Destacado: JFLOWG
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-3xl text-lg text-[#d4d4d4]">
              Ecommerce integral diseñado para gestionar catalogo, operaciones y administracion en un mismo flujo. Combina
              una experiencia de compra fluida con herramientas para el equipo interno.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 text-sm font-semibold">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://github.com/Restt015/Jflowg.git"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-5 py-3 text-white transition hover:bg-[#2563eb]"
              >
                Ver repositorio en GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.linkedin.com/in/cesar-restrepo-9ba6b22a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6] px-5 py-3 text-[#3b82f6] transition hover:bg-[#0f0f0f]"
              >
                Mi LinkedIn
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          className="mt-8 grid gap-6 rounded-[28px] border border-[#1f1f1f] bg-[#111111] p-8 shadow-lg md:grid-cols-2"
        >
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Que es JFLOWG</h2>
            <p className="text-[#d4d4d4]">
              Plataforma ecommerce full-stack con catalogo, flujos de compra completos, autenticacion, pagos y un panel
              administrativo para operar productos, pedidos, usuarios y devoluciones.
            </p>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">Funcionalidad</h3>
              <ul className="space-y-2 text-[#d4d4d4]">
                <li>Catalogo con filtros por categoria y busqueda</li>
                <li>Login y registro</li>
                <li>Carrito, checkout y pagos</li>
                <li>Perfil de usuario con devoluciones</li>
                <li>Dashboard administrativo con gestion de productos, pedidos, usuarios</li>
              </ul>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Tecnologias</h3>
            <p className="text-[#d4d4d4]">
              React, Tailwind, Node.js, Fastify, MongoDB, Axios, Context API.
            </p>
            <h3 className="text-lg font-semibold text-white">Roles</h3>
            <p className="text-[#d4d4d4]">
              Frontend, backend, integraciones, diseno UI/UX y orquestacion de la experiencia de compra.
            </p>
            <h3 className="text-lg font-semibold text-white">Objetivo</h3>
            <p className="text-[#d4d4d4]">
              Entregar una tienda completa con gestion operativa y experiencia rapida para el usuario final, lista para
              escalar inventario y equipos internos.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          id="galeria"
          variants={fadeUp}
          className="mt-8 rounded-[28px] border border-[#1f1f1f] bg-[#111111] p-8 shadow-lg"
        >
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-white">Galeria</h2>
            <span className="text-sm text-[#d4d4d4]">7 capturas</span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {gallery.map((src, index) => (
              <motion.div
                key={src}
                className="overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.05 * index, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={src}
                  alt={`JFLOWG captura ${index + 1}`}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          className="mt-8 grid gap-6 rounded-[28px] border border-[#1f1f1f] bg-[#111111] p-8 shadow-lg md:grid-cols-2"
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">Funcionalidades clave</h2>
            <div className="space-y-3 text-[#d4d4d4]">
              <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4">Catalogo y filtros</div>
              <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4">Login y registro</div>
              <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4">Carrito y checkout</div>
              <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4">Perfil del usuario</div>
              <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4">
                Gestion administrativa (dashboard, pedidos, productos, devoluciones, usuarios)
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Enlaces</h2>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://github.com/showtunez"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-4 py-2 text-white transition hover:bg-[#2563eb]"
              >
                GitHub
                <span aria-hidden="true">-&gt;</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6] px-4 py-2 text-[#3b82f6] transition hover:bg-[#0f0f0f]"
              >
                Repo
                <span aria-hidden="true">-&gt;</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6] px-4 py-2 text-[#3b82f6] transition hover:bg-[#0f0f0f]"
              >
                Demo
                <span aria-hidden="true">-&gt;</span>
              </motion.a>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Que implemente yo</h3>
              <ul className="space-y-2 text-[#d4d4d4]">
                <li>UI completa en React + Tailwind</li>
                <li>Gestion de productos</li>
                <li>Carrito con Context API</li>
                <li>API REST con Fastify</li>
                <li>Integracion completa con la base de datos</li>
                <li>Dashboard administrativo</li>
                <li>Validaciones, estados y flujos de compra</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </motion.main>
      <Footer />
    </Layout>
  );
}
