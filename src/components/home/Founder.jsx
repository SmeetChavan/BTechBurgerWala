import me from '../../assets/founder.jpg';

function Founder() {

    return(
        <section className="founder">

            <div data-aos="fade-right" data-aos-duration="1000">
                <img src={me} alt="Founder"/>

                <h3>Smeet Chavan</h3>

                <p>Hey Everyone! I am Smeet Chavan, the founder of BTech Burger Wala.</p>
                <p>Our Aim is to make the tastiest burger on planet.</p>

            </div>

        </section>
    );
}

export default Founder;