import { useMarketData } from "@/lib/useMarketData";
import { MetricTile } from "@/components/dashboard/MetricTile";
import { PriceChart } from "@/components/dashboard/PriceChart";
import { Button } from "@/components/ui/button";
import { ActivityIcon, BarChart3Icon, ZapIcon } from "lucide-react";

export default function Dashboard() {
  const { assets, activeAsset, setActiveAsset, currentData } = useMarketData();

  if (!currentData) return null;

  const isPositive = currentData.change >= 0;

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-8 font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-border/40">
          <div>
            <h1 className="text-3xl font-bold tracking-tight uppercase flex items-center gap-3">
              <ZapIcon className="w-8 h-8 text-primary" />
              Quantum Terminal
            </h1>
            <p className="text-muted-foreground mt-1 font-mono text-sm">
              High-Frequency Analytics Engine v2.0
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {Object.values(assets).map((asset) => (
              <Button
                key={asset.symbol}
                variant={activeAsset === asset.symbol ? "default" : "outline"}
                className={`font-mono transition-all ${
                  activeAsset === asset.symbol 
                    ? "shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setActiveAsset(asset.symbol)}
              >
                {asset.symbol}
              </Button>
            ))}
          </div>
        </header>

        {/* Main Price Display */}
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-6xl font-bold tracking-tighter font-mono flex items-center">
              ${currentData.price.toFixed(2)}
            </h2>
            <div className={`flex items-center text-lg font-mono font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? '+' : ''}{currentData.change.toFixed(2)} ({isPositive ? '+' : ''}{currentData.changePercent.toFixed(2)}%)
            </div>
          </div>
          
          <div className="text-right space-y-1 text-sm text-muted-foreground font-mono bg-card/30 p-4 rounded-lg border border-border/40">
            <div className="flex justify-between gap-8">
              <span>VOL:</span> <span className="text-foreground">{currentData.history[currentData.history.length - 1].volume.toLocaleString()}</span>
            </div>
            <div className="flex justify-between gap-8">
              <span>TIMESTAMP:</span> <span className="text-foreground">{currentData.history[currentData.history.length - 1].time}</span>
            </div>
          </div>
        </div>

        {/* Risk Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricTile 
            title="30D Volatility (σ)" 
            value={currentData.volatility} 
            suffix="%" 
            delta={Math.random() * 2 - 1} // Simulated delta
            isRiskAlert={true}
            alertThreshold={40}
            inverseColors={true}
          />
          
          <MetricTile 
            title="14M RSI" 
            value={currentData.rsi} 
            delta={Math.random() * 5 - 2.5} // Simulated delta
            isRiskAlert={true}
            alertThreshold={70} // Overbought alert
          />
          
          <MetricTile 
            title="Avg True Range" 
            value={(currentData.price * 0.015).toFixed(2)} 
            delta={Math.random() * 0.5 - 0.2}
          />
        </div>

        {/* Chart Section */}
        <div className="pt-4">
          <PriceChart 
            data={currentData.history} 
            symbol={currentData.symbol} 
            isPositiveDay={isPositive} 
          />
        </div>
      </div>
    </div>
  );
}