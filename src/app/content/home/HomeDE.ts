import { ContentType } from "./types"

const Content: ContentType[] = [
    {
        HeroSection: {
            title: "Ich entwickle benutzerzentrierte Web-UIs",
            subtitle: "Schwerpunkt React / Next.js",
            button: "Kontakt"
        },
        TechnologySection: {
            title: "Technologien"
        },
        AboutSection: {
            title: "Über mich",
            greeting: "Hallo 👋🏻,",
            imgText: "mein Name ist Nizar",
            aboutText: {
                text1: "Ein leidenschaftlicher und erfahrener Webentwickler mit großem Interesse an der Erstellung innovativer und benutzerfreundlicher Weblösungen.",
                text2: "Mit einem soliden technischen Hintergrund in JavaScript, React, Node.js und jahrelanger Erfahrung in der Entwicklung sowohl von Front-End- als auch Back-End-Lösungen, strebe ich danach, ansprechende und effektive Websites und Anwendungen zu erstellen, die den digitalen Anforderungen moderner Unternehmen gerecht werden."
            }
        },
        ContactForm: {
            title: "Lass uns verbinden",
            formFields: {
                name: "Name",
                namePlaceholder: "z.B. Max", email: "E-Mail",
                emailPlaceholder: "z.B. max@gmail.com",
                telephone: "Telefon",
                telephonePlaceholder: "+49 323424",
                message: "Nachricht",
                messagePlaceholder: "Deine Nachricht",
                button: "Senden"
            }
        }
    }
]

export default Content
