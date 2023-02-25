import React from 'react';
import './footer.css';
function Footer() {
    return (
        <div className='footer section__padding'>
            <div className='footer__main'>
            <div className='col_one'>
                <h4>CATEGPRIES</h4>
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Shoes</li>
                    <li>Watches</li>
                </ul>
            </div>
            <div className='col_two'>
                <h4>HELP</h4>
                <ul>
                    <li>Track Order</li>
                    <li>Returns</li>
                    <li>Shipping</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className='col_three'>
                <h4>GET IN TOUCH</h4>
                <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
            </div>
            <div className='col_four'>
               <h4>NEWSLETTER</h4>
               <p>email@example.com</p>
               <button>SUBSCRIBE</button>
            </div>
            </div>
            <p className='copy'>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
        </div>
    )
}

export default Footer