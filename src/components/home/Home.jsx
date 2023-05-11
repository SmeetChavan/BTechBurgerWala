import Founder from './Founder';
import Menu from './Menu';

const Home = () => {

    return (
        <>
            <section className="home">

                <div>
                    <h1 data-aos="fade-right" data-aos-delay="300">BTech BURGER WALA</h1>
                    <p data-aos="fade-right" data-aos-delay="700">Just One More Bite.</p>
                </div>

                <a href="#menu" data-aos="fade-down" data-aos-delay="1000">
                    Explore Menu
                </a>

            </section>

            <Founder />

            <Menu/>
        </>
    );
}

export default Home;