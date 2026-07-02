import React from "react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import caseI from "/equipment/E_1_CASE.webp";
import psuI from "/equipment/E_2_PSU.webp";
import mbI from "/equipment/E_3_MB.webp";
import cpuI from "/equipment/E_4_CPU.webp";
import cpucoolerI from "/equipment/E_5_CPUCOOLER.webp";
import gpuI from "/equipment/E_6_GPU.webp";
import ramI from "/equipment/E_7_RAM.webp";
import hddI from "/equipment/E_8_HDD.webp";
import ssdI from "/equipment/E_9_SSD.webp";
import osI from "/equipment/E_10_OS.webp";
import mmonitorI from "/equipment/E_11_MMONITOR.webp";
import smonitor1I from "/equipment/E_12_SMONITOR.webp";
import smonitor2I from "/equipment/E_13_SMONITOR.webp";
import keyboardI from "/equipment/E_14_KEYBOARD.webp";
import mouseI from "/equipment/E_15_MOUSE.webp";
import mousepadI from "/equipment/E_16_MOUSEPAD.webp";
import headsetI from "/equipment/E_17_HEADSET.webp";
import microphoneI from "/equipment/E_18_MICROPHONE.webp";
import mobileI from "/equipment/E_19_MOBILE.webp";
import consoleI from "/equipment/E_20_CONSOLE.webp";

interface EquipmentSpecs {
  [key: string]: string | undefined;
}

interface EquipmentItem {
  category: string;
  name: string;
  image: string;
  specs: EquipmentSpecs;
}

interface EquipmentCardProps {
  item: EquipmentItem;
  index: number;
  onClick?: (item: EquipmentItem) => void;
}

interface FilterButtonProps {
  filter: string;
  isActive: boolean;
  onClick: (filter: string) => void;
}

interface DrawerProps {
  item: EquipmentItem | null;
  onClose: () => void;
}

