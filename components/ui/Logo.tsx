import Image from "next/image";

export default function Logo(){
    return(
        <div className="w-42 lg:w-48 ">
          <Image
            src="/Gategroup_logo.svg"
            alt="logo CashTraker"
            width={256} 
            height={64}
            className="w-full h-auto"
            priority
          />
        </div>
    )
}