import { MdLocationOn } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-footer pt-10 pb-5 text-body ">
      {/* box 1 */}
      <div className="flex flex-col md:items-center sm:justify-between  mx-5 md:flex-row gap-5">
        <h3 className="font-Monoton text-3xl cursor-pointer select-none"> TabularInsight</h3>
        {/* box 2 */}
        <div>
          <h4 className="footer_items font-extrabold">Important Links</h4>
          <div className="footer_items">About Us</div>
          <div className="footer_items">Services</div>
          <div className="footer_items">Support Us 💖</div>
          <div className="footer_items">Terms and Conditions</div>
          <div className="footer_items">Privacy and Policy</div>
        </div>
        {/* box 3 */}
        <div>
          <h4 className="footer_items font-bold">Contact Us</h4>
          <div className="footer_items flex items-center gap-2">
            {" "}
            <MdLocationOn /> Pune, India
          </div>
          <div className="footer_items flex items-center gap-2">
            <MdOutlinePhone />
            <div className="flex flex-col">
              <span> +91 98765 43210</span>
              <span>+91 99999 99999</span>
            </div>
          </div>
          
        </div>
      </div>
      {/* down copyright */}
      <div className="border border-gray-500 border-x-2"></div>
      <div className="text-center mt-3">CopyRights © TabularInsight 2024</div>
    </footer>
  );
};

export default Footer;
