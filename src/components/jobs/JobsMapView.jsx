"use client";
import { useState } from "react";

export default function JobsMapView() {
  const [mapType, setMapType] = useState("roadmap");
  const [showTerrain, setShowTerrain] = useState(false);

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => setMapType("roadmap")}
          className={`px-4 py-2 text-sm font-medium ${mapType === "roadmap" ? "bg-white" : "bg-gray-100"}`}
        >
          Map
        </button>
        <button
          onClick={() => setMapType("satellite")}
          className={`px-4 py-2 text-sm font-medium ${mapType === "satellite" ? "bg-white" : "bg-gray-100"}`}
        >
          Satellite
        </button>
      </div>

      <div className="absolute top-16 left-4 z-10 bg-white rounded-lg shadow-lg p-3">
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={showTerrain}
            onChange={(e) => setShowTerrain(e.target.checked)}
            className="rounded"
          />
          <span>Terrain</span>
        </label>
      </div>

      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110445.30429481592!2d-92.08857643125!3d30.21418785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86249d7e0db0e88b%3A0xd2ba0b5a75cb55b4!2sLafayette%2C%20LA!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="absolute bottom-4 right-4 z-10 bg-white px-3 py-1 rounded shadow text-xs text-gray-600">
        Map data ©2025 Google, INEGI
      </div>
    </div>
  );
}
