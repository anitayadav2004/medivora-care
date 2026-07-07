import React from 'react'
import { footerStyles } from '../assets/dummyStyles'
import logo from "../assets/logo.png";
import {
  Stethoscope,
  Activity,
  Phone,
  Mail,
  MapPin,
  ArrowBigRight,
  Send
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
const socialLinks = [
    {
      Icon: FaFacebookF,
      color: footerStyles.facebookColor,
      name: "Facebook",
      href: "https://www.facebook.com/people/Hexagon-Digital-Services/61567156598660/",
    },
    {
      Icon: FaTwitter,
      color: footerStyles.twitterColor,
      name: "Twitter",
      href: "https://twitter.com/",
    },
    {
      Icon: FaInstagram,
      color: footerStyles.instagramColor,
      name: "Instagram",
      href: "https://instagram.com/hexagondigitalservices",
    },
    {
      Icon: FaLinkedinIn,
      color: footerStyles.linkedinColor,
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/hexagondigtial-services/",
    },
    {
      Icon: FaYoutube,
      color: footerStyles.youtubeColor,
      name: "YouTube",
      href: "https://youtube.com/@hexagondigitalservices",
    },
  ];



  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Appointments", href: "/appointments" },
  ];

  const services = [
    { name: "Blood Pressure Check", href: "/services" },
    { name: "Blood Sugar Test", href: "/services" },
    { name: "Full Blood Count", href: "/services" },
    { name: "X-Ray Scan", href: "/services" },
    { name: "Blood Sugar Test", href: "/services" },
  ];

  return (
    <footer className={footerStyles.footerContainer}>
      
      {/* FLOATING ICONS */}
      <div className={footerStyles.floatingIcon1}>
        <Stethoscope className={footerStyles.stethoscopeIcon} />
      </div>

      <div
        className={footerStyles.floatingIcon2}
        style={{ animationDelay: "3s" }}
      >
        <Activity className={footerStyles.activityIcon} />
      </div>

      <div className={footerStyles.mainContent}>
        <div className={footerStyles.gridContainer}>

          {/* COMPANY */}
          <div className={footerStyles.companySection}>
            <div className={footerStyles.logoContainer}>
              <div className={footerStyles.logoWrapper}>
                <div className={footerStyles.logoImageContainer}>
                  <img
                    src={logo}
                    alt="logo"
                    className={footerStyles.logoImage}
                  />
                </div>
              </div>

              <div>
                <h2 className={footerStyles.companyName}>
                  Medivora Care
                </h2>
                <p className={footerStyles.companyTagline}>
                  Healthcare Solution
                </p>
              </div>
            </div>

            <p className={footerStyles.companyDescription}>
              Your trusted partner in healthcare innovation. We're committed to
              providing exceptional medical care with cutting-edge technology
              and compassionate service.
            </p>

            <div className={footerStyles.contactContainer}>
              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconWrapper}>
                  <Phone className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>
                  +91 7905028724
                </span>
              </div>

              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconWrapper}>
                  <Mail className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>
                  hexagonservices@gmail.com
                </span>
              </div>

              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconWrapper}>
                  <MapPin className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>
                  Gorakhpur, India
                </span>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className={footerStyles.linksSection}>
            <h3 className={footerStyles.sectionTitle}>Quick Links</h3>

            <ul className={footerStyles.linkList}>
              {quickLinks.map((link, index) => (
                <li key={link.name} className={footerStyles.linkItem}>
                  <a
                    href={link.href}
                    className={footerStyles.quickLink}
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <div className={footerStyles.quickLinkIconWrapper}>
                      <ArrowBigRight className={footerStyles.quickLinkIcon} />
                    </div>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className={footerStyles.linksSection}>
            <h3 className={footerStyles.sectionTitle}>Our Services</h3>

            <ul className={footerStyles.linksList}>
              {services.map((service, index) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className={footerStyles.serviceLink}
                  >
                    <div className={footerStyles.serviceIcon}></div>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER ONLY (NO SOCIAL) */}
          <div className={footerStyles.newsletterSection}>
            <h3 className={footerStyles.newsletterTitle}>
              Stay Connected
            </h3>

            <p className={footerStyles.newsletterDescription}>
              Subscribe for health tips, medical updates, and wellness insights.
            </p>

            <div className={footerStyles.newsletterForm}>
              <div className={footerStyles.mobileNewsletterContainer}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={footerStyles.emailInput}
                />
                <button className={footerStyles.mobileSubscribeButton}>
                  <Send className={footerStyles.mobileButtonIcon} />
                  Subscribe
                </button>
              </div>

              <div className={footerStyles.desktopNewsletterContainer}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={footerStyles.desktopEmailInput}
                />
                <button className={footerStyles.desktopSubscribeButton}>
                  <Send className={footerStyles.desktopButtonIcon} />
                  <span className={footerStyles.desktopButtonText}>
                    Subscribe
                  </span>
                </button>
              </div>
              {/*social icon */}
               <div className={footerStyles.socialContainer}>
      {socialLinks.map(({ Icon, color, name, href }, index) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.socialLink}
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <div className={footerStyles.socialIconBackground} />
          <Icon className={`${footerStyles.socialIcon} ${color}`} />
        </a>
      ))}
            </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className={footerStyles.bottomSection}>
          <div className={footerStyles.copyright}>
            <span>&copy; {currentYear} Medivora Care Healthcare</span>
          </div>

          <div className={footerStyles.designerText}>
            <span>Designed by</span>
            <a
              href="https://hexagondigitalservices.com/"
              target="_blank"
              className={footerStyles.designerLink}
            >
              Hexagon Digital Services
            </a>
          </div>
        </div>

      </div>
      

      <style>{footerStyles.animationStyles}</style>
    </footer>
  );
};

export default Footer;