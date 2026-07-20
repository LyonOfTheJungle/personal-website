import { Box } from "@mui/material";
import { FC } from "react";

// Full-page "monogram canvas" backdrop, fixed behind all content:
// a survey-grid + diamond-lattice pattern (LM monogram, crossed hammers,
// headframe — Louis Vuitton canvas logic, mine-plan language), plus two
// larger annotated sketches: an open-pit cross-section and an underground
// long-section. Everything is tone-on-tone gold at very low opacity.

const GOLD = '#E6B450';

// Small glyphs used in the lattice, each drawn around (0, 0).

const Monogram: FC<{ x: number; y: number }> = ({ x, y }) => (
    <text
    x={x}
    y={y}
    textAnchor='middle'
    dy='9'
    fontFamily="'Fraunces Variable', Georgia, serif"
    fontWeight={600}
    fontSize={26}
    fill='currentColor'
    stroke='none'>
        LM
    </text>
);

const CrossedHammers: FC<{ x: number; y: number }> = ({ x, y }) => (
    <g transform={`translate(${x} ${y})`} strokeLinecap='round'>
        <path d='M -9 9 L 9 -9'/>
        <path d='M -9 -9 L 9 9'/>
        <path d='M 6 -12 L 12 -6'/>
        <path d='M -12 -6 L -6 -12'/>
    </g>
);

const Headframe: FC<{ x: number; y: number }> = ({ x, y }) => (
    <g transform={`translate(${x} ${y})`} strokeLinejoin='round'>
        <path d='M -9 13 L 0 -10 L 9 13'/>
        <path d='M -6 5 L 6 5'/>
        <path d='M -4 -2 L 4 -2'/>
        <circle cx='0' cy='-13' r='3.5' fill='none'/>
    </g>
);

const LatticeDiamond: FC<{ x: number; y: number }> = ({ x, y }) => (
    <path d={`M ${x} ${y - 4} L ${x + 4} ${y} L ${x} ${y + 4} L ${x - 4} ${y} Z`}/>
);

const SurveyCross: FC<{ x: number; y: number }> = ({ x, y }) => (
    <g>
        <path d={`M ${x - 5} ${y} L ${x + 5} ${y}`}/>
        <path d={`M ${x} ${y - 5} L ${x} ${y + 5}`}/>
    </g>
);

const SketchLabel: FC<{ x: number; y: number; children: string; anchor?: string }> = ({ x, y, children, anchor = 'start' }) => (
    <text
    x={x}
    y={y}
    textAnchor={anchor}
    fontFamily="'Cascadia Mono', monospace"
    fontSize={10.5}
    letterSpacing={1.5}
    fill='currentColor'
    stroke='none'>
        {children}
    </text>
);

// Open pit in aerial plan view, traced from a Super Pit-style photograph:
// nested bench crests converging toward the deep end of the pit, a
// switchback haul road, the tailings dam to the north, perimeter roads,
// and the townsite street grid pressed against the rim.
const PIT_CREST = 'M 240 150 C 320 140 380 200 370 280 C 365 340 400 380 390 450 C 380 530 330 590 270 585 C 210 580 170 520 180 450 C 188 395 150 340 160 270 C 168 205 185 158 240 150 Z';

// Benches nest toward the pit's deepest point rather than its centre.
const pitBench = (scale: number) =>
    `translate(285 470) scale(${scale}) translate(-285 -470)`;