const equipmentData = [
  {
    category: "COMPUTER CASE",
    name: "Fractal Design Define 7",
    image: caseI,
    specs: {
      color: "Black",
      glass: "TG Dark Tint",
      size: "Midi Tower",
    },
  },
  {
    category: "POWER SUPPLY",
    name: "Corsair HX1000",
    image: psuI,
    specs: {
      power: "1000 W",
      efficiency: "80 PLUS Platinum",
      modularity: "Fully",
    },
  },
  {
    category: "MOTHERBOARD",
    name: "MSI MPG X870E CARBON WIFI",
    image: mbI,
    specs: {
      biosVersion: "7E49v1AA0",
      formFactor: "ATX",
      socket: "AM5",
      chipset: "X870E",
    },
  },
  {
    category: "PROCESSOR",
    name: "AMD Ryzen 9 9900X",
    image: cpuI,
    specs: {
      cores: "12 cores / 24 threads",
      baseClock: "4.4 GHz",
      boostClock: "5.6 GHz",
      socket: "AM5",
      architecture: "Zen 5 - Granite Ridge",
    },
  },
  {
    category: "PROCESSOR COOLER",
    name: "Noctua NH-U9S chromax.black",
    image: cpucoolerI,
    specs: {
      type: "PWM - Air Cooler",
      height: "125 mm",
    },
  },
  {
    category: "GRAPHICS CARD",
    name: "MSI GeForce RTX 5070 12G GAMING TRIO OC",
    image: gpuI,
    specs: {
      memory: "12 GB GDDR7",
      baseClock: "2325 MHz",
      memoryBus: "192 bit",
      boostClock: "2610 Mhz",
      architecture: "NVIDIA - Blackwell 2.0 (GB205)",
      previousGpu: "MSI GeForce RTX 2070 GAMING Z",
    },
  },
  {
    category: "COMPUTER MEMORY",
    name: "Kingston Fury Beast",
    image: ramI,
    specs: {
      type: "DDR5",
      capacity: "32 GB (2x16 GB)",
      speed: "6000 MHz",
      latency: "CL30",
    },
  },
  {
    category: "HARD DISK DRIVE",
    name: "WD Ultrastar DC HC320",
    image: hddI,
    specs: {
      capacity: "8 TB",
      interface: "SATA III",
      rpm: "7200 RPM",
      cache: "256 MB",
    },
  },
  {
    category: "SOLID STATE DRIVE",
    name: "Samsung SSD 990 PRO",
    image: ssdI,
    specs: {
      capacity: "1 TB",
      interface: "NVMe - PCIe 4.0",
    },
  },
  {
    category: "OPERATING SYSTEM",
    name: "Windows 11",
    image: osI,
    specs: {
      version: "Professional (Pro)",
      build: "25H2",
    },
  },
  {
    category: "MAIN MONITOR",
    name: "Acer Predator XB273UNX",
    image: mmonitorI,
    specs: {
      size: "27 inches",
      panel: "IPS",
      resolution: "2560x1440 (2K)",
      refreshRate: "270 Hz",
    },
  },
  {
    category: "SIDE MONITOR",
    name: "Zowie by BenQ XL2720",
    image: smonitor1I,
    specs: {
      size: "27 inches",
      panel: "TN",
      resolution: "1920x1080 (FullHD)",
      refreshRate: "144 Hz",
    },
  },
  {
    category: "SIDE MONITOR",
    name: "Iiyama PLE2209HDS",
    image: smonitor2I,
    specs: {
      size: "22 inches",
      panel: "TN",
      resolution: "1920x1080 (FullHD)",
      refreshRate: "60 Hz",
    },
  },
  {
    category: "KEYBOARD",
    name: "Logitech G915 LIGHTSPEED TKL",
    image: keyboardI,
    specs: {
      switches: "GL Linear - Red",
      layout: "TKL",
      connectivity: "Wireless",
    },
  },
  {
    category: "MOUSE",
    name: "Logitech G Pro X Superlight 2",
    image: mouseI,
    specs: {
      dpi: "400 DPI",
      pollingRate: "8000 Hz",
      weight: "60 g",
      sensor: "HERO 25K",
      connectivity: "Wireless",
    },
  },
  {
    category: "MOUSEPAD",
    name: "Logitech G640 Large Cloth",
    image: mousepadI,
    specs: {
      size: "Large",
      surface: "Cloth",
      thickness: "3 mm",
      base: "Rubber",
    },
  },
  {
    category: "HEADSET",
    name: "Logitech G Pro X 2 LIGHTSPEED",
    image: headsetI,
    specs: {
      connectivity: "Wireless",
      microphone: "Blue VO!CE",
      battery: "50+ hours",
    },
  },
  {
    category: "MICROPHONE",
    name: "HyperX Quadcast",
    image: microphoneI,
    specs: {
      connection: "USB",
      type: "Condenser",
    },
  },
  {
    category: "MOBILE",
    name: "iPhone 17",
    image: mobileI,
    specs: {
      memory: "8 GB",
      storage: "256 GB",
      processor: "Apple A19",
    },
  },
  {
    category: "CONSOLE",
    name: "Xbox 360",
    image: consoleI,
    specs: {
      storage: "250 GB",
      other: "Samsung Gear VR",
      table: "Electric Table",
    },
  },
];

const categoryFilters = [
  "ALL",
  "COMPUTER",
  "PERIPHERALS",
  "MONITORS",
  "AUDIO",
  "MOBILE & CONSOLES",
];

