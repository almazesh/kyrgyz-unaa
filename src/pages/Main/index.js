import mainBanner1 from '../../Photos/main/main-bg.jpeg';
import cls from './Main.module.css';
import Buss from '../../Photos/main/electrobus.jpg';
const Main = () =>{
    return(
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class={cls.carouselImg1 +" carousel-item active"}>
                        <div className={cls.carouselOneText}>
                            <h1>КЫРГЫЗ УНАА КУРУЛУШ</h1>
                        </div>
                    </div>
                    <div class={cls.carouselImg2 + " carousel-item"}>
                        <div className={cls.carouselTwoText}>
                            <h1>ПЕРВЫЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД
                            В КЫРГЫЗСКОЙ РЕСПУБЛИКЕ</h1>
                        </div>
                    </div>
                    <div class={cls.carouselImg3 + " carousel-item"}>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                </button>
            </div>
            
                {/* MISSION */}

            <div className={cls.OurMissionPart}>
                <div className={cls.OurMissionInline}>
                    <div className={cls.leftSideMission}>
                        <div className={cls.leftSideContent}>
                            <img src={Buss}/>
                            <div>
                                <h6>Электроавтобус КЫРГЫЗ УНАА КУРУЛУШ</h6>
                            </div>
                        </div>
                    </div>
                    <div className={cls.rightSideMission}>
                        <div className={cls.rightSideContent}>
                            <h4>Наша миссия</h4>
                            <p>
                            Бережливое производство, непрерывный контроль качества, ставка на экологичность технологических процессов, уважительное отношение к партнерам и сотрудникам для завоевания и удержания лидирующей позиции и деловой репутации на рынке.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
       
                {/* Our Products */}

            <div className={cls.ourPoductsMain}>
                <div className={cls.ourProductsTitle}>
                    <h1>Наши продукты</h1>
                </div>
                <div className={cls.ourPoductsInlineMain}>
                    <div className={cls.cardPoductsMain}>
                        <div className={cls.contentBottomProductsMain}>
                            <p>Машина скорой помощи</p>
                        </div>
                        <div className={cls.imgTopPoductsMain}>

                        </div>
                        <div className={cls.productsContentMain}>
                            <p>
                                 Изготовление и производство автомобилей скорой помощи класса «В» на базе Ford Transit и ГАЗель Собол...
                            </p>
                            <div className={cls.productsMainButton}>
                                <a href="">
                                    Подробнее...
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={cls.cardPoductsMain}>
                        <div className={cls.contentBottomProductsMain}>
                            <p>Машина скорой помощи</p>
                        </div>
                        <div className={cls.imgTopPoductsMain}>

                        </div>
                        <div className={cls.productsContentMain}>
                            <p>
                                 Изготовление и производство автомобилей скорой помощи класса «В» на базе Ford Transit и ГАЗель Собол...
                            </p>
                            <div className={cls.productsMainButton}>
                                <a href="">
                                    Подробнее...
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={cls.cardPoductsMain}>
                        <div className={cls.contentBottomProductsMain}>
                            <p>Машина скорой помощи</p>
                        </div>
                        <div className={cls.imgTopPoductsMain}>

                        </div>
                        <div className={cls.productsContentMain}>
                            <p>
                                 Изготовление и производство автомобилей скорой помощи класса «В» на базе Ford Transit и ГАЗель Собол...
                            </p>
                            <div className={cls.productsMainButton}>
                                <a href="">
                                    Подробнее...
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
                {/* THE NEWS */}

            <div className={cls.newsMain}>
                <div className={cls.newsMainTitle}>
                    <h1>Последние новости</h1>
                </div>
                <div className={cls.newsMainInline}>
                    <div className={cls.newsMainCard}>
                        <div className={cls.newsMainImgTop}>

                        </div>
                        <div className={cls.newsMainContentBottom}>
                            <p className={cls.dateNewsMain}>
                                18 марта 2021
                            </p>
                            <p className={cls.newsMainText}>
                                «Кыргыз унаа курулуш» планирует выпускать в месяц до 30 машин скорой помощи
                            </p>
                            <div className={cls.newsMainButton}>
                                <a href="">
                                    Подробнее...
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={cls.newsMainCard}>
                        <div className={cls.newsMainImgTop}>

                        </div>
                        <div className={cls.newsMainContentBottom}>
                            <p className={cls.dateNewsMain}>
                                18 марта 2021
                            </p>
                            <p className={cls.newsMainText}>
                                «Кыргыз унаа курулуш» планирует выпускать в месяц до 30 машин скорой помощи
                            </p>
                            <div className={cls.newsMainButton}>
                                <a href="">
                                    Подробнее...
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={cls.newsMainCard}>
                        <div className={cls.newsMainImgTop}>

                        </div>
                        <div className={cls.newsMainContentBottom}>
                            <p className={cls.dateNewsMain}>
                                18 марта 2021
                            </p>
                            <p className={cls.newsMainText}>
                                «Кыргыз унаа курулуш» планирует выпускать в месяц до 30 машин скорой помощи
                            </p>
                            <div className={cls.newsMainButton}>
                                <a href="">
                                    Подробнее...
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main