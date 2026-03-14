import { useEffect, useState } from "react";

export type DataPoint = {
  time: string;
  price: number;
  volume: number;
};

export type AssetMetrics = {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volatility: number;
  rsi: number;
  history: DataPoint[];
};

// Generate realistic looking initial market data
const generateInitialData = (startPrice: number, points: number = 100) => {
  const data: DataPoint[] = [];
  let currentPrice = startPrice;
  const now = new Date();
  
  for (let i = points; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60000);
    // Random walk
    const change = currentPrice * (Math.random() * 0.004 - 0.002);
    currentPrice += change;
    
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      price: currentPrice,
      volume: Math.floor(Math.random() * 1000) + 100
    });
  }
  
  return data;
};

// Basic RSI calculation mockup
const calculateRSI = (data: DataPoint[]) => {
  // In a real app this would be calculated over 14 periods
  // Here we just return a simulated value between 30 and 70
  return 40 + Math.random() * 20; 
};

// Basic Volatility calculation mockup
const calculateVolatility = (data: DataPoint[]) => {
  return (Math.random() * 5 + 10).toFixed(2);
};

export const useMarketData = () => {
  const [assets, setAssets] = useState<Record<string, AssetMetrics>>({
    "AAPL": {
      symbol: "AAPL",
      price: 185.92,
      change: +1.24,
      changePercent: +0.67,
      volatility: 12.4,
      rsi: 58.2,
      history: generateInitialData(185)
    },
    "BTC-USD": {
      symbol: "BTC-USD",
      price: 64230.50,
      change: -450.20,
      changePercent: -0.70,
      volatility: 45.2,
      rsi: 42.1,
      history: generateInitialData(64000)
    },
    "NVDA": {
      symbol: "NVDA",
      price: 890.45,
      change: +24.50,
      changePercent: +2.83,
      volatility: 28.5,
      rsi: 72.4,
      history: generateInitialData(860)
    }
  });

  const [activeAsset, setActiveAsset] = useState<string>("AAPL");

  useEffect(() => {
    // Simulate real-time updates every 3 seconds instead of 60 for better demonstration
    const interval = setInterval(() => {
      setAssets(prev => {
        const next = { ...prev };
        
        Object.keys(next).forEach(symbol => {
          const asset = next[symbol];
          const lastPrice = asset.price;
          
          // Generate new price (random walk with drift based on RSI)
          const drift = (asset.rsi - 50) / 1000;
          const volatilityFactor = asset.volatility / 10000;
          const change = lastPrice * (Math.random() * volatilityFactor * 2 - volatilityFactor + drift);
          
          const newPrice = Number((lastPrice + change).toFixed(2));
          const newChange = Number((asset.change + change).toFixed(2));
          const newChangePercent = Number(((newChange / (lastPrice - asset.change)) * 100).toFixed(2));
          
          // Update history (keep last 100 points)
          const now = new Date();
          const newPoint = {
            time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            price: newPrice,
            volume: Math.floor(Math.random() * 1000) + 100
          };
          
          const newHistory = [...asset.history.slice(1), newPoint];
          
          next[symbol] = {
            ...asset,
            price: newPrice,
            change: newChange,
            changePercent: newChangePercent,
            volatility: Number(calculateVolatility(newHistory)),
            rsi: Number(calculateRSI(newHistory).toFixed(1)),
            history: newHistory
          };
        });
        
        return next;
      });
    }, 3000); // 3 seconds for active UI updates

    return () => clearInterval(interval);
  }, []);

  return {
    assets,
    activeAsset,
    setActiveAsset,
    currentData: assets[activeAsset]
  };
};