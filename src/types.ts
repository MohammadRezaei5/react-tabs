import type { ReactNode } from "react";

export interface TabButtonProps {
  children: ReactNode;
  onSelect: () => void;
  isSelected: boolean;
}

export interface ExampleItem {
  title: string;
  description: string;
}

export interface ExamplesRecord {
  [key: string]: ExampleItem;
}
