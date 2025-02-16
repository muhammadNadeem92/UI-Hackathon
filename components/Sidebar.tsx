
import { Label } from "@/components/ui/label"
import { VscMenu } from "react-icons/vsc";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";


export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
         <button>
        <VscMenu  className='w-6 h-6 mt-[60px] ml-4 text-2xl cursor-pointer'/>
        </button>
       </SheetTrigger>
      <SheetContent side="left" className="p-4 w-64">
        <SheetHeader>
          <SheetTitle>Product links</SheetTitle>
       
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
          <ul className="p-4">
          <li><Link href={'/'} className="font-medium text-xl hover:text-indigo-300">Home</Link></li>
            <li><Link href={'/catagory'} target="_blank" className="font-medium text-xl hover:text-indigo-300">Category</Link></li>
            <li><Link href={'/product-detail-page'} target="_blank" className="font-medium text-xl hover:text-indigo-300">Product Detail</Link></li>
            <li><Link href={'/cart'} target="_blank" className="font-medium text-xl hover:text-indigo-300">Cart</Link></li>
          </ul>
          </div>
        </div>
       
      </SheetContent>
    </Sheet>
  )
}
