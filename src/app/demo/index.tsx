import { useState } from "react";
import { toast } from "sonner";

// Import all shadcn components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Demo() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Shadcn UI Components Demo</h1>

      <Tabs defaultValue="buttons" className="w-full mb-10">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-4">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="forms">Form Elements</TabsTrigger>
          <TabsTrigger value="dialogs">Dialogs & Sheets</TabsTrigger>
          <TabsTrigger value="data">Data Display</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
        </TabsList>

        {/* Buttons Tab */}
        <TabsContent value="buttons" className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Button Variants</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
            <div className="flex flex-wrap gap-4">
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" className="h-10 w-10">
                I
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Button States</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button variant="outline" className="bg-primary/20">
                Custom
              </Button>
            </div>
          </section>
        </TabsContent>

        {/* Cards Tab */}
        <TabsContent value="cards" className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Card Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Basic Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>
                    Simple card with title and description.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    This is a basic card layout with header, content, and footer
                    sections.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Action</Button>
                </CardFooter>
              </Card>

              {/* Interactive Card */}
              <Card className="hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>Card with hover effects.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    This card has hover effects applied to demonstrate
                    interactive capabilities.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>

              {/* Media Card */}
              <Card>
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Media Placeholder</p>
                </div>
                <CardHeader>
                  <CardTitle>Media Card</CardTitle>
                  <CardDescription>Card with media content.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Cards can include media content like images or videos.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* Form Elements Tab */}
        <TabsContent value="forms" className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Input Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Default Input</label>
                  <Input placeholder="Enter some text" />
                </div>
                <div>
                  <label className="text-sm font-medium">Disabled Input</label>
                  <Input disabled placeholder="Disabled input" />
                </div>
                <div>
                  <label className="text-sm font-medium">With Icon</label>
                  <div className="relative">
                    <Input placeholder="Search..." className="pl-8" />
                    <span className="absolute left-2.5 top-2.5">🔍</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Select</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm font-medium">
                    Accept terms and conditions
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <label
                    htmlFor="notifications"
                    className="text-sm font-medium"
                  >
                    Enable notifications
                  </label>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Dialogs Tab */}
        <TabsContent value="dialogs" className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Dialog & Sheet Examples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Dialog */}
              <Card>
                <CardHeader>
                  <CardTitle>Dialog</CardTitle>
                  <CardDescription>A modal dialog component</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Dialogs appear in the center of the screen and require user
                    interaction.
                  </p>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button>Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                          This is a dialog description. It explains the purpose
                          of the dialog.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <p>
                          Dialog content goes here. This could be a form,
                          confirmation message, or any other content.
                        </p>
                      </div>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setIsDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button onClick={() => setIsDialogOpen(false)}>
                          Confirm
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              {/* Sheet */}
              <Card>
                <CardHeader>
                  <CardTitle>Sheet</CardTitle>
                  <CardDescription>
                    A slide-in sidebar component
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Sheets slide in from the edge of the screen and are ideal
                    for side panels and navigation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                      <SheetTrigger asChild>
                        <Button>Open Sheet</Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Sheet Title</SheetTitle>
                          <SheetDescription>
                            This is a sheet that slides in from the side.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="py-4">
                          <p>
                            Sheet content goes here. This could be navigation,
                            settings, or any other sidebar content.
                          </p>
                        </div>
                        <div className="flex justify-end">
                          <Button onClick={() => setIsSheetOpen(false)}>
                            Close
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </CardContent>
              </Card>

              {/* Toasts */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Toasts & Notifications</CardTitle>
                  <CardDescription>
                    Temporary notifications that appear on screen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      onClick={() =>
                        toast("Default Toast", {
                          description: "This is a default toast notification.",
                        })
                      }
                    >
                      Show Toast
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() =>
                        toast.error("Error Toast", {
                          description: "Something went wrong!",
                        })
                      }
                    >
                      Error Toast
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() =>
                        toast.success("Success Toast", {
                          description: "Operation completed successfully!",
                        })
                      }
                    >
                      Success Toast
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* Data Display Tab */}
        <TabsContent value="data" className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Data Display Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Accordion */}
              <Card>
                <CardHeader>
                  <CardTitle>Accordion</CardTitle>
                  <CardDescription>
                    Vertically collapsing content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Section 1</AccordionTrigger>
                      <AccordionContent>
                        Content for section 1. Accordions are great for FAQs and
                        other expandable content.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Section 2</AccordionTrigger>
                      <AccordionContent>
                        Content for section 2. They help reduce visual clutter
                        by hiding content until needed.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Section 3</AccordionTrigger>
                      <AccordionContent>
                        Content for section 3. Clicking on a section toggles its
                        visibility.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Avatar */}
              <Card>
                <CardHeader>
                  <CardTitle>Avatars</CardTitle>
                  <CardDescription>
                    User profile pictures or placeholders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="User"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-14 w-14">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="User"
                      />
                      <AvatarFallback>LG</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="" alt="User" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                  </div>
                </CardContent>
              </Card>

              {/* Separator */}
              <Card>
                <CardHeader>
                  <CardTitle>Separator</CardTitle>
                  <CardDescription>
                    A visual divider between content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p>Content above separator</p>
                    <Separator className="my-4" />
                    <p>Content below separator</p>
                  </div>

                  <div className="flex items-center">
                    <div>Left</div>
                    <Separator orientation="vertical" className="mx-4 h-4" />
                    <div>Right</div>
                  </div>
                </CardContent>
              </Card>

              {/* Dropdown Menu */}
              <Card>
                <CardHeader>
                  <CardTitle>Dropdown Menu</CardTitle>
                  <CardDescription>
                    Toggleable menu for actions and options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* Navigation Tab */}
        <TabsContent value="navigation" className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Navigation Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tabs Example */}
              <Card>
                <CardHeader>
                  <CardTitle>Tabs</CardTitle>
                  <CardDescription>
                    Tabbed interface for organizing content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="tab1" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="tab1"
                      className="p-4 border rounded-md mt-2"
                    >
                      Content for Tab 1
                    </TabsContent>
                    <TabsContent
                      value="tab2"
                      className="p-4 border rounded-md mt-2"
                    >
                      Content for Tab 2
                    </TabsContent>
                    <TabsContent
                      value="tab3"
                      className="p-4 border rounded-md mt-2"
                    >
                      Content for Tab 3
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* More navigation components could be added here */}
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
