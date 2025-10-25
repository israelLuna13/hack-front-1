import AdminMenu from "@/components/AdminMenu";
import Logo from "@/components/ui/Logo";
import { ClerkProvider } from "@clerk/nextjs";

// import ToastNotification from "@/components/ui/ToastNotification";
// import { verifySession } from "@/src/auth/dal";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //check token
  // const {user}=await verifySession()

  return (
    <>
      <header className="bg-white py-5">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-96">
            <Link href={"/admin"}>
              {/* <Logo /> */}
              {<Logo />}
            </Link>
          </div>
          <AdminMenu />
        </div>
      </header>
      <section className="max-w-5xl mx-auto mt-10 p-3 py-8">
        <ClerkProvider afterSignOutUrl={"/"}>{children}</ClerkProvider>
      </section>
      {/* <ToastNotification /> */}

      <footer className="py-5">
        <p className="text-center">
          Todos los Derechos Reservados {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
