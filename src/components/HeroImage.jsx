import { BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoReact } from "react-icons/bi"
import userImage from "../assets/user.png"
import AnimatedIcon from "./AnimatedIcon"
import { motion } from "framer-motion"

const HeroImage = ({ variants }) => {
  return (
    <motion.div variants = {variants} className="mask-gradient absolute right-0 top-0 h-[550px] w-full overflow-hidden rounded-bl-full 
    rounded-br-full border-r-[10px] border-blue-500 bg-gray-700 md:h-[600px] md:w-[450px] ">
        <AnimatedIcon Icon={BiLogoHtml5} className="left-10 top-24"/>
        <AnimatedIcon Icon={BiLogoJavascript} className="right-10 top-24"/>
        <AnimatedIcon Icon={BiLogoNodejs} className="right-10 top-72"/>
        <AnimatedIcon Icon={BiLogoReact} className="left-10 top-72"/>
        <img src={userImage} alt="My Image" className="absolute bottom-0 left-1/2 w-[450px] -translate-x-1/2"/>
    </motion.div>
  )
}

export default HeroImage