import './styles/Left.scss';

export default function Left() {
	localStorage.setItem('theme', 'LeftDark');
	return (
		<section className='Left'>
			<div className='Top'>
				<ul className='SocialList'>
					<li className='SocialListItem'>
						<a
							className='SocialListItemLink'
							href='https://github.com/ShawnHeyli'
						>
							Github
						</a>
					</li>
					<li className='SocialListItem'>
						<a
							className='SocialListItemLink'
							href='https://fr.linkedin.com/in/hilan-meyran-448868220'
						>
							Linkedin
						</a>
					</li>
				</ul>
				<ul className='SocialList'>
					<li className='SocialListItem'>
						<a
							className='SocialListItemLink'
							href='mailto:hilanmeyran@protonmail.com'
						>
							Email
						</a>
					</li>
					<li className='SocialListItem'>
						<a
							className='SocialListItemLink'
							href='https://icedrive.net/s/TDw6ag55w32ZPx1Tbtzag6gbTWQQ'
						>
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
