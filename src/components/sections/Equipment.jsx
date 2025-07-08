import React from "react";
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
    name: "Fractal Design Define 7 Black TG Dark Tint",
    image: caseI,
  },
  {
    category: "POWER SUPPLY",
    name: "Corsair HX1000",
    image: psuI,
  },
  {
    category: "MOTHERBOARD",
    name: "MSI MPG X870E CARBON WIFI",
    image: mbI,
  },
  {
    category: "PROCESSOR",
    name: "AMD Ryzen 9 9900X",
    image: cpuI,
  },
  {
    category: "PROCESSOR COOLER",
    name: "Noctua NH-U9S chromax.black",
    image: cpucoolerI,
  },
  {
    category: "GRAPHICS CARD",
    name: "NVIDIA MSI GeForce RTX 2070 GAMING Z 8GB GDDR6",
    image: gpuI,
  },
  {
    category: "COMPUTER MEMORY",
    name: "Kingston Fury Beast DDR5 32GB 6000MHz CL30",
    image: ramI,
  },
  {
    category: "HARD DISK DRIVE",
    name: "WD Ultrastar DC HC320 - 8TB",
    image: hddI,
  },
  {
    category: "SOLID STATE DRIVE",
    name: "Samsung SSD 990 PRO - 1TB",
    image: ssdI,
  },
  {
    category: "OPERATING SYSTEM",
    name: "Windows 11 Pro",
    image: osI,
  },
  {
    category: "MAIN MONITOR",
    name: "Acer Predator XB273UNX",
    image: mmonitorI,
    info: "REFRESH RATE: 270Hz",
  },
  {
    category: "SIDE MONITOR",
    name: "Zowie by BenQ XL2720",
    image: smonitor1I,
  },
  {
    category: "SIDE MONITOR",
    name: "Iiyama PLE2209HDS",
    image: smonitor2I,
  },
  {
    category: "KEYBOARD",
    name: "Logitech G915 LIGHTSPEED TKL",
    image: keyboardI,
    info: "SWITCHES: GL Linear - Red",
  },
  {
    category: "MOUSE",
    name: "Logitech G Pro X Superlight 2",
    image: mouseI,
    info: "DPI: 400, HZ: 8000",
  },
  {
    category: "MOUSEPAD",
    name: "Logitech G640 Large Cloth",
    image: mousepadI,
  },
  {
    category: "HEADSET",
    name: "Logitech G Pro X 2 LIGHTSPEED",
    image: headsetI,
  },
  {
    category: "MICROPHONE",
    name: "HyperX Quadcast",
    image: microphoneI,
  },
  {
    category: "MOBILE",
    name: "Samsung S20 FE",
    image: mobileI,
  },
  {
    category: "CONSOLE",
    name: "Xbox 360",
    image: consoleotherI,
  },
  {
    category: "OTHER",
    name: "Mobile VR, Electric Table",
    image: vrI,
  },
];