const categoryMap = {
  "COMPUTER CASE": "COMPUTER",
  "POWER SUPPLY": "COMPUTER",
  MOTHERBOARD: "COMPUTER",
  PROCESSOR: "COMPUTER",
  "PROCESSOR COOLER": "COMPUTER",
  "GRAPHICS CARD": "COMPUTER",
  "COMPUTER MEMORY": "COMPUTER",
  "HARD DISK DRIVE": "COMPUTER",
  "SOLID STATE DRIVE": "COMPUTER",
  "OPERATING SYSTEM": "COMPUTER",
  KEYBOARD: "PERIPHERALS",
  MOUSE: "PERIPHERALS",
  MOUSEPAD: "PERIPHERALS",
  "MAIN MONITOR": "MONITORS",
  "SIDE MONITOR": "MONITORS",
  HEADSET: "AUDIO",
  MICROPHONE: "AUDIO",
  MOBILE: "MOBILE & CONSOLES",
  CONSOLE: "MOBILE & CONSOLES",
};

const getCategoryGroup = (category: string): string =>
  categoryMap[category as keyof typeof categoryMap] || "OTHER";

const specLabels: Record<string, string> = {
  color: "Color",
  glass: "Glass Type",
  size: "Size",
  power: "Power Output",
  efficiency: "Efficiency Rating",
  modularity: "Modularity",
  biosVersion: "BIOS Version",
  formFactor: "Form Factor",
  socket: "Socket Type",
  chipset: "Chipset",
  cores: "Cores & Threads",
  baseClock: "Base Clock Frequency",
  boostClock: "Boost Clock Frequency",
  architecture: "Microarchitecture",
  memory: "Memory / VRAM",
  memoryBus: "Memory Bus Width",
  previousGpu: "Previous GPU",
  type: "Cooler / Memory Type",
  height: "Cooler Height",
  capacity: "Capacity",
  speed: "Memory Frequency",
  latency: "Memory Latency (CL)",
  interface: "Storage Interface",
  rpm: "Rotational Speed",
  cache: "Buffer Cache Size",
  version: "OS Version",
  build: "OS Build Number",
  panel: "Display Panel Type",
  resolution: "Native Resolution",
  refreshRate: "Refresh Rate",
  switches: "Key Switch Type",
  layout: "Keyboard Layout Style",
  connectivity: "Connection Mode",
  dpi: "Sensor Sensitivity (DPI)",
  pollingRate: "USB Polling Rate",
  weight: "Physical Weight",
  sensor: "Optical Sensor model",
  surface: "Mousepad Surface Type",
  thickness: "Mousepad Thickness",
  base: "Mousepad Non-Slip Base",
  microphone: "Built-in Microphone",
  battery: "Battery Lifespan",
  connection: "Microphone Connector",
  storage: "Storage Capacity",
  other: "Accessories / Extras",
  table: "Desk Type",
  processor: "System Processor",
};

