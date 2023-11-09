import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  return <>{children}</>;
};

export default CreateLayout;
