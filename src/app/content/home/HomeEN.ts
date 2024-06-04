import { ContentType } from "./types"


const Content: ContentType[] = [
    {
        "HeroSection": {
            "title": "Web Developer",
            "subtitle": "with focus on front-end (React/Nextjs)",
            "button": "Get in touch"
        },
        "TechnologySection": {
            "title": "Technology"
        },
        "AboutSection": {
            "title": "About",
            "greeting": "Hey there 👋🏻,",
            "imgText": "my name is Nizar",
            "aboutText": {
                "text1": "A passionate and experienced web developer with a deep interest in crafting innovative and user-friendly web solutions.",
                "text2": "With a solid technical background in JavaScript, React, Node.js and years of experience in developing both front-end and back-end solutions, I strive to create engaging and effective websites and applications that meet the digital demands of modern businesses."
            }
        },
        "ContactForm": {
            "title": "Let's connect",
            "formFields": {
                "name": "Name",
                "namePlaceholder": "e.g. Max",
                "email": "Email",
                "emailPlaceholder": "e.g. max@gmail.com",
                "telephone": "Telephone",
                "telephonePlaceholder": "+49 323424",
                "message": "Message",
                "messagePlaceholder": "Your message",
                "button": "Send"
            }
        }
    }
]

export default Content

