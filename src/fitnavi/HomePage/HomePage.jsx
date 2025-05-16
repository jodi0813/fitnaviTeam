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
        <div className="gradient">
          <section className="homeSearchSection">
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
        </div>
      </main>
    </>
  );
}
export default HomePage;
