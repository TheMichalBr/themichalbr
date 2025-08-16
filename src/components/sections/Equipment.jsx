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
      power: "1000W",
      efficiency: "80 PLUS Platinum",
      modularity: "Fully",
    },
  },
  {
    category: "MOTHERBOARD",
    name: "MSI MPG X870E CARBON WIFI",
    image: mbI,
    specs: {
      biosVersion: "7E49v1A63",
      formFactor: "ATX",
      chipset: "X870E",
      socket: "AM5",
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
    name: "Noctua NH-U9S",
    image: cpucoolerI,
    specs: {
      version: "chromax.black",
      type: "PWM - Air Cooler",
      height: "125mm",
    },
  },
  {
    category: "GRAPHICS CARD",
    name: "NVIDIA MSI GeForce RTX 2070",
    image: gpuI,
    specs: {
      version: "GAMING Z",
      memory: "8GB GDDR6",
      baseClock: "1410 MHz",
      boostClock: "1620 MHz",
      architecture: "TU104 - Turing",
    },
  },
  {
    category: "COMPUTER MEMORY",
    name: "Kingston Fury Beast",
    image: ramI,
    specs: {
      type: "DDR5",
      capacity: "32GB (2x16GB)",
      speed: "6000MHz",
      latency: "CL30",
    },
  },
  {
    category: "HARD DISK DRIVE",
    name: "WD Ultrastar DC HC320",
    image: hddI,
    specs: {
      capacity: "8TB",
      interface: "SATA III",
      rpm: "7200 RPM",
      cache: "256MB",
    },
  },
  {
    category: "SOLID STATE DRIVE",
    name: "Samsung SSD 990 PRO",
    image: ssdI,
    specs: {
      capacity: "1TB",
      interface: "NVMe - PCIe 4.0",
    },
  },
  {
    category: "OPERATING SYSTEM",
    name: "Windows 11",
    image: osI,
    specs: {
      version: "Professional (Pro)",
      build: "24H2",
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
      refreshRate: "270Hz (275Hz)",
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
      refreshRate: "144Hz",
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
      refreshRate: "60Hz",
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
      weight: "60g",
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
      thickness: "3mm",
      base: "Rubber",
    },
  },
  {
    category: "HEADSET",
    name: "Logitech G Pro X 2 LIGHTSPEED",
    image: headsetI,
    specs: {
      battery: "50+ hours",
      microphone: "Blue VO!CE",
      connectivity: "Wireless",
    },
  },
  {
    category: "MICROPHONE",
    name: "HyperX Quadcast",
    image: microphoneI,
    specs: {
      connection: "USB",
      type: "Condenser",
      patterns: "4 polar patterns",
    },
  },
  {
    category: "MOBILE",
    name: "Samsung S20 FE",
    image: mobileI,
    specs: {
      memory: "8GB",
      storage: "128GB",
      processor: "Snapdragon 865",
    },
  },
  {
    category: "CONSOLE",
    name: "Xbox 360",
    image: consoleI,
    specs: {
      storage: "250GB",
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
  "OTHER",
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

const getCategoryGroup = (category) => categoryMap[category] || "OTHER";

const formatSpecKey = (key) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

const EquipmentCard = ({ item, index, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setIsVisible(true),
      Math.min(index * 50, 1000)
    );
    return () => clearTimeout(timer);
  }, [index]);

  const handleClick = useCallback(() => {
    onClick?.(item);
  }, [item, onClick]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  const displaySpecs = useMemo(
    () => Object.entries(item.specs).slice(0, 2),
    [item.specs]
  );

  {
    /* bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" className="absolute inset-0 bg-gradient-to-t from-blue-500/2 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" */
  }

  return (
    <article
      className={`group relative bg-gradient-to-br from-slate-800/40 via-slate-800/40 to-slate-900/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-400/40 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-slate-900/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${item.name}`}
    >
      <div className="relative h-48 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-4">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {imageError ? (
          <div className="flex flex-col items-center justify-center text-gray-400">
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
            className={`max-w-full max-h-full object-contain transition-all duration-450 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
            {item.category}
          </span>
        </div>

        <h3 className="text-base font-semibold text-gray-200 leading-tight mb-4 group-hover:text-blue-100 transition-colors duration-300 line-clamp-2">
          {item.name}
        </h3>

        <dl className="text-xs text-gray-400 space-y-2">
          {displaySpecs.map(([key, value]) => (
            <div key={key} className="flex justify-between items-center gap-2">
              <dt className="capitalize font-medium text-gray-400 flex-shrink-0">
                {formatSpecKey(key)}
              </dt>
              <dd className="text-gray-200 font-semibold text-right truncate flex-1 min-w-0">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </article>
  );
};

const FilterButton = ({ filter, isActive, onClick }) => (
  <button
    onClick={() => onClick(filter)}
    className={`cursor-pointer px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400/50 ${isActive
        ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg hover:from-slate-800 hover:to-slate-900"
        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
      }`}
    aria-pressed={isActive}
  >
    {filter}
  </button>
);

const Modal = ({ item, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const scrollY = window.scrollY;
    const style = document.body.style;

    style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.width = "100%";

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsVisible(false);

        const currentScrollY =
          parseInt(document.body.style.top || "0", 10) * -1;
        const currentStyle = document.body.style;

        currentStyle.overflow = "unset";
        document.documentElement.style.overflow = "unset";
        currentStyle.position = "unset";
        currentStyle.top = "unset";
        currentStyle.width = "unset";
        window.scrollTo(0, currentScrollY);

        setTimeout(onClose, 200);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      style.position = "unset";
      style.top = "unset";
      style.width = "unset";
      window.scrollTo(0, scrollY);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleClose = useCallback(() => {
    setIsVisible(false);

    const scrollY = parseInt(document.body.style.top || "0", 10) * -1;
    const style = document.body.style;

    style.overflow = "unset";
    document.documentElement.style.overflow = "unset";
    style.position = "unset";
    style.top = "unset";
    style.width = "unset";
    window.scrollTo(0, scrollY);

    setTimeout(onClose, 200);
  }, [onClose]);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) handleClose();
    },
    [handleClose]
  );

  if (!item) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* from-[#1e2024] to-[#15171a] from-slate-800/40 via-slate-800/40 to-slate-900/40*/}
      <div
        className={`bg-gradient-to-br from-slate-800/40 via-slate-800/40 to-slate-900/40 rounded-2xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-300 ${isVisible ? "scale-100" : "scale-95"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="sticky top-0 bg-gradient-to-r from-slate-800/40 via-slate-800/40 to-slate-900/40 p-6 border-b border-white/10 z-10 rounded-2xl">
          <div className="flex items-center justify-between">
            <h3 id="modal-title" className="text-xl font-bold text-white">
              Specifications
            </h3>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-slate-800 cursor-pointer"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-white/5 to-transparent rounded-xl flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.category}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3 block">
                  {item.category}
                </span>

                <h3
                  id="modal-description"
                  className="text-2xl font-bold text-white mb-6 break-words"
                >
                  {item.name}
                </h3>

                <div className="space-y-4">
                  <div className="border-b border-white/10 mb-4" />
                  <dl className="grid grid-cols-2 gap-3">
                    {Object.entries(item.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-slate-800/30 rounded-md p-3 border border-white/5 hover:border-white/10 transition-colors duration-200"
                      >
                        <dt className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">
                          {formatSpecKey(key)}
                        </dt>
                        <dd className="text-white text-sm font-semibold">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Equipment = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFilterChanging, setIsFilterChanging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = useCallback(
    (filter) => {
      if (filter === selectedFilter) return;

      setIsFilterChanging(true);
      setTimeout(() => {
        setSelectedFilter(filter);
        setIsFilterChanging(false);
      }, 175);
    },
    [selectedFilter]
  );

  const handleItemSelect = useCallback((item) => setSelectedItem(item), []);
  const handleModalClose = useCallback(() => setSelectedItem(null), []);
  const handleSearchChange = useCallback(
    (e) => setSearchTerm(e.target.value),
    []
  );
  const handleClearSearch = useCallback(() => setSearchTerm(""), []);

  const filteredEquipment = useMemo(() => {
    let filtered = equipmentData;

    if (selectedFilter !== "ALL") {
      filtered = filtered.filter(
        (item) => getCategoryGroup(item.category) === selectedFilter
      );
    }

    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchLower) ||
          item.category.toLowerCase().includes(searchLower) ||
          Object.values(item.specs).some((spec) =>
            spec.toString().toLowerCase().includes(searchLower)
          )
      );
    }

    return filtered;
  }, [selectedFilter, searchTerm]);

  const equipmentCount = filteredEquipment.length;
  const totalCount = equipmentData.length;

  return (
    <section id="equipment" className="min-h-screen py-20 lg:px-10">
      <div className="max-w-6xl mx-auto px-4">
        <RevealOnScroll>
          <header className="text-center mb-10">
            {/* className= px-4/10 lg:px-10 horizontal-scroll max-w-5xl and 6/7 "group relative bg-[#1e20243a] border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300" w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300" "p-4 bg-[#1e202470]/90 backdrop-blur-md rounded-b-xl w-full h-full" */}
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-sky-600 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg select-none text-center">
              Equipment
            </h2>

            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search equipment..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  maxLength={40}
                  className="w-full px-4 py-3 pl-12 pr-10 bg-slate-800/50 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1"
                    aria-label="Clear search"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </header>

          <nav
            className="flex flex-wrap justify-center gap-3 mb-8"
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
            <p className="text-gray-400 text-sm">
              {searchTerm
                ? `Found ${equipmentCount} of ${totalCount} items.`
                : `Showing ${equipmentCount} item${equipmentCount !== 1 ? "s" : ""}${selectedFilter !== "ALL" ? ` in ${selectedFilter}` : ""
                }.`}
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 transition-opacity duration-300 ${isFilterChanging ? "opacity-0" : "opacity-100"
              }`}
          >
            {filteredEquipment.map((item, index) => (
              <EquipmentCard
                key={`${item.name}-${selectedFilter}-${searchTerm}`}
                item={item}
                index={index}
                onClick={handleItemSelect}
              />
            ))}
          </div>

          {equipmentCount === 0 && !isFilterChanging && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4 opacity-50 flex justify-center">
                {searchTerm ? (
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                ) : (
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 9h6v6H9z" />
                    <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                {searchTerm ? "No results found!" : "No equipment found!"}
              </h3>
              <p className="text-gray-400 mb-4">
                {searchTerm
                  ? `No equipment matches "${searchTerm}".`
                  : "Try selecting a different category."}
              </p>
              {(searchTerm || selectedFilter !== "ALL") && (
                <div className="flex flex-wrap justify-center gap-2">
                  {searchTerm && (
                    <button
                      onClick={handleClearSearch}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      Clear search
                    </button>
                  )}
                  {selectedFilter !== "ALL" && (
                    <button
                      onClick={() => handleFilterChange("ALL")}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      Show all categories
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </RevealOnScroll>
      </div>

      {selectedItem && <Modal item={selectedItem} onClose={handleModalClose} />}
    </section>
  );
};

export default Equipment;