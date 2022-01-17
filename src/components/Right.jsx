import Card from './Card';
import projects from '../data/Projects.json';
import './styles/Right.scss';

export default function Right() {
	return (
		<section className='Right'>
			{projects.map((project) => {
				let cardSize;
				switch (project.size.toLowerCase()) {
					case 'normal':
						cardSize = 'Normal';
						break;
					case 'tall':
						cardSize = 'Tall';
						break;
					case 'wide':
						cardSize = 'Wide';
						break;
					default:
						console.error(
							'Wrong card size in .json' + project.size.toLowerCase()
						);
						break;
				}

				return (
					<Card key={project.id} cardSize={cardSize}>
						<Card.Body>
							<Card.Type>{project.type}</Card.Type>
							<Card.Title>{project.title}</Card.Title>
							<Card.Description>{project.description}</Card.Description>
							<div className='links'>
								<Card.ProjectLink href={project.projectLink}>
									Site Web
								</Card.ProjectLink>
								<Card.SourceLink href={project.sourceLink}>
									Code Source
								</Card.SourceLink>
							</div>
							<Card.Languages>{project.languages}</Card.Languages>
						</Card.Body>
						{/*
						<Card.Image src={project.image} alt='image'></Card.Image>
            */}
					</Card>
				);
			})}
		</section>
	);
}
