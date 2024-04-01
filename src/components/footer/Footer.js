import Typography from "@mui/material/Typography";
import logo from "../../image/sysco.webp";

function Footer() {
  return (
    <footer className="w-full p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-y-0 md:gap-x-12 text-center md:justify-between">
        <img
          src={logo}
          alt="sysco"
          className="w-32 md:w-40 ml-0 md:ml-20 mb-4 md:mb-0"
        />
        <ul
          className="flex flex-wrap justify-center gap-y-2 gap-x-4 md:gap-x-8"
          style={{ marginRight: "15px" }}
        >
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              style={{ fontFamily: "monospace, sans-serif" }}
            >
              Холбогдох
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              style={{ fontFamily: "monospace, sans-serif" }}
            >
              Үйл ажиллагаа
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              style={{ fontFamily: "monospace, sans-serif" }}
            >
              Түгээмэл асуулт хариулт
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-4 md:my-8 border-blue-gray-50" />
      <Typography
        color="blue-gray"
        className="text-center font-normal"
        style={{ fontFamily: "monospace, sans-serif" }}
      >
        ШУТИС-МХТС 400 тоот 94945798 <br />
        &copy; 2024 Sysco&CoTech
      </Typography>
    </footer>
  );
}
export default Footer;
