import { Button } from "@/components/ui/button";
import { MenuIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const LandingPageNavBar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <MenuIcon className="w-6 h-6" />
        <Image alt="logo" src="/kureel-logo.svg" width={40} height={40} />
        Kureel
      </div>
      <div className="hidden gap-x-10 items-center lg:flex">
        <Link
          href="/"
          className="bg-[#facc14] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#facc14]/80 transition-all duration-200"
        >
          Accueil
        </Link>
        <Link href="/">Contact</Link>
        <Link href="/">Contact</Link>
      </div>
      <Link href="/auth/sign-in">
        <Button className="text-base flex gap-x-2 bg-white">
          <User fill="#000" />
          Connexion
        </Button>
      </Link>
    </div>
  );
};

export default LandingPageNavBar;
