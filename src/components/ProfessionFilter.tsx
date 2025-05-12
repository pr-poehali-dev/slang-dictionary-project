
import React from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { professionsList } from "@/data/professionsData";

interface ProfessionFilterProps {
  selectedProfession: string | null;
  onProfessionChange: (profession: string | null) => void;
}

const ProfessionFilter: React.FC<ProfessionFilterProps> = ({ 
  selectedProfession, 
  onProfessionChange 
}) => {
  return (
    <div className="w-full md:w-64">
      <Select 
        value={selectedProfession || ""} 
        onValueChange={(value) => onProfessionChange(value === "" ? null : value)}
      >
        <SelectTrigger className="h-12 text-base">
          <SelectValue placeholder="Выберите профессию" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">Все профессии</SelectItem>
          {professionsList.map((profession) => (
            <SelectItem key={profession} value={profession}>
              {profession}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProfessionFilter;
