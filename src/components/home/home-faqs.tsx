import { Box, Collapse, Container, Grid, Stack, SvgIcon, Typography } from '@mui/material';
import { useState, type FC } from 'react';

import { FaChevronRight, FaChevronDown } from 'react-icons/fa6';

interface FaqType {
    question: string;
    answer: string;
}

const faqs: FaqType[] = [
    {
        question: 'Do you?',
        answer: 'Yes'
    }
];

interface FaqProps {
    answer: string;
    question: string;
}

const Faq: FC<FaqProps> = (props) => {
    const { answer, question } = props;
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <Stack
        onClick={() => setExpanded((prevState) => !prevState)}
        spacing={2}
        sx={{ cursor: 'pointer' }}>
            <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
            spacing={2}>
                <Typography>
                    {question}
                </Typography>
                <SvgIcon>
                    {expanded ? <FaChevronDown/> : <FaChevronRight/>}
                </SvgIcon>
            </Stack>
            <Collapse in={expanded}>
                <Typography
                color='text.secondary'
                variant='body2'>
                    {answer}
                </Typography>
            </Collapse>
        </Stack>
    )
};

export const HomeFaqs: FC = () => {
    return (
        <Box
        sx={{ py: '120px' }}>
            <Container
            maxWidth='lg'>
                <Grid
                container
                spacing={4}>
                    <Grid
                    xs={12}
                    md={6}>
                        <Stack
                        spacing={2}>
                            <Typography
                            variant='h3'>
                                Everything you need to know
                            </Typography>
                            <Typography
                            color='text.secondary'
                            variant='subtitle1'>
                                Frequently asked questions
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid
                    xs={12}
                    md={6}>
                        <Stack
                        spacing={4}>
                            {faqs.map((faq, index) => (
                                <Faq
                                key={index}
                                {...faq}/>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}