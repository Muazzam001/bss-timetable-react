import React, { useState } from "react";
import InputField from "@/src/shared/input/inputField.jsx";
import MainLayout from "@/src/shared/mainLayout/mainLayout.jsx";
import InputSelect from "@/src/shared/inputSelect/inputSelect.jsx";
import Button from "@/src/shared/button/button.jsx";
import { assets } from "@/src/assets/index.jsx";
import ManageLesson from "@/src/shared/manageLesson/manageLesson.jsx";
import Calendar from "@/src/components/timetable/calendar.jsx";

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
        <div className="container grid grid-flow-col items-center grid-cols-12 gap-3 ">
          <div className="col-span-5 grid grid-flow-col gap-3">
            <InputField placeholder="ROC" className="h-10 w-full" disabled />

            <InputField placeholder="ROC" className="h-10 w-full" disabled />

            <InputField placeholder="ROC" className="h-10 w-full" disabled />

            <InputField placeholder="ROC" className="h-10 w-full" disabled />
          </div>

          <div className="col-span-6 grid grid-flow-col gap-3">
            <InputSelect
              width={"100%"}
              className="min-w-[200px]"
              options={cluster}
              defaultValue="year"
              value={teamLevel}
              setState={setTeamLevel}
            />

            <InputSelect
              width={"100%"}
              className="min-w-[200px]"
              options={level}
              defaultValue="year"
              value={year}
              setState={setYear}
            />
          </div>

          <div className="col-span-1">
            <Button
              rounded={false}
              type="button"
              title="Reset & Manage"
              color={"blue-dark2"}
              className="font-medium text-sm h-10 min-w-[150px] justify-start"
            />
          </div>
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