const OpenPitSketch: FC = () => (
    <Box
    component='svg'
    viewBox='0 0 520 700'
    aria-hidden='true'
    sx={{
        position: 'absolute',
        top: '6%',
        right: -110,
        width: 480,
        height: 646,
        color: 'rgba(230, 180, 80, 0.08)',
        display: { xs: 'none', md: 'block' }
    }}>
        <g fill='none' stroke='currentColor' strokeWidth={1.5} strokeLinejoin='round'>
            {/* Bench crests stepping down to the pit floor */}
            {[1, 0.86, 0.72, 0.58, 0.45, 0.33, 0.22].map((scale) => (
                <path
                key={scale}
                d={PIT_CREST}
                strokeWidth={1.5 / scale}
                transform={pitBench(scale)}/>
            ))}
            {/* Switchback haul road into the pit */}
            <path
            d='M 350 220 L 300 280 L 350 330 L 295 385 L 330 425 L 290 465'
            strokeDasharray='5 4'/>
            <SketchLabel x={430} y={334}>HAUL ROAD</SketchLabel>
            <path d='M 426 330 L 356 330' strokeWidth={1}/>
            {/* Tailings dam north of the pit */}
            <path d='M 330 62 C 380 42 460 46 490 78 C 512 102 500 130 460 138 C 420 146 350 140 330 114 C 316 96 314 72 330 62 Z'/>
            <path d='M 348 78 C 390 64 448 68 470 88' strokeDasharray='3 5'/>
            <SketchLabel x={508} y={36} anchor='end'>TAILINGS</SketchLabel>
            <path d='M 470 42 L 448 58' strokeWidth={1}/>
            {/* Perimeter roads wandering off toward town */}
            <path d='M 20 380 C 80 360 120 330 158 310'/>
            <path d='M 40 550 C 120 500 160 460 176 432'/>
            {/* Sports oval outside the rim */}
            <ellipse cx='62' cy='300' rx='30' ry='16'/>
            <ellipse cx='62' cy='300' rx='20' ry='9'/>
            {/* Townsite street grid against the rim */}
            <path d='M 30 580 L 150 580'/>
            <path d='M 26 616 L 154 616'/>
            <path d='M 30 652 L 150 652'/>
            <path d='M 56 560 L 56 672'/>
            <path d='M 96 556 L 96 676'/>
            <path d='M 136 560 L 136 672'/>
            <SketchLabel x={30} y={694}>TOWNSITE</SketchLabel>
            {/* Pit label */}
            <SketchLabel x={240} y={112} anchor='middle'>OPEN PIT</SketchLabel>
            <path d='M 240 120 L 240 148' strokeWidth={1}/>
        </g>
    </Box>
);

// Gwalia Deeps long section: the historic open pit at surface, the long
// ribbon of decline development plunging south-west with herringbone
// sublevels and stoping, existing and planned vent shaft pairs, and depth
// callouts down to 2,000 mbs.
const LongSectionSketch: FC = () => (
    <Box
    component='svg'
    viewBox='0 0 640 480'
    aria-hidden='true'
    sx={{
        position: 'absolute',
        bottom: '3%',
        left: -60,
        width: 600,
        height: 450,
        color: 'rgba(230, 180, 80, 0.08)',
        display: { xs: 'none', md: 'block' }
    }}>
        <g fill='none' stroke='currentColor' strokeWidth={1.5} strokeLinejoin='round'>
            {/* Surface */}
            <path d='M 0 60 L 640 60' strokeDasharray='8 6'/>
            <SketchLabel x={8} y={48}>SURFACE</SketchLabel>
            {/* The historic open pit, cut into the top of the orebody */}
            <path d='M 470 60
                     L 490 78 L 504 78
                     L 522 96 L 536 96
                     L 550 112 L 574 112
                     L 588 94 L 596 94
                     L 606 76 L 612 76
                     L 620 60'/>
            <SketchLabel x={545} y={40} anchor='middle'>OPEN PIT</SketchLabel>
            <path d='M 545 46 L 545 78' strokeWidth={1}/>
            {/* Sublevel fan under the pit */}
            <path d='M 455 150 L 560 150'/>
            <path d='M 425 180 L 545 180'/>
            <path d='M 395 210 L 520 210'/>
            {/* Main decline ribbon plunging to the south-west */}
            <path d='M 548 118 C 480 145 455 162 420 186 C 385 210 350 222 312 250 C 274 278 244 290 205 322 C 166 354 125 382 70 430'/>
            {/* Herringbone development off the decline */}
            <path d='M 500 132 L 520 132'/>
            <path d='M 468 152 L 448 152'/>
            <path d='M 438 174 L 458 174'/>
            <path d='M 408 194 L 388 194'/>
            <path d='M 372 212 L 392 212'/>
            <path d='M 340 232 L 320 232'/>
            <path d='M 310 252 L 330 252'/>
            <path d='M 280 272 L 260 272'/>
            <path d='M 250 288 L 270 288'/>
            <path d='M 220 312 L 200 312'/>
            <path d='M 190 332 L 210 332'/>
            <path d='M 158 358 L 138 358'/>
            <path d='M 128 384 L 148 384'/>
            <path d='M 98 408 L 78 408'/>
            {/* Stope blocks along the ribbon */}
            <rect x='426' y='164' width='10' height='7'/>
            <rect x='352' y='214' width='10' height='7'/>
            <rect x='296' y='254' width='10' height='7'/>
            <rect x='236' y='296' width='10' height='7'/>
            <rect x='172' y='344' width='10' height='7'/>
            {/* Existing vent shafts down to the upper workings */}
            <path d='M 310 60 L 310 244'/>
            <path d='M 328 60 L 328 232'/>
            <SketchLabel x={344} y={96}>EXISTING VENTS</SketchLabel>
            <path d='M 340 92 L 320 100' strokeWidth={1}/>
            {/* Planned vent shafts reaching the deeps (dashed, with a dogleg) */}
            <path d='M 150 60 L 150 310 L 186 310 L 186 356' strokeDasharray='5 4'/>
            <path d='M 168 60 L 168 340' strokeDasharray='5 4'/>
            <SketchLabel x={30} y={130}>PLANNED VENTS</SketchLabel>
            <path d='M 100 136 L 148 160' strokeWidth={1}/>
            {/* Orebody continuing at depth */}
            <path d='M 96 400 C 70 416 48 438 40 456 C 58 462 90 452 108 434 C 120 422 118 408 96 400 Z'/>
            {/* Depth callouts */}
            <SketchLabel x={430} y={262}>1,000 mbs</SketchLabel>
            <path d='M 426 258 L 400 246' strokeWidth={1}/>
            <SketchLabel x={300} y={330}>1,500 mbs</SketchLabel>
            <path d='M 296 326 L 268 306' strokeWidth={1}/>
            <SketchLabel x={120} y={470}>2,000 mbs</SketchLabel>
            <path d='M 116 464 L 92 448' strokeWidth={1}/>
            {/* Caption */}
            <SketchLabel x={632} y={470} anchor='end'>GWALIA LONG SECTION</SketchLabel>
        </g>
    </Box>
);

