// import { executeQuery } from "../../db";

import React, { useEffect, useRef, useState }  from 'react';
import Chart from 'chart.js/auto';
import Header from "@/components/header";
import Footer from "@/components/footer";
import '../app/globals.css'

export async function getStaticProps() {
  // const query = 'SELECT * FROM YourTable';
  // const data = await executeQuery(query);

  const data = [
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-01",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-01",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-01",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-02",
      Assisted: false,
      Delay: true,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-02",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-02",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-03",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-03",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-03",
      Assisted: false,
      Delay: true,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-04",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-04",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-04",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-05",
      Assisted: false,
      Delay: true,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-05",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-05",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-06",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-06",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-06",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-07",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-07",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-07",
      Assisted: false,
      Delay: true,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-08",
      Assisted: false,
      Delay: true,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-08",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-08",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-09",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-09",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-09",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-10",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-10",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-10",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-11",
      Assisted: false,
      Delay: true,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-11",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-11",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-12",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-12",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-12",
      Assisted: false,
      Delay: true,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-13",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-13",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-13",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-14",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-14",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-14",
      Assisted: false,
      Delay: true,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-15",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-15",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-15",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-16",
      Assisted: false,
      Delay: true,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-16",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-16",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-17",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-17",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-17",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-18",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-18",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-18",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-19",
      Assisted: false,
      Delay: true,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-19",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-19",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-20",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-20",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-20",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000001",
      Name: "Alberto Munguia",
      Date: "2023-01-21",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000002",
      Name: "Michelle Campbell",
      Date: "2023-01-21",
      Assisted: true,
      Delay: false,
    },
    {
      ID: "m0000003",
      Name: "Dylan Hernandez",
      Date: "2023-01-21",
      Assisted: false,
      Delay: true,
    },
  ];

  return {
    props: {
      data,
    },
  };
}

const AttendanceChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Extract unique student names
    const studentNames = [...new Set(data.map((item) => item.Name))];

    // Group data by date
    const groupedData = {};
    data.forEach((item) => {
      if (!groupedData[item.Date]) {
        groupedData[item.Date] = {};
      }
      groupedData[item.Date][item.Name] = { Assisted: item.Assisted, Delay: item.Delay };
    });

    // Prepare datasets for the chart
    const datasets = Object.keys(groupedData).map((date) => {
      const attendanceData = studentNames.map((name) => {
        const { Assisted, Delay } = groupedData[date][name] || { Assisted: false, Delay: false };
        return Assisted ? (Delay ? 2 : 1) : 0;
      });

      return {
        label: date,
        data: attendanceData,
        backgroundColor: '#36a2eb', // Blue color for attended
        borderColor: '#36a2eb',
        borderWidth: 1,
      };
    });

    // Create the chart
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: studentNames,
        datasets,
      },
      options: {
        scales: {
          x: { 
            stacked: true,
            title: {
              display: true,
              text: 'Student',
            },
          },
          y: {
            stacked: true,
            ticks: {
              stepSize: 1,
              beginAtZero: true,
              max: 2,
              callback: (value) => (['Absent', 'Attended', 'Delayed'][value] || ''),
            },
            title: {
              display: true,
              text: 'Attendance',
            },
          },
        },
      },
    });
  }, [data]);

  return (
    <canvas ref={chartRef} />
  );
};



export default function Page({data}) {
  const [currentData, setCurrentData ] = useState(null); 

  useEffect(() => {
    setCurrentData(data)
  }, [])


  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header/>
      <main className="w-full flex-grow flex flex-col py-12 space-y-8 md:space-y-16">
        <h1 className="px-[2.5%]"> Hello, Absenteeism Page </h1>

        { currentData && <AttendanceChart data={currentData}/> }
      </main>
      <Footer/>
    </div>
  );
}
