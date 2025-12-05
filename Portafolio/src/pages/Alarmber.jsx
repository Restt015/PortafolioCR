import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import img1 from '../assets/jflowg-1-home.jpg';
import img2 from '../assets/jflowg-2-catalogo.jpg';
import img3 from '../assets/jflowg-3-login.jpg';
import img4 from '../assets/register.jpg';
import img5 from '../assets/jflowg-4-carrito.jpg';
import img6 from '../assets/jflowg-5-payment.jpg';
import img7 from '../assets/jflowg-6-dashboard.jpg';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const gallery = [img1, img2, img3, img4, img5, img6, img7];

export default function AlarmberPage() {
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
                            Proyecto Destacado: ALARMBER
                        </motion.h1>
                        <motion.p variants={fadeUp} className="max-w-3xl text-lg text-[#d4d4d4]">
                            Aplicación móvil intuitiva para crear, visualizar y gestionar reportes de personas desaparecidas. Diseñada con interfaz estilo Uber, validación de reportes y navegación fluida.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 text-sm font-semibold">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="https://github.com/Restt015/alarmber-app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-5 py-3 text-white transition hover:bg-[#2563eb]"
                            >
                                Ver repositorio en GitHub
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="https://alarmber-app-xkri.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6] px-5 py-3 text-[#3b82f6] transition hover:bg-[#0f0f0f]"
                            >
                                Vista web en Vercel
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    variants={fadeUp}
                    className="mt-8 grid gap-6 rounded-[28px] border border-[#1f1f1f] bg-[#111111] p-8 shadow-lg md:grid-cols-2"
                >
                    <motion.div variants={fadeUp} className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Qué es ALARMBER</h2>
                        <p className="text-[#d4d4d4]">
                            ALARMBER es una aplicación móvil enfocada en reportes de personas desaparecidas. Permite crear reportes con fotos, descripciones, ubicaciones, vestimenta, y validación por administradores. Incluye navegación estilo Uber y diseño minimalista para facilitar su uso por cualquier ciudadano.
                        </p>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-white">Funcionalidad</h3>
                            <ul className="space-y-2 text-[#d4d4d4]">
                                <li>Crear reporte con foto</li>
                                <li>Sistema de validación por administrador</li>
                                <li>Pantallas modernas estilo Uber</li>
                                <li>Categorías: alertas, notificaciones, recursos</li>
                                <li>Vista de detalle del reporte</li>
                                <li>Comentarios y aportes</li>
                                <li>Perfil de usuario</li>
                                <li>Diseño 100% mobile-first</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp} className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Tecnologías</h3>
                        <p className="text-[#d4d4d4]">React Native, Expo, Expo Router, React Native Paper, NativeWind / Tailwind, Vercel (para la demo web).</p>
                        <h3 className="text-lg font-semibold text-white">Roles</h3>
                        <p className="text-[#d4d4d4]">
                            Diseño UI/UX, desarrollo móvil con React Native, arquitectura de rutas, validación de formularios, lógica de reportes y despliegue web con Vercel.
                        </p>
                        <h3 className="text-lg font-semibold text-white">Objetivo</h3>
                        <p className="text-[#d4d4d4]">
                            Crear una herramienta accesible para que cualquier persona pueda registrar reportes de desaparecidos de forma rápida y validada, ofreciendo una experiencia moderna e intuitiva.
                        </p>
                    </motion.div>
                </motion.section>

                <motion.section
                    id="galeria"
                    variants={fadeUp}
                    className="mt-8 rounded-[28px] border border-[#1f1f1f] bg-[#111111] p-8 shadow-lg"
                >
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="text-2xl font-semibold text-white">Galería</h2>
                        <span className="text-sm text-[#d4d4d4]">Capturas del proyecto</span>
                    </div>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {gallery.map((src, index) => (
                            <motion.div
                                key={index}
                                className="overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: 0.05 * index, duration: 0.6, ease: 'easeOut' }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.img
                                    src={src}
                                    alt={`ALARMBER captura ${index + 1}`}
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
                            <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4">Crear reporte con foto</div>
                            <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4">Sistema de validación por administrador</div>
                            <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4">Pantallas modernas</div>
                            <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4">Categorías: alertas, notificaciones, recursos</div>
                            <div className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4">Vista de detalle del reporte</div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Enlaces</h2>
                        <div className="flex flex-wrap gap-3 text-sm font-semibold">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="https://github.com/Restt015/alarmber-app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-4 py-2 text-white transition hover:bg-[#2563eb]"
                            >
                                GitHub
                                <span aria-hidden="true">-&gt;</span>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="https://alarmber-app-xkri.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6] px-4 py-2 text-[#3b82f6] transition hover:bg-[#0f0f0f]"
                            >
                                Demo
                                <span aria-hidden="true">-&gt;</span>
                            </motion.a>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-white">Objetivo del proyecto</h3>
                            <p className="text-[#d4d4d4]">
                                Crear una herramienta accesible para que cualquier persona pueda registrar reportes de desaparecidos de forma rápida y validada, ofreciendo una experiencia moderna e intuitiva.
                            </p>
                        </div>
                    </div>
                </motion.section>
            </motion.main>
            <Footer />
        </Layout>
    );
}
