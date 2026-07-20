import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { FC } from "react";
import { Subtitle } from "./subtitles";
import Image from 'next/image';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { bandCardSx } from "../card-styles";

const MonoKeywords: FC<{ children: string; mb?: number }> = ({ children, mb = 0 }) => (
	<Typography
	variant='caption'
	color='primary.main'
	sx={{
		display: 'block',
		mb,
		fontFamily: '\'Cascadia Mono\', monospace',
		letterSpacing: '0.05em'
	}}>
		{children}
	</Typography>
);

interface FeatureShotProps {
	mainSrc: string;
	mainAlt: string;
	overlaySrc: string;
	overlayAlt: string;
	overlaySide: 'left' | 'right';
}

// A main screenshot with a smaller second shot overlapping one bottom corner.
const FeatureShot: FC<FeatureShotProps> = ({ mainSrc, mainAlt, overlaySrc, overlayAlt, overlaySide }) => (
	<Box sx={{ position: 'relative' }}>
		<Box
		sx={{
			position: 'relative',
			height: { xs: 260, md: 380 },
			borderRadius: 3,
			overflow: 'hidden',
			border: '1px solid',
			borderColor: 'divider'
		}}>
			<Image
			src={mainSrc}
			fill
			alt={mainAlt}
			quality={90}
			style={{ objectFit: 'cover', objectPosition: 'top left' }}/>
		</Box>
		<Box
		sx={{
			position: 'absolute',
			bottom: -18,
			[overlaySide]: -18,
			width: '44%',
			aspectRatio: '16 / 10',
			borderRadius: 2,
			overflow: 'hidden',
			border: '4px solid #262B33',
			boxShadow: '0px 24px 32px -16px rgba(8, 10, 14, 0.6)',
			display: { xs: 'none', sm: 'block' }
		}}>
			<Image
			src={overlaySrc}
			fill
			alt={overlayAlt}
			quality={90}
			style={{ objectFit: 'cover', objectPosition: 'top left' }}/>
		</Box>
	</Box>
);

