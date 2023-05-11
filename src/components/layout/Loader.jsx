import {IoFastFoodOutline} from 'react-icons/io5';

import {motion} from 'framer-motion';

function Loader() {

    const options = {
        initial: {
            opacity: 0,
        },
    
        animate: {
            opacity: 1,
        },

        transition: {
            ease: "linear",
            repeat: 3000,
            repeatType: "reverse",
            duration: 0.7,
        },
    };

    return(
        <div className="loader">

            <IoFastFoodOutline/>

            <div>
                <motion.p {...options}>Loading...</motion.p>
            </div>

        </div>
    );
}

export default Loader;