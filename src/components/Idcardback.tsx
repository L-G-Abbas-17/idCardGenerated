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

function Idcardback({ data }: Props) {
  return (
    <div className="min-h-screen  flex items-center justify-center ">
      <div className="w-[350px]  h-[578px] flex flex-col rounded-3xl overflow-hidden shadow-lg border border-gray-300">

        {/* TOP BAR */}
        <div className="bg-[#006b36] pt-9 text-white text-center text-sm py-2 font-medium">
          If found please call at 9360804669
        </div>

        {/* MAIN CONTENT */}
        <div className="bg-[#c6dcdb] h-[335px] px-6 pt-4 pb-10 text-sm text-gray-900 space-y-3">

          {/* FATHER NAME */}
          <div className="pb-2 flex">
            <span className="w-32 text-blue-900 font-bold">Father's Name</span>
            <span className="px-2">:</span>
            <span className="font-bold font-serif">
              {data.fatherName || "-"}
            </span>
          </div>

          {/* BLOOD GROUP */}
          <div className="pb-2 flex">
            <span className="w-32 text-blue-900 font-bold">Blood Group</span>
            <span className="px-2">:</span>
            <span className="font-bold font-serif">
              {data.bloodGroup || "-"}
            </span>
          </div>

          {/* PHONE */}
          <div className="pb-2 flex">
            <span className="w-32 text-blue-900 font-bold">Phone No.</span>
            <span className="px-2">:</span>
            <span className="font-bold tracking-wide font-serif">
              {data.phone || "-"}
            </span>
          </div>

          {/* ADDRESS */}
          <div>
            <div className="flex items-start">
              <span className="w-32 text-blue-900 font-bold">Address</span>
              <span className="px-2">:</span>
            </div>
            <span className="leading-relaxed font-serif font-semibold whitespace-pre-line">
              {data.address || "-"}
            </span>
          </div>

          {/* VALIDITY */}
          <div className="flex pt-4">
            <span className="w-32 text-blue-900 font-bold">Valid Up to</span>
            <span className="px-2">:</span>
            <span className="font-bold font-serif">
              {data.validUpto || "-"}
            </span>
          </div>
        </div>

        {/* GREEN STRIP */}
        <div className="bg-[#218062] h-[40px]" />

        {/* INSTRUCTIONS */}
        <div className="bg-[#006b36] text-white text-xs px-4 py-4 space-y-1">
          <h1 className="text-[15px] font-bold">Instructions:</h1>
          <p className="text-sm">
            1. This card is the sole property of the Institution and
            non-transferable.
          </p>
          <p className="text-sm">
            2. Loss or theft of the card must be immediately reported to the
            institution.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Idcardback;
