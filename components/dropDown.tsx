"use client"

import * as React from "react"
import { RiArrowDropDownLine } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <span className="flex justify-center items-center">
             Shop  
          <RiArrowDropDownLine />
          </span>
         
         </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>produsts links</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>

        <ul className="p-4">
          <li><Link href={'/'} className="font-medium text-xl hover:text-indigo-300">Home</Link></li>
            <li><Link href={'/catagory'} target="_blank" className="font-medium text-xl hover:text-indigo-300">Category</Link></li>
            <li><Link href={'/product-detail-page'} target="_blank" className="font-medium text-xl hover:text-indigo-300">Product Detail</Link></li>
            <li><Link href={'/cart'} target="_blank" className="font-medium text-xl hover:text-indigo-300">Cart</Link></li>
          </ul>
        
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
