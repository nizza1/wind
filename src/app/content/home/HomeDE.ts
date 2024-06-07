import { ContentType } from "./types"

const Content: ContentType[] = [
    {
        HeroSection: {
            title: "Website oder App in Wochen statt Monaten 🚀",
            subtitle: "Spezialisiert auf React und Next.js",
            button: "Kontaktiere mich"
        },
        TechnologySection: {
            title: "Technologien"
        },
        AboutSection: {
            title: "Über mich",
            greeting: "Hallo 👋🏻,",
            imgText: "Mein Name ist Nizar",
            aboutText: {
                text1: "Ich bin ein leidenschaftlicher Webentwickler mit einem starken Fokus auf die Erstellung innovativer und benutzerfreundlicher Weblösungen.",
                text2: "Mit fundierten Kenntnissen in JavaScript, React und Node.js sowie jahrelanger Erfahrung in der Front-End- und Back-End-Entwicklung erstelle ich ansprechende und effektive Websites und Anwendungen, die den digitalen Anforderungen moderner Unternehmen gerecht werden."
            }
        },
        ContactForm: {
            title: "Lass uns in Kontakt treten",
            formFields: {
                name: "Name",
                namePlaceholder: "e.g. Max", email: "E-Mail",
                emailPlaceholder: "e.g. max@gmail.com",
                telephone: "Telefon",
                telephonePlaceholder: "+49 323424...",
                message: "Nachricht",
                messagePlaceholder: "Deine Nachricht",
                button: "Senden"
            }
        }
    }
]

export default Content
