import { Group, Button, px } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "890px",
        height: "80px",
        margin: "21px auto", // centers horizontally
        borderRadius: "122px",
        border: "1px solid #E5E7EB", // light gray border
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        background: "white",
        boxShadow: "0px 0px 14px 0px #C6BFBF40"

      }}
    >
      {/* Logo */}
      <div className="font-bold text-xl text-indigo-600 cursor-pointer">
        <img src={logo} alt="Logo" style={{ width: '44px', height: '44.8px' }} />
      </div>

      {/* Center Links */}
      <Group spacing="lg" className="text-gray-700 font-medium" justify="center" gap="xl">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <Link to="/" className="hover:text-indigo-600">Find Jobs</Link>
        <Link to="/" className="hover:text-indigo-600">Find Talents</Link>
        <Link to="/" className="hover:text-indigo-600">About Us</Link>
        <Link to="/" className="hover:text-indigo-600">Testimonials</Link>
      </Group>

      {/* Create Job Button */}
      <Button
        color="violet"
        background="linear-gradient(180deg, #A128FF 0%, #6100AD 113.79%)"
        radius="xl"
        size="md"
        onClick={() => navigate("/create")}
      >
        Create Job
      </Button>
    </div>
  );
}
