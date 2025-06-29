'use client';

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import Logo from "./Logo";
import Button from "./ui/Button";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 flex items-center justify-between px-4 py-2 rounded-lg bg-transparent",
        className
      )}
    >
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Logo />
      </div>

      {/* Middle: Menu Links */}
      <div className="flex-1 flex justify-center">
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Lorem Ipsum" />
          </Link>

          <MenuItem setActive={setActive} active={active} item="Lorem Ipsum">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink href="/courses">Lorem Ipsum</HoveredLink>
              <HoveredLink href="/courses">Lorem Ipsum</HoveredLink>
              <HoveredLink href="/courses">Lorem Ipsum</HoveredLink>
              <HoveredLink href="/courses">Lorem Ipsum</HoveredLink>
              <HoveredLink href="/courses">Lorem Ipsum</HoveredLink>
            </div>
          </MenuItem>

          <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Lorem Ipsum" />
          </Link>
        </Menu>
      </div>

      {/* Right: Sign In button */}
      <div className="flex-shrink-0">
        <Button label="Sign In" />
      </div>
    </nav>
  );
}

export default Navbar;
