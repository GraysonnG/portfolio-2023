import { client } from "../../../api/sanityClient";

export async function load({ params }) {
  const data = await client.getBlogData();
  // get the current url slug
  const slug = params.slug;

  const blog = data.find(b => b.slug === slug);

  if (blog) {
    return blog
  } else {
    return {
      status: 404,
      body: new Error('Blog Not found!')
    };
  }
}