import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RocketIcon } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">AI Assistant for Real Estate Builders</h1>
        <p className="text-lg text-gray-600 mb-8">
          Automatically find high-value property deals, schedule meetings, and close more deals with the power of AI.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Smart Deal Scanner</h2>
              <p className="text-sm text-gray-600">
                Scans real estate marketplaces 24/7 to identify undervalued or off-market properties.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Automated Outreach</h2>
              <p className="text-sm text-gray-600">
                Sends custom cold emails, SMS, and even AI-generated voice calls to leads.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">AI Scheduler</h2>
              <p className="text-sm text-gray-600">
                Book meetings automatically with interested buyers or sellers via Google Calendar.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Analytics Dashboard</h2>
              <p className="text-sm text-gray-600">
                See what properties got the most engagement, outreach results, and lead summaries.
              </p>
            </CardContent>
          </Card>
        </div>

        <Button className="text-lg px-6 py-3 flex items-center gap-2">
          <RocketIcon className="w-5 h-5" />
          Request Early Access
        </Button>
      </div>
    </main>
  );
}
