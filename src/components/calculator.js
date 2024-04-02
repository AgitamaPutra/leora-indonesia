import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select, Input, Form, Button, List, Radio } from "antd";

const { Option } = Select;
export const Calculator = () => {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = process.env.BASE_URL;
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [shippingCosts, setShippingCosts] = useState([]);
  const [form, setForm] = useState({
    origin: "",
    destination: "",
    weight: "",
    courier: "jne",
    length: "",
    width: "",
    height: "",
    panelType: "",
  });
  const [couriers] = useState([
    { id: "jne", name: "JNE" },
    { id: "pos", name: "POS Indonesia" },
    { id: "tiki", name: "TIKI" },
  ]);

  const sellerAddress = {
    city_id: "501",
    city_name: "Yogyakarta",
    province_id: "5",
    province: "DI Yogyakarta",
  };

  const getProvinces = async () => {
    try {
      const response = await axios.get(`/api/rajaongkir/starter/province`, {
        headers: {
          key: "9af66373eca25cc8bc01e17c9aa3ca9e",
        },
      });
      setProvinces(response.data.rajaongkir.results);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  const getCityByProvince = async (provinceId) => {
    try {
      const response = await axios.get(`/api/rajaongkir/starter/city`, {
        headers: {
          key: "9af66373eca25cc8bc01e17c9aa3ca9e",
        },
        params: {
          province: provinceId,
        },
      });
      setCities(response.data.rajaongkir.results);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const getShippingCosts = async () => {
    try {
      const formData = new URLSearchParams(); // Buat objek URLSearchParams
      formData.append("origin", form.origin);
      formData.append("destination", form.destination);
      formData.append("weight", form.weight);
      formData.append("courier", form.courier);

      const response = await axios.post(
        `/api/rajaongkir/starter/cost`,
        formData, // Gunakan objek formData sebagai body permintaan
        {
          headers: {
            key: "9af66373eca25cc8bc01e17c9aa3ca9e",
            "content-type": "application/x-www-form-urlencoded", // Set header content-type
          },
        }
      );
      setShippingCosts(response.data.rajaongkir.results[0].costs);
    } catch (error) {
      console.error("Error fetching shipping costs:", error);
    }
  };

  useEffect(() => {
    getProvinces();
  }, []);

  useEffect(() => {
    // Check if all form fields are filled before fetching the shipping cost
    if (form.origin && form.destination && form.weight && form.courier) {
      getShippingCosts();
    }
  }, [form]);

  const handleProvinceChange = (value) => {
    setForm({ ...form, origin: value });
    getCityByProvince(value);
  };

  const handleCityChange = (value) => {
    setForm({ ...form, destination: value });
  };

  const handleCourierChange = (value) => {
    setForm({ ...form, courier: value });
  };
  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const percentage =
    ((form.length + form.width) * 2 * form.height) / form.panelType;
  const panelPrice = 250000 * percentage;

  return (
    <div className="flex">
      <div
        style={{
          maxWidth: 400,
          margin: "auto",
          padding: 16,
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Form>
          <Form.Item label="Panjang Bangunan">
            <Input
              value={form.length}
              onChange={(e) => handleInputChange("length", e.target.value)}
              placeholder="Panjang Bangunan"
              suffix="m2"
              type="number"
            />
          </Form.Item>
          <Form.Item label="Lebar Bangunan">
            <Input
              value={form.width}
              onChange={(e) => handleInputChange("width", e.target.value)}
              placeholder="Lebar Bangunan"
              suffix="m2"
              type="number"
            />
          </Form.Item>
          <Form.Item label="Tinggi Bangunan">
            <Input
              value={form.height}
              onChange={(e) => handleInputChange("height", e.target.value)}
              placeholder="Tinggi Bangunan"
              suffix="m2"
              type="number"
            />
          </Form.Item>
          <Form.Item label="Tipe Panel">
            <Select
              value={form.panelType}
              onChange={(value) => handleInputChange("panelType", value)}
              placeholder="Pilih Tipe Panel"
            >
              <Option value={1.4}>Panel 1.4</Option>
              <Option value={1.8}>Panel 1.8</Option>
              <Option value={2}>Panel 2</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Jumlah Panel Yang Dibutuhkan">
            <Input value={percentage} suffix="Pcs" type="number" disabled />
          </Form.Item>
          <Form.Item label="Jumlah Biaya Panel">
            <Input value={panelPrice} prefix="Rp" type="number" disabled />
          </Form.Item>
        </Form>
      </div>
      <div
        style={{
          maxWidth: 400,
          margin: "auto",
          padding: 16,
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <p className="mb-5">
          Alamat Pengirim : {sellerAddress.city_name}, {sellerAddress.province}
        </p>
        <Form>
          <Form.Item label="Select Province">
            <Select
              value={form.origin}
              onChange={handleProvinceChange}
              style={{ width: "100%" }}
            >
              <Option value="">Select Province</Option>
              {provinces.map((province) => (
                <Option key={province.province_id} value={province.province_id}>
                  {province.province}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Select City">
            <Select
              value={form.destination}
              onChange={handleCityChange}
              style={{ width: "100%" }}
            >
              <Option value="">Select City</Option>
              {cities.map((city) => (
                <Option key={city.city_id} value={city.city_id}>
                  {city.city_name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Weight">
            <Input
              value={form.weight}
              onChange={(e) => setForm({ ...form, weight: e.target.value })}
              style={{ width: "100%" }}
              suffix="grams"
            />
          </Form.Item>
          <Form.Item label="Select Courier">
            <Select
              value={form.courier}
              onChange={handleCourierChange}
              style={{ width: "100%" }}
            >
              {couriers.map((courier) => (
                <Option key={courier.id} value={courier.id}>
                  {courier.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <p>Alamat Lengkap Tujuan :</p>
          <Form.Item>
            <Input.TextArea>Calculate</Input.TextArea>
          </Form.Item>
        </Form>
        <div>
          <h3>Shipping Costs:</h3>
          <Radio.Group
            onChange={(e) => console.log(e.target.value)} // Fungsi untuk menangani perubahan pilihan
          >
            <List
              dataSource={shippingCosts}
              renderItem={(cost) => (
                <Radio key={cost.service} value={cost.service}>
                  {" "}
                  {/* Setiap opsi diubah menjadi radio button */}
                  <strong>{cost.description}: </strong>
                  {cost.cost.map((option) => (
                    <span key={option.value}>
                      {option.value} IDR (ETD: {option.etd})
                    </span>
                  ))}
                </Radio>
              )}
            />
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};
