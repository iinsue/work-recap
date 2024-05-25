import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User } from "next-auth";

type Props = {
  user?: User;
  label: string;
};

export const UserInfo = ({ user, label }: Props) => {
  return (
    <>
      <Card>
        <CardHeader>
          <p className="text-2xl font-semibold text-center">{label}</p>
        </CardHeader>
        <CardContent>
          <div>
            <p>ID</p>
            <p>{user?.id}</p>
          </div>
          <div>
            <p>Name</p>
            <p>{user?.name}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Email</p>
            <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
              {user?.email}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
