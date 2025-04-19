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
import smonitorI from "/equipment/12_SMONITOR.webp";
import keyboardI from "/equipment/13_KEYBOARD.webp";
import mouseI from "/equipment/14_MOUSE.webp";
import mousepadI from "/equipment/15_MOUSEPAD.webp";
import headsetI from "/equipment/16_HEADSET.webp";
import microphoneI from "/equipment/17_MICROPHONE.webp";
import mobileI from "/equipment/18_MOBILE.webp";
import consoleotherI from "/equipment/19_CONSOLE.webp";

const equipmentData = [
{
    category: "COMPUTER CASE",
    name: "Fractal Design Define 7",
    image: caseI,
    info: "Design: Black TG Dark Tint",
},
{
    category: "POWER SUPPLY",
    name: "Corsair HX1000",
    image: psuI,
    info: "Power: 1000W, Certification: 80+ Platinum",
},
{
    category: "MOTHERBOARD",
    name: "MSI MPG X870E CARBON WIFI",
    image: mbI,
    info: "Format: ATX AM5, BIOS: 7E49v1A3",
},
{
    category: "PROCESSOR",
    name: "AMD Ryzen 9 9900X",
    image: cpuI,
    info: "Cores: 12, Threads: 24",
},
{
    category: "PROCESSOR COOLER",
    name: "Noctua NH-U9S chromax.black",
    image: cpucoolerI,
},
{
    category: "GRAPHICS CARD",
    name: "NVIDIA MSI GeForce RTX 2070 GAMING Z",
    image: gpuI,
    info: "Memory: 8GB GDDR6",
},
{
    category: "COMPUTER MEMORY",
    name: "Kingston Fury Beast DDR5",
    image: ramI,
    info: "Memory: 32GB (2x16GB) 6000MHz CL30",
},
{
    category: "DRIVE (HDD)",
    name: "WD Ultrastar DC HC320",
    image: hddI,
    info: "Storage: 8TB, Info: 7200RPM SATA",
},
{
    category: "DRIVE (SSD)",
    name: "Samsung SSD 990 PRO",
    image: ssdI,
    info: "Storage: 1TB, Info: NVMe SSD M.2 PCIe Gen4",
},
{
    category: "OPERATING SYSTEM",
    name: "Windows 11 Pro",
    image: osI,
    info: "Version: 24H2",
},
{
    category: "MAIN MONITOR",
    name: "Acer Predator XB273UNX",
    image: mmonitorI,
    info: "Refresh rate: 270Hz, Info: 27 2K IPS G-Sync",
},
{
    category: "SIDE MONITORS",
    name: "ZOWIE by BenQ XL2720, IIYAMA PLE2209HDS-B1",
    image: smonitorI,
    info: "Refresh rate: 144Hz/60Hz, Info: 27/22 1080p TN",
},
{
    category: "KEYBOARD",
    name: "Logitech G915 LIGHTSPEED TKL",
    image: keyboardI,
    info: "Switches: GL Linear (Red)",
},
{
    category: "MOUSE",
    name: "Logitech G Pro X Superlight 2",
    image: mouseI,
    info: "DPI: 400, Hz: 4000",
},
{
    category: "MOUSEPAD",
    name: "Logitech G640 Large Cloth",
    image: mousepadI,
},
{
    category: "HEADSET",
    name: "Logitech G Pro X 2 LIGHTSPEED Wireless",
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
    info: "Storage: 128GB, RAM: 6GB",
},
{
    category: "CONSOLE AND OTHER",
    name: "Xbox 360, Mobile VR, Electric Table",
    image: consoleotherI,
},
];

export const Equipment = () => {
    return (
    <section id="equipment" className="min-h-screen py-20 pt-30" px-10 horizontal-scroll>
        <div className="max-w-6xl mx-auto px-4">
            <RevealOnScroll>
            <h2 className="pb-4 text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Equipment
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {equipmentData.map((item, index) => (
                <div
                    key={index}
                    className="group relative bg-[#1e20243a] border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                > {/* bylo tam group rozlejo auto */}
                    <div className="relative h-40 overflow-hidden flex items-center justify-center">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    </div>
                    <div className="p-4 bg-[#1e202470]/90 backdrop-blur-md rounded-b-xl w-full h-full">
                    <p className="text-sm text-blue-500 uppercase mb-2">
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
                        <div className="absolute bottom-full mb-4 right-0 w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-85 transition-opacity duration-300">
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