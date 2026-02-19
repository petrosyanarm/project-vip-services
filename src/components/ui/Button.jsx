import { twMerge } from "tailwind-merge";

function Button({ type = 'button', className, onClick, variant, children }) {
    const variantClasses = {
        primary: 'bg-primary text-white rounded-lg hover:bg-[rgba(0,30,55,1)] hover:shadow-xl transition-colors duration-500'
    }
    return (
        <button type={type} onClick={onClick} className={twMerge(className, "cursor-pointer", variantClasses[variant])}>{children}</button>
    )
}
export default Button;
