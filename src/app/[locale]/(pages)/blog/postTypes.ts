export interface BlogPost {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    readingTime: string;
    categories: string[];
    tags?: string[]; // Optional
    author?: string;
    postBody: RichTextElement[];
    thumbnailUrl?: string; // Optional
    metaTitle?: string; // Optional
    metaDescription?: string; // Optional
}


// Interface für den Rich-Text-Body
interface RichTextElement {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'code' | 'link';
    content: string;
    // Optionale Felder je nach Typ des Elements
    href?: string;  // Für Links
}