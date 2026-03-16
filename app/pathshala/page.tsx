export const metadata = {
  title: "Pathshala | JCOCO",
  description: "Jain religious education and language classes at the Jain Center of Central Ohio.",
};

const pdfPath = "/Patshala MJk updates .pdf";

export default function PathshalaPage() {
  return (
    <>
      <section className="bg-saffron-400 text-white py-16 text-center">
        <p className="section-subtitle text-saffron-100">Education</p>
        <h1 className="text-4xl font-bold">Pathshala</h1>
        <p className="mt-3 text-saffron-100 max-w-xl mx-auto">
          Jain religious education and language classes for children and adults.
        </p>
      </section>

      <section className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Download link */}
        <div className="flex justify-end mb-4">
          <a
            href={pdfPath}
            download
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Inline PDF viewer */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src={pdfPath}
            className="w-full"
            style={{ height: "85vh", minHeight: "600px" }}
            title="Pathshala Information"
          />
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          Can&apos;t see the document?{" "}
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="text-saffron-500 hover:underline">
            Open in a new tab
          </a>
        </p>
      </section>
    </>
  );
}
