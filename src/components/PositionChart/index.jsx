import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import classes from "./Main.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Руководитель",
    "Маркетолог",
    "СММ менеджер",
    "Таргетолог",
    "Дизайнер",
    "Контент менеджер",
    "Копирайтер",
    "Монтажёр",
    "IT специалист",
    "Менеджер по продажам",
    "Оператор",
    "Помощник",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3, 15, 14, 23, 9, 13, 25],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",

        "rgba(255, 100, 111, 0.2)",
        "rgba(54, 144, 200, 0.2)",
        "rgba(255, 156, 80, 0.2)",
        "rgba(75, 123, 180, 0.2)",
        "rgba(153, 66, 244, 0.2)",
        "rgba(255, 78, 124, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 111, 1)",
        "rgba(54, 162, 200, 1)",
        "rgba(255, 206, 80, 1)",
        "rgba(75, 192, 180, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",

        "rgba(255, 100, 132, 1)",
        "rgba(54, 144, 235, 1)",
        "rgba(255, 156, 86, 1)",
        "rgba(75, 123, 192, 1)",
        "rgba(153, 66, 244, 1)",
        "rgba(255, 78, 124, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutCP = ({ title }) => {
  return (
    <>
      <h1 className={classes.title}>{title}</h1>
      <Doughnut data={data} />
    </>
  );
};

export default DoughnutCP;