const formatSpecKey = (key: string): string => {
  if (specLabels[key]) return specLabels[key];
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

const CustomStyles = () => (
  <style>{`
    .blueprint-grid {
      background-image: 
        linear-gradient(rgba(59, 130, 246, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.035) 1px, transparent 1px);
      background-size: 16px 16px;
      background-position: center;
    }
    body, section, h2, h3, p, span, button, dt, dd {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }
  `}</style>
);

const EquipmentCard: React.FC<EquipmentCardProps> = ({
  item,
  index,
  onClick,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setIsVisible(true),
      Math.min(index * 50, 1000),
    );
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (!imageLoaded && !imageError) {
      const timer = setTimeout(() => setShowSpinner(true), 80);
      return () => clearTimeout(timer);
    } else {
      setShowSpinner(false);
    }
  }, [item.image, imageLoaded, imageError]);

  const handleClick = useCallback((): void => {
    onClick?.(item);
  }, [item, onClick]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>): void => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick],
  );

  const displaySpecs = useMemo(
    () => Object.entries(item.specs).slice(0, 2) as [string, string][],
    [item.specs],
  );

  return (
    <article
      className={`group relative bg-[#0a0a0c]/85 backdrop-blur-xl border border-white/4 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-550 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:shadow-2xl hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[#0f0f12]/90 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${item.name}`}
    >
      {/* Blueprint grid background */}
      <div className="relative h-48 blueprint-grid bg-black/25 flex items-center justify-center p-4 overflow-hidden border-b border-white/2">
        {showSpinner && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-8 h-8 border-3 border-white/10 border-t-blue-500 rounded-full animate-spin" />
          </div>
        )}

        {imageError ? (
          <div className="flex flex-col items-center justify-center text-gray-500 relative z-25">
            <svg
              className="w-12 h-12 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs">Image not available</span>
          </div>
        ) : (
          <img
            src={item.image}
            alt={`${item.name} - ${item.category}`}
            className={`max-w-[85%] max-h-[85%] object-contain relative z-25 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform transform-gpu group-hover:scale-[1.08] ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ backfaceVisibility: "hidden" }}
            onLoad={() => {
              setImageLoaded(true);
              setImageError(false);
            }}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
            loading="lazy"
          />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="mb-2">
          <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest">
            {item.category}
          </span>
        </div>

        <div className="h-6 flex items-start mb-3">
          <h3 className="text-sm md:text-base font-bold text-gray-300 leading-snug group-hover:text-blue-400 transition-colors duration-300 truncate w-full select-none">
            {item.name}
          </h3>
        </div>

        {/* Clean Spec Inline Row */}
        <div className="text-[11px] text-gray-400/80 font-medium flex flex-wrap gap-x-2 gap-y-1 select-none">
          {displaySpecs.map(([_, value], idx) => (
            <span key={idx} className="flex items-center gap-2">
              {idx > 0 && <span className="text-gray-600/60">•</span>}
              <span>{value}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </article>
  );
};

const FilterButton: React.FC<FilterButtonProps> = ({
  filter,
  isActive,
  onClick,
}) => (
  <button
    onClick={() => onClick(filter)}
    className={`cursor-pointer px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
      isActive
        ? "bg-blue-500/10 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
    }`}
    aria-pressed={isActive}
  >
    {filter}
  </button>
);

const Drawer: React.FC<DrawerProps> = ({ item, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setShowSpinner(false);
  }, [item]);

  useEffect(() => {
    if (!imageLoaded && !imageError && item) {
      const timer = setTimeout(() => setShowSpinner(true), 80);
      return () => clearTimeout(timer);
    } else {
      setShowSpinner(false);
    }
  }, [item, imageLoaded, imageError]);

  useEffect(() => {
    if (item) {
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsVisible(true), 50);
      const transitionTimer = setTimeout(() => setIsTransitioning(false), 350);

      const scrollY = window.scrollY;
      const style = document.body.style;

      style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      style.position = "fixed";
      style.top = `-${scrollY}px`;
      style.width = "100%";

      const handleEscape = (e: KeyboardEvent): void => {
        if (e.key === "Escape") {
          handleClose();
        }
      };

      document.addEventListener("keydown", handleEscape);

      return () => {
        clearTimeout(timer);
        clearTimeout(transitionTimer);
        style.overflow = "unset";
        document.documentElement.style.overflow = "unset";
        style.position = "unset";
        style.top = "unset";
        style.width = "unset";
        window.scrollTo(0, scrollY);
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [item]);

  const handleClose = useCallback((): void => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      if (e.target === e.currentTarget) handleClose();
    },
    [handleClose],
  );

  if (!item) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      <div
        className={`w-full sm:max-w-md bg-[#070709]/98 border-l border-white/10 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] h-full flex flex-col ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-6 border-b border-white/10 flex items-center justify-between shrink-0 bg-black/20">
          <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase">
            Specifications
          </span>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer"
            aria-label="Close panel"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Blueprint image header */}
          <div className={`relative h-60 blueprint-grid border border-white/4 bg-black/40 rounded-2xl flex items-center justify-center p-6 overflow-hidden group ${
            isTransitioning ? "pointer-events-none" : ""
          }`}>
            {showSpinner && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-8 h-8 border-3 border-white/10 border-t-blue-500 rounded-full animate-spin" />
              </div>
            )}

            {imageError ? (
              <div className="flex flex-col items-center justify-center text-gray-500 relative z-25">
                <svg
                  className="w-10 h-10 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs">Image not available</span>
              </div>
            ) : (
              <img
                src={item.image}
                alt={`${item.name} - ${item.category}`}
                className={`max-w-[80%] max-h-[80%] object-contain relative z-25 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform transform-gpu group-hover:scale-[1.08] ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                style={{ backfaceVisibility: "hidden" }}
                onLoad={() => {
                  setImageLoaded(true);
                  setImageError(false);
                }}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
              />
            )}
          </div>

          <div>
            <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest mb-1.5 block">
              {item.category}
            </span>
            <h3
              id="drawer-title"
              className="text-xl font-bold text-gray-300 mb-6 leading-tight wrap-break-word"
            >
              {item.name}
            </h3>
            
            <div className="border-b border-white/10 mb-6" />

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(item.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white/2 hover:bg-white/4 rounded-xl p-3.5 border border-white/3 hover:border-blue-500/10 transition-all duration-200"
                >
                  <dt className="text-gray-400 text-xs font-semibold capitalize mb-1">
                    {formatSpecKey(key)}
                  </dt>
                  <dd className="text-white text-xs font-semibold break-all pr-4">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

const EquipmentSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("COMPUTER");
  const [selectedItem, setSelectedItem] = useState<EquipmentItem | null>(null);
  const [isFilterChanging, setIsFilterChanging] = useState<boolean>(false);

  const handleFilterChange = useCallback(
    (filter: string): void => {
      if (filter === selectedFilter) return;

      setIsFilterChanging(true);
      setTimeout(() => {
        setSelectedFilter(filter);
        setIsFilterChanging(false);
      }, 175);
    },
    [selectedFilter],
  );

  const handleItemSelect = useCallback(
    (item: EquipmentItem): void => setSelectedItem(item),
    [],
  );
  const handleModalClose = useCallback((): void => setSelectedItem(null), []);

  const filteredEquipment = useMemo(() => {
    if (selectedFilter === "ALL") return equipmentData;
    return equipmentData.filter(
      (item) => getCategoryGroup(item.category) === selectedFilter,
    );
  }, [selectedFilter]);

  const equipmentCount = filteredEquipment.length;

  return (
    <section id="equipment" className="min-h-screen py-20 lg:px-10">
      <CustomStyles />
      <div className="max-w-6xl mx-auto px-4 select-none">
        <RevealOnScroll>
          <header className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-8 bg-linear-to-br from-[#0845d1] to-[#015ea1] bg-clip-text text-transparent drop-shadow-lg select-none text-center">
              Equipment
            </h2>
          </header>

          <nav
            className="flex flex-wrap justify-center gap-3 mb-8 select-none"
            role="tablist"
          >
            {categoryFilters.map((filter) => (
              <FilterButton
                key={filter}
                filter={filter}
                isActive={selectedFilter === filter}
                onClick={handleFilterChange}
              />
            ))}
          </nav>

          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm select-none">
              {`Showing ${equipmentCount} item${equipmentCount !== 1 ? "s" : ""}${
                selectedFilter !== "ALL" ? ` in ${selectedFilter}` : ""
              }.`}
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isFilterChanging
                ? "opacity-0 scale-[0.99] translate-y-1"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            {filteredEquipment.map((item, index) => (
              <EquipmentCard
                key={`${item.name}-${selectedFilter}`}
                item={item}
                index={index}
                onClick={handleItemSelect}
              />
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {selectedItem && (
        <Drawer
          item={selectedItem}
          onClose={handleModalClose}
        />
      )}
    </section>
  );
};

export const Equipment = EquipmentSection;
export default Equipment;