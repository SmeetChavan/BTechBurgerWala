import { Link } from "react-router-dom";
import { RiFindReplaceLine } from 'react-icons/ri';

import me from '../../assets/founder.jpg';

function About() {
    return (
        <section className="about">

            <main>
                <h1>About Us</h1>

                <article>

                    <h4>BTech Burger Wala</h4>

                    <p>We are Btech Burger Wala. The place for the tastiest burgers on the entire planet.</p>

                    <p>Explore various types of burgers and beverages. Click below to see the menu</p>

                    <Link to="/"><RiFindReplaceLine /></Link>

                </article>

                <div>
                    <h2>Founder</h2>

                    <article>

                        <div>

                            <img src={me} alt="Founder" />
                            <h3>Smeet Chavan</h3>

                        </div>

                        <p>I am Smeet Chavan, the founder of Btech Burger Wala. Taking The Burger Business Seriously</p>

                    </article>
                </div>

            </main>

        </section>
    );
}

export default About;