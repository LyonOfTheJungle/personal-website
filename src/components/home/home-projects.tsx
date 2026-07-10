import { Box, Chip, Container, Grid, Stack, Typography, Button } from "@mui/material";
import { FC, useState } from "react";
import { Subtitle } from "./subtitles";
import Image from 'next/image';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	tags: string[];
	url?: string;
}

const projects: Project[] = [
	{
		id: "ibt-module",
		title: "IBT Deswik Module",
		description: "A custom Deswik module that simplifies surveyed hole data processing for IBT Mining. What previously meant shuffling data between Deswik and multiple Excel sheets is now handled entirely within Deswik.CAD, cutting processing time down to seconds.",
		image: "/assets/ibt-module-combined.png",
		tags: ["Deswik", "C#"],
	},
	{
		id: "deswik-process-maps",
		title: "Deswik Process Maps",
		description: "Process maps and modules that connect Deswik directly to remote databases, eliminating laborious Excel exports. They reliably export drill holes to ring setouts for surveys and automate drill hole setup for underground timing plans, removing 20-minute manual processing tasks.",
		image: "/assets/deswik-process-maps.png",
		tags: ["Deswik", "SQL"],
	},
	{
		id: "sarastar",
		title: "Sarastar",
		description: "A CAD package built for speed, with a heavily multi-threaded architecture. Inspired by Blender, Godot, and Unreal Engine, Sarastar features a node-graph-based automation system that gives end-users powerful design and automation capabilities.",
		image: "/assets/node-graph-editor.png",
		tags: ["C#", "CAD", "Node Graphs"],
		url: "https://sarastar.com.au"
	}
];

export const HomeProjects: FC = () => {
	const [activeProject, setActiveProject] = useState<number>(0);
	const project = projects[activeProject];
	const image = project.image;

    return (
		<Box
		id='projects'
		sx={{
			backgroundColor: 'neutral.800',
			py: '80px'
		}}>
			<Container
			maxWidth='lg'>
				<Stack
				spacing={2}
				sx={{ mb: 8 }}>
					<Subtitle
					number='04'
					title='Projects'/>
				</Stack>
				<Grid
				container
				alignItems='center'
				display='flex'
				alignContent='center'
				spacing={3}>
					<Grid
					item={true}
					xs={12}
					md={6}>
						<Stack
						spacing={2}>
							{projects.map((project, index) => {
								const isActive = activeProject === index;

								return (
									<Box
									key={project.id}
									onClick={() => setActiveProject(index)}
									sx={{
										backgroundColor: 'background.paper',
										border: '1px solid',
										borderColor: 'divider',
										borderLeft: '3px solid',
										borderLeftColor: 'divider',
										borderRadius: 2.5,
										color: 'neutral.400',
										cursor: 'pointer',
										p: 3,
										transition: (theme) => theme.transitions.create(
											['background-color, box-shadow', 'color'],
											{
												easing: theme.transitions.easing.easeOut,
												duration: theme.transitions.duration.enteringScreen
											}
										),
										...(isActive && {
											borderColor: 'primary.main',
											borderLeftColor: 'primary.main',
											boxShadow: '0 0 24px rgba(230, 180, 80, 0.12)',
											color: 'common.white'
										}),
										'&:hover': {
											...(!isActive && {
												backgroundColor: 'primary.alpha4',
												borderColor: 'primary.alpha50',
												borderLeftColor: 'primary.alpha50',
												color: 'common.white'
											})
										}
									}}>
										<Typography
										color='inherit'
										sx={{ mb: 1 }}
										variant='subtitle1'>
											{project.title}
										</Typography>
										<Typography
										color='inherit'
										variant='body2'>
											{project.description}
										</Typography>
										<Stack
										direction='row'
										spacing={1}
										sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}
										useFlexGap>
											{project.tags.map((tag) => (
												<Chip
												key={tag}
												label={tag}
												size='small'
												variant='outlined'
												sx={{
													borderColor: 'primary.alpha30',
													color: 'inherit'
												}}/>
											))}
										</Stack>
										{project.url && (
											<Button
											variant='contained'
											color='primary'
											endIcon={<OpenInNewIcon />}
											href={project.url}
											target='_blank'
											rel='noopener noreferrer'
											sx={{ mt: 2 }}>
												Visit Sarastar
											</Button>
										)}
									</Box>
								);
							})}
						</Stack>
					</Grid>
					<Grid
					item={true}
					xs={12}
					md={6}>
						<Box
						sx={{
							width: '100%',
							height: '600px',
							position: 'relative',
						}}>
							<Image
							src={image}
							fill
							alt={project.title}
							quality={90}
							style={{
								objectFit: 'contain'
							}}>
							</Image>

						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
    );
};
