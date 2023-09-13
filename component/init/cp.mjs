import { sync } from "glob";
import fs from "fs-extra";
import matter from "gray-matter";
import path from "path";

function cpHeroImage() {
  const filepathes = sync(`posts/**/*.md`);

  filepathes.forEach((filepath) => {
    const fileContents = fs.readFileSync(filepath, "utf8");
    const { data } = matter(fileContents);
    const slug = filepath.replace(/index\.md/, "");
    const heroPath = data.hero ? path.join(slug, data.hero) : "";

    if (heroPath) {
      fs.copySync(heroPath, path.join(process.cwd(), "public", heroPath));
    }
  });
}

cpHeroImage();
