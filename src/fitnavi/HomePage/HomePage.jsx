// import ArticleSection from "./ArticleSection/ArticleSection";
// import HeroSection from "./HeroSection/HeroSection";
// import NutritionistSection from "./NutritionistSection/NutritionistSection";
// import SearchSection from "./SearchSection/SearchSection";
// import TrainerSection from "./TrainerSection/TrainerSection";
// import "./HomePage.scss";
// function HomePage() {
//   return (
//     <>
//       <main id="homePage">
//         <section>
//           <HeroSection />
//         </section>

//         <div className="view">
//           <section className="homeSearchSection">
//             <SearchSection />

//             <TrainerSection />

//             <NutritionistSection />

//             <ArticleSection />
//           </section>
//         </div>


//       </main>
//     </>
//   );
// }
// export default HomePage;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ArticleSection from "./ArticleSection/ArticleSection";
import HeroSection from "./HeroSection/HeroSection";
import NutritionistSection from "./NutritionistSection/NutritionistSection";
import SearchSection from "./SearchSection/SearchSection";
import TrainerSection from "./TrainerSection/TrainerSection";
import "./HomePage.scss";

// 動畫設定：淡入＋放大
const fadeInScale = {
  hidden: { opacity: 1, scale: 0.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 3,
      ease:  [0.25, 1, 0.35, 1]
    }
  }
};

function HomePage() {
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setStartAnim(true);
        window.removeEventListener("scroll", handleScroll); // ✅ 只觸發一次
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="homePage">
      <section>
        <HeroSection />
      </section>

      <motion.div
        className="view"
        initial="hidden"
        animate={startAnim ? "visible" : "hidden"}
        variants={fadeInScale}
      >
        <section className="homeSearchSection">
          <SearchSection />
          <TrainerSection />
          <NutritionistSection />
          <ArticleSection />
        </section>
      </motion.div>
    </main>
  );
}

export default HomePage;
