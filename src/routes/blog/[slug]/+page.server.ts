import { client } from "../../../api/sanityClient";
import { parse } from "marked";

export async function load({ params }) {
  const data = await client.getBlogData();
  const slug = params.slug;
  const blog = data.find(b => b.slug === slug);

  if (blog) {
    return {
      blog: blog,
      html: parse(blog.markdown)
    }
  } else {
    return {
      status: 404,
      body: new Error('Blog Not found!')
    };
  }
}
