import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DataPoint } from "@/lib/useMarketData";

interface PriceChartProps {
  data: DataPoint[];
  symbol: string;
  isPositiveDay: boolean;
}

export function PriceChart({ data, symbol, isPositiveDay }: PriceChartProps) {
  // Use Tailwind CSS variables for colors
  const colorHex = isPositiveDay ? "142 71% 45%" : "348 83% 47%"; // Green or Red in HSL format for our theme
  const strokeColor = `hsl(${colorHex})`;
  
  // Calculate min and max for Y-axis domain to make chart look more dramatic
  const prices = data.map(d => d.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const domainPadding = (max - min) * 0.1;

  return (
    <Card className="col-span-full border-border/40 bg-card/50 backdrop-blur-sm shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-border/40">
        <div className="space-y-1">
          <CardTitle className="text-xl font-bold uppercase tracking-wider">{symbol} LIVE FEED</CardTitle>
          <p className="text-sm text-muted-foreground font-mono">Real-time OHLCV streaming buffer</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono text-green-500 tracking-widest font-medium">CONNECTED</span>
        </div>
      </CardHeader>
      <CardContent className="p-0 pt-6">
        <div className="h-[400px] w-full px-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={strokeColor} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={strokeColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                minTickGap={30}
                className="font-mono"
              />
              <YAxis 
                domain={[min - domainPadding, max + domainPadding]} 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `$${value.toFixed(2)}`}
                width={80}
                orientation="right"
                className="font-mono"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                itemStyle={{ color: strokeColor, fontFamily: 'var(--font-mono)' }}
                labelStyle={{ color: 'hsl(var(--muted-foreground))', marginBottom: '8px' }}
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
              />
              <Area 
                type="monotone" 
                dataKey="price" 
                stroke={strokeColor} 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorPrice)" 
                isAnimationActive={false} // Disable animation for better performance on high frequency updates
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}