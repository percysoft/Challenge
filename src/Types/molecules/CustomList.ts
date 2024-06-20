export interface Item {
    id: string;
    name: string;
  }
  
 export interface CustomListProps {
   data: Item[];
   renderItem?: (item: Item) => React.ReactNode;
   onItemPress?: (item: Item) => void;
   testID?: string;
 }