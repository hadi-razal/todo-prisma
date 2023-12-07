"use client"

import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
    className?: string,
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    text: string | ReactNode;
    actionButton?: boolean
}

const Button = ({ className, type, onClick, text, actionButton }: ButtonProps) => {
    return (
        < >
            <button onClick={onClick} className={clsx(actionButton && 'bg-orange-700 rounded-full p-2 text-white', 'bg-orange-700 px-2 text-white')} type={type} >
                {text}
            </button >

        </>
    )
}

export default Button