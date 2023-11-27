import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Subtitle } from "./subtitles";
import { useTheme } from "@emotion/react";
import Image from 'next/image';

interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
}

const projects: Project[] = [
	{
		id: "ibt-module",
		title: "IBT Deswik Module",
		description: "IBT Mining gained a significant edge with a custom Deswik module that simplifies surveyed hole data processing. Previously, the tedious task involved transferring data between Deswik and multiple Excel sheets. Now, everything is seamlessly handled within Deswik.CAD, reducing processing time to seconds. This streamlined workflow enhances efficiency, allowing IBT Mining to focus on strategic decisions rather than data management complexities",
		image: "/assets/ibt-module-combined.png",
	},
	{
		id: "deswik-process-maps",
		title: "Deswik Process Maps",
		description: "My Deswik process maps redefine efficiency in mining operations. By crafting modules that connect seamlessly to remote databases, I've eliminated the need for laborious Excel exports, streamlining data uploads effortlessly. Additionally, my innovative process map ensures reliable export of drill holes to ring setouts for surveys, saving valuable time by eliminating the 20-minute data processing tasks. Furthermore, I've designed modules that automate the setup of drill holes for straightforward timing plans in underground spaces. These customized Deswik process maps not only enhance precision but also revolutionize workflows, ensuring a significant boost in productivity across various facets of mining operations",
		image: "/assets/deswik-process-maps.png",
	},
	{
		id: "sarastar",
		title: "Sarastar",
		description: "Sarastar, a cutting-edge CAD software redefining design efficiency. This program stands out with its commitment to speed and robust performance, boasting a massive multi-threaded architecture. Inspired by industry giants like Blender, Godot, and Unreal Engine, Sarastar incorporates a sophisticated node-graph-based automation system, empowering end-users with unparalleled design capabilities. With a focus on speed, scalability, and user-friendly automation, Sarastar sets a new standard in CAD software, revolutionizing the way designers approach their projects",
		image: "/assets/node-graph-editor.png",
	}
];

export const HomeProjects: FC = () => {
	const theme = useTheme();
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
					number='03'
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
											backgroundColor: 'primary.alpha12',
											boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
											color: 'common.white'
										}),
										'&:hover': {
											...(!isActive && {
												backgroundColor: 'primary.alpha4',
												boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
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
							alt='Image'
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