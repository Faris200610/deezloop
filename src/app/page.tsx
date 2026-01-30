import siteConfig from "@/../site-config.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionBuilder } from "@/components/SectionBuilder";
import type { SiteConfig } from "@/types/site-config";

const config = siteConfig as SiteConfig;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header config={config} />
      <main className="flex-1 w-full pt-[72px] min-h-0">
        <SectionBuilder sections={config.sections} />
      </main>
      <Footer config={config} />
    </div>
  );
}
