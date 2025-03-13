"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex-1 flex items-center space-x-2 md:space-x-6">
                    <div className="md:hidden p-2">
                        <IconButton onClick={toggleMenu}>
                            <Menu size={24} className="text-[#1158A7]"/>
                        </IconButton>
                    </div>

                    <Link href="/">
                        <Image src="/sos.svg" alt="صفحه اصلی" width={198} height={40}/>
                    </Link>

                    <nav className="hidden md:flex flex-1 justify-between pl-6">
                        <NavLink href="/">صفحه اصلی</NavLink>
                        <NavLink href="/todo-list">To-Do List</NavLink>
                        <NavLink href="/health-centers">مراکز خدمات درمانی</NavLink>
                        <NavLink href="/martyrs">شعبه‌های ما</NavLink>
                        <NavLink href="/faq">سوالات متداول</NavLink>
                    </nav>
                </div>

                <Link
                    href="/login"
                    className="block bg-[#1158A7] text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    ورود و فعالسازی
                </Link>

                <Drawer anchor="right" open={isOpen} onClose={toggleMenu}>
                    <div className="p-4 w-64 bg-white h-full shadow-lg">
                        {/* Close Button */}
                        <IconButton onClick={toggleMenu} className="p-2">
                            <X size={28} className="text-gray-700" />
                        </IconButton>

                        <nav className="flex flex-col mt-6 space-y-4">
                            <NavLink href="/" onClick={toggleMenu}>
                                صفحه اصلی
                            </NavLink>
                            <NavLink href="/todo-list" onClick={toggleMenu}>
                                To-Do List
                            </NavLink>
                            <NavLink href="/health-centers" onClick={toggleMenu}>
                                مراکز خدمات درمانی
                            </NavLink>
                            <NavLink href="/martyrs" onClick={toggleMenu}>
                                شعبه‌های ما
                            </NavLink>
                            <NavLink href="/faq" onClick={toggleMenu} >
                                سوالات متداول
                            </NavLink>
                        </nav>

                        <Link
                            href="/login"
                            className="mt-6 block bg-[#1158A7] text-white text-center py-2 rounded hover:bg-blue-600"
                            onClick={toggleMenu}
                        >
                            ورود و فعالسازی
                        </Link>
                    </div>
                </Drawer>
            </div>
        </header>
    );
};

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link href={href} onClick={onClick} className="text-[#1158A7] hover:text-gray-600">
        {children}
    </Link>
);

export default Header;