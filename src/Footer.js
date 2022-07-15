import { FaAngleDown } from "react-icons/fa"
import { FaSpotify, FaFacebook, FaPinterest, FaInstagramSquare, FaYoutube, FaTwitter } from "react-icons/fa"
const Footer = () => {
  return (
    <>

      {/* SUMMER TUESYAYS DISCLOSURE SECTION */}
      <div className="disclosures py-12 px-4 font-medium text-sm text-center border-b-2 mx-auto">
        <p className="lg:max-w-[50%] mx-auto leading-8">
          *Summer TuesYays offer available at participating stores. Excludes ready to drink, bottled
          beverages and alcohol. Cannot be combined with other offers or discounts. Offer not available through delivery.
          Limit one per person.
        </p>
      </div>

      {/* LINKS SECTIONS*/}
      <div className="links py-12 px-6 flex flex-col gap-10 border-b-2 lg:text-lg lg:-mt-2 lg:flex-row lg:gap-4">
        <div className="flex items-center justify-between lg:flex-col lg:gap-6 lg:mr-8 lg:flex-1">
          <p className="lg:self-start">About Us</p>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Our Company</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Our Coffee</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Stories and News</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Starbucks Archive</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Investor Relations</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Customer Service</span></a>
          <FaAngleDown className="w-8 h-8 lg:hidden"/>
        </div>
        <div className="flex items-center justify-between lg:flex-col lg:self-start lg:gap-6 lg:flex-1">
          <p className="lg:self-start">Careers</p>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Culture and Values</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400 max-w-[80%]"><span>Inclusion, Diversity, and Equity</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400 max-w-[80%]"><span>College Achievement Plan</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Alumni Community</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>U.S. Careers</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>International Careers</span></a>
          <FaAngleDown className="w-8 h-8 lg:hidden"/>
        </div>
        <div className="flex items-center justify-between lg:flex-col lg:self-start lg:gap-6 lg:flex-1">
          <p className="lg:self-start">Social Impact</p>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>People</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Planet</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400 max-w-[70%]"><span>Environmental and Social Impact Reporting</span></a>
          <FaAngleDown className="w-8 h-8 lg:hidden"/>
        </div>
        <div className="flex items-center justify-between lg:flex-col lg:self-start lg:gap-6 lg:flex-1">
          <p className="lg:self-start">For Business Partners</p>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Landlord Support Center</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Suppliers</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Corporate Gift Card Sales</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400 max-w-[80%]"><span>Office and Foodservice Coffee</span></a>
          <FaAngleDown className="w-8 h-8 lg:hidden"/>
        </div>
        <div className="flex items-center justify-between lg:flex-col lg:self-start lg:gap-6 lg:flex-1">
          <p className="lg:self-start">Order and Pickup</p>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Order on the App</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Order on the Web</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Delivery</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400"><span>Order and Pickup Options</span></a>
          <a href="#" className="hidden lg:block lg:self-start lg:text-gray-400 max-w-[80%]"><span>Explore and find Coffee for Home</span></a>
          <FaAngleDown className="w-8 h-8 lg:hidden"/>
        </div>
      </div>

      {/* SOCIAL MEDIA ICONS + EXTRA BOTTOM LINKS SECTION*/}
      <>
        <div className="socialMedia flex gap-4 ml-5 mt-8">
          <FaSpotify className="h-8 w-8 cursor-pointer"/>
          <FaFacebook className="h-8 w-8 cursor-pointer"/>
          <FaPinterest className="h-8 w-8 cursor-pointer"/>
          <FaInstagramSquare className="h-8 w-8 cursor-pointer"/>
          <FaYoutube className="h-8 w-8 cursor-pointer"/>
          <FaTwitter className="h-8 w-8 cursor-pointer"/>
        </div>
        <div className="extraLinks flex flex-col ml-5 gap-6 mt-8 text-sm lg:flex-row lg:text-lg">
          <a href="#"><span>Privacy Policy</span></a>
          <span className="hidden lg:block"> | </span>
          <a href="#"><span>Terms of Use</span></a>
          <span className="hidden lg:block"> | </span>
          <a href="#"><span>CA Supply Chain Act</span></a>
          <span className="hidden lg:block"> | </span>
          <a href="#"><span>Cookie References</span></a>
        </div>
        <p className="text-gray-400 text-sm ml-5 mt-6 pb-6">© 2022 Starbucks Coffee Company. All rights reserved.</p>

      </>
    </>
  )
}

export default Footer