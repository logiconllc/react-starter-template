import { NavLink, Link } from "react-router";
import {
  Menu,
  X,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Search,
  Bell,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-background via-background/95 to-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent top-0"></div>
      <nav className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between relative">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-foreground overflow-hidden shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-primary opacity-30 group-hover:opacity-0 transition-opacity"></div>
              <span className="font-bold text-xl text-primary-foreground z-10 group-hover:scale-110 transition-transform">
                B
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-lg tracking-tight leading-none">
                Brand
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Innovative Design
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {routes.map((route, idx) => (
            <NavLink
              key={route.href}
              to={route.href}
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md hover:bg-foreground/5 relative group",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              <span>{route.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex md:items-center md:gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
          >
            <Search className="h-[18px] w-[18px]" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground relative"
          >
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive"></span>
          </Button>

          <Separator orientation="vertical" className="mx-2 h-6" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full h-8 w-8 p-0 ml-2 bg-muted/50 hover:bg-muted"
              >
                <Avatar className="h-7 w-7 border-2 border-background">
                  <AvatarImage src="/avatar.png" alt="User" />
                  <AvatarFallback className="bg-gradient-to-br from-primary/40 to-primary text-primary-foreground text-xs">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl">
              <div className="flex items-center gap-2 p-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatar.png" alt="User" />
                  <AvatarFallback className="bg-gradient-to-br from-primary/40 to-primary text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">John Doe</span>
                  <span className="text-xs text-muted-foreground">
                    john@example.com
                  </span>
                </div>
              </div>
              <DropdownMenuSeparator className="my-1" />
              <DropdownMenuItem className="rounded-lg cursor-pointer">
                <User className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-lg cursor-pointer">
                <Settings className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-1" />
              <DropdownMenuItem className="rounded-lg text-destructive focus:text-destructive cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Search className="h-[18px] w-[18px]" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground ml-1"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[85%] sm:max-w-sm flex-col border-l border-border/50 bg-gradient-to-b from-background to-background/95 backdrop-blur-lg"
            >
              <SheetHeader className="px-1 border-b pb-4">
                <SheetTitle className="flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-2">
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-foreground overflow-hidden">
                      <span className="font-bold text-lg text-primary-foreground">
                        B
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-lg">Brand</span>
                      <span className="text-xs text-muted-foreground">
                        Innovative Design
                      </span>
                    </div>
                  </Link>
                  <SheetClose className="rounded-full h-7 w-7 flex items-center justify-center bg-muted/80 hover:bg-muted">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 px-2">
                <div className="space-y-1">
                  {routes.map((route) => (
                    <SheetClose asChild key={route.href}>
                      <NavLink
                        to={route.href}
                        className={({ isActive }: { isActive: boolean }) =>
                          cn(
                            "flex items-center px-3 py-3 text-base font-medium transition-colors rounded-lg hover:bg-muted",
                            isActive
                              ? "bg-muted text-primary"
                              : "text-muted-foreground hover:text-foreground"
                          )
                        }
                      >
                        {route.label}
                      </NavLink>
                    </SheetClose>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              <div className="px-2">
                <div className="rounded-xl border bg-card p-4 shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-10 w-10 border-2 border-background">
                      <AvatarImage src="/avatar.png" alt="User" />
                      <AvatarFallback className="bg-gradient-to-br from-primary/40 to-primary text-primary-foreground">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-semibold">John Doe</span>
                      <span className="text-xs text-muted-foreground">
                        john@example.com
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="justify-start gap-2"
                    >
                      <User className="h-4 w-4 text-muted-foreground" />
                      Profile
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="justify-start gap-2"
                    >
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      Settings
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-auto p-2">
                <Button variant="destructive" className="w-full gap-2">
                  <LogOut className="h-4 w-4" />
                  Log out
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  &copy; 2023 Brand Inc. All rights reserved.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
