import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TreeDeciduous, Home } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCategoryStore } from "@/store/categoryStore";

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

interface GardenHomeToggleProps {
  value?: "garden" | "home";
  onChange?: (value: "garden" | "home") => void;
}

export default function GardenHomeToggle({ value, onChange }: GardenHomeToggleProps) {
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const isMobile = useIsMobile();

  function handleValueChange(val: string) {
    if (val === "garden" || val === "home") {
      if (onChange) {
        onChange(val);
      } else {
        setSelectedCategory(val);
      }
    }
  }

  const currentValue = value !== undefined ? value : selectedCategory;

  return (
    <ToggleGroup
      type="single"
      value={currentValue}
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
              currentValue === option.value
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
