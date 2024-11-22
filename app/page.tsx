import type { Metadata } from "next";
import Groups from "./components/Groups";

export default function GroupsPage({params}: any) {
  return <Groups />;
}

export const metadata: Metadata = {
  title: "Groups",
};
