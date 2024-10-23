import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const brands = [
  { id: 1, name: "Gatorade" },
  { id: 2, name: "Google" },
  { id: 3, name: "HBO" },
  { id: 4, name: "Nike" },
  { id: 5, name: "Verizon" },
  { id: 6, name: "Pepsi" },
  { id: 7, name: "Grey Goose" },
  { id: 8, name: "T-Mobile" },
  { id: 9, name: "Lexus" },
  { id: 10, name: "Land Rover" },
  { id: 11, name: "Toyota" },
  { id: 12, name: "Volkswagen" },
  { id: 13, name: "McDonald's" },
  { id: 14, name: "Vicks" },
  { id: 15, name: "StubHub" },
  { id: 16, name: "Ralph Lauren" },
  { id: 17, name: "Burberry" },
  { id: 18, name: "Salvatore Ferragamo" },
  { id: 19, name: "Theory" },
  { id: 20, name: "Goretex" },
  { id: 21, name: "Self Portrait Project" },
  { id: 22, name: "Nikon" },
  { id: 23, name: "Nike" },
  { id: 24, name: "Catbird" },
  { id: 25, name: "Under Armour" },
  { id: 26, name: "Fidelity" },
]

const companies = [
  { id: 1, name: "Northwestern Mutual" },
  { id: 2, name: "NBA" },
  { id: 3, name: "Spotify" },
  { id: 4, name: "Nickelodeon" },
  { id: 5, name: "Texture" },
  { id: 6, name: "Archilogic" },
  { id: 7, name: "410 Labs" },
  { id: 8, name: "The New York Times" },
  { id: 9, name: "ESPN" },
  { id: 10, name: "The Wall Street Journal" },
  { id: 11, name: "Pacific Gas and Electric Company" },
  { id: 12, name: "JP Morgan Chase" },
  { id: 13, name: "Johns Hopkins University" },
  { id: 14, name: "Knotel" },
  { id: 15, name: "No.Inc" },
  { id: 16, name: "Inside Lacrosse" },
]

const agencies = [
  { id: 1, name: "RG/A" },
  { id: 2, name: "Ogilvy" },
  { id: 3, name: "Smart Design" },
  { id: 4, name: "Wieden+Kennedy" },
  { id: 5, name: "Milk Studios" },
  { id: 6, name: "Alexander Interactive" },
  { id: 7, name: "SmartNode" },
  { id: 8, name: "Pentagram" },
  { id: 9, name: "Layerframe" },
  { id: 10, name: "Venture Studio" },
  { id: 11, name: "Codeword" },
]

const Clients = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h3 className="font-spaceGrotesk text-2xl font-semibold mb-4 border-b border-slate-200 dark:border-slate-800">
        Featured Clients
      </h3>
      <Tabs defaultValue="brands" className="w-[400px] mb-16">
        <TabsList>
          <TabsTrigger value="brands">Brands</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="agencies">Agencies</TabsTrigger>
        </TabsList>

        <TabsContent value="brands">
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <Badge key={brand.id}>{brand.name}</Badge>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="companies">
          <div className="flex flex-wrap gap-2">
            {companies.map((company) => (
              <Badge key={company.id}>{company.name}</Badge>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="agencies">
          <div className="flex flex-wrap gap-2">
            {agencies.map((agency) => (
              <Badge key={agency.id}>{agency.name}</Badge>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </motion.section>
  )
}

export default Clients
