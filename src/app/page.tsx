import OpeningChapter from '@/components/chapters/OpeningChapter';
import IntroductionChapter from '@/components/chapters/IntroductionChapter';
import EducationChapter from '@/components/chapters/EducationChapter';
import WallInfraChapter from '@/components/chapters/WallInfraChapter';
import RevwriteAIChapter from '@/components/chapters/RevwriteAIChapter';
import OtherProjectsChapter from '@/components/chapters/OtherProjectsChapter';
import ProcessChapter from '@/components/chapters/ProcessChapter';
import SkillsChapter from '@/components/chapters/SkillsChapter';
import ServicesChapter from '@/components/chapters/ServicesChapter';
import ContactChapter from '@/components/chapters/ContactChapter';

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Chapter 00 — The Opening */}
      <OpeningChapter />

      {/* Chapter 01 — Meet Ubaid */}
      <IntroductionChapter />

      {/* Chapter 02 — Education & Journey */}
      <EducationChapter />

      {/* Chapter 03 — Wall Infra Case Study */}
      <WallInfraChapter />

      {/* Chapter 04 — RevwriteAI Case Study */}
      <RevwriteAIChapter />

      {/* Chapter 05 — Creative Projects */}
      <OtherProjectsChapter />

      {/* Chapter 06 — How I Build */}
      <ProcessChapter />

      {/* Chapter 07 — Technical Toolkit */}
      <SkillsChapter />

      {/* Chapter 08 — Services & Practical Value */}
      <ServicesChapter />

      {/* Chapter 09 — Connect & Inquiry */}
      <ContactChapter />
    </div>
  );
}
