import React from "react";
import { useState } from "react";

const SliderData = [
  {
    image:
      "https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg",
  },
  {
    image:
      "https://th.bing.com/th/id/R.b5f6c57bcd6518df2c13305a5ab77e96?rik=o9hgWR4XFBmirQ&riu=http%3a%2f%2fwww.techsling.com%2fwp-content%2fuploads%2f2014%2f07%2fandroid.jpg&ehk=cTO%2b%2bN%2b35WvsUNQNM2SaSVoVUu2HccMESuot2PI6DWQ%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    image:
      "https://th.bing.com/th/id/R.654bcbb614b933a4f94edbc57b468ccd?rik=Yw77eL0TiJXCqg&pid=ImgRaw&r=0",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.Y7geS9PFC5fzXMaw1ObK0wHaEK?pid=ImgDet&rs=1",
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState("");
  return <div>ImageSlider</div>;
};

export default ImageSlider;
