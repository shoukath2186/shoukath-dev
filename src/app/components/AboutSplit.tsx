// AboutSplit component with split grid and orange illustration
import Image from 'next/image';

export default function AboutSplit() {
  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Image Container */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative rounded-none overflow-hidden border border-zinc-200 bg-zinc-50 p-1.5 max-w-xs hover:border-orange-500 transition-all duration-300">
              <Image src="/about_illustration.png" alt="About illustration" width={400} height={400} className="w-full h-auto rounded-none object-cover transition-all duration-500" />
            </div>
          </div>

          {/* About text content with glass effect */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-black text-orange-600">About Me</span>
              <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight uppercase">
                Scaling applications with design clarity
              </h2>
            </div>
            <div className="space-y-4 text-zinc-600 text-lg md:text-xl leading-relaxed glass p-6 rounded-md">
              <p>
                I am a professional Software Developer specializing in Full Stack and Frontend Development, with core expertise in Next.js, React.js, Node.js, Express.js, MongoDB, and Strapi CMS. I focus on developing scalable web applications, integrating headless CMS architectures, optimizing SEO/performance, and delivering high‑performance digital experiences.
              </p>
              <p>
                Throughout my experience across digital agencies and client projects, I have a proven track record of delivering responsive, SEO‑friendly web applications from initial development to live production deployment.
              </p>
              <p>
                Recognized with the <strong>Best Performer Award</strong> at Progbiz for my technical dedication, I apply Clean Architecture and clean code standards to ensure long‑term maintainability, reliability, and security in every codebase.
              </p>
            </div>
            {/* Core Skill Chips */}
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "Next.js",
                "React.js",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "Strapi CMS",
                "Tailwind CSS",
                "Redux"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 border border-zinc-300 text-xs text-zinc-800 font-semibold bg-zinc-50 hover:border-orange-500 hover:text-orange-600 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
