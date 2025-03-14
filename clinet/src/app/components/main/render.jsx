"use client";
import React, { useEffect, useState } from "react";
import { api } from "../../../../api";

import axios from "axios";

const Render = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}`);
        if (response.status !== 200) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {data && data.length > 0 ? (
        data.map((article, index) => (
          <div key={index} className="px-6 py-4 border-b">
            <h1 className="text-xl font-bold mb-2">
              {article.title || "Loading..."}
            </h1>
            <p className="text-gray-700 text-base mb-4">
              {article.description || "Loading..."}
            </p>
            <h5 className="text-blue-500">
              Read More at{" "}
              <a href={article.url || "#"} className="underline">
                {article.source?.name || "Loading..."}
              </a>
            </h5>
          </div>
        ))
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
};

export default Render;
