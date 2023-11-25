import { SvgIcon } from "@mui/material";
import { FC } from "react";

interface LogoProps {
    color1: string;
    color2: string;
}

export const WestgoldLogo: FC<LogoProps> = (props) =>  (
    <SvgIcon>
        <svg width="212" height="184" viewBox="0 0 212 184" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 52L0 42L19 141L41 153L65.5 139L74 174L94.5 184L115 172.5L137 184L115 104.5L96 94.5L116.5 82.5L137.5 93.5L148 140L164.5 77.5L116.5 54.5L67 77.5L48 66.5L94.5 44.5L44.5 20.5L38 43L19.5 52Z" fill="#33CB42"/>
            <path d="M175.5 107.5L166 139.5L192 153L175.5 107.5Z" fill={props.color1}/>
            <path d="M212 52L201 109.5L185.5 66.5L137.5 45L187.5 20.5L192 42L212 52Z" fill={props.color1}/>
            <path d="M145.5 20.5L139 0L116 10L93.5 0L87 20.5L116 35L145.5 20.5Z" fill={props.color1}/>
            <path d="M31 110L19.5 52L38 43L44.5 20.5L94 44.5L48 66.5L31 110Z" fill={props.color2}/>
            <path d="M57.5 106.5L41 153L65.5 139L57.5 106.5Z" fill={props.color2}/>
            <path d="M116.5 54.5L67 77.5L83.5 139.5L96 94.5L116.5 82.5V54.5Z" fill={props.color2}/>
            <path d="M115 104.5L94.5 184L115 172.5V104.5Z" fill={props.color2}/>
            <path d="M116 35V10L139 0L145.5 20.5L116 35Z" fill={props.color2}/>
    </svg>
    
    </SvgIcon>
);