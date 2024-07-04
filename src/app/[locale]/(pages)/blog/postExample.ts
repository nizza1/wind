import { BlogPost } from "./postTypes";

export const examplePost: BlogPost = {
    id: "1",
    title: "Einführung in Next.js und Firebase",
    description: "Dieser Beitrag bietet eine Einführung in die Verwendung von Next.js mit Firebase als Backend.",
    createdAt: new Date(),
    readingTime: "7 min read",
    categories: ["Next.js", "Firebase", "Web Development"],
    postBody: [
        { type: 'h1', content: 'Einführung in Next.js und Firebase' },
        { type: 'p', content: 'Next.js ist ein beliebtes React-Framework, das viele Vorteile für die Webentwicklung bietet...' },
        { type: 'h2', content: 'Was ist Next.js?' },
        { type: 'p', content: 'Next.js ist ein Open-Source-React-Framework, das von Vercel entwickelt wird...' },
        { type: 'code', content: 'const example = "Hello, Next.js!";' },
        { type: 'link', content: 'Hier klicken', href: 'https://nextjs.org/' }
    ]
};