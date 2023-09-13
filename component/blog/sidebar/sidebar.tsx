import { getPostSlugs } from "@/component/util/util";
import Tree from "@/component/ui/tree/tree";

export default function Sidebar() {
  const postSlugs = getPostSlugs();

  return <Tree postSlugs={postSlugs} />;
}
