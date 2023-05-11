function MenuCard({itemNum , img , price , title , cartHandler , delay = "0"}) {
    return(
        <div className='menuCard' data-aos="flip-left" data-aos-delay={delay}>

            <div>{itemNum}</div>

            <main>
                <img src={img} alt={itemNum}/>

                <h5>₹{price}</h5>

                <p>{title}</p>

                <button onClick={() => cartHandler(itemNum)}>Buy Now</button>

            </main>

        </div>
    );
}

export default MenuCard;