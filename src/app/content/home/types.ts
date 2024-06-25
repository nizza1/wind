
export type StringOb = {
    [key: string]: string;
};

export interface HeroSectionType {
    title: string;
    subtitle: string;
    button: string;
}

export interface ServiceType {
    title: string,
    cardsData: StringOb[]
}

export interface TechnologySectionType {
    title: string;
}

export interface AboutTextType {
    text1: string;
    text2: string;
}

export interface AboutSectionType {
    title: string;
    greeting: string;
    imgText: string;
    aboutText: AboutTextType;
}

export interface ContactFormType {
    title: string;
    formFields: {
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        telephone: string;
        telephonePlaceholder: string;
        message: string;
        messagePlaceholder: string;
        button: string;
    };
}

export interface ContentType {
    HeroSection: HeroSectionType;
    ServiceSection: ServiceType;
    TechnologySection: TechnologySectionType;
    AboutSection: AboutSectionType;
    ContactForm: ContactFormType;
}


