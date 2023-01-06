import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import { ChipIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UsersIcon, LinkIcon, HeartIcon} from "@heroicons/react/solid"

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />    
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>Summit area around Fiyel-Bet</span>
                    </span>

                    <span className={css.pngLine}>
                        {" "}
                        <PhoneIcon className={css.icon}/>
                        <a href="tel:+251977809831">0977809831</a>
                    </span>

                    <span className={css.pngLine}>
                        {" "}
                        <ChipIcon className={css.icon}/>
                        <span>bane@gmail.com</span>
                    </span>

                </div>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon}/>
                        SIGN UP
                    </span>
                    <span className={css.pngLine}>
                        <HeartIcon className={css.icon}/>
                        LOG IN
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon}/>
                        <a href="/about"><p>About Us</p></a>
                    </span>

                </div>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon}/>
                        Saftey Privacy and Terms
                    </span>
                </div>
            </div>
        </div>

        <div className={css.copyRight}>
            <span>Copyright @2023 by Bane Inc</span>
            <span>All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Footer
