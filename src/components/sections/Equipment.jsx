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