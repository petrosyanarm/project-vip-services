import HeaderLogo from "@/assets/images/headerLogo.svg?react";
import { NAVBAR_LINKS } from "@/utils/Layout";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import HeaderMenuBurger from "@/assets/images/headerMenuBurger.svg?react"
import { useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu";
function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className="sticky top-0 z-50 bg-white">
            <div className="w-full max-w-360 mx-auto px-5 py-4 lg:px-20 lg:py-4 flex justify-between gap-5 xl:gap-10 3xl:justify-between 3xl:gap-54.5">
                <div className="px-1.75 py-0.75">
                    <Link to={'/'}><HeaderLogo /></Link>
                </div>
                <div className="hidden md:block py-4.25">
                    <ul className="flex gap-6 xl:gap-10">
                        {NAVBAR_LINKS.map((item) => (
                            <Link key={item.id} to={item.href}><li className="text-xs lg:text-base text-primary font-medium leaading-[100%]">{item.title}</li></Link>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:flex gap-4 py-2">
                    <Button className='text-xs lg:text-base font-normal leading-[100%] text-primary px-3 py-1 lg:px-8.75 lg:py-2.75 border rounded-lg border-primary hover:bg-gray-200
  transition-colors duration-500'>Sign in</Button>
                    <Button variant={'primary'} className='px-4 text-xs lg:text-base lg:px-10 lg:py-2.5 '>Login</Button>
                </div>
                <div className='md:hidden'>
                    <Button onClick={() => setOpenMenu(!openMenu)}>
                        <HeaderMenuBurger />
                    </Button>
                    <MobileMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
                </div>
            </div>
        </div>
    )
}

export default Header;