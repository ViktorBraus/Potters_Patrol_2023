import React from 'react'
import { Modal } from 'react-bootstrap';
const footer = () =>
{
    return(
        <footer>
            <div className="xz mt-3 mb-5">
                <div className="col-md-8 col-sm-6" style={{ color: "#AB9C9C " }}>
                    <h3 style={{ textTransform: "uppercase" }}>Про нас</h3>
                    <p>
                        На <span style={{ fontWeight: 700, fontSize: 18 }}> Potter`s Patrol  </span> ви маєте можливість поринути у світ Гаррі Поттера,
                        дізнатись про його основні частини,
                        а також створити власний профіль, пройти тест на вибір власного факультета, палички та патронуса і звичайно, обговорити теми, що вас цікавлять з іншими чарівниками
          </p>
                    <p>
                        Просто пориньте у магію всесвіту Гаррі Поттера та станьте справжнім чарівником!!!
          </p>

                </div>
                <div className="col-md-4 col-sm-5" style={{ color: "#AB9C9C ", padding:0 }}>
                    <h3 style={{ textTransform: "uppercase" }}>Підтримуй зв’язок</h3>
                    <ul className="list-unstyled">
                        <li>
                            <p>
                                <i className="fas fa-map-marker-alt"></i> <span className="contacts">Адреса:</span> {"Україна, Чернівці | Київ "}
                            </p>
                        </li>
                        <li>
                            <p>
                                <i className="fas fa-phone"></i> <span className="contacts">Телефон:</span> {" +380 95 644 6876"}
                            </p>
                        </li>
                        <li>
                            <p>
                                <i className="fas fa-envelope"></i> <span className="contacts">Email:</span> {"korolenkovitya92@gmail.com"}
                            </p>
                        </li>
                        <li className="social">
                            <a className='btn btn-social-icon btn-lg btn-instagram' href="https://www.instagram.com/viktor__braus/" target="_blank"><i className="fa fa-instagram"></i></a>
                            <a className='btn btn-social-icon btn-lg btn-twitter' href=""><i className="fa fa-twitter" target="_blank"></i></a>
                            <a className='btn btn-social-icon btn-lg btn-google' href=""><i className="fa fa-google" target="_blank"></i></a>
                            <a className='btn btn-social-icon btn-lg btn-facebook' href="https://www.facebook.com/Derekandkoral"><i className="fa fa-facebook" target="_blank"></i></a>
                        </li>
                    </ul>
                    </div>
            </div>
</footer>
    )
}
export default footer;