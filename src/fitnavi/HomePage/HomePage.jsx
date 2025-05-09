import ArticleSection from "./ArticleSection/ArticleSection";
import HeroSection from "./HeroSection/HeroSection";
import NutritionistSection from "./NutritionistSection/NutritionistSection";
import SearchSection from "./SearchSection/SearchSection";
import TrainerSection from "./TrainerSection/TrainerSection";
import "./HomePage.scss";
function HomePage() {
  return (
    <>
      <main id="homePage">
        <section>
          <HeroSection />
        </section>
        <section>
          <SearchSection />
        </section>
        <section>
          <TrainerSection />
        </section>
        <section>
          <NutritionistSection />
        </section>
        <section>
          <ArticleSection />
        </section>
      </main>
    </>
  );
}
export default HomePage;
