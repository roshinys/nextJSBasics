import Link from "next/link";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

export default function Author({ params }) {
  const developerId = params.developerId;
  const developer = details.filter((dev) => dev.id == developerId);
  if (developer.length === 0) {
    return <h1>Dev Not exist</h1>;
  }
  return (
    <>
      <h1>Name : {developer[0].name}</h1>
      <p>Role : {developer[0].role}</p>
      <p>
        <Link href="/aboutus">Go Back</Link>
      </p>
    </>
  );
}
