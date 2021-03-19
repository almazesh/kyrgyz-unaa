import cls from './Navbar.module.css'
import Logo from '../../Photos/Logo/LOGO-1 1.png'

const Navbar = () =>{
    return (
        <>  

            <div className={cls.topHeader}>
                <div className={cls.topHeaderInline}>
                    <ul className={cls.topHeaderContacts}>
                        <li>
                            <a href="">
                                <i className="fa fa-phone"></i>
                                <span className={cls.phone}>
                                    +996 (990) 980 980
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa fa-clock"></i>
                                <span className={cls.clock}>
                                   08:00 - 18:00
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul className={cls.topHeaderIcons}>
                        <li>
                            <a href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fab fa-whatsapp"></i>
                            </a> 
                        </li>
                    </ul>
                    <ul className={cls.topHeaderLang}>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                RU
                            </a>
                            <ul class="dropdown-menu bg-dark text-center" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">ENG</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <nav className={cls.header + " navbar navbar-expand-lg  navbar-light "}>
                <div className={cls.nav + ' container'}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <ul className={cls.logoBlock}>
                            <li>
                                <a className={cls.logo +" navbar-brand"} href="#">
                                    <img src={Logo} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={cls.headerList}>
                            <li className={cls.headerListDropDown}>
                                    <span>Продукты</span>
                                    <i className="fa fa-angle-down"></i>
                                    <ul className={cls.dropDownChild}>
                                        <h4>Все продукции</h4>
                                        <li>
                                            <a href="">
                                                Гидротурбины
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Машина скорой помощи
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Лифты
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Трансформаторы
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Услуги
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Электросчетчики
                                            </a>
                                        </li>
                                    </ul>
                            </li>
                            <li>
                                <a href="">
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Новости
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Сертификаты
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;