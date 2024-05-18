import SideBarLayout from "@/Components/Layouts/SideBarLayout";

export default function Layout(props: { children: React.ReactNode }) {
  return (
  <SideBarLayout>
    {props.children}
  </SideBarLayout>
  );
}
