import * as React from 'react'
import './App.css';
import './style.css'
import { Modal } from 'react-bootstrap';
const about = () => {
    return (
		<div className="page">
			<div className="">
				<div className="info">
					<div className="info__item">
						<div className="photo">
							<div className="photo__item">
								<img src='https://imgur.com/nFgnGMP.png' />
							</div>
						</div>
						<div className="profile">
							<div className="profile__title title1">Profile</div>
							<div className="profile__text">I`m 21 years old, living in Chernivtsi, Ukraine. For whole my life i was
								always interested in Computer Science and tried to understand how to use this passion in future.
								When i had to decide which profession would accomplish earning money and doing what i love most
								i
								found out that Department of Computer Science in Institute of Physical, Technical and Computer
								Sciences would be the best decision. I always trying to learn new information from everywhere:
								from
								university, from different internet sources etc. I really think that your company is the best
								variant for me, because it`s a great experience, new connections and my possibility of career
								development. Moreover, I would like to work in team because of my sociable skills and leader
								qualities. I can perceive a new information and use it as quick as it possible.
							</div>
						</div>
						<div className="contact">
							<div className="contact__title title1">Contact</div>
							<div className="contact__phone">+380956446876</div>
							<div className="contact__address">Chernivtsi, Heroiv Maidanu st., 93 </div>
							<div className="contact__index">58013</div>
							<a href="mailto:korolenkovitya92@gmail.com" className="contact__email">korolenkovitya92@gmail.com</a>
							<a href="https://www.instagram.com/viktor__braus/" className="contact__insta">Instagram</a>
						</div>

					</div>

					<div className="info__item">
						<div className="education">
							<div className="education__title title1">Education</div>
							<div className="education__uni">CHERNIVTSI NATIONAL UNIVERSITY</div>
							<div className="education__spec">2017 - 2021 | Computer Science </div>
							<div className="education__school">Chernivtsi gymnasia №7 • 2006-2017 </div>
							<div className="education__type">Secondary Education</div>
						</div>
						<div className="experience">
							<div className="experience__title title1">Experience</div>
							<div className="experience__work">"Latte" Cafe, jun 2018 - aug 2018 <br/>Barista</div>
						</div>
						<div className="hobbies">
							<div className="hobbies__title title1">Hobbies</div>
							<ul className="hobbies__list">
								<li>Singer</li>
								<li>Drawing</li>
								<li>Recording and publishing videos</li>
								<li>Blogging</li>
							</ul>
						</div>
						<div className="skills">
							<div className="skills__title title1">Skills</div>
							<div className="skills__body">
								<div className="skills__name">HTML</div>
								<div className="skills__point">
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="empty"></div>
									<div className="empty"></div>
								</div>
							</div>
							<div className="skills__body">
								<div className="skills__name">CSS</div>
								<div className="skills__point">
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="empty"></div>
									<div className="empty"></div>
								</div>
							</div>
							<div className="skills__body">
								<div className="skills__name">Photoshop</div>
								<div className="skills__point">
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
								</div>
							</div>
							<div className="skills__body">
								<div className="skills__name">Git</div>
								<div className="skills__point">
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
								</div>
							</div>
							<div className="skills__body">
								<div className="skills__name">C#</div>
								<div className="skills__point">
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
								</div>
							</div>
							<div className="skills__body">
								<div className="skills__name">JavaScript</div>
								<div className="skills__point">
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
								</div>
							</div>
							<div className="skills__body">
								<div className="skills__name">English</div>
								<div className="skills__point">
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="empty"></div>
								</div>
							</div>
							<div className="skills__body">
								<div className="skills__name">Postman</div>
								<div className="skills__point">
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
								</div>
							</div>
							<div className="skills__body">
								<div className="skills__name">Sql, MySql</div>
								<div className="skills__point">
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
								</div>
							</div>
							<div className="skills__body">
								<div className="skills__name">PostgreSql</div>
								<div className="skills__point">
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
								</div>
							</div>
							<div className="skills__body">
								<div className="skills__name">Python</div>
								<div className="skills__point">
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="circle"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
									<div className="empty"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
export default about;