import { motion } from "framer-motion";
import { useRef } from "react";
import Blockchain from "../assets/blockchain.jpg";
import Ashlee from "../assets/ashlee.jpg";
import Ay from "../assets/profile.png";
import Jiya from "../assets/jiya.jpg";
import Nanya from "../assets/nanya.jpg";
import Tomcrown from "../assets/tomcrown.jpg";
import Uchiha from "../assets/uchiha.jpg";
import Navbar from "../components/navbar";
import Suiswap from "../assets/suiswap.png";
import Medlock from "../assets/medlock.png";
import Backstage from "../assets/backstage.png";
import Item1 from "../assets/item1.png";
import Item2 from "../assets/item2.png";
import Item3 from "../assets/item3.png";
import Item4 from "../assets/item4.png";
import Item5 from "../assets/item5.png";
import Item6 from "../assets/item6.png";
import Item7 from "../assets/item7.png";
import {
  Twitter,
  Github,
  Mail,
} from "lucide-react";

const AnimatedLines = () => {
  const horizontalCount = 8;
  const verticalCount = 8;
  const colors = ["#3B82F6", "#6366F1", "#06B6D4", "#0EA5E9", "#F59E0B", "#EF4444", "#10B981"];

  const hLines = [...Array(horizontalCount)].map((_, i) => ({
    top: 10 + i * 10 + "%",
  }));

  const vLines = [...Array(verticalCount)].map((_, i) => ({
    left: 10 + i * 10 + "%",
  }));

  const dots = hLines.flatMap((h, _i) =>
  vLines.map((v, _j) => ({
    top: h.top,
    left: v.left,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: 3 + Math.random() * 3,
    duration: 2 + Math.random() * 3,
  }))
);


  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Horizontal lines */}
      {hLines.map((line, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-px w-[140%] bg-gray-300"
          style={{ top: line.top }}
          animate={{ x: ["-5%", "5%"] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        />
      ))}

      {/* Vertical lines */}
      {vLines.map((line, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px h-[140%] bg-gray-300"
          style={{ left: line.left }}
          animate={{ y: ["-5%", "5%"] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        />
      ))}

      {/* Dots */}
      {dots.map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
          }}
          animate={{
            backgroundColor: colors,
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ duration: dot.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};


const people = [
  { name: 'BLockchainBard', role: 'Founder / CEO / Smart contract Devloper', img: Blockchain },
  { name: 'Tomcrown', role: 'Co-Founder / Team Lead / Smart Contract Developer', img: Tomcrown },
  { name: 'Uchihacrypt', role: 'Co-Founder / Community manager', img: Uchiha },
  { name: 'Ay', role: 'Co-Founder / Front-end Developer', img: Ay },
  { name: 'Ashlee', role: 'Co-Founder / Smart contract Developer', img: Ashlee },
  { name: 'Eazi.crypt', role: 'Co-Founder / Designer', img: Jiya },
  { name: 'Nanya', role: 'Co-Founder / Backend Developer', img: Nanya },
];

export default function LandingPage() {
  const productRef = useRef(null);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 min-h-screen flex items-center justify-center">
        <AnimatedLines />

        {/* Centered content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6 text-center"
        >
          <h1 className="text-5xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Pioneering the Future of Web3
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-lg">
            NextEpoch Labs is an innovation studio building the foundational technologies and applications that will define the next era of the decentralized web.
          </p>
          <div className="flex items-center justify-center">
          <a
            href="#projects"
            className="mt-6 w-48 h-12 bg-[#9EC8FF] hover:bg-blue-700 text-white rounded-md text-sm font-medium flex items-center justify-center"
          >
            Explore Our Work
          </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            About NextEpoch Labs
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            We are a team of researchers, engineers, and designers passionate about decentralized systems. We build scalable, user-focused Web3 solutions and work with founders and enterprises to turn complex ideas into impactful decentralized products.
          </p>
        </motion.div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-3xl font-bold text-gray-900"
          >
            What We Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
           className="mt-4 text-gray-600 text-base md:text-lg"
          >
            Foundational layers and innovative applications empowering the next generation of the internet.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { : {Item2}, title: "Decentralized Protocols", text: "Crafting robust and secure blockchain protocols that serve as the backbone for future decentralized applications." },
              { img: {Item1}, title: "DeFi & NFT Platforms", text: "Developing innovative financial tools and unique digital asset marketplaces that redefine ownership and value." },
              { img: {Item3}, title: "Metaverse & Identity", text: "Building immersive virtual environments and secure digital identity solutions for the next evolution of human interaction." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#F5D8A0] p-8 rounded-xl text-left hover:-translate-y-1 transition"
              >
                <img src={item.img} className="w-10 h-10 mb-2" />
                <h3 className="text-3xl font-bold text-[#000000] mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS */}
      <section id="projects" className="py-20 bg-white" ref={productRef}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold text-gray-900"
          >
            Product Highlights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 max-w-2xl mx-auto text-gray-600"
          >
            A glimpse into the solutions we’re actively building.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: {Suiswap}, title: "SuiWall Swap" },
              { img: {Medlock}, title: "Med Lock" },
              { img: {Medlock}, title: "Backstage" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="bg-[#E5E7EB] rounded-xl shadow-sm overflow-hidden text-left"
              >
                <img src={item.img} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">Learn how this product pushes Web3 forward.</p>
                  <span className="inline-block mt-3 text-blue-600 font-medium cursor-pointer">Learn More →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-xl mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg/8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
          </motion.div>

          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16">
            {people.map((person, i) => (
              <motion.li
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="flex items-center gap-x-6">
                  <img src={person.img} alt="" className="w-16 h-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section id="why-us" className="px-[10%] py-24 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose NextEpoch Labs?
        </h2>

        <p className="mx-auto max-w-[750px] text-gray-600">
          Partner with us to leverage unparalleled expertise and a commitment to
          innovation.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-13 max-w-[1000px] mx-auto">
          {[
            {image: {Item4}, title: "Expert Team", content: "Seasoned professionals with deep expertise in blockchain technology and decentralized systems."},
            {image: {Item7}, title: "Future-Proof Solutions", content: "Building scalable, secure, and sustainable platforms designed for tomorrow's digital landscape."},
            {image: {Item6}, title: "Transparent & Secure", content: "Commitment to open development, rigorous security audits, and ethical practices in all our projects."},
            {image: {Item5}, title: "Collaborative Partnership", content: "We work closely with clients, ensuring their vision is realized with meticulous attention to detail and shared success."},
          ].map((item, i) => (
            <div key={i} className="w-[210px] text-center">
              <img src={item.image} className="w-11 h-11 mx-auto" />
              <h4 className="font-bold text-2xl text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-m">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-[10%] py-25 bg-[#EFF6FF] text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Build the Future with Us?
        </h2>

        <button className="bg-[#9EC8FF] hover:bg-blue-700 transition text-white px-6 py-2.5 rounded-md font-medium">
          <a
            href="mailto:nextepochlabs@gmail.com"
            className="bg-[#9EC8FF] hover:bg-blue-700 transition text-white px-6 py-2.5 rounded-md font-medium inline-block"
          >
            Get in Touch
          </a>
        </button>
      </section>

      <footer className="bg-[#1F2937] px-[10%] py-8 text-center text-sm text-gray-400">
        <p className="mb-4">
          © 2025 NextEpoch Labs — All Rights Reserved.
        </p>

        {/* SOCIALS */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://x.com/N3xtEp0chL4bs"
            aria-label="Twitter"
            className="text-gray-300 hover:text-white transition"
          >
            <Twitter size={18} />
          </a>

          <a
            href="https://github.com/orgs/N3xt-Ep0ch-L4bs/dashboard"
            aria-label="GitHub"
            className="text-gray-300 hover:text-white transition"
          >
            <Github size={18} />
          </a>

          <a
            href="mailto:nextepochlabs@gmail.com"
            aria-label="Community"
            className="text-gray-300 hover:text-white transition"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <span className="cursor-pointer hover:text-white transition">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-white transition">
            Terms of Service
          </span>
        </div>
      </footer>

    </>
  );
}

