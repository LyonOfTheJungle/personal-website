import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Subtitle } from "./subtitles";

interface SkillCategory {
    title: string;
    skills: string[];
}

const categories: SkillCategory[] = [
    {
        title: 'Mining Engineering',
        skills: [
            'Scheduling',
            'Backfill',
            'Ventilation',
            'Drill & Blast Design',
            'Underground Planning'
        ]
    },
    {
        title: 'Software Development',
        skills: [
            'C#',
            'TypeScript',
            '.NET',
            'React / Next.js',
            'Multithreading',
            'Node-Graph Systems'
        ]
    },
    {
        title: 'Tools & Platforms',
        skills: [
            'Deswik.CAD',
            'Deswik Process Maps',
            'SQL',
            'Git / GitHub',
            'Vercel'
        ]
    }
];

export const HomeSkills: FC = () => {
    return (
        <Box
        id='skills'
        sx={{ py: '80px' }}>
            <Container maxWidth='lg'>
                <Subtitle
                number='02'
                title='Skills'/>
                <Grid
                container
                spacing={3}>
                    {categories.map((category) => (
                        <Grid
                        key={category.title}
                        item={true}
                        xs={12}
                        md={4}>
                            <Box
                            sx={{
                                backgroundColor: 'background.paper',
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 2.5,
                                height: '100%',
                                p: 3,
                                transition: (theme) => theme.transitions.create(
                                    ['border-color'],
                                    {
                                        easing: theme.transitions.easing.easeOut,
                                        duration: theme.transitions.duration.enteringScreen
                                    }
                                ),
                                '&:hover': {
                                    borderColor: 'primary.alpha50'
                                }
                            }}>
                                <Typography
                                variant='subtitle1'
                                color='primary.main'
                                sx={{ mb: 2 }}>
                                    {category.title}
                                </Typography>
                                <Stack
                                direction='row'
                                sx={{ flexWrap: 'wrap', gap: 1 }}
                                useFlexGap>
                                    {category.skills.map((skill) => (
                                        <Chip
                                        key={skill}
                                        label={skill}
                                        variant='outlined'
                                        sx={{
                                            borderColor: 'primary.alpha30',
                                            color: 'text.primary',
                                            '&:hover': {
                                                backgroundColor: 'primary.alpha12',
                                                borderColor: 'primary.main'
                                            }
                                        }}/>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
