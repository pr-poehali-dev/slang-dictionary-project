
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import SlangCard from "@/components/SlangCard";
import ProfessionFilter from "@/components/ProfessionFilter";
import { slangData } from "@/data/slangData";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProfession, setSelectedProfession] = useState<string | null>(null);

  // Filtered slang based on search term and selected profession
  const filteredSlang = slangData.filter((item) => {
    const matchesSearch = 
      searchTerm === "" || 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProfession = 
      selectedProfession === null || 
      item.profession === selectedProfession;
    
    return matchesSearch && matchesProfession;
  });

  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      {/* Header */}
      <header className="bg-[#1A1F2C] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 font-montserrat">Профессиональный Сленг</h1>
          <p className="text-xl opacity-80 font-rubik">Словарь терминов и сленга различных профессий</p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 -mt-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Input
                placeholder="Поиск терминов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
              <Icon 
                name="Search" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={20} 
              />
            </div>
            <ProfessionFilter 
              selectedProfession={selectedProfession} 
              onProfessionChange={setSelectedProfession} 
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#1A1F2C] font-montserrat">
            {selectedProfession 
              ? `Термины: ${selectedProfession}` 
              : "Все термины"}
          </h2>
          <Badge variant="outline" className="px-3 py-1">
            {filteredSlang.length} терминов
          </Badge>
        </div>

        {filteredSlang.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSlang.map((slang) => (
              <SlangCard key={slang.id} slang={slang} />
            ))}
          </div>
        ) : (
          <Card className="w-full p-12 text-center">
            <CardContent>
              <Icon name="Search" size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-medium mb-2">Ничего не найдено</h3>
              <p className="text-gray-500">
                Попробуйте изменить параметры поиска или выбрать другую профессию.
              </p>
              <Button 
                className="mt-4 bg-[#9b87f5] hover:bg-[#7E69AB]"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedProfession(null);
                }}
              >
                Сбросить фильтры
              </Button>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-rubik">© 2025 Словарь профессионального сленга</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
