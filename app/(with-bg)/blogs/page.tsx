import BlogCard from "@/components/blogs/blog";
import InArticleAd from "@/components/ads/blogAd";
import { blogs } from "./blogs";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <div className="h-screen flex overflow-x-auto md:overflow-visible">
      {blogs.map((blog, index) => (
        <Fragment key={blog.id}>
          {/* Blog Card */}
          <div className="flex h-full border-r w-[92vw] md:w-[20rem] shrink-0">
            <BlogCard
              id={blog.id}
              title={blog.title}
              description={blog.content[0] + blog.content[1]}
              date={blog.date}
              author="Akash Ahmad Malik."
            />
          </div>

          {(index + 1) % 3 === 0 && (
            <div className="flex items-center justify-center border-r w-[92vw] md:w-[20rem] shrink-0 ">
              <div className="m-2">
                <InArticleAd />
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}