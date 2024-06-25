import { title } from "process";
import { cardsData } from "../skills/cardsData";

type Feature = {
    title: string;
    description: string;

}[];

const FeatureContent: Feature = [
    {
        title: "Pixel-Perfect and Responsive UI",
        description: "I create visually stunning and highly responsive user interfaces that look perfect on all devices."
    },
    {
        title: "Cutting-Edge Technology",
        description: "Benefit from the latest technologies like React and Next.js, which provide superior performance and scalability.",

    },
    {
        title: "Tailored Solutions",
        description: "Every business is unique. I offer customized solutions that fit your specific needs and goals.",

    },
    {
        title: "Ongoing Support",
        description: "My services don’t end at launch. I offer ongoing support and maintenance to ensure your online platform stays up-to-date.",

    },
    {
        title: "SEO Optimization",
        description: "Increase your online visibility and attract more visitors with a digital solution that is optimized for search engines.",

    }
];

export default FeatureContent;
