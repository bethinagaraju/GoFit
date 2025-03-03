import React, { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button } from "@mui/material";
import './Bmi.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BmiGraph = () => {
    const [feets, setFeets] = useState(5);
    const [inches, setInches] = useState(6);
    const [weight, setWeight] = useState(70);
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const calculateBmi = () => {
        const height = feets * 0.3048 + inches * 0.0254;
        const calculatedBmi = (weight / (height * height)).toFixed(2);
        setBmi(calculatedBmi);

        if (calculatedBmi < 18.5) {
            setCategory("Underweight");
            document.getElementById("warn").style.color = "blue";
        } else if (calculatedBmi < 25) {
            setCategory("Normal");
            document.getElementById("warn").style.color = "green";
        } else if (calculatedBmi < 30) {
            setCategory("Overweight");
            document.getElementById("warn").style.color = "yellow";
        }
        else {
            setCategory("Obese");
            document.getElementById("warn").style.color = "red";
        }


    };

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Underweight", "Normal", "Overweight", "Obese"],
                datasets: [
                    {
                        label: "BMI Category",
                        data: [18, 22, 27, 32],
                        backgroundColor: ["blue", "green", "orange", "red"],
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true },
                },
            },
        });
    }, []);

    

    return (
        <div className="containerBMI">
            <ArrowBackIcon style={{ color: "white", position: "fixed", size:"50px", cursor:"pointer", top:"10px", left:"10px" }} onClick={() => window.history.back()}/>
            <div className="Bmi">
            <h2>BMI Calculator</h2>
            <Box sx={{ width: 300, margin: "30px"}}>
                <h3>Height (feet): {feets}</h3>
                <Slider
                    min={0}
                    max={10}
                    value={feets}
                    onChange={(e, val) => setFeets(val)}
                    valueLabelDisplay="auto"
                />
                <h3>Height (inches): {inches}</h3>
                <Slider
                    min={0}
                    max={12}
                    value={inches}
                    onChange={(e, val) => setInches(val)}
                    valueLabelDisplay="auto"
                />
                <h3>Weight (kg): {weight}</h3>
                <Slider
                    min={0}
                    max={120}
                    value={weight}
                    onChange={(e, val) => setWeight(val)}
                    valueLabelDisplay="auto"
                />
            </Box>
            <Button
                onClick={calculateBmi}
                variant="contained"
                sx={{ margin: "20px" }}
            >
                Calculate BMI
            </Button>
            {/* {bmi && <h3 id="warn">Your BMI: {bmi} ({category})</h3>} */}
            <h3 id="warn" style={{ color: category === "Underweight" ? "blue" : category === "Normal" ? "green" : category === "Overweight" ? "orange" : category === "Obese" ? "red" : "black" }}>
    Your BMI: {bmi} ({category})
</h3>
            </div>
            <div className="Graph" >
            <h2>BMI Graph</h2>
            <canvas className="chart" ref={chartRef}></canvas>
            </div>
        </div>
    );
};

export default BmiGraph;

