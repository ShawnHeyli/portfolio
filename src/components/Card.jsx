import classNames from 'classnames';

export default function Card({ cardSize, children }) {
	const className = classNames('card' + cardSize, 'card');
	return <div className={className}>{children}</div>;
}

Card.Body = function CardBody({ children }) {
	return <div className='cardBody'>{children}</div>;
};

Card.Type = function CardType({ children }) {
	return <p className='cardType'>{children}</p>;
};

Card.Title = function CardTitle({ children }) {
	return <h2 className='cardTitle'>{children}</h2>;
};

Card.Description = function CardDescription({ children }) {
	return <p className='cardDescription'>{children}</p>;
};

Card.ProjectLink = function CardProjectLink({ href, children }) {
	return (
		<a href={href} className='cardProjectLink'>
			{children}
		</a>
	);
};

Card.SourceLink = function CardSourceLink({ href, children }) {
	return (
		<a href={href} className='cardSourceLink'>
			{children}
		</a>
	);
};

Card.Languages = function CardLanguages({ children }) {
	return <p className='cardLanguages'>{children}</p>;
};

Card.Image = function CardImage({ src, alt }) {
	return (
		<div className='cardImage'>
			<img src={src} alt={alt} />
		</div>
	);
};
