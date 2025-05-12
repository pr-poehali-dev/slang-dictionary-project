
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { SlangItem } from "@/types/slang";
import { motion } from "framer-motion";

interface SlangCardProps {
  slang: SlangItem;
}

const SlangCard: React.FC<SlangCardProps> = ({ slang }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="hover-scale"
    >
      <Card className="overflow-hidden h-full flex flex-col border-0 shadow-md hover:shadow-lg transition-shadow duration-200">
        <CardContent className="p-6 flex-grow">
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-xl font-bold text-[#1A1F2C] font-montserrat">{slang.term}</h3>
            <Badge className="bg-[#9b87f5] hover:bg-[#9b87f5] text-white">
              {slang.profession}
            </Badge>
          </div>
          
          <div className={`mt-3 text-gray-700 overflow-hidden ${expanded ? '' : 'line-clamp-3'}`}>
            <p className="font-rubik">{slang.definition}</p>
            
            {expanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                {slang.example && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-md border-l-4 border-[#9b87f5] italic">
                    <p className="font-rubik text-gray-600">«{slang.example}»</p>
                  </div>
                )}
                
                {slang.tags && slang.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {slang.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="px-6 pb-6 pt-0">
          <Button 
            variant="ghost" 
            className="text-[#9b87f5] hover:text-[#7E69AB] hover:bg-[#E5DEFF] px-4 w-full flex items-center justify-center gap-2"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <Icon name="ChevronsUp" size={18} />
                <span>Свернуть</span>
              </>
            ) : (
              <>
                <Icon name="ChevronsDown" size={18} />
                <span>Подробнее</span>
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SlangCard;
