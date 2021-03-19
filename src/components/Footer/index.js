import cls from './Footer.module.css'
import LogoWhite from '../../Photos/Logo/logowhite.png'

const Footer = () =>{
    return(
        <>
            <footer>
                <div className={cls.footerBlackBackground}>
                    <div className={cls.footerCenter}>
                        <div className={cls.footerInline}>
                            <ul className={cls.footerLogo}>
                                <li>
                                    <a href="">
                                        <img src={LogoWhite}/>
                                    </a>
                                </li>
                            </ul>
                            <ul className={cls.footerProducts}> 
                                <h2>
                                    Продукты
                                </h2>
                                <li>
                                    <a href="">
                                        Все продукции
                                    </a>
                                </li>
                            </ul>
                            <ul className={cls.footerAbout}> 
                                <h2>
                                    О нас
                                </h2>
                                <li>
                                    <a href="">
                                        Наша история
                                    </a>
                                </li>
                            </ul>
                            <ul className={cls.footerNews}>
                                <h2>Новости</h2>
                                <li>
                                    <a href="">
                                        Новости завода
                                    </a>
                                </li>
                            </ul>
                            <ul className={cls.footerContacts}>
                                <h2>Контакты</h2>
                                <li>
                                    <a href="">
                                        <i className="fa fa-map"></i>
                                        Ак-Тилек
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Форма обратной связи
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-phone"></i>
                                        +996 (990) 980 980
                                    </a>
                                </li>
                                <ul className={cls.footerContactsIcons}>
                                    <li>
                                        <a href="">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fab fa-telegram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className={cls.footerbottom}>
                        <ul>
                            <li>
                                Copyright © 1992-2021 Kyrgyz Unaa Kurulush. All rights reserved
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;