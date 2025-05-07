import Background2 from '../assets/images/Group3.webp'

function Contact() {
    return(
        <>
        <div className="contact" id="contact">
            <div className='contact__info'>
                <h2>Me contacter</h2>
                <p className="my-mail">dobybruce@gmail.com</p>
                <button>Télécharger mon CV</button>
            </div>
            <div className='background2'>
                <img src={Background2} alt='background'></img>
            </div>
        </div>
        </>
    )
}

export default Contact