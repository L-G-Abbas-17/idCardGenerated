import image from "../assets/IMG_20260106_113625.jpg";

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

type Props = {
  data: StudentFormData;
};

/* ================= COMPONENT ================= */

function Idcardfront({ data }: Props) {
  // uploaded photo preview
  const photoUrl = data.photo
    ? URL.createObjectURL(data.photo)
    : "";

  return (
    <div className="min-h-screen flex items-center relative justify-center">
      <div className="h-[575px] w-[350px] relative rounded-3xl overflow-hidden">
        
        {/* CARD BACKGROUND */}
        <img className="absolute" src={image} alt="ID Card" />

        {/* NAME */}
        <h1 className="absolute z-10 top-[352px] left-[130px] font-serif text-[15.6px]">
          {data.name || "STUDENT NAME"}
        </h1>

        {/* DEPARTMENT */}
        <h1 className="absolute z-10 top-[378px] left-[130px] font-serif text-[15.6px]">
          {data.dept || "DEPT"}
        </h1>

        {/* ROLL NO */}
        <h1 className="absolute z-10 top-[403px] left-[130px] font-serif text-[15.6px]">
          {data.rollNo || "ROLL NO"}
        </h1>

        {/* BATCH */}
        <h1 className="absolute z-10 top-[428px] left-[130px] font-serif text-[15.6px]">
          {data.batch || "2022-2026"}
        </h1>

        {/* SIDE ROLL NO */}
        <h1 className="absolute z-10 top-[242px] rotate-270 font-serif right-[0px] text-[15.6px]">
          {data.rollNo || "ROLL NO"}
        </h1>

        {/* STUDENT PHOTO */}
        {photoUrl && (
          <img
            className="absolute z-10 top-[175px] left-[103px] w-[138px] h-[165px] object-cover"
            src={photoUrl}
            alt="Student"
          />
        )}
      </div>
    </div>
  );
}

export default Idcardfront;
