import { keyframes } from "@chakra-ui/react";

const pageIntro = keyframes`
    0% {
        transform: translateX(-100vw);
        opacity: 0;
    }
    100% {
        transform: translateX(0vw);
        opacity: 1;
    }
    `;

const pageHero = keyframes`
    0% {
        transform: translateY(-50vw);
        opacity: 0;
    }
    100% {
        transform: translateY(0vw);
        opacity: 1;
    }
`;
const pageHeroSmall = keyframes`
    0% {
        transform: translateX(-50vw);
        opacity: 0;
    }
    100% {
        transform: translateX(0vw);
        opacity: 1;
    }
`;

const pageHeroMotion = keyframes`
    0%, 100%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(14px);
    }
`;
export const IntroAnimate = `${pageIntro} 1s ease-out`;
export const heroAnimate = `${pageHero} 1s ease-out`;
export const heroAnimateSmall = `${pageHeroSmall} 1s ease-out`;
export const heroAnimateAllsizeInfinite = `${pageHeroMotion} 2s ease-in-out infinite`;
