import FooterLogo from "@/assets/images/footerLogo.svg?react"
import FooterLinksIcon_1 from "@/assets/images/footerLinksIcon_1.svg?react";
import FooterLinksIcon_2 from "@/assets/images/footerLinksIcon_2.svg?react";
import FooterLinksIcon_3 from "@/assets/images/footerLinksIcon_3.svg?react";
import { FOOTER_LINKS } from "@/utils/Layout";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="bg-[rgba(0,30,55,1)] mt-24 pt-8 pb-4 lg:px-5 xl:px-30">
            <div className="max-w-300 w-full mx-auto">
                <div className="flex flex-col gap-21">
                    <div className="flex flex-col gap-12 lg:flex-row lg:gap-8 xl:gap-10 3xl:gap-18.5 justify-between">
                        <div className="flex justify-center md:justify-start max-lg:px-5">
                            <FooterLogo />
                        </div>
                        <div className="flex justify-between gap-4  max-lg:px-5 lg:gap-8 xl:gap-12 3xl:gap-15">
                            {FOOTER_LINKS.map((item) => (
                                <div className="flex flex-col gap-4.5" key={item.id}>
                                    <h6 className="text-white ">{item.title}</h6>
                                    <Link to={'/'} className="text-[rgba(183,183,183,0.7)] text-sm xl:text-base font-medium">{item.link1}</Link>
                                    <Link to={'/'} className="text-[rgba(183,183,183,0.7)] text-sm xl:text-base font-medium">{item.link2}</Link>
                                    <Link to={'/'} className="text-[rgba(183,183,183,0.7)] text-sm xl:text-base font-medium">{item.link3}</Link>
                                </div>
                            ))}
                            <div className="flex flex-col gap-4.5">
                                <h6 className="text-white">Contact Us</h6>
                                <div className="flex gap-3">
                                    <Link to={'/'}><FooterLinksIcon_1 /></Link>
                                    <Link to={'/'}><FooterLinksIcon_2 /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-101.75 w-full flex max-lg:px-5  flex-col gap-8">
                            <div className="flex flex-col gap-3">
                                <h6 className="text-white">Sign Up For Our Newsletter</h6>
                                <span className="text-[rgba(183,183,183,0.7)] text-sm font-medium">At latest deals and savings, sent to your inbox weekly.</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="text" placeholder="Enter Your Email" className="bg-white max-w-66.25 focus:outline-none w-full text-sm px-3 rounded-lg" />
                                <Button className='min-w-26 max-h-10 px-5 py-2 xl:px-9 xl:py-2 border border-white rounded-lg text-white font-medium text-base hover:text-primary hover:bg-gray-100 transition-colors duration-500'>Sign Up</Button>
                            </div>
                        </div>
                    </div>
                    <div className="border border-[rgba(220,224,234,1)]"></div>
                </div>
                <div className="flex justify-center xl:justify-end items-center pt-4 gap-1">
                    <FooterLinksIcon_3 />
                    <span className="text-secondary text-xs font-semibold leading-[100%]">2022 - 2024 Leads. All rigths reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;