import React from 'react'
import logo from '../images/Logo .svg'

const Footer = () => {
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='' />
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with modern twist.</p>
                </div>
                <div>
                    <h3>Impormant Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservation</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br />123 Towncity, USA</li>
                        <li>Phone: <br />1234 5678</li>
                        <li>Email: <br />little@lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Intagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                        <li><a href='/'>Snapchat</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    )
}

export default Footer