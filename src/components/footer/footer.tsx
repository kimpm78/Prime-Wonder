import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="footer footer-center p-4 bg-base-300 text-base-content">
      <span>Copyright © 2024 PrimeKim Inc. All rights reserved.</span>
      <div className="flex gap-2 items-center">
        <a
          className="hover:text-orange-300"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <span> | </span>
        <a
          className="hover:text-orange-300"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={24} />
        </a>
        <span> | </span>
        <a
          className="hover:text-orange-300"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill size={24} />
        </a>
        <span> | </span>
        <a
          className="hover:text-orange-300"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
