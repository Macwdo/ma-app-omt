import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const getData = async (): Promise<any[]> => {
  return [
    {
      id: "1",
      name: "John Doe",
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsa atque qui, fugit a expedita vel, hic maiores aperiam perspiciatis quos quam. Enim, illo? Sed molestias consectetur explicabo cupiditate iusto!",
    },
    {
      id: "2",
      name: "Jane Doe",
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsa atque qui, fugit a expedita vel, hic maiores aperiam perspiciatis quos quam. Enim, illo? Sed molestias consectetur explicabo cupiditate iusto!",
    },
    {
      id: "3",
      name: "John Smith",
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsa atque qui, fugit a expedita vel, hic maiores aperiam perspiciatis quos quam. Enim, illo? Sed molestias consectetur explicabo cupiditate iusto!",
    },
    {
      id: "4",
      name: "Jane Smith",
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsa atque qui, fugit a expedita vel, hic maiores aperiam perspiciatis quos quam. Enim, illo? Sed molestias consectetur explicabo cupiditate iusto!",
    },
  ];
};

export async function Dashboard() {
  const data = await getData();

  return (
    <div>
      <div className="mb-2">
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {data.map((item, i) => (
          <div key={i} className="">
            <Card>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.data}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost">View</Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
