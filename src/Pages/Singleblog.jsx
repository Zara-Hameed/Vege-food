import React from "react";
import image1 from "../assets/image_1.jpg.webp";
import image2 from "../assets/image_2.jpg.webp";
import image3 from "../assets/image_3.jpg.webp";
import person1 from "../assets/person_1.jpg";
import PagesHero from "../Components/PagesHero";
import { assets } from "../assets/data.js";
const BlogPost = () => {
  return (
    <>
      <PagesHero img={assets.bg_1} tagline="Home Blog" heading="BLOG" />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* MAIN CONTENT */}
            <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl mb-5">
                Organic foods is good for your health
              </h2>
              <p className="mb-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium? Esse minima nisi et. Dolore perferendis, enim
                praesentium omnis, iste doloremque quia officia optio deserunt
                molestiae voluptates soluta architecto tempora.
              </p>
              <img src={image1} alt="" className="w-full mb-4 rounded-lg" />
              <p className="mb-4 text-gray-500">
                Molestiae cupiditate inventore animi, maxime sapiente optio,
                illo est nemo veritatis repellat sunt doloribus nesciunt! Minima
                laborum magni reiciendis qui voluptate quisquam voluptatem
                soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi
                deleniti tenetur dolore amet fugit perspiciatis ipsa, odit.
                Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!
              </p>

              <h2 className="text-3xl  mt-8 mb-3">
                #2. Creative WordPress Themes
              </h2>
              <p className="mb-4 text-gray-500">
                Temporibus ad error suscipit exercitationem hic molestiae totam
                obcaecati rerum, eius aut, in. Exercitationem atque quidem
                tempora maiores ex architecto voluptatum aut officia doloremque.
                Error dolore voluptas, omnis molestias odio dignissimos culpa ex
                earum nisi consequatur quos odit quasi repellat qui officiis
                reiciendis incidunt hic non? Debitis commodi aut, adipisci.
              </p>
              <img src={image2} alt="" className="w-full mb-4 rounded-lg" />
              <p className="mb-4 text-gray-500">
                Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
                reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
                tenetur tempore, nisi culpa voluptate maiores officiis quis vel
                ab consectetur suscipit veritatis nulla quos quia aspernatur
                perferendis, libero sint. Error, velit, porro. Deserunt minus,
                quibusdam iste enim veniam, modi rem maiores. <br />
                <br />
                Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum,
                quo velit commodi rerum eum quidem pariatur! Quia fuga iste
                tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro
                explicabo soluta commodi libero voluptatem similique id quidem?
                Blanditiis voluptates aperiam non magni. Reprehenderit nobis
                odit inventore, quia laboriosam harum excepturi ea.
                <br />
                <br /> Adipisci vero culpa, eius nobis soluta. Dolore, maxime
                ullam ipsam quidem, dolor distinctio similique asperiores
                voluptas enim, exercitationem ratione aut adipisci modi quod
                quibusdam iusto, voluptates beatae iure nemo itaque laborum.
                Consequuntur et pariatur totam fuga eligendi vero dolorum
                provident. Voluptatibus, veritatis. Beatae numquam nam ab
                voluptatibus culpa, tenetur recusandae!
                <br />
                <br /> Voluptas dolores dignissimos dolorum temporibus, autem
                aliquam ducimus at officia adipisci quasi nemo a perspiciatis
                provident magni laboriosam repudiandae iure iusto commodi
                debitis est blanditiis alias laborum sint dolore. Dolores, iure,
                reprehenderit. Error provident, pariatur cupiditate soluta
                doloremque aut ratione. Harum voluptates mollitia illo minus
                praesentium, rerum ipsa debitis, inventore?
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-6 mb-8">
                {["Life", "Sport", "Tech", "Travel"].map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded-full"
                  >
                    {tag}
                  </a>
                ))}
              </div>

              {/* AUTHOR BOX */}
              <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg mt-8">
                <img
                  src={person1}
                  alt="Author"
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">Lance Smith</h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                    autem, eum officia, fugiat saepe enim sapiente iste iure!
                    Quam voluptas earum impedit necessitatibus, nihil?
                  </p>
                </div>
              </div>

              {/* COMMENTS */}
              <div className="pt-8 mt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-6">6 Comments</h3>
                <ul>
                  {[1, 2, 3].map((comment) => (
                    <li key={comment} className="mb-6">
                      <div className="flex gap-4">
                        <img
                          src={person1}
                          alt="User"
                          className="w-12 h-12 object-cover rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold">John Doe</h4>
                          <span className="text-sm text-gray-300">
                            June 27, 2018 at 2:21pm
                          </span>
                          <p className="text-gray-700 mt-2 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur quidem laborum necessitatibus, ipsam
                            impedit vitae autem, eum officia, fugiat saepe enim
                            sapiente iste iure! Quam voluptas earum impedit
                            necessitatibus, nihil?
                          </p>
                          <a href="#" className="text-gray-800 uppercase text-xs bg-gray-200 rounded p-2 text-center">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COMMENT FORM */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Leave a comment</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Website
                    </label>
                    <input
                      type="url"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      rows="5"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    ></textarea>
                  </div>
                  <button className="bg-primary hover:bg-transparent hover:text-primary hover:border hover:border-primary text-white p-4 rounded-full ">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:w-1/3 space-y-8">
              {/* Search */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <form>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                    <span className="absolute right-3 top-2.5 text-gray-400">
                      🔍
                    </span>
                  </div>
                </form>
              </div>

              {/* Categories */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Categories</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a href="#">Vegetables (12)</a>
                  </li>
                  <li>
                    <a href="#">Fruits (22)</a>
                  </li>
                  <li>
                    <a href="#">Juice (37)</a>
                  </li>
                  <li>
                    <a href="#">Dries (42)</a>
                  </li>
                </ul>
              </div>

              {/* Recent Blog */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg  mb-3">Recent Blog</h3>
                {[image1, image2, image3].map((img, i) => (
                  <div key={i} className="flex gap-4 mb-4">
                    <div
                      className="w-40 h-20 bg-cover bg-center "
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                    <div>
                      <a
                        href="#"
                        className=" text-gray-800 text-lg hover:text-primary"
                      >
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                      <div className="text-sm text-gray-500">
                        April 09, 2019
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tag Cloud */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Tag Cloud</h3>
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
                  ].map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

              {/* Paragraph */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Paragraph</h3>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
