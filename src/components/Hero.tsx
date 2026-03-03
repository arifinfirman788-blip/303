import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-[2/1] min-h-[600px] rounded-[3rem] border-4 border-secondary-900 bg-gradient-to-br from-white to-primary-50/30 flex flex-col items-center justify-center text-center p-8 md:p-16 overflow-hidden shadow-2xl"
        >
          {/* Sticker */}
          <motion.div 
            initial={{ rotate: -15, scale: 0 }}
            animate={{ rotate: -12, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            className="absolute top-[15%] left-[10%] md:left-[15%] bg-[#FF4D4F] text-white px-6 py-2 md:px-8 md:py-3 text-xl md:text-2xl font-black tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transform -rotate-12 z-10"
          >
            AI DRIVEN
          </motion.div>

          {/* Main Title */}
          <div className="relative z-0">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[12vw] md:text-[8rem] leading-none font-black text-secondary-900 tracking-tighter mb-4"
            >
              HOTEL <br className="md:hidden" />
              <span className="text-secondary-900">AGENT</span>
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-2 md:h-4 bg-secondary-900 mx-auto mb-8 md:mb-12"
            ></motion.div>

            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-6xl font-black tracking-tight"
            >
              <span className="text-[#5B50FF]">酒店智能体</span>
              <span className="mx-4 text-secondary-300">/</span>
              <span className="text-secondary-900">未来已来</span>
            </motion.h2>
          </div>

          {/* Bottom Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 md:bottom-16 left-0 w-full text-center px-4"
          >
            <p className="text-lg md:text-2xl font-bold text-secondary-600">
              <span className="text-secondary-900">华创云信</span>
              <span className="mx-3 text-secondary-300">×</span>
              <span className="text-secondary-900">贵旅数网</span>
              <span className="ml-4 font-normal text-secondary-500">倾力打造新一代酒店智能解决方案</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
