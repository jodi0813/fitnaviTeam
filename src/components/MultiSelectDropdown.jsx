import React, { useState, useRef, useEffect } from "react";

function MultiSelectDropdown({ options, selectedOptions, setSelectedOptions, maxSelect = 6 }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 點擊外部關閉下拉選單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(o => o !== option));
    } else {
      if (selectedOptions.length < maxSelect) {
        setSelectedOptions([...selectedOptions, option]);
      } else {
        alert(`最多只能選擇 ${maxSelect} 項`);
      }
    }
  };

  return (
    <div className="multi-select-dropdown" ref={dropdownRef} style={{ position: "relative", width: "100%" }}>
      {/* 下拉選單標題區塊 */}
      <div
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          border: "1px solid #B8A89C",
          padding: "8px 12px",
          borderRadius: "12px",
          cursor: "pointer",
          userSelect: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "48px",
          fontSize: "14px",
          fontFamily: "Noto Sans TC",
          color: selectedOptions.length > 0 ? "#3A2C19" : "#B8A89C",
          backgroundColor: "#fff",
          boxSizing: "border-box",
        }}
      >
        <div style={{ flex: 1, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
          {selectedOptions.length > 0 ? selectedOptions.join(", ") : "選取您的專長"}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ flexShrink: 0 }}
        >
          <g filter="url(#filter0_d_4572_4813)">
            <path d="M5 1L10.5 7L16 1" stroke="#989794" />
          </g>
          <defs>
            <filter id="filter0_d_4572_4813" x="0.63" y="0.66" width="19.74" height="15.08" filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* 下拉選單選項 */}
      {isOpen && (
        <div
          className="dropdown-list"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            maxHeight: "400px",
            overflowY: "auto",
            border: "1px solid #ccc",
            borderRadius: "12px",
            backgroundColor: "#fff",
            zIndex: 1000,
            marginTop: "4px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
        >
          {options.map((option, index) => (
            <label
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 12px",
                cursor: "pointer",
                userSelect: "none",
                borderBottom: "1px solid #eee",
                fontSize: "14px",
                fontFamily: "Noto Sans TC",
                color: "#3A2C19",
              }}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => toggleOption(option)}
                style={{ marginRight: "8px" }}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelectDropdown;
