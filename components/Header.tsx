import { CompanyIcon } from "@/components/icons/CompanyIcon";
import Link from "next/link";
import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";

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
      description:
        "For sighted users to preview content available behind a link.",
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
  ]

export const Header = () => {
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
      )

  return (
      <header className="flex items-center justify-between w-full h-20 px-20 bg-white">
          <div className="flex items-center gap-4">
            <CompanyIcon className="w-8 h-8" />
            <span className="text-xl font-semibold text-nowrap">post bridge</span>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClassName}>
                        <Link href="#">
                            Pricing
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClassName}>
                        <Link href="#">
                            Reviews
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClassName}>
                        <Link href="#">
                            Features
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClassName}>
                        <Link href="#">
                            Platform
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClassName}>
                        <Link href="#">
                            FAQ
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClassName}>
                        <Link href="#">
                            Blog
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={triggerClassName}>Tools</NavigationMenuTrigger>
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
                        <Link href="#">
                            API
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 font-semibold text-black border border-green-500 rounded-full">
              Login
            </button>
          </div>
      </header>
  );
};


interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  href: string;
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, children, ...props }, ref) => {
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
  )
})
ListItem.displayName = "ListItem"
