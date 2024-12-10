"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import Image from "next/image";
import hamburger from "../public/icons/hamburger.svg";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import home from "../public/icons/home.svg";
import circle from "../public/icons/dollar-circle.svg";
import transaction from "../public/icons/transaction.svg";
import send from "../public/icons/money-send.svg";
import logo from "../public/icons/logo.svg";

const MobileNav = ({ user }: MobileNavProps) => {
  const sidebarLinks = [
    {
      imgURL: home,
      route: "/",
      label: "Home",
    },
    {
      imgURL: circle,
      route: "/my-banks",
      label: "My Banks",
    },
    {
      imgURL: transaction,
      route: "/transaction-history",
      label: "Transaction History",
    },
    {
      imgURL: send,
      route: "/payment-transfer",
      label: "Transfer Funds",
    },
  ];
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image  
            src={hamburger}
            alt="menu"
            height={30}
            width={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-4"
          >
            <Image src={logo} width={34} height={34} alt="horizon logo" />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((items) => {
                  const isActive =
                    pathname === items.route ||
                    pathname.startsWith(`${items.route}/`);
                  return (
                    <SheetClose asChild key={items.route}>
                      <Link
                        href={items.route}
                        key={items.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <Image
                          src={items.imgURL}
                          alt={items.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {items.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
