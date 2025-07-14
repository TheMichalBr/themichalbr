import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import caseI from "/equipment/1_CASE.webp";
import psuI from "/equipment/2_PSU.webp";
import mbI from "/equipment/3_MB.webp";
import cpuI from "/equipment/4_CPU.webp";
import cpucoolerI from "/equipment/5_CPUCOOLER.webp";
import gpuI from "/equipment/6_GPU.webp";
import ramI from "/equipment/7_RAM.webp";
import hddI from "/equipment/8_HDD.webp";
import ssdI from "/equipment/9_SSD.webp";
import osI from "/equipment/10_OS.webp";
import mmonitorI from "/equipment/11_MMONITOR.webp";
import smonitor1I from "/equipment/12_SMONITOR1.webp";
import smonitor2I from "/equipment/12_SMONITOR2.webp";
import keyboardI from "/equipment/13_KEYBOARD.webp";
import mouseI from "/equipment/14_MOUSE.webp";
import mousepadI from "/equipment/15_MOUSEPAD.webp";
import headsetI from "/equipment/16_HEADSET.webp";
import microphoneI from "/equipment/17_MICROPHONE.webp";
import mobileI from "/equipment/18_MOBILE.webp";
import consoleotherI from "/equipment/19_CONSOLE.webp";
import vrI from "/equipment/20_VROTHER.webp";

const equipmentData = [
  {
    category: "COMPUTER CASE",
    name: "Fractal Design Define 7",
    image: caseI,
    specs: {
      size: "Midi Tower",
      color: "Black",
      glass: "TG Dark Tint",
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
      formFactor: "ATX",
      chipset: "X870E",
      socket: "AM5",
      biosVersion: "7E49v1A50",
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
      compatibility: "AM5",
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
      architecture: "Turing (TU104)",
    },
  },
  {
    category: "COMPUTER MEMORY",
    name: "Kingston Fury Beast..",
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
      rpm: "7200 RPM",
      interface: "SATA III",
      cache: "256MB",
    },
  },
  {
    category: "SOLID STATE DRIVE",
    name: "Samsung SSD 990 PRO",
    image: ssdI,
    specs: {
      capacity: "1TB",
      interface: "PCIe 4.0",
      type: "NVMe",
      readSpeed: "7,450 MB/s",
    },
  },
  {
    category: "OPERATING SYSTEM",
    name: "Windows 11 Pro",
    image: osI,
    specs: {
      version: "Professional",
      architecture: "64-bit",
      license: "Retail",
      support: "Extended",
    },
  },
  {
    category: "MAIN MONITOR",
    name: "Acer Predator XB273UNX",
    image: mmonitorI,
    specs: {
      size: "27 inches",
      resolution: "2560x1440",
      refreshRate: "270Hz",
      panel: "IPS",
    },
  },
  {
    category: "SIDE MONITOR",
    name: "Zowie by BenQ XL2720",
    image: smonitor1I,
    specs: {
      size: "27 inches",
      resolution: "1920x1080",
      refreshRate: "144Hz",
      panel: "TN",
    },
  },
  {
    category: "SIDE MONITOR",
    name: "Iiyama PLE2209HDS",
    image: smonitor2I,
    specs: {
      size: "22 inches",
      resolution: "1920x1080",
      refreshRate: "60Hz",
      panel: "TN",
    },
  },
  {
    category: "KEYBOARD",
    name: "Logitech G915 LIGHTSPEED TKL",
    image: keyboardI,
    specs: {
      switches: "GL Linear - Red",
      connectivity: "Wireless",
      backlight: "RGB",
      layout: "TKL",
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
      connectivity: "Wireless",
      battery: "50+ hours",
      drivers: "50mm Pro-G",
      microphone: "Blue VO!CE",
    },
  },
  {
    category: "MICROPHONE",
    name: "HyperX Quadcast",
    image: microphoneI,
    specs: {
      type: "Condenser",
      patterns: "4 polar patterns",
      connection: "USB",
      monitoring: "Real-time",
    },
  },
  {
    category: "MOBILE",
    name: "Samsung S20 FE",
    image: mobileI,
    specs: {
      memory: "8GN",
      storage: "128GB",
      processor: "Snapdragon 865",
    },
  },
  {
    category: "CONSOLE",
    name: "Xbox 360",
    image: consoleotherI,
    specs: {
      storage: "250GB HDD",
    },
  },
  {
    category: "OTHER",
    name: "Mobile VR, Electric Table",
    image: vrI,
    specs: {
      VR: "Samsung Gear VR",
      table: "Basic",
    },
  },
];

const categoryFilters = [
  "ALL",
  "COMPUTER",
  "PERIPHERALS",
  "MONITORS",
  "AUDIO",
  "MOBILE & CONSOLE",
  "OTHER",
];

