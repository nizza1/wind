"use client"

import { Button } from "@/components/ui/button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    href: string;
};

export const ScrollButton: React.FC<Props> = ({ text, href, ...props }) => {

    const handleScroll = function (href: string) {
        if (href) {
            const targetId = href.replace(/.*\#/, "");

            // Get the element by id and use scrollIntoView with smooth behavior
            const elem = document.getElementById(targetId);
            elem?.scrollIntoView({
                behavior: "smooth",
            });
        }

    }

    return (
        <Button {...props} onClick={(e) => handleScroll(href)}>
            {text}
        </Button>
    )
}