"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui";

// Resource type definition
type Resource = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
};

// Resource data based on provided content
// Updated Resource Data with relevant online images
const resourcesData: Resource[] = [
  // Retail resources
  {
    id: "1",
    title: "Store Performance Monitoring",
    description: "Track performance of various stores, and aid new store site selection and store closure.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Demand Planning",
    description: "Forecast demand more accurately using the Digital Atlas that incorporates numerous external signals such as stores in the vicinity, people movement, traffic, weather changes, crime and other real world events that have an impact on your store sales.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Lease Abstraction",
    description: "Analyse thousands of legal documents and accurately answer any questions your team may have about historical leases, current rent, leases expected to renew, optimal rental for a building etc.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Site Selection",
    description: "Predict potential sites to open new stores maximising expected sales while also minimising cannibalisation in existing stores leveraging the Digital Atlas.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Assortment Planning",
    description: "Plan the optimal assortment of products for each of your stores based on their locations, the demographics of consumers, the competing stores and other factors in that neighbourhood.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1585386959984-a415522316d6?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Retail Clustering",
    description: "Group together your stores that are present in very similar territories with similar sales potential to identify gaps and growth opportunities.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "7",
    title: "Territory Mapping",
    description: "Find the ideal locations for your distribution centers based on sales trends by store and territory.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "8",
    title: "Sales Force Assistant",
    description: "Let the AI Agent guide the field sales teams on daily activity and measure improvement in their productivity levels.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
  },
  
  // CPG resources
  {
    id: "9",
    title: "Promo Allocation",
    description: "Accurately predict what promotions to apply in which territories/retail stores and for what time period using the Digital Atlas.",
    category: "CPG",
    image: "https://images.unsplash.com/photo-1581091012184-7f8b7b88a6f3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "10",
    title: "Market Potential",
    description: "Identify territories similar to high performing territories based on the Digital Atlas. This helps open up new growth opportunities.",
    category: "CPG",
    image: "https://images.unsplash.com/photo-1565374395542-0ce1321e25eb?q=80&w=1200&auto=format&fit=crop"
  },
  
  // Automotive resources
  {
    id: "11",
    title: "Vehicle Performance Monitoring",
    description: "Utilize telematics data to construct models for enhancing vehicle performance optimization.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "12",
    title: "EV Charging Demand Modeling",
    description: "Anticipate and meet electric vehicle charging demand efficiently with advanced modeling solutions.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1601924638867-3ec6a2d40b09?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "13",
    title: "Risk Prediction",
    description: "Based on the terrain, weather, driving style and other factors, predict the risk parameters more accurately.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1485463611229-2e5e4c214d1b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "14",
    title: "EV Range Optimization",
    description: "Analyze telematics data to examine road terrain and performance factors influencing EV battery range.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1585951237319-198b6e356d29?q=80&w=1200&auto=format&fit=crop"
  },
  
  // Logistics resources
  {
    id: "15",
    title: "Warehouse Site Selection",
    description: "Employ data-driven insights in selecting strategic warehouse locations for enhanced logistics efficiency.",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "16",
    title: "Vehicle Route Optimization",
    description: "Streamline logistics operations by optimizing vehicle routes for efficiency and cost-effectiveness.",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1200&auto=format&fit=crop"
  },
  
  // BFSI resources
  {
    id: "17",
    title: "Risk Assessment",
    description: "Employ Spatial AI to assess risks for commercial properties, enhancing precision in underwriting and risk management strategies.",
    category: "BFSI",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "18",
    title: "Fraud Detection",
    description: "Leverage spatial data to detect irregularities in financial transactions, reducing fraud.",
    category: "BFSI",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop"
  },
  
  // Telecom resources
  {
    id: "19",
    title: "Campaign Optimization",
    description: "Continuously learn from customer behavior, market trends, and business goals to design, launch, and optimize marketing campaigns in real time, balancing revenue growth, customer experience & long-term retention.",
    category: "Telecom",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "20",
    title: "Retail Insights",
    description: "Queries and reasons across retail data to surface regional insights, product trends, churn signals, and network-performance correlations.",
    category: "Telecom",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "21",
    title: "Network Planning & Optimization",
    description: "Identify optimal tower locations and mitigate congestion using real-world signals like mobility, terrain, weather, events, population shifts, and usage patterns.",
    category: "Telecom",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
  }
];


// Resource Card Component
const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={resource.id} // Add key to ensure proper re-rendering
      className="group"
    >
      <div
        className="relative aspect-square rounded-2xl overflow-hidden shadow-lg shadow-black/20 transition-all duration-500 ease-in-out
        group-hover:shadow-xl group-hover:shadow-[#00a39a]/20 group-hover:scale-[1.05]"
      >
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-[1.08] group-hover:filter group-hover:brightness-90"
          style={{
            backgroundImage: `url(${resource.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
        
        {/* Category Badge - Only show for specific categories */}
        {resource.category === "CPG" && (
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-blue-900/80 text-white text-xs font-medium px-2.5 py-1 rounded-md backdrop-blur-sm">
              {resource.category}
            </span>
          </div>
        )}
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ease-in-out group-hover:translate-y-[-4px]">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
            {resource.title}
          </h3>
          
          {/* Description - Always include but control visibility with opacity */}
          <p className={`text-gray-200 text-sm transition-all duration-500 ease-in-out ${resource.description.length < 100 ? '' : 'opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0'}`}>
            {resource.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Filter Categories
const categories = ["All", "Retail", "CPG", "Automotive", "Logistics", "BFSI", "Telecom"];

export const NewIndustriesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredResources, setFilteredResources] = useState(resourcesData);
  
  // Filter resources when category changes
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredResources(resourcesData);
    } else {
      setFilteredResources(resourcesData.filter(resource => resource.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#0b0e14] text-white">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Top Label */}
            <div className="inline-block mb-8">
              <span className="bg-[#0a1b2f] text-[#8bd3f9] text-xs font-medium px-4 py-1.5 rounded-full">
                ✦ Discover your use cases
              </span>
            </div>
            
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <div className="text-white">Real-world intelligence</div>
              <div className="flex items-center justify-center">
                <span className="text-white">across</span>
                <span className="text-[#00a39a] ml-4">Verticals</span>
              </div>
            </h1>
            
            {/* Subheading */}
            <p className="text-[#a0a7b1] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              From Retail to Automotive, Propheus empowers data teams to effortlessly confront age-old and emerging business challenges through our end to end solutions.
            </p>
          </div>
        </div>
        
        {/* Background Elements - Grid Pattern */}
        <div className="absolute inset-0 bg-[#0b0e14] z-0">
          <div className="absolute inset-0 opacity-20"
               style={{
                 backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
                 backgroundSize: '80px 80px'
               }}>
          </div>
        </div>
      </section>
      
      {/* Filter Tabs */}
      <section className="py-8 border-y border-gray-800/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center space-x-1 md:space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm md:text-base whitespace-nowrap transition-all duration-300 relative ${
                  activeCategory === category
                    ? "text-[#00a39a] font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00a39a]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            key={activeCategory} // Add key to force re-render when category changes
          >
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </motion.div>
          
          {/* Empty State */}
          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">No resources found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewIndustriesPage;

// Made with Bob
