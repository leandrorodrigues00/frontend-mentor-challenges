"use client";

import { useDateBirth } from "@/contexts/date-birth";

interface ShowAgetProps {
  temporalUnit: "days" | "months" | "years";
}

export function ShowAge({ temporalUnit }: ShowAgetProps) {
  const { dateBirth } = useDateBirth();
  return (
    <span className="text-purple-600">
      {dateBirth ? dateBirth[temporalUnit] : "- - "}
    </span>
  );
}
