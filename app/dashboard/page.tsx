'use client'
import { useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "@/components/ui/button";

export default function SurfSyncDashboard() {
  const [sessionActive, setSessionActive] = useState(false);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [duration, setDuration] = useState("00:00:00");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (sessionActive && startTime) {
      interval = setInterval(() => {
        const now = new Date();
        const diff = new Date(now.getTime() - new Date(startTime).getTime());
        setDuration(
          diff.toISOString().substr(11, 8) // HH:MM:SS
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [sessionActive, startTime]);

  const startSession = () => {
    setSessionActive(true);
    setStartTime(new Date().toISOString());
  };

  const stopSession = () => {
    setSessionActive(false);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">SurfSync 🌊</h1>
        <Button variant="outline">Profile</Button>
      </div>

      <Card className="mb-4">
        <CardContent className="p-4">
          <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">Map View (placeholder)</span>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent className="p-4 grid grid-cols-2 gap-4">
          <div>
            <h2 className="font-semibold">Session Stats</h2>
            <p>Duration: {duration}</p>
            <p>Distance: 6.3 km</p>
            <p>Max Speed: 42.1 km/h</p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={startSession} disabled={sessionActive}>Start</Button>
            <Button onClick={stopSession} disabled={!sessionActive} variant="destructive">Stop</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="font-semibold mb-2">My Sessions</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>11 Apr 2025 | Mui Ne | 7.2 km | 54min</span>
              <Button size="sm" variant="outline">View</Button>
            </li>
            <li className="flex justify-between">
              <span>10 Apr 2025 | Mui Ne | 4.8 km | 36min</span>
              <Button size="sm" variant="outline">View</Button>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