export const HomeProjects: FC = () => {
    return (
		<Box
		id='projects'
		sx={{
			py: '60px'
		}}>
			<Container
			maxWidth='lg'>
				<Box
				sx={[
					bandCardSx,
					{
						px: { xs: 3, sm: 5, md: 6 },
						py: { xs: 4, sm: 5, md: 6 }
					}
				]}>
					<Subtitle
					number='04'
					title='Projects'/>

					{/* Sarastar — feature */}
					<Grid
					container
					alignItems='center'
					spacing={4}
					sx={{ mb: 7 }}>
						<Grid
						item={true}
						xs={12}
						md={5}>
							<Typography
							variant='h4'
							sx={{ mb: 2 }}>
								Sarastar
							</Typography>
							<Typography
							color='neutral.400'
							variant='body2'
							sx={{ mb: 2 }}>
								A CAD package built for speed, with a heavily multi-threaded C++ core. Inspired by Blender, Godot, and Unreal Engine, Sarastar features a node-graph-based automation system that gives end-users powerful design and automation capabilities &mdash; here running a live underground ring design.
							</Typography>
							<MonoKeywords mb={3}>C++ · CAD · Node Graphs</MonoKeywords>
							<Button
							variant='contained'
							color='primary'
							endIcon={<OpenInNewIcon/>}
							href='https://sarastar.com.au'
							target='_blank'
							rel='noopener noreferrer'>
								Visit Sarastar
							</Button>
						</Grid>
						<Grid
						item={true}
						xs={12}
						md={7}>
							<FeatureShot
							mainSrc='/assets/sarastar-cad.png'
							mainAlt='Sarastar.CAD editing an underground drill and blast plan'
							overlaySrc='/assets/sarastar-home.png'
							overlayAlt='Sarastar home dashboard'
							overlaySide='left'/>
						</Grid>
					</Grid>

					{/* IBT Survey Portal — feature, mirrored */}
					<Grid
					container
					alignItems='center'
					spacing={4}
					sx={{ mb: 5 }}>
						<Grid
						item={true}
						xs={12}
						md={7}
						sx={{ order: { xs: 2, md: 1 } }}>
							<FeatureShot
							mainSrc='/assets/ibt-drill-plan.png'
							mainAlt='IBT Survey Portal drill plan view with 3D hole viewer'
							overlaySrc='/assets/ibt-map.png'
							overlayAlt='IBT Survey Portal site map of Western Australia'
							overlaySide='right'/>
						</Grid>
						<Grid
						item={true}
						xs={12}
						md={5}
						sx={{ order: { xs: 1, md: 2 } }}>
							<Typography
							variant='h4'
							sx={{ mb: 2 }}>
								IBT Survey Portal
							</Typography>
							<Typography
							color='neutral.400'
							variant='body2'
							sx={{ mb: 2 }}>
								A web portal built for IBT Mining on top of the IBT Deswik module &mdash; drill plans, surveyed holes, QC metrics, rigs, and drillers managed in one place across dozens of Western Australian sites, instead of scattered spreadsheets.
							</Typography>
							<MonoKeywords>React · TypeScript</MonoKeywords>
						</Grid>
					</Grid>

					{/* Smaller projects as editorial rows */}
					<Grid
					container
					sx={{
						py: 3,
						px: 3,
						mx: -3,
						width: 'auto',
						borderTop: '1px solid',
						borderColor: 'divider',
						alignItems: 'center',
						transition: 'background-color 200ms ease, box-shadow 200ms ease',
						'&:hover': {
							backgroundColor: 'rgba(230, 180, 80, 0.04)',
							boxShadow: 'inset 2px 0 0 rgba(230, 180, 80, 0.55)'
						}
					}}>
						<Grid
						item={true}
						xs={12}
						md={4}
						sx={{ mb: { xs: 1, md: 0 }, pr: 3 }}>
							<Typography variant='h6'>
								IBT Deswik Module
							</Typography>
							<MonoKeywords>Deswik · C#</MonoKeywords>
						</Grid>
						<Grid
						item={true}
						xs={12}
						md={5}
						sx={{ mb: { xs: 2, md: 0 }, pr: { md: 3 } }}>
							<Typography
							variant='body2'
							color='neutral.400'>
								A custom Deswik module that simplifies surveyed hole data processing for IBT Mining. What previously meant shuffling data between Deswik and multiple Excel sheets is now handled entirely within Deswik.CAD, cutting processing time down to seconds.
							</Typography>
						</Grid>
						<Grid
						item={true}
						xs={12}
						md={3}>
							<Box
							sx={{
								position: 'relative',
								height: 110,
								borderRadius: 2,
								overflow: 'hidden',
								border: '1px solid',
								borderColor: 'divider'
							}}>
								<Image
								src='/assets/ibt-module-combined.png'
								fill
								alt='IBT Deswik module survey hole processing panels'
								style={{ objectFit: 'cover', objectPosition: 'top' }}/>
							</Box>
						</Grid>
					</Grid>

					<Grid
					container
					sx={{
						py: 3,
						px: 3,
						mx: -3,
						width: 'auto',
						borderTop: '1px solid',
						borderColor: 'divider',
						transition: 'background-color 200ms ease, box-shadow 200ms ease',
						'&:hover': {
							backgroundColor: 'rgba(230, 180, 80, 0.04)',
							boxShadow: 'inset 2px 0 0 rgba(230, 180, 80, 0.55)'
						}
					}}>
						<Grid
						item={true}
						xs={12}
						md={4}
						sx={{ mb: { xs: 1, md: 0 }, pr: 3 }}>
							<Typography variant='h6'>
								Deswik Process Maps
							</Typography>
							<MonoKeywords>Deswik · SQL</MonoKeywords>
						</Grid>
						<Grid
						item={true}
						xs={12}
						md={8}>
							<Typography
							variant='body2'
							color='neutral.400'
							sx={{ maxWidth: 620 }}>
								Process maps and modules that connect Deswik directly to remote databases, eliminating laborious Excel exports. They reliably export drill holes to ring setouts for surveys and automate drill hole setup for underground timing plans, removing 20-minute manual processing tasks.
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
    );
};
