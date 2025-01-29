import React from "react";

const PieChart = () => {
  return (
    <svg width="120" height="120" viewBox="0 0 36 36">
      
      <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#EAEAEA" strokeWidth="3" />

      
      <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#6D28D9" strokeWidth="3"
        strokeDasharray="25 75" strokeDashoffset="0" strokeLinecap="round"
      />
      <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#A78BFA" strokeWidth="3"
        strokeDasharray="20 80" strokeDashoffset="-25" strokeLinecap="round"
      />
      <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#D8B4FE" strokeWidth="3"
        strokeDasharray="15 85" strokeDashoffset="-45" strokeLinecap="round"
      />

      
      <text x="50%" y="50%" textAnchor="middle" dy="-0.3em" fontSize="5px" fontWeight="bold" fill="#000">
        30k
      </text>

     
      <text x="50%" y="58%" textAnchor="middle" fontSize="3px" fill="#555">
        Initiated
      </text>
    </svg>
  );
};

const Legend = ({ title }) => {
  const legendItems = [
    { color: "#EAEAEA", label: "Initiated" },
    { color: "#6D28D9", label: "Signed" },
    { color: "#A78BFA", label: "Pending" },
    { color: "#D8B4FE", label: "Expired" },
  ];

  return (
    <div>
    
      <h4 style={{
        marginBottom: "8px",
        fontSize: "16px",
        fontWeight: "bold",
        position: "relative",
        display: "inline-block"
      }}>
        {title}
        <div style={{
          width: "50px",
          height: "2px",
          backgroundColor: "#333",
          marginTop: "4px"
        }}></div>
      </h4>

      
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px",
        fontFamily: "Arial, sans-serif",
        marginTop: "10px"
      }}>
        {legendItems.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: item.color,
                borderRadius: "4px",
              }}
            ></span>
            <span style={{ fontSize: "14px", color: "#777" }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChartBox = ({ title }) => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "30px",
      padding: "35px",
      backgroundColor:"white",
      borderRadius: "12px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      width: "560px",
      textAlign: "center"
    }}>
      <Legend title={title} />
      <PieChart />
    </div>
  );
};

const TwoChartBoxes = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",  
      padding: "20px"
    }}>
      <ChartBox title="E-sign Count" />
      <ChartBox title="E-stamp Count" />
    </div>
  );
};

export default TwoChartBoxes;
