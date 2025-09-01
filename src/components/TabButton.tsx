import type { TabButtonProps } from "../types";
import "./TabButton.css";

function TabButton({ children, onSelect, isSelected }: TabButtonProps) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
