import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom"; // Import Link
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Kontak = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-manrope px-5 md:px-10 py-10 md:py-10">
      {/* Form */}
      <div className="p-6 bg-white rounded-xl shadow-xl drop-shadow-xl mx-5 md:mx-20 xl:mx-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Isi Form Dibawah Ini
        </h2>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          className="space-y-6"
        >
          <Form.Item
            name="nama"
            rules={[{ required: true, message: "Silakan masukkan nama Anda!" }]}
            className="mb-4"
          >
            <Input placeholder="Nama" className="w-full" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Silakan masukkan alamat email Anda!",
              },
              { type: "email", message: "Format email tidak valid!" },
            ]}
            className="mb-4"
          >
            <Input placeholder="Email" className="w-full" />
          </Form.Item>

          <Form.Item
            name="no_hp"
            rules={[
              { required: true, message: "Silakan masukkan nomor HP Anda!" },
              {
                pattern: /^[0-9\b]+$/,
                message: "Nomor HP hanya boleh berisi angka!",
              },
            ]}
            className="mb-4"
          >
            <Input placeholder="Nomor HP" className="w-full" />
          </Form.Item>

          <Form.Item
            name="pesan"
            rules={[
              { required: true, message: "Silakan masukkan pesan Anda!" },
            ]}
            className="mb-4"
          >
            <Input.TextArea placeholder="Pesan" rows={4} className="w-full" />
          </Form.Item>
          <Form.Item>
            <div className="flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-customGreen font-bold text-lg h-10"
              >
                Kirim
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>

      {/* Alamat & Kontak */}
      <div className="p-6 bg-white rounded-xl ">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Alamat</h2>
        <p className="mb-6 text-gray-700 text-justify">
          Harka Office, Alamanda Tower Lantai 2 Unit H 1, Jl. TB Simatupang
          Nomor 23-24, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan,
          Daerah Khusus Ibukota Jakarta 12430
        </p>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Kontak</h2>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-4">
            <Link
              to="https://wa.me/yourphonenumber"
              target="_blank"
              className="text-blue-600 hover:underline flex items-center"
            >
              <div className="bg-customGreen rounded-lg p-2 transition duration-300 transform hover:scale-110">
                <AiOutlineWhatsApp size={24} className="text-white" />
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="https://www.instagram.com/leoraindonesia_?igsh=MzRlODBiNWFlZA=="
              target="_blank"
              className="text-purple-600 hover:underline flex items-center"
            >
              <div className="bg-customGreen rounded-lg p-2 transition duration-300 transform hover:scale-110">
                <AiOutlineInstagram size={24} className="text-white" />
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="https://www.linkedin.com/company/leora-construction-services/"
              target="_blank"
              className="text-blue-900 hover:underline flex items-center"
            >
              <div className="bg-customGreen rounded-lg p-2 transition duration-300 transform hover:scale-110">
                <AiOutlineLinkedin size={24} className="text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
