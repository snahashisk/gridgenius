import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT GRIDGENIUS" /> <br />
            <br />
            <Title
              title="The last digital agency you will ever need!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Turning your business ideas into smart digital products since 2023" />
              <p className="desc-p">
                Welcome to GridGenius, a distinguished digital marketing agency
                dedicated to empowering businesses across diverse industries.
                Our comprehensive suite of services is designed to propel your
                brand to new heights in the ever-evolving digital landscape.
                Behind our success lies a team of seasoned
                professionals—creative minds and strategic experts who
                collaborate to bring your vision to life. We are more than just
                a digital marketing agency; we are your partners in success.
              </p>
              <p className="desc-p">
                {" "}
                At GridGenius, our commitment is unwavering. We specialize in
                crafting top-notch solutions that transcend traditional
                marketing boundaries. Whether it's SEO, social media management,
                content creation, or cutting-edge web development, our
                passionate team is equipped to drive meaningful results for your
                business.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                Fusce fringilla justo vel dui consectetur, fringilla maximus
                ante malesuada. Suspendisse facilisis nisl augue, ut
                sollicitudin lectus ipsum dolor sit amet, consectetur adipiscing
                elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis esse vitae officia nostrum facere. Fugiat voluptates,
                expedita dolore at perferendis quae libero fuga consequatur
                veniam, eius non fugit nulla vitae?
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
