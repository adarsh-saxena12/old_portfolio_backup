'use client'
import { useRouter } from "next/navigation"

interface ButtonProps {
    label:string,
    buttonStyle:string,
    fontSize:string,
    onClick?:string,
} 

const Button = ({label,buttonStyle,fontSize,onClick}:ButtonProps) => {

    const router = useRouter();

    return (
        
        <div>
            <button className={`font-bold ${fontSize} ${buttonStyle}`} onClick={() => router.push(`${onClick}`)} >
             {label}
            </button>
        </div>
  
    );
};

export default Button;


