import { twMerge } from "tailwind-merge";
import Button from "@/components/ui/Button";
import { IoMdClose } from "react-icons/io";
import { NAVBAR_LINKS } from "@/utils/Layout";
import { Link } from "react-router-dom";
import HeaderLogo from "@/assets/images/headerLogo.svg?react";

function MobileMenu({ openMenu, setOpenMenu }) {
    return (
        <div className={twMerge(openMenu ? "translate-x-0 opacity-100 z-99" : "-translate-x-[200vh] z-99", "fixed lg:hidden top-0 h-screen left-0 w-full  bg-white text-primary transition-transform duration-800 ease-in-out")}>
            <div className="flex px-5 pt-5 justify-between">
                <div className="px-1.75 py-0.75">
                    <Link to={'/'}><HeaderLogo /></Link>
                </div>
                <div className="px-5 pr-3">
                    <Button className={'mt-3'} onClick={() => setOpenMenu(false)}>
                        <IoMdClose className="size-8" />
                    </Button>
                </div>
            </div>
            <div className="w-full py-5 flex max-w-190 mx-auto justify-between">
                <div className="w-full px-8 py-1">
                    <ul className="flex flex-col gap-6 ">
                        {NAVBAR_LINKS.map((item) => (
                            <Link key={item.id} to={item.href}><li className="text-base text-primary font-medium leaading-[100%]">{item.title}</li></Link>
                        ))}
                    </ul>
                    <div className="flex w-full justify-between gap-2 py-2 mt-2">
                        <Button className='w-1/2 text-base font-normal text-primary border rounded-lg border-primary hover:bg-gray-200 transition-colors duration-500'>Sign in</Button>
                        <Button variant={'primary'} className='w-1/2 py-2 text-base '>Login</Button>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default MobileMenu;