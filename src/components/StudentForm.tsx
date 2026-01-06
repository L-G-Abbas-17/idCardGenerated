import { useState, type ChangeEvent } from "react";

/* ================= TYPES ================= */

type StudentFormData = {
  name: string;
  dept: string;
  rollNo: string;
  batch: string;
  fatherName: string;
  bloodGroup: string;
  phone: string;
  address: string;
  validUpto: string;
  photo: File | null;
};

type StudentFormProps = {
  onSubmit: (data: StudentFormData) => void;
};

/* ================= INITIAL STATE ================= */

const initialState: StudentFormData = {
  name: "",
  dept: "",
  rollNo: "",
  batch: "",
  fatherName: "",
  bloodGroup: "",
  phone: "",
  address: "",
  validUpto: "",
  photo: null,
};

/* ================= COMPONENT ================= */

export default function StudentForm({ onSubmit }: StudentFormProps) {
  const [form, setForm] = useState<StudentFormData>(initialState);

  

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm({ ...form, photo: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow-lg space-y-5">

        <h2 className="text-2xl font-bold text-center text-green-700">
          Student ID Details Form
        </h2>

        {/* Photo Upload */}
        <div className="flex gap-2.5 cursor-pointer items-center relative">
          <label className="label">Student Photo</label>
          <button className="w-fit cursor-pointer rounded-xl px-6 p-2 bg-green-600 text-white font-semibold hover:bg-green-700">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="opacity-0 absolute inset-0 cursor-pointer"
            />
            Select Photo
          </button>
        </div>

        {/* Name */}
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="input pl-2 border ml-2.5 rounded-lg"
          />
        </div>

        {/* Dept + Roll */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Department</label>
            <input
              type="text"
              name="dept"
              placeholder="Enter your Department"
              value={form.dept}
              onChange={handleChange}
              className="input w-[200px] border pl-2 ml-2 rounded-lg"
            />
          </div>

          <div>
            <label className="label">Roll No</label>
            <input
              type="text"
              name="rollNo"
              value={form.rollNo}
              onChange={handleChange}
              placeholder="Enter your Roll Number"
              className="input border pl-2 ml-2 rounded-lg"
            />
          </div>
        </div>

        {/* Batch */}
        <div>
          <label className="label">Batch</label>
          <input
            type="text"
            name="batch"
            placeholder="2022-2026"
            value={form.batch}
            onChange={handleChange}
            className="input border pl-2 ml-2 rounded-lg"
          />
        </div>

        {/* Father Name */}
        <div>
          <label className="label">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            value={form.fatherName}
            onChange={handleChange}
            placeholder="Enter your Father's Name"
            className="input border pl-2 ml-2 rounded-lg"
          />
        </div>

        {/* Blood + Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              placeholder="Enter your Blood Group"
              value={form.bloodGroup}
              onChange={handleChange}
              className="border pl-2 ml-2 w-[200px] rounded-lg"
            />
          </div>

          <div>
            <label className="label">Phone No</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your Mobile Number"
              className="input border pl-2 ml-2 rounded-lg"
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex gap-2.5">
          <label className="label">Address</label>
          <textarea
            name="address"
            rows={2}
            cols={43}
            value={form.address}
            onChange={handleChange}
            placeholder="Enter your Address"
            className="input resize-x border pl-2 ml-2 rounded-lg"
          />
        </div>

        {/* Validity */}
        <div>
          <label className="label">Valid Up To</label>
          <input
            type="text"
            name="validUpto"
            value={form.validUpto}
            onChange={handleChange}
            placeholder="eg: JAN-26"
            className="input border pl-2 ml-2 rounded-lg"
          />
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={() => onSubmit(form)}
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
        >
          Generate ID Card
        </button>

      </div>
    </div>
  );
}
