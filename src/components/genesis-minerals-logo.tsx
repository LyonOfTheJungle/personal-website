import { SvgIcon } from "@mui/material";
import { FC } from "react";

interface LogoProps {
    color1: string;
    color2: string;
}

export const GenesisMineralsLogo: FC<LogoProps> = (props) =>  (
    <SvgIcon>
        <svg width="149" height="150" viewBox="0 0 149 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M74.5 149.5L148.5 75H110.5L74.5 110.5L38.5 75H0.5L74.5 149.5Z" fill={props.color1}/>
            <path d="M93.5 75L74.5 93.5L55.5 75H93.5Z" fill={props.color1}/>
            <path d="M74.5 0.5L0.5 75H38.5L93.5 19.5L74.5 0.5Z" fill={props.color2}/>
            <path d="M148.5 75L102.5 28.5L55.5 75H148.5Z" fill={props.color2}/>
        </svg>
    </SvgIcon>
);