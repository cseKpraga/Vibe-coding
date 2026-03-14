import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, AlertTriangleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MetricTileProps {
  title: string;
  value: string | number;
  suffix?: string;
  delta?: number; // Positive means went up, negative means went down
  isRiskAlert?: boolean;
  alertThreshold?: number;
  inverseColors?: boolean; // For things like volatility where lower is better
}

export function MetricTile({ 
  title, 
  value, 
  suffix = "", 
  delta = 0, 
  isRiskAlert = false,
  alertThreshold,
  inverseColors = false
}: MetricTileProps) {
  const [flash, setFlash] = useState<"positive" | "negative" | null>(null);
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    if (value !== prevValue) {
      if (value > prevValue) {
        setFlash(inverseColors ? "negative" : "positive");
      } else if (value < prevValue) {
        setFlash(inverseColors ? "positive" : "negative");
      }
      setPrevValue(value);
      
      const timer = setTimeout(() => setFlash(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue, inverseColors]);

  const isAlerting = isRiskAlert && alertThreshold && Number(value) > alertThreshold;

  return (
    <Card className={cn(
      "border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden transition-colors duration-300",
      flash === "positive" && "bg-green-500/10 border-green-500/30",
      flash === "negative" && "bg-red-500/10 border-red-500/30",
      isAlerting && "border-red-500 bg-red-500/10 animate-pulse"
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-2">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{title}</p>
          {isAlerting && (
            <div className="flex items-center text-red-500 text-xs font-bold uppercase tracking-widest bg-red-500/20 px-2 py-1 rounded">
              <AlertTriangleIcon className="w-3 h-3 mr-1" /> Alert
            </div>
          )}
        </div>
        
        <div className="mt-4 flex items-baseline gap-2">
          <h2 className="text-4xl font-mono font-semibold tracking-tight">
            {value}{suffix}
          </h2>
          
          {delta !== 0 && (
            <div className={cn(
              "flex items-center text-sm font-medium",
              (inverseColors ? delta < 0 : delta > 0) ? "text-green-500" : "text-red-500"
            )}>
              {delta > 0 ? (
                <ArrowUpIcon className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDownIcon className="w-4 h-4 mr-1" />
              )}
              {Math.abs(delta).toFixed(2)}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}