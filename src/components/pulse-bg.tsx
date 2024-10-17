"use client";

import React from "react";

export default function PulseBg({ dark }: { dark: boolean }) {
  return (
    <div className="fixed w-full h-screen overflow-hidden z-10">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 350"
      >
        <defs>
          <path
            id="logo-path"
            d="M102.617 106.528C106.305 109.433 110.667 110.885 115.714 110.885C121.851 110.885 127.798 109.472 133.554 106.62C143.251 101.901 148.103 94.189 148.103 83.484V69.468C145.98 70.877 143.242 72.055 139.897 72.994C136.557 73.938 133.266 74.578 130.057 74.94L119.534 76.197C113.225 76.974 108.467 78.276 105.263 80.08C99.81 83.117 97.096 87.964 97.096 94.619C97.096 99.652 98.93 103.628 102.617 106.528M217.819 123.258C204.654 123.258 193.592 127.092 184.829 134.648C176.779 127.092 166.578 123.258 154.421 123.258C147.892 123.258 142.293 124.216 137.754 126.09L137.671 126.124L137.597 126.148C136.355 126.701 135.069 127.385 133.739 128.197L131.465 122.94L94.538 122.916L94.548 123.723V228.9C94.548 239.189 92.783 243.287 91.766 244.783C90.851 246.104 87.496 251.454 84.034 255.415L106.745 282.86C115.254 278.126 133.578 264.853 133.578 234.934V234.788H133.739V178.783C133.739 168.01 135.813 162.845 137.553 160.415C138.888 158.547 141.47 156.077 148.351 156.077C151.623 156.077 159.286 156.077 159.286 175.331V234.788H198.326V178.783C198.326 167.839 200.342 162.675 202.043 160.283C203.314 158.478 205.799 156.077 212.449 156.077C217.721 156.077 219.551 157.828 220.45 159.143C221.487 160.644 223.238 164.747 223.238 175.032V234.788H262.272V169.013C262.272 139.074 246.897 123.258 217.819 123.258"
          />
        </defs>
        {[...Array(7)].map((_, index) => (
          <use
            key={index}
            href="#logo-path"
            className={`logo-outline logo-outline-${index + 1}`}
            fill="none"
            stroke={`${
              dark
                ? `rgba(0,0,0,0.1${index * 2})`
                : `rgba(255,255,255,0.1${index * 2})`
            }`}
            strokeWidth="1"
          />
        ))}
      </svg>
      <style jsx>{`
        @keyframes subtle-pulse {
          0% {
            transform: scale(1);
            opacity: 0.05;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.1;
          }
          100% {
            transform: scale(1);
            opacity: 0.05;
          }
        }
        .logo-outline {
          transform-origin: center;
          animation: subtle-pulse 8s infinite ease-in-out;
        }
        .logo-outline-1 {
          animation-delay: 0s;
        }
        .logo-outline-2 {
          animation-delay: -1s;
        }
        .logo-outline-3 {
          animation-delay: -2s;
        }
        .logo-outline-4 {
          animation-delay: -3s;
        }
        .logo-outline-5 {
          animation-delay: -4s;
        }
        .logo-outline-6 {
          animation-delay: -5s;
        }
        .logo-outline-7 {
          animation-delay: -6s;
        }
        .logo-outline-8 {
          animation-delay: -7s;
        }
      `}</style>
    </div>
  );
}
