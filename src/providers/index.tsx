import ReactQueryProvider from "./react-query-provider";
import { Toaster } from "@/components/ui/sonner";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <Toaster
        position="top-right"
        closeButton
        offset={{ top: 80, right: 0 }}
        expand
      />
      {children}
    </ReactQueryProvider>
  );
}
