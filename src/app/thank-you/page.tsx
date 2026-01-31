import Link from "next/link";
import siteConfig from "@/../site-config.json";

const SUCCESS_MESSAGE =
  "شكراً لك، تم استلام رسالتك وسنتواصل معك قريباً";

export default function ThankYouPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-background_primary"
      dir={siteConfig.meta.dir}
      lang={siteConfig.meta.lang}
    >
      <div className="max-w-md w-full text-center">
        <div className="rounded-2xl bg-accent_main/10 border border-accent_main/30 text-accent_main px-8 py-12 font-heading font-bold text-xl mb-8">
          {SUCCESS_MESSAGE}
        </div>
        <Link
          href="/#contact"
          className="inline-block px-6 py-3 rounded-lg bg-accent_main text-white font-semibold hover:bg-accent_hover transition-colors"
        >
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}
