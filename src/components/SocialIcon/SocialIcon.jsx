import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SocialIcon = () => {
   return (
      <div>
         <div className="flex justify-center items-center gap-6">
            <Link to="https://www.facebook.com"><FaFacebook className="text-xl"></FaFacebook></Link>
            <Link to="https://www.instagram.com"><FaInstagram className="text-xl"></FaInstagram></Link>
            <Link to="https://www.twitter.com"><FaTwitter className="text-xl"></FaTwitter></Link>
            <Link to="https://www.youtube.com"><FaYoutube className="text-xl"></FaYoutube></Link>
         </div>
      </div>
   );
};

export default SocialIcon;