import GrowSection from "@/components/GrowSection";
import CourseDetailsBanner from "./_components/CourseDetailsBanner";
import ProductivitySection from "./_components/ProductivitySection";
import FinalSection from "./_components/FinalSection";
export default function CourseId() {
  return (
    <>
      <CourseDetailsBanner />
      <ProductivitySection />
      <FinalSection />
      <div className="bg-black">
        <GrowSection />
      </div>
    </>
  );
}