const getCategoryGroup = (category) => {
  const computerCategories = [
    "COMPUTER CASE",
    "POWER SUPPLY",
    "MOTHERBOARD",
    "PROCESSOR",
    "PROCESSOR COOLER",
    "GRAPHICS CARD",
    "COMPUTER MEMORY",
    "HARD DISK DRIVE",
    "SOLID STATE DRIVE",
    "OPERATING SYSTEM",
  ];
  const peripheralCategories = ["KEYBOARD", "MOUSE", "MOUSEPAD"];
  const monitorCategories = ["MAIN MONITOR", "SIDE MONITOR"];
  const audioCategories = ["HEADSET", "MICROPHONE"];
  const mobileConsoleCategories = ["MOBILE", "CONSOLE"];

  if (computerCategories.includes(category)) return "COMPUTER";
  if (peripheralCategories.includes(category)) return "PERIPHERALS";
  if (monitorCategories.includes(category)) return "MONITORS";
  if (audioCategories.includes(category)) return "AUDIO";
  if (mobileConsoleCategories.includes(category)) return "MOBILE & CONSOLE";
  return "OTHER";
};

const EquipmentCard = ({ item, index, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative bg-gradient-to-br from-[#1e2024bb] to-[#15171abb] border border-white/10 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-700 ${isVisible
          ? "opacity-100 translate-y-0 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500/50"
          : "opacity-0 translate-y-8"
        }`}
      onClick={() => onClick(item)}
    >
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-4">
        <img
          src={item.image}
          alt={item.name}
          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="mb-2">
          <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">
            {item.category}
          </p>
        </div>

        <h3 className="text-base font-semibold text-gray-200 leading-tight mb-4 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
          {item.name}
        </h3>

        <div className="text-xs text-gray-400 space-y-2">
          {Object.entries(item.specs)
            .slice(0, 3)
            .map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <span className="capitalize font-medium">{key}:</span>
                <span className="text-gray-300 font-semibold">{value}</span>
              </div>
            ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

const FilterButton = ({ filter, isActive, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    onClick(filter);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${isActive
          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
          : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
        } ${isClicked ? "scale-95" : "hover:scale-105"}`}
    >
      {filter}
    </button>
  );
};

const Modal = ({ item, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    document.body.style.overflow = "unset";
    document.documentElement.style.overflow = "unset";
    setTimeout(onClose, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
      onClick={handleClose}
      style={{ touchAction: "none" }}
    >
      <div
        className={`bg-gradient-to-br from-[#1e2024] to-[#15171a] rounded-2xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300 ${isVisible ? "scale-100" : "scale-95"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gradient-to-r from-[#1e2024] to-[#15171a] p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Specifications</h3>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg cursor-pointer"
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
        </div>

        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-gradient-to-br from-white/5 to-transparent rounded-xl flex items-center justify-center p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3">
                {item.category}
              </p>

              <h4 className="text-2xl font-bold text-white mb-6">
                {item.name}
              </h4>

              <div className="space-y-4">
                <div className="border-b border-white/10 pb-1"></div>
                {Object.entries(item.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center py-2"
                  >
                    <span className="text-gray-400 capitalize font-medium">
                      {key.replace(/([A-Z])/g, " $1").trim()}:
                    </span>
                    <span className="text-white font-semibold">{value}</span>
                  </div>
                ))}
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

  const handleFilterChange = (filter) => {
    if (filter === selectedFilter) return;

    setIsFilterChanging(true);
    setTimeout(() => {
      setSelectedFilter(filter);
      setIsFilterChanging(false);
    }, 200);
  };

  const filteredEquipment = equipmentData.filter((item) => {
    return (
      selectedFilter === "ALL" ||
      getCategoryGroup(item.category) === selectedFilter
    );
  });

  return (
    <section id="equipment" className="min-h-screen py-20 px-10 lg:px-10">
      <div className="max-w-6xl mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-10">
            {/* horizontal-scroll max-w-5xl and 6/7 "group relative bg-[#1e20243a] border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300" w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300" "p-4 bg-[#1e202470]/90 backdrop-blur-md rounded-b-xl w-full h-full" */}
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg select-none">
              Equipment
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto select-none">
              Discover the hardware, peripherals and other stuff that power my
              setup.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categoryFilters.map((filter) => (
              <FilterButton
                key={filter}
                filter={filter}
                isActive={selectedFilter === filter}
                onClick={handleFilterChange}
              />
            ))}
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 transition-opacity duration-300 ${isFilterChanging ? "opacity-0" : "opacity-100"
              }`}
          >
            {filteredEquipment.map((item, index) => (
              <EquipmentCard
                key={`${item.name}-${selectedFilter}`}
                item={item}
                index={index}
                onClick={setSelectedItem}
              />
            ))}
          </div>

          {filteredEquipment.length === 0 && !isFilterChanging && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4 opacity-50">📦</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No equipment found
              </h3>
              <p className="text-gray-400">
                Try selecting a different category
              </p>
            </div>
          )}
        </RevealOnScroll>
      </div>

      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
};

export default Equipment;