import React, { useState } from "react";
import InputField from "@/src/shared/input/inputField";
import MainLayout from "@/src/shared/mainLayout/mainLayout";
import InputSelect from "@/src/shared/inputSelect/inputSelect";
import Button from "@/src/shared/button/button";
import { assets } from "@/src/assets/index.jsx";
import ManageLesson from "@/src/shared/manageLesson/manageLesson";
import Calendar from "@/src/components/timetable/calendar";

const Whole = () => {
  const [teamLevel, setTeamLevel] = useState("");
  const [year, setYear] = useState("");
  const [lesson, setLesson] = useState("");
  const cluster = [
    "Cluster 1",
    "Cluster 2",
    "Cluster 3",
    "Cluster 4",
    "Cluster 5",
    "Cluster 6",
    "Cluster 7",
    "Cluster 8",
    "Cluster 9",
  ];
  const level = [
    "Early Year - Co-Education",
    "Early Year - Boys",
    "Low Primary - Co-Education",
    "Primary - Co-Education",
    "Primary - Girls",
    "Primary - Boys",
    "IB School - Co-Education",
    "Secondary School - Co-Education",
    "Secondary School - Boys",
    "Secondary School - Girls",
    "All / Whole",
  ];
  const Menus = [
    { title: "Home", src: assets.home },
    { title: "Subjects", src: assets.subject },
    { title: "Classes", src: assets.classes },
    { title: "Classrooms", src: assets.classroom },
    { title: "Teachers", src: assets.teacher2 },
    { title: "Modules", src: assets.modules },
  ];

  return (
    <MainLayout headerItem={Menus}>
      <div className="bg-gray-light-yellowish py-10 min-h-[calc(100vh-175px)]">
        <div className="container flex items-center flex-wrap gap-4">
          <InputField placeholder="ROC" className="h-10 lg:!w-38" disabled />

          <InputField placeholder="ROC" className="h-10 lg:!w-38" disabled />

          <InputField placeholder="ROC" className="h-10 lg:!w-38" disabled />

          <InputField placeholder="ROC" className="h-10 lg:!w-38" disabled />

          <InputSelect
            width={"160px"}
            options={cluster}
            defaultValue="year"
            value={teamLevel}
            setState={setTeamLevel}
          />

          <InputSelect
            width={"160px"}
            options={level}
            defaultValue="year"
            value={year}
            setState={setYear}
          />

          <Button
            rounded={false}
            type="button"
            title="Reset & Manage"
            color={"blue-dark2"}
            className="font-medium text-sm h-10 mt-1 min-w-[130px] justify-start"
          />
        </div>

        <ManageLesson
          options={level}
          icon={assets.settings}
          text={"Manage Lesson Slots"}
          value={lesson}
          setState={setLesson}
        />

        <Calendar />
      </div>
    </MainLayout>
  );
};

export default Whole;
