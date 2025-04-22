
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TreeDeciduous, Home } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
    icon: <Home className="mr-2" size={22} />,
  },
];

export default function GardenHomeToggle({
  value = "garden",
  onChange,
}: GardenHomeToggleProps) {
  const [selected, setSelected] = React.useState<"garden" | "home">(value);
  const isMobile = useIsMobile();

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
      className={`
        rounded-full p-1 bg-[#F4F4F4] shadow-sm 
        ${isMobile ? "w-full max-w-[320px]" : "ml-5"}
      `}
      aria-label="Выбрать сад или дом"
    >
      {options.map((option) => (
        <ToggleGroupItem
          key={option.value}
          value={option.value}
          aria-label={option.label}
          className={`
            flex items-center rounded-full py-2 justify-center gap-2
            text-base font-medium w-1/2
            transition
            ${
              selected === option.value
                ? "bg-main-green text-white shadow"
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
