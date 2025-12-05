"use client";

import { CompanyIcon } from "@/components/icons/CompanyIcon";
import Link from "next/link";
import * as React from "react";
import { Menu, X } from "lucide-react"; // Import icons
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Sheet from "@/components/ui/native-swipeable-sheets";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const linkClassName = cn(
    navigationMenuTriggerStyle(),
    "bg-transparent hover:bg-transparent focus:bg-transparent text-gray-500 font-medium text-sm",
    "hover:text-green-500 focus:text-green-500",
    "data-[active]:bg-transparent data-[state=open]:bg-transparent"
  );

  const triggerClassName = cn(
    navigationMenuTriggerStyle(),
    "bg-transparent hover:bg-transparent focus:bg-transparent text-gray-500 font-medium text-sm",
    "hover:text-green-500 focus:text-green-500",
    "data-[active]:bg-transparent data-[state=open]:bg-transparent"
  );

  return (
    // Changed items-center to items-start for alignment
    // Added max-w, margin, and rounded corners for the "rounded corner header" look
    <header className="sticky top-0 z-50 w-screen lg:mx-auto bg-white/70 flex justify-center backdrop-blur-2xl ">
      <div className="flex items-center w-full max-w-7xl justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-0">
          <CompanyIcon className="w-9 h-9" viewBox="-4 -15 98 98" />
          <span className="text-xl font-semibold text-nowrap">post bridge</span>
        </div>

        {/* Desktop Navigation */}
        {/* Hidden on mobile, Flex on medium screens+ */}
        {/* pt-1 added to align text baseline with the logo text since we are using items-start */}
        <div className="hidden lg:block pt-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={linkClassName}>
                  <Link href="#">Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={linkClassName}>
                  <Link href="#">Reviews</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={linkClassName}>
                  <Link href="#">Features</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={linkClassName}>
                  <Link href="#">Platform</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={linkClassName}>
                  <Link href="#">FAQ</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={linkClassName}>
                  <Link href="#">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerClassName}>
                  Tools
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={linkClassName}>
                  <Link href="#">API</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-start gap-4 pt-1">
          <button className="px-6 py-2 font-semibold text-sm text-black border border-green-500 rounded-full hover:bg-green-50 transition-colors">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden pt-1">
          <button onClick={() => setOpen(true)} aria-label="Toggle menu">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <Sheet open={open} close={() => setOpen(false)} title="Menu">
        <div className="lg:hidden border-t border-gray-100 p-4 bg-white rounded-b-2xl">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#"
              className="text-gray-600 font-medium hover:text-green-500"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-gray-600 font-medium hover:text-green-500"
            >
              Reviews
            </Link>
            <Link
              href="#"
              className="text-gray-600 font-medium hover:text-green-500"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-gray-600 font-medium hover:text-green-500"
            >
              Platform
            </Link>
            <Link
              href="#"
              className="text-gray-600 font-medium hover:text-green-500"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-gray-600 font-medium hover:text-green-500"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-gray-600 font-medium hover:text-green-500"
            >
              API
            </Link>

            <div className="pt-4">
              <button className="w-full px-6 py-3 font-semibold text-black border border-green-500 rounded-full hover:bg-green-50">
                Login
              </button>
            </div>
          </nav>
        </div>
      </Sheet>
    </header>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  href: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
              "hover:bg-green-50 hover:text-green-900 focus:bg-green-50 focus:text-green-900",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";