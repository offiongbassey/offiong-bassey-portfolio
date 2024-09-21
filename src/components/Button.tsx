type Props = {
    type: "button" | "submit";
    variant: "primary" | "white" | "gradient"
    children: React.ReactNode;
    className?: string;
}

const Button = ({ variant = 'primary', className, ...props }: Props) => {
    return (
        <button className={` ${variant} ${className}`} {...props}>
            
        </button>
    )
}

export default Button;