import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Venha para uma nova expeciencia de jogo
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <svg className="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840.000000 691.000000" >
            <g transform="translate(0.000000,691.000000) scale(0.100000,-0.100000)"
              fill="#fff" stroke="none">
              <path d="M202 5533 l3 -968 493 -3 492 -2 0 388 0 389 -107 93 c-60 51 -108
              95 -108 99 0 3 48 50 108 104 l107 99 0 384 0 384 -495 0 -495 0 2 -967z m588
              445 l-1 -143 -49 -52 c-45 -49 -52 -53 -94 -53 l-46 0 0 195 0 195 95 0 95 0
              0 -142z m-41 -705 l51 -57 0 -138 0 -138 -100 0 -100 0 0 195 0 195 49 0 c47
              0 51 -2 100 -57z"/>
              <path d="M1359 6403 c-1 -54 -2 -491 -3 -970 l-1 -873 482 0 483 0 0 190 0
              190 -285 0 -285 0 0 205 0 205 168 2 167 3 3 187 2 188 -167 2 -168 3 -3 193
              -2 192 285 0 285 0 0 190 0 190 -480 0 -480 0 -1 -97z" />
              <path d="M2410 6489 c0 -8 231 -780 326 -1089 11 -35 14 -133 14 -442 l0 -398
              195 0 195 0 0 396 0 396 165 562 c91 308 168 567 170 574 4 10 -38 12 -198 10
              l-202 -3 -37 -205 c-67 -373 -90 -491 -94 -487 -3 3 -36 169 -104 525 l-33
              172 -199 0 c-134 0 -198 -3 -198 -11z"/>
              <path d="M3560 5530 l0 -970 490 0 490 0 0 970 0 970 -490 0 -490 0 0 -970z
              m590 0 l0 -590 -95 0 -95 0 0 590 0 590 95 0 95 0 0 -590z"/>
              <path d="M4710 5530 l0 -970 200 0 200 0 2 466 3 467 90 -467 90 -466 197 0
              198 0 0 970 0 970 -195 0 -195 0 -2 -482 -3 -483 -52 265 c-29 146 -71 363
              -94 483 l-42 217 -198 0 -199 0 0 -970z"  />
              <path d="M5860 6310 l0 -190 65 0 65 0 0 -590 0 -590 -65 0 -65 0 0 -190 0
              -190 545 0 545 0 0 970 0 970 -545 0 -545 0 0 -190z m700 -780 l0 -590 -90 0
              -90 0 0 590 0 590 90 0 90 0 0 -590z"   />
              <path d="M7230 3405 l0 -3095 70 0 70 0 0 3095 0 3095 -70 0 -70 0 0 -3095z"/>
              <path d="M7650 6486 c0 -8 7 -16 15 -20 10 -3 15 -19 15 -46 0 -29 4 -40 15
              -40 11 0 15 11 15 40 0 27 5 43 15 46 8 4 15 12 15 20 0 10 -13 14 -45 14 -32
              0 -45 -4 -45 -14z"/>
              <path d="M7760 6439 c0 -52 2 -60 17 -57 9 2 20 14 23 28 5 23 7 23 13 6 7
              -19 8 -19 22 0 14 18 14 18 15 -8 0 -21 5 -28 20 -28 18 0 20 7 20 60 0 53 -2
              60 -20 60 -10 0 -25 -10 -31 -22 l-12 -22 -15 22 c-8 12 -23 22 -33 22 -17 0
              -19 -8 -19 -61z"/>
              <path d="M2380 3375 l0 -975 505 0 505 0 0 440 0 440 -195 0 -195 0 0 -245 0
              -245 -110 0 -110 0 0 590 0 590 305 0 305 0 0 190 0 190 -505 0 -505 0 0 -975z" />
              <path d="M3562 3378 l3 -973 488 -3 487 -2 0 975 0 975 -490 0 -490 0 2 -972z
              m588 2 l0 -590 -95 0 -95 0 0 590 0 590 95 0 95 0 0 -590z" />
              <path d="M4710 3375 l0 -975 490 0 490 0 0 975 0 975 -490 0 -490 0 0 -975z
              m590 5 l0 -590 -95 0 -95 0 0 590 0 590 95 0 95 0 0 -590z"/>
              <path d="M5860 4160 l0 -189 63 -3 62 -3 0 -585 0 -585 -60 -5 -60 -5 0 -190
              0 -190 543 -3 542 -2 0 975 0 975 -545 0 -545 0 0 -190z m700 -780 l0 -590
              -90 0 -90 0 0 590 0 590 90 0 90 0 0 -590z"/>
              <path d="M2380 2090 l0 -110 35 0 c24 0 35 5 35 15 0 12 15 15 79 15 61 0 80
              -3 85 -15 3 -9 18 -15 36 -15 l30 0 0 110 0 110 -150 0 -150 0 0 -110z m240
              31 c0 -35 -13 -41 -91 -41 -78 0 -79 0 -79 25 0 25 1 25 85 25 47 0 85 -4 85
              -9z"/>
              <path d="M2839 2193 c-5 -28 -6 -1581 -1 -1716 l5 -167 461 2 461 3 3 188 2
              187 -280 0 -280 0 0 190 0 190 165 0 165 0 0 185 0 185 -165 0 -165 0 0 190 0
              190 280 0 280 0 0 190 0 190 -465 0 c-256 0 -466 -3 -466 -7z" />
              <path d="M3940 2169 c0 -17 20 -219 45 -448 55 -502 75 -688 115 -1061 16
              -157 32 -300 35 -318 l6 -32 289 0 289 0 6 33 c3 17 48 424 100 902 52 479 98
              889 101 913 l6 42 -190 0 -191 0 -5 -52 c-3 -29 -19 -226 -35 -438 -66 -857
              -75 -969 -79 -965 -3 3 -122 1396 -122 1438 0 16 -16 17 -185 17 l-185 0 0
              -31z"/>
              <path d="M5100 2010 l0 -190 45 0 45 0 0 -565 0 -565 -45 0 -45 0 0 -190 0
              -190 295 0 295 0 0 190 0 190 -45 0 -45 0 0 565 0 565 45 0 45 0 0 190 0 190
              -295 0 -295 0 0 -190z" />
              <path d="M5860 1255 l0 -945 545 0 545 0 0 275 0 275 -205 0 -205 0 0 -85 0
              -86 -137 3 -138 3 -3 753 -2 752 -200 0 -200 0 0 -945z"/>
              <path d="M7650 2050 l0 -150 110 0 110 0 0 45 0 45 55 0 55 0 0 -80 0 -81
              -165 -255 -165 -256 0 -109 0 -109 275 0 275 0 0 105 0 105 -156 0 c-137 0
              -155 2 -150 15 3 9 73 121 156 249 l150 233 0 197 0 196 -275 0 -275 0 0 -150z"/>
              <path d="M2380 1905 l0 -35 83 -1 82 -1 -82 -39 c-81 -38 -83 -40 -83 -74 l0
              -35 150 0 150 0 0 35 0 35 -82 1 -83 1 83 39 c80 38 82 40 82 74 l0 35 -150 0
              -150 0 0 -35z"/>
              <path d="M2515 1664 c-60 -6 -116 -13 -122 -13 -9 -1 -13 -23 -13 -76 0 -69 2
              -75 23 -79 21 -5 240 -26 266 -26 8 0 11 11 9 33 -3 28 -7 32 -36 35 -32 3
              -33 5 -30 40 3 34 6 37 36 40 28 3 32 7 32 33 0 34 7 33 -165 13z m25 -85 c0
              -29 -1 -30 -42 -27 -35 2 -44 7 -46 25 -3 18 3 22 30 26 18 2 39 5 46 5 7 1
              12 -10 12 -29z"/>
              </g>
            </svg>
            </Link>
          </div>
          <small class='website-rights'>UBSOFT © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
