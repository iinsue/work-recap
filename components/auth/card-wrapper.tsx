"use client";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type Props = {
  children: React.ReactNode;
  headerLabel: string;
  buttonLabel: string;
  buttonHref: string;
  showSocial?: boolean;
};

export const CardWrapper = ({
  children,
  headerLabel,
  buttonLabel,
  buttonHref,
  showSocial,
}: Props) => {
  return (
    <>
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className={cn("text-3xl font-semibold", font.className)}>
              🔐 Auth
            </h1>
            <p className="text-muted-foreground text-sm">{headerLabel}</p>
          </div>
        </CardHeader>

        <CardContent>{children}</CardContent>

        {showSocial && <CardFooter>Social</CardFooter>}

        <CardFooter>
          <Button variant="link" className="font-normal w-full" asChild>
            <Link href={buttonHref}>{buttonLabel}</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
