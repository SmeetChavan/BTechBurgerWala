import {AiFillInstagram , AiFillLinkedin , AiFillGithub} from 'react-icons/ai';

function Footer(){

    return(
        <footer>
            <div>

                <h2>BTech Burger Wala</h2>

                <p>We are trying to give you the best taste possible.</p>
                <br />

                <em>We give attention to genuine feedbacks</em>
                

                <strong>All rights reserved @btechburgerwala</strong>
            </div>

            <aside>
                <h4>Profiles</h4>

                <a href="https://github.com/SmeetChavan"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/smeetchavan/"><AiFillLinkedin/></a>
                <a href="https://www.instagram.com/_smeet_chavan_/"><AiFillInstagram/></a>

            </aside>
        </footer>
    );
}

export default Footer;