import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <>
      <div
        className={cn(
          "h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex flex-col",
          className
        )}
      >
        <div>Sidebar</div>
      </div>
    </>
  );
};