export const PatternBackground: FC = () => (
    <Box
    aria-hidden='true'
    sx={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none'
    }}>
        <Box
        component='svg'
        width='100%'
        height='100%'
        sx={{ display: 'block' }}>
            <defs>
                {/* Fades the canvas pattern out around the two mine sketches
                    so they read clearly against quiet ground. */}
                <radialGradient id='sketch-fade-spot'>
                    <stop offset='0%' stopColor='#000000' stopOpacity='1'/>
                    <stop offset='65%' stopColor='#000000' stopOpacity='0.85'/>
                    <stop offset='100%' stopColor='#000000' stopOpacity='0'/>
                </radialGradient>
                <mask id='sketch-fade'>
                    <rect width='100%' height='100%' fill='#FFFFFF'/>
                    <ellipse cx='94%' cy='32%' rx='420' ry='480' fill='url(#sketch-fade-spot)'/>
                    <ellipse cx='8%' cy='80%' rx='440' ry='360' fill='url(#sketch-fade-spot)'/>
                </mask>
                <pattern
                id='survey-grid'
                width='30'
                height='30'
                patternUnits='userSpaceOnUse'>
                    <path
                    d='M 30 0 L 0 0 0 30'
                    fill='none'
                    stroke='rgba(230, 180, 80, 0.025)'
                    strokeWidth='1'/>
                </pattern>
                <pattern
                id='monogram-lattice'
                width='300'
                height='300'
                patternUnits='userSpaceOnUse'>
                    <g
                    fill='none'
                    stroke={GOLD}
                    strokeWidth='1.2'
                    color={GOLD}
                    opacity='0.05'>
                        {/* Diagonal dashed lattice lines */}
                        <g strokeDasharray='2 6'>
                            <path d='M 0 150 L 150 0'/>
                            <path d='M 0 300 L 300 0'/>
                            <path d='M 150 300 L 300 150'/>
                            <path d='M 150 0 L 300 150'/>
                            <path d='M 0 0 L 300 300'/>
                            <path d='M 0 150 L 150 300'/>
                        </g>
                        {/* Ornaments at lattice crossings */}
                        <g fill={GOLD} stroke='none'>
                            <LatticeDiamond x={75} y={75}/>
                            <LatticeDiamond x={225} y={75}/>
                            <LatticeDiamond x={75} y={225}/>
                            <LatticeDiamond x={225} y={225}/>
                        </g>
                        <SurveyCross x={150} y={150}/>
                        <SurveyCross x={0} y={0}/>
                        <SurveyCross x={300} y={0}/>
                        <SurveyCross x={0} y={300}/>
                        <SurveyCross x={300} y={300}/>
                        {/* Cell motifs — one monogram per tile, the rest
                            mining glyphs and breathing room */}
                        <Monogram x={150} y={75}/>
                        <Headframe x={150} y={225}/>
                        <CrossedHammers x={75} y={150}/>
                        <CrossedHammers x={225} y={150}/>
                        {/* Edge cells (drawn on both sides for a seamless wrap) */}
                        <CrossedHammers x={75} y={0}/>
                        <CrossedHammers x={75} y={300}/>
                        <CrossedHammers x={225} y={0}/>
                        <CrossedHammers x={225} y={300}/>
                        <Headframe x={0} y={75}/>
                        <Headframe x={300} y={75}/>
                    </g>
                </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#survey-grid)' mask='url(#sketch-fade)'/>
            <rect width='100%' height='100%' fill='url(#monogram-lattice)' mask='url(#sketch-fade)'/>
        </Box>
        <OpenPitSketch/>
        <LongSectionSketch/>
    </Box>
);
