import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Rajeev", lastName: "Patel" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src={"../public/icons/logo.svg"}
            alt="menu icon"
            width={30}
            height={30}
          />
        </div>
      </div>
      {children}
    </main>
  );
}
