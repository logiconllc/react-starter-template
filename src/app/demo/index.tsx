import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import {
  ArrowRight,
  Github,
  Rocket,
  Zap,
  Library,
  Palette,
} from "lucide-react";

export default function Demo() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 pt-24 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to Your <span className="text-primary">React</span> Project
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-[700px]">
          A modern template built with React, Vite, shadcn/ui, and Tanstack
          libraries. Start building your next project with the best tools
          available.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-12 max-w-7xl mx-auto">
        <Card className="p-6">
          <Rocket className="size-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
          <CardDescription>
            Built on Vite for incredible development speed and optimized
            production builds.
          </CardDescription>
        </Card>

        <Card className="p-6">
          <Palette className="size-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Beautiful UI</h3>
          <CardDescription>
            Powered by shadcn/ui components for a modern and accessible
            interface.
          </CardDescription>
        </Card>

        <Card className="p-6">
          <Library className="size-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Tanstack Suite</h3>
          <CardDescription>
            Includes Tanstack Query, Table, and Virtual for powerful data
            management.
          </CardDescription>
        </Card>

        <Card className="p-6">
          <Zap className="size-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Type Safe</h3>
          <CardDescription>
            Built with TypeScript for better developer experience and code
            quality.
          </CardDescription>
        </Card>
      </div>

      {/* Documentation Links */}
      <div className="bg-muted py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">shadcn/ui</h3>
                <CardDescription>
                  Beautifully designed components built with Radix UI and
                  Tailwind CSS.
                </CardDescription>
              </Card>
            </a>

            <a
              href="https://tanstack.com/query/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Tanstack Query</h3>
                <CardDescription>
                  Powerful asynchronous state management for React applications.
                </CardDescription>
              </Card>
            </a>

            <a
              href="https://vitejs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Vite</h3>
                <CardDescription>
                  Next Generation Frontend Tooling for modern web development.
                </CardDescription>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
