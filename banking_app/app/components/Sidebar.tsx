"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/icons/logo.svg";
import { sidebarLinks } from "../constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
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
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
