import { LanguageTrigger } from "./language-trigger";

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange?: (language: string) => void;
}

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <li className="justify-center items-center flex relative select-none text-white cursor-pointer before:content-[''] before:w-px before:h-4 before:absolute before:left-0 before:top-5 before:bg-black/26 after:hidden before:hidden hover:text-white/70">
      <LanguageTrigger
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
      />
    </li>
  );
}
