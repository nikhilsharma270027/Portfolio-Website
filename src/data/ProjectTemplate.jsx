// export default [
//     {
//         link: "https://nikhil-sharma-portfolio.vercel.app/",
//         image: "/projectImg/portfolio.png"

//     },
//     {
//         link: "https://blog-sphere-mern.vercel.app/",
//         image: "/projectImg/blog.png"
//     },
//     {
//         link: "https://fresh-drink-e-commerce.vercel.app/",
//         image: "/projectImg/Ecommerce.png"
//     },
//     {
//         link: "https://social-media-content-generator-ycxq.vercel.app/dashboard/",
//         image: "/projectImg/socialmedia.png"
//     }
// ]

export default [
  {
    title: "Portfolio Website",
    type: "Fun Project",
    description: "Personal developer portfolio to showcase my projects and skills 🌐",
    link: "https://nikhil-sharma-portfolio.vercel.app/",
    image: "/projectImg/portfolio.png",
    features: [
      "Modern responsive layout",
      "Smooth scrolling and transitions",
      "Project gallery with hover animations",
      "Deployed with Vercel"
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "BlogSphere",
    type: "Serious Project",
    description: "Full-stack blog platform with rich-text editing and user profiles 📝",
    link: "https://blog-sphere-mern.vercel.app/",
    image: "/projectImg/blog.png",
    features: [
      "Firebase auth with JWT",
      "Editor.js integration for blog editing",
      "Search, comments & social profiles",
      "Admin dashboard with analytics"
    ],
    tech: ["React", "Firebase", "Node.js", "MongoDB", "Tailwind CSS", "Shadcn/UI"]
  },
  {
    title: "Fresh-Drink E-Commerce",
    type: "Serious Project",
    description: "Modern e-commerce app with payments and full-stack integration 🛒",
    link: "https://fresh-drink-e-commerce.vercel.app/",
    image: "/projectImg/Ecommerce.png",
    features: [
      "JWT authentication & session handling",
      "Razorpay payment gateway integration",
      "Product catalog and admin dashboard",
      "Responsive design with Tailwind CSS"
    ],
    tech: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind", "JWT", "Razorpay"]
  },
  {
    title: "SocialSync",
    type: "Fun Project",
    description: "AI-powered content generator for social media posts ⚡",
    link: "https://social-media-content-generator-ycxq.vercel.app/dashboard/",
    image: "/projectImg/socialmedia.png",
    features: [
      "Content generation using AI",
      "Clerk for user authentication",
      "PostgreSQL + Drizzle ORM backend",
      "Responsive Shadcn UI for creators"
    ],
    tech: ["Next.js", "TypeScript", "Clerk", "PostgreSQL", "Drizzle ORM", "Tailwind"]
  }
];
