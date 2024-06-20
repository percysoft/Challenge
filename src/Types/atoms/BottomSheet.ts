export interface BottomSheetProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
}