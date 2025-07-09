import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to KTC 2025 Lab 07</h1>
      <div className="space-x-4">
        <Link
          to="/car-selection"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Car Selection
        </Link>
        <Link
          to="/timer"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Timer
        </Link>
        <Link
          to="/clock"
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Clock
        </Link>
      </div>
    </div>
  );
}