export const Equipment = () => {
  return (
    <section id="equipment" className="min-h-screen py-20" px-10 horizontal-scroll>
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Equipment
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentData.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#1e20243a] border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-40 overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-[#1e202470]/90 backdrop-blur-md rounded-b-xl w-full h-full">
                  <p className="text-xs font-semibold text-blue-400 uppercase mb-2 tracking-wide">
                    {item.category}
                  </p>
                  <h3 className="text-base font-semibold text-gray-300 leading-tight">
                    {item.name}
                  </h3>

                  {item.info && (
                    <div className="absolute top-2 right-2">
                      <div className="relative group">
                        {/* pouze relative ne group hover:text-blue-500*/}
                        <button className="text-gray-600 transition-colors duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                            />
                          </svg>
                        </button>
                        <div className="absolute bottom-full mb-4 right-0 w-48 p-2 bg-gray-900 text-gray text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-85 transition-opacity duration-300">
                          {/* "absolute right-0 top-full mt-2 w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"*/}
                          {item.info || "No additional information available."}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Equipment;

{/*
import React, { useState } from "react";
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
    name: "Fractal Design Define 7 Black TG Dark Tint",
    image: caseI,
    specs: {
      type: "Full Tower",
      material: "Steel + Tempered Glass",
      color: "Black"
    }
  },
  {
    category: "POWER SUPPLY",
    name: "Corsair HX1000",
    image: psuI,
    specs: {
      wattage: "1000W",
      efficiency: "80+ Platinum",
      modular: "Fully Modular"
    }
  },
  {
    category: "MOTHERBOARD",
    name: "MSI MPG X870E CARBON WIFI",
    image: mbI,
    specs: {
      socket: "AM5",
      chipset: "X870E",
      formFactor: "ATX"
    }
  },
  {
    category: "PROCESSOR",
    name: "AMD Ryzen 9 9900X",
    image: cpuI,
    specs: {
      cores: "12 cores / 24 threads",
      baseClock: "4.4 GHz",
      boostClock: "5.6 GHz"
    }
  },
  {
    category: "PROCESSOR COOLER",
    name: "Noctua NH-U9S chromax.black",
    image: cpucoolerI,
    specs: {
      type: "Air Cooler",
      height: "125mm",
      compatibility: "AM5"
    }
  },
  {
    category: "GRAPHICS CARD",
    name: "NVIDIA MSI GeForce RTX 2070 GAMING Z 8GB GDDR6",
    image: gpuI,
    specs: {
      memory: "8GB GDDR6",
      baseClock: "1410 MHz",
      boostClock: "1620 MHz"
    }
  },
  {
    category: "COMPUTER MEMORY",
    name: "Kingston Fury Beast DDR5 32GB 6000MHz CL30",
    image: ramI,
    specs: {
      capacity: "32GB (2x16GB)",
      speed: "6000MHz",
      latency: "CL30"
    }
  },
  {
    category: "HARD DISK DRIVE",
    name: "WD Ultrastar DC HC320 - 8TB",
    image: hddI,
    specs: {
      capacity: "8TB",
      rpm: "7200 RPM",
      interface: "SATA III"
    }
  },
  {
    category: "SOLID STATE DRIVE",
    name: "Samsung SSD 990 PRO - 1TB",
    image: ssdI,
    specs: {
      capacity: "1TB",
      interface: "PCIe 4.0",
      readSpeed: "7,450 MB/s"
    }
  },
  {
    category: "OPERATING SYSTEM",
    name: "Windows 11 Pro",
    image: osI,
    specs: {
      version: "Professional",
      architecture: "64-bit",
      license: "Retail"
    }
  },
  {
    category: "MAIN MONITOR",
    name: "Acer Predator XB273UNX",
    image: mmonitorI,
    specs: {
      size: "27 inches",
      resolution: "2560x1440",
      refreshRate: "270Hz"
    }
  },
  {
    category: "SIDE MONITOR",
    name: "Zowie by BenQ XL2720",
    image: smonitor1I,
    specs: {
      size: "27 inches",
      resolution: "1920x1080",
      refreshRate: "144Hz"
    }
  },
  {
    category: "SIDE MONITOR",
    name: "Iiyama PLE2209HDS",
    image: smonitor2I,
    specs: {
      size: "22 inches",
      resolution: "1920x1080",
      refreshRate: "60Hz"
    }
  },
  {
    category: "KEYBOARD",
    name: "Logitech G915 LIGHTSPEED TKL",
    image: keyboardI,
    specs: {
      switches: "GL Linear - Red",
      connectivity: "Wireless",
      backlight: "RGB"
    }
  },
  {
    category: "MOUSE",
    name: "Logitech G Pro X Superlight 2",
    image: mouseI,
    specs: {
      dpi: "400 DPI",
      pollingRate: "8000 Hz",
      weight: "60g"
    }
  },
  {
    category: "MOUSEPAD",
    name: "Logitech G640 Large Cloth",
    image: mousepadI,
    specs: {
      size: "Large",
      surface: "Cloth",
      thickness: "3mm"
    }
  },
  {
    category: "HEADSET",
    name: "Logitech G Pro X 2 LIGHTSPEED",
    image: headsetI,
    specs: {
      connectivity: "Wireless",
      battery: "50+ hours",
      drivers: "50mm Pro-G"
    }
  },
  {
    category: "MICROPHONE",
    name: "HyperX Quadcast",
    image: microphoneI,
    specs: {
      type: "Condenser",
      patterns: "4 polar patterns",
      connection: "USB"
    }
  },
  {
    category: "MOBILE",
    name: "Samsung S20 FE",
    image: mobileI,
    specs: {
      display: "6.5 inches",
      storage: "128GB",
      camera: "64MP Triple"
    }
  },
  {
    category: "CONSOLE",
    name: "Xbox 360",
    image: consoleotherI,
    specs: {
      generation: "7th gen",
      storage: "250GB HDD",
      release: "2005"
    }
  },
  {
    category: "OTHER",
    name: "Mobile VR, Electric Table",
    image: vrI,
    specs: {
      vrType: "Mobile VR Headset",
      table: "Electric Height Adjustable",
      features: "Gaming Setup"
    }
  }
];

const categoryFilters = [
  "ALL",
  "COMPUTER",
  "PERIPHERALS",
  "MONITORS",
  "AUDIO",
  "MOBILE & CONSOLE",
  "OTHER"
];

const getCategoryGroup = (category) => {
  const computerCategories = ["COMPUTER CASE", "POWER SUPPLY", "MOTHERBOARD", "PROCESSOR", "PROCESSOR COOLER", "GRAPHICS CARD", "COMPUTER MEMORY", "HARD DISK DRIVE", "SOLID STATE DRIVE", "OPERATING SYSTEM"];
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

export const Equipment = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredEquipment = selectedFilter === "ALL" 
    ? equipmentData 
    : equipmentData.filter(item => getCategoryGroup(item.category) === selectedFilter);

  return (
    <section id="equipment" className="min-h-screen py-20 px-4 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Equipment
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Discover the hardware and peripherals that power my gaming and development setup
          </p>
          
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEquipment.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#1e2024] to-[#15171a] border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                      {item.category}
                    </p>
                    <button className="text-gray-500 hover:text-blue-400 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                        />
                      </svg>
                    </button>
                  </div>
                  
                  <h3 className="text-sm font-semibold text-white leading-tight mb-3 line-clamp-2">
                    {item.name}
                  </h3>
                  
                  
                  <div className="text-xs text-gray-400 space-y-1">
                    {Object.entries(item.specs).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="capitalize">{key}:</span>
                        <span className="text-gray-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-[#1e2024] to-[#15171a] rounded-xl border border-white/20 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-[#1e2024] to-[#15171a] p-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Specifications</h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-center mb-6">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-32 h-32 object-contain"
                />
              </div>
              
              <div className="text-center mb-6">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                  {selectedItem.category}
                </p>
                <h4 className="text-lg font-semibold text-white mb-4">
                  {selectedItem.name}
                </h4>
              </div>
              
              <div className="space-y-3">
                {Object.entries(selectedItem.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400 capitalize font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="text-white font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Equipment;
*/}