import { SvgIcon } from "@mui/material";
import { FC } from "react";

interface LogoProps {
    color: string;
}

export const StBarbaraLogo: FC<LogoProps> = (props) =>  (
    <SvgIcon>
        <svg width="121" height="148" viewBox="0 0 131 158" fill="none" xmlns="http://www.w3.org/2000/svg" transform="translate(1, 1)">
            <path d="M85.5 0.5H0.5V147.5H84C98.5 147.5 121 135 121 109C121 88.2 108 77.6667 101.5 75C69.5 79 56.1667 108.333 53.5 122.5C47.1 89.7 18.8333 75.8333 5.5 73C38.7 67.8 51.3333 38.8333 53.5 25C61.9 61.8 89 72.3333 101.5 73C107 71 121 62 121 37C121 12 97.3333 1.5 85.5 0.5Z" fill={props.color}/>
        </svg>
    </SvgIcon>
);