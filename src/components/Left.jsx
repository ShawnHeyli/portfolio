import './styles/Left.scss';

export default function Left() {
	localStorage.setItem('theme', 'LeftDark');
	return (
		<section className='Left'>
			<div className='Top'>
				<ul className='SocialList'>
					<li className='SocialListItem'>
						<a className='SocialListItemLink' href='https://www.krvin.com/'>
							Github
						</a>
					</li>
					<li className='SocialListItem'>
						<a className='SocialListItemLink' href='https://www.krvin.com/'>
							Linkedin
						</a>
					</li>
				</ul>
				<ul className='SocialList'>
					<li className='SocialListItem'>
						<a className='SocialListItemLink' href='https://www.krvin.com/'>
							Email
						</a>
					</li>
					<li className='SocialListItem'>
						<a className='SocialListItemLink' href='https://www.krvin.com/'>
							Mon CV
						</a>
					</li>
				</ul>
			</div>
			<h1 className='Title'>Hilan Meyran</h1>

			<div className='Bottom'>
				<p className='quickDesc'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil omnis
					distinctio fuga, qui eaque eveniet ipsa voluptates recusandae
					veritatis nesciunt cumque beatae in facere, blanditiis ab numquam
					deleniti similique sunt.
				</p>
				<p className='quickSkills'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil omnis
					distinctio fuga, qui eaque eveniet ipsa voluptates recusandae
					veritatis nesciunt cumque beatae in facere, blanditiis ab numquam
					deleniti similique sunt.
				</p>
			</div>
		</section>
	);
}
