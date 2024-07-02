import { ModeToggle } from "./theme/mode-toggle";

export default function TitleBar() {
  return (
    <div className="w-full flex justify-between items-center dark:border-b dark:border-muted-foreground shadow-lg p-3">
      <div className="text-xl">Task Manager Pro</div>
      <ModeToggle />
    </div>
  );
}
