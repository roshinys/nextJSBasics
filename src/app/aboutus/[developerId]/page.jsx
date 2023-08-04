const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

export default function Author({ params }) {
  const developerId = params.developerId;
  const developer = details.filter((dev) => dev.id == developerId);
  const developerName =
    developer && developer.length > 0 && developer[0].name
      ? developer[0].name
      : "Dev not exist";
  return <h1>{developerName}</h1>;
}
