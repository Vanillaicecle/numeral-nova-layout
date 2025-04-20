
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TreeDeciduous, House } from "lucide-react";

type GardenHomeToggleProps = {
  value?: "garden" | "home";
  onChange?: (val: "garden" | "home") => void;
};

const options = [
  {
    value: "garden",
    label: "Сад",
    icon: <TreeDeciduous className="mr-2" size={22} />,
  },
  {
    value: "home",
    label: "Дом",
    icon: <House className="mr-2" size={22} />,
  },
];

export default function GardenHomeToggle({
  value = "garden",
  onChange,
}: GardenHomeToggleProps) {
  const [selected, setSelected] = React.useState<"garden" | "home">(value);

  function handleValueChange(val: string) {
    if (val === "garden" || val === "home") {
      setSelected(val);
      onChange?.(val);
    }
  }

  return (
    <ToggleGroup
      type="single"
      value={selected}
      onValueChange={handleValueChange}
      className="rounded-full p-1 bg-[#F4F4F4] shadow-sm ml-5"
      aria-label="Выбрать сад или дом"
    >
      {options.map((option) => (
        <ToggleGroupItem
          key={option.value}
          value={option.value}
          aria-label={option.label}
          className={`
            flex items-center rounded-full px-4 py-2 min-w-[115px] justify-center gap-2
            text-base font-medium
            transition
            ${
              selected === option.value
                ? "bg-[#2E8B57] text-white shadow"
                : "bg-transparent text-[#333] hover:bg-[#e0eee7]"
            }
          `}
          style={{
            borderRadius: "999px",
          }}
        >
          {option.icon}
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
