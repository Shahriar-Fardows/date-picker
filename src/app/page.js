import DateRangePicker from "@/Components/date-picker";
import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";
import { ThemeProvider } from "@/Components/theme-provider";


export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-center">Date Range Picker Demo</h1>
            <DateRangePicker />
            <h1 className="text-3xl font-bold text-center">Date Range Picker Demo</h1>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}



