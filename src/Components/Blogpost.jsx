import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/data";

const recentImages = [assets.product1, assets.product2, assets.product3];

const blogPosts = [
  {
    img: assets.product1,
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    title:
      "Even the all-powerful Pointing has no control about the blind texts",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    img: assets.product2,
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    title:
      "Even the all-powerful Pointing has no control about the blind texts",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    img: assets.product3,
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    title:
      "Even the all-powerful Pointing has no control about the blind texts",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    img: assets.product4,
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    title:
      "Even the all-powerful Pointing has no control about the blind texts",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    img: assets.product5,
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    title:
      "Even the all-powerful Pointing has no control about the blind texts",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    img: assets.product6,
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    title:
      "Even the all-powerful Pointing has no control about the blind texts",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Blog Posts */}
          <div className="lg:w-2/3 space-y-8" data-aos="fade-up">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-white shadow-sm rounded overflow-hidden"
                data-aos="fade-up"
              >
                {/* Blog Image */}
                <Link
                  to="/single-blog"
                  className="w-full md:w-1/3 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${post.img})`,
                    minHeight: "220px",
                  }}
                ></Link>

                {/* Blog Content */}
                <div className="p-6 md:w-2/3">
                  <div className="flex gap-4 text-gray-500 text-sm mb-3">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1">
                      <i className="icon-chat"></i> {post.comments}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    <Link to="/single-blog" className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-3">{post.desc}</p>

                  {/* Read More Button */}
                  <Link
                    to="/single-blog"
                    className="bg-primary text-white px-4 py-2 text-sm rounded-full hover:text-primary hover:bg-transparent hover:border hover:border-primary transition-all"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-1/3 space-y-8" data-aos="fade-up">
            {/* Search */}
            <div className="bg-white p-4 shadow-sm rounded">
              <form className="flex items-center border rounded overflow-hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 w-full focus:outline-none"
                />
                <span className="px-3 text-gray-500">
                  <i className="ion-ios-search"></i>
                </span>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-white p-4 shadow-sm rounded" data-aos="fade-up">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex justify-between hover:text-green-600"
                  >
                    Vegetables <span>(12)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between hover:text-green-600"
                  >
                    Fruits <span>(22)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between hover:text-green-600"
                  >
                    Juice <span>(37)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between hover:text-green-600"
                  >
                    Dries <span>(42)</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Recent Blog */}
            <div className="bg-white p-4 shadow-sm rounded" data-aos="fade-up">
              <h3 className="text-lg font-semibold mb-4">Recent Blog</h3>
              {[1, 2, 3].map((item, idx) => (
                <div key={idx} className="flex mb-4">
                  <Link
                    to="/single-blog"
                    className="w-20 h-20 bg-cover bg-center flex-shrink-0 mr-4"
                    style={{ backgroundImage: `url(${recentImages[idx]})` }}
                  ></Link>
                  <div>
                    <h4 className="text-sm font-semibold">
                      <Link to="/single-blog" className="hover:text-green-600">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </Link>
                    </h4>
                    <div className="text-xs text-gray-500 space-x-2">
                      <span>
                        <i className="icon-calendar"></i> April 09, 2019
                      </span>
                      <span>
                        <i className="icon-person"></i> Admin
                      </span>
                      <span>
                        <i className="icon-chat"></i> 19
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tag Cloud */}
            <div className="bg-white p-4 shadow-sm rounded" data-aos="fade-up">
              <h3 className="text-lg font-semibold mb-4">Tag Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "fruits",
                  "tomatoe",
                  "mango",
                  "apple",
                  "carrots",
                  "orange",
                  "pepper",
                  "eggplant",
                ].map((tag, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-gray-100 px-3 py-1 rounded text-sm hover:bg-green-100"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Paragraph */}
            <div className="bg-white p-4 shadow-sm rounded" data-aos="fade-up">
              <h3 className="text-lg font-semibold mb-4">Paragraph</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus itaque, autem necessitatibus voluptate quod mollitia
                delectus aut, sunt placeat nam vero culpa sapiente consectetur
                similique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
