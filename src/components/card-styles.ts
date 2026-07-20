import type { Theme } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';

// The one card recipe used across the site: elevated slate, 20px radius,
// hairline border, and a soft shadow tinted to the page background so cards
// read as lit surfaces rather than glowing panels.
const softShadow = '0px 30px 40px -18px rgba(8, 10, 14, 0.55)';
const softShadowRaised = '0px 36px 48px -18px rgba(8, 10, 14, 0.65)';

const base = {
    backgroundColor: '#262B33',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: '20px',
    boxShadow: softShadow
};

export const cardSx: SystemStyleObject<Theme> = base;

// Large section-scale surface (hero, about) — same family as the small cards,
// bigger radius, like the cream bands on aliabdaal.com.
export const bandCardSx: SystemStyleObject<Theme> = {
    ...base,
    borderRadius: '28px',
    overflow: 'hidden'
};

export const interactiveCardSx: SystemStyleObject<Theme> = {
    ...base,
    transition: 'border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease',
    '&:hover': {
        borderColor: 'primary.alpha30',
        boxShadow: softShadowRaised,
        transform: 'translateY(-2px)'
    }
};
