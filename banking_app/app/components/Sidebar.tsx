"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/icons/logo.svg";
import home from "../public/icons/home.svg";
import circle from "../public/icons/dollar-circle.svg";
import transaction from "../public/icons/transaction.svg";
import send from "../public/icons/money-send.svg";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
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
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src={logo}
            width={34}
            height={34}
            alt="horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((items) => {
          const isActive =
            pathname === items.route || pathname.startsWith(`${items.route}`);
          return (
            <Link
              href={items.route}
              key={items.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={items.imgURL}
                  alt={items.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "!text-white": isActive,
                })}
              >
                {items.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
};

export default Sidebar;
