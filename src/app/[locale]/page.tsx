import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("HomePage")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("title")}</h1>
      <Link href="/About">
        {t("Paragraph")}
      </Link>
    </main>
  );
}
