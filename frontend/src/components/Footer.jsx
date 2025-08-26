import { AnimatePresence, motion } from "framer-motion";
import { headTextAnimation } from "../config/motion.js";

function Footer() {
  return (
    <AnimatePresence>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-15 py-10 border-t-2 gap-10 md:gap-20">
        
        {/* Logo & Copyright */}
        <motion.div
          variants={headTextAnimation}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:text-left"
        >
          <h1 className="font-sans w-fit mx-auto md:mx-0 font-bold text-xl sm:text-2xl flex gap-2 items-center mb-3">
            <img src="./img/logo.png" alt="logo" className="w-10 h-10" />
            India Packaging.
          </h1>
          <p className="font-[Lexend] text-gray-500 text-sm">
            © 2025 India Packaging
          </p>
        </motion.div>

        {/* Right Side: Social + Legal */}
        <motion.div
          variants={headTextAnimation}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row justify-center md:justify-end gap-5! md:gap-20! sm:gap-20 text-center md:text-right"
        >
          {/* Social Media */}
          <div>
            <span className="font-[Lexend] text-md">Social Media</span>
            <div className="flex justify-center md:justify-end gap-5 mt-2">
              {/* Instagram */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-8 hover:fill-pink-500 transition cursor-pointer"
              >
                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
              </svg>
              {/* YouTube */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-8 hover:fill-red-700 transition cursor-pointer"
              >
                <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" />
              </svg>
              {/* Twitter/X */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-8 hover:fill-blue-300 transition cursor-pointer"
              >
                <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
              </svg>
            </div>
          </div>

          {/* Legal */}
          <div>
            <span className="font-[Lexend] text-md">Legal</span>
            <div>
              <span className="font-[Lexend] text-md text-gray-500 hover:text-blue-400 cursor-pointer transition">
                Privacy
              </span>{" "}
              .
              <span className="font-[Lexend] text-md text-gray-500 hover:text-blue-400 cursor-pointer transition">
                Terms
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Footer;
