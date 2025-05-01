const certificates = [
  {
    source: "/certificate1.png",
  },
  {
    source: "/certificate2.png",
  },
];

const Certificate = () => {
  return (
    <div className="flex px-4 h-[80vh] bg-gray-100">
      {certificates.map((certificate) => (
        <div key={certificate.source}>
          <img src={certificate.source} alt="Certificate" />
        </div>
      ))}
    </div>
  );
};

export default Certificate;
