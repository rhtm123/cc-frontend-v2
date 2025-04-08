import InternshipForm from "@/components/InternshipForm";

export default function InternshipPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Apply for Internship</h1>
      <div className="max-w-5xl mx-auto">
        <InternshipForm />
      </div>
    </div>
  );
}