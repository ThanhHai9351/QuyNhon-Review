"use client";

import SwitchLanguage from "@/components/elements/switch-language";
import { ratingEnglish, ratingVietNam } from "@/lib/constants";
import { useLanguageStore } from "@/store/language";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function DetailsPage({ params }: { params: { id: number } }) {
  const { language, setLanguage } = useLanguageStore();
  const rating = language === "vn" ? ratingVietNam : ratingEnglish;

  return (
    <>
      <nav className="maxPadding fixed left-0 top-0 z-[990] flex w-full justify-between border-b border-b-muted-foreground/20 bg-[#ffffff] py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-[14px] font-medium text-primary/50 transition-all duration-300 hover:text-primary/100"
        >
          <ChevronLeft className="size-6" />
          <p className="text-[14px] font-medium text-primary/50 transition-all duration-300 hover:text-primary/100">
            {language === "vn" ? "Quay lại Trang chủ" : "Back To Home"}
          </p>
        </Link>
        <SwitchLanguage
          onClick={() => {
            setLanguage(language === "vn" ? "en" : "vn");
            localStorage.setItem("language", language === "vn" ? "en" : "vn");
            toast.success(
              language === "vn"
                ? "Success changed to English"
                : "Chuyển hoàn tất sang tiếng việt",
            );
          }}
          className="hover:text-primary/100"
          lang={language}
        />
      </nav>
      <div className="maxPadding mx-auto max-w-3xl pt-[100px]">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold leading-[140%]">
            {rating.attractions[params.id - 1].details.title}
          </h1>
          <div className="flex flex-col items-start">
            <p className="font-semibold">Quy nhơn</p>
            <p className="text-sm text-muted-foreground">
              Published on Oct 19, 2024
            </p>
          </div>
          <Image
            src={rating.attractions[params.id - 1].image}
            alt="Destination Image"
            className="my-8 h-full max-h-[400px] w-full rounded-lg object-cover"
            width={1000}
            height={1000}
          />
        </header>

        <main>
          <p>{rating.attractions[params.id - 1].details.description[0]}</p>
          <p className="my-4">
            {rating.attractions[params.id - 1].details.description[1]}
          </p>
          <p>{rating.attractions[params.id - 1].details.description[2]}</p>
        </main>
      </div>
    </>
  );
}
