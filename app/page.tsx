import ActionBar from "@/components/action-bar";
import ListArea from "@/components/list-area";
import TitleBar from "@/components/title-bar";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-dvh">
      <TitleBar />
      <ActionBar />
      <ListArea />
    </main>
  );
}
