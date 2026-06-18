export interface Project {
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    tech: string[];
    category: "fullstack" | "frontend" | "other" | 'e-commerce';
    points: string[]
}

export const projects: Project[] = [
    {
        title: "Progbiz",
        description:
            "A modern corporate website developed for Progbiz with a strong focus on user experience, performance, and SEO optimization. The platform includes a custom Strapi CMS for content management and is deployed using Coolify for scalable hosting and easy application management.",
        image: "/projects/progbiz.png",
        liveUrl: "https://progbiz.io/",
        githubUrl: "",
        tech: [
            "Next.js",
            "React.js",
            "Strapi CMS",
            "SCSS",
            "JavaScript",
            "REST API",
            "SEO Optimization",
            "Coolify",
            "Linux Server",
            "Nginx",
            "Git",
            "GitHub",
            "Responsive Design"
        ],
        category: "fullstack",
        points: [
            "Developed a fast and SEO-friendly corporate website.",
            "Built and managed content using Strapi CMS.",
            "Implemented responsive and reusable UI components.",
            "Optimized website performance and Core Web Vitals.",
            "Configured and deployed applications using Coolify.",
            "Managed server deployment and domain configuration.",
            "Integrated REST APIs between Next.js and Strapi.",
            "Improved search engine visibility through technical SEO."
        ]
    },

    // {
    //     title: "Wabcom Dubai",
    //     description:
    //         "A professional business website for a Dubai-based Tally solutions provider. The project features modern UI, smooth animations, dynamic content management through Strapi CMS, and deployment through Coolify on a Linux server.",
    //     image: "/projects/wabcom.png",
    //     liveUrl: "https://wabcomdubai.com/",
    //     githubUrl: "",
    //     tech: [
    //         "Next.js",
    //         "React.js",
    //         "Strapi CMS",
    //         "Tailwind CSS",
    //         "GSAP",
    //         "JavaScript",
    //         "REST API",
    //         "SEO",
    //         "Coolify",
    //         "Linux Server",
    //         "Nginx",
    //         "Git",
    //         "GitHub",
    //         "Responsive Design"
    //     ],
    //     category: "fullstack",
    //     points: [
    //         "Developed a fully responsive business website.",
    //         "Implemented advanced animations using GSAP.",
    //         "Built dynamic content management with Strapi CMS.",
    //         "Configured and managed application deployment using Coolify.",
    //         "Handled server setup and deployment processes.",
    //         "Optimized website architecture for SEO.",
    //         "Integrated API-driven content rendering.",
    //         "Enhanced user engagement through interactive animations."
    //     ]
    // },

    {
        title: "Blue Link Printing",
        description:
            "An enterprise printing management platform where I contributed to both backend and admin panel development. The system includes secure authentication, payment processing, and an advanced dashboard for managing orders and business operations.",
        image: "/projects/bluelink.png",
        liveUrl: "https://bluelinkprinting.com/",
        githubUrl: "",
        tech: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "React.js",
            "Redux Toolkit",
            "Tailwind CSS",
            "JWT Authentication",
            "REST API",
            "Payment Gateway Integration",
            "JavaScript",
            "Git"
        ],
        category: "fullstack",
        points: [
            "Developed backend APIs using Node.js and Express.js.",
            "Designed MongoDB database structures and queries.",
            "Implemented secure JWT-based authentication and authorization.",
            "Integrated online payment gateway functionality.",
            "Built responsive admin panel interfaces using React.js.",
            "Managed application state efficiently with Redux Toolkit.",
            "Optimized server performance and API responses."
        ]
    },

    {
        title: "B Perfum",
        description:
            "An e-commerce platform built on Shopify for perfume sales. My primary responsibility was integrating secure payment processing and ensuring a seamless checkout experience for customers.",
        image: "/projects/b-perfume.png",
        liveUrl: "",
        githubUrl: "",
        tech: [
            "Shopify",
            "Liquid",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Payment Gateway Integration",
            "E-commerce",
            "Shopify Apps"
        ],
        category: "e-commerce",
        points: [
            "Integrated secure online payment systems.",
            "Improved checkout experience and transaction flow.",
            "Configured Shopify store settings and payment providers.",
            "Supported e-commerce functionality enhancements.",
            "Ensured responsive design across multiple devices."
        ]
    },

    {
        title: "Fix & Go Tyres",
        description:
            "A high-traffic tyre distributor website where I redesigned and optimized approximately 70% of the user interface. The project focused heavily on SEO improvements, performance optimization, and enhancing the overall user experience.",
        image: "/projects/fixandgo.png",
        liveUrl: "https://fixandgotyres.ae/",
        githubUrl: "",
        tech: [
            "HTML5",
            "CSS3",
            "Bootstrap",
            "JavaScript",
            "SEO Optimization",
            "Google Search Optimization",
            "Responsive Design",
            "Performance Optimization"
        ],
        category: "frontend",
        points: [
            "Redesigned around 70% of the website UI.",
            "Enhanced website structure for better SEO rankings.",
            "Improved page speed and user experience.",
            "Optimized mobile responsiveness across devices.",
            "Maintained and upgraded existing website features.",
            "Contributed to increased search engine visibility."
        ]
    }
];
