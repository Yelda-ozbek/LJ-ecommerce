import yeldaImage from "../assets/yel.jpeg";
import emreImage from "../assets/emre.jpeg"
const teamMembers = [
    {
      name: "Emre Şahiner",
      role: "Project Manager",
      image:emreImage,
    },
    {
      name: "Yelda Özbek",
      role: "Full Stack Developer",
      image: yeldaImage,
    },
 
  ];
  
  const Team = () => {
    return (
      <section className="px-4 md:px-20 py-10">
        <h2 className="text-2xl font-bold text-center mb-2">Our Team</h2>
        <p className="text-center text-sm text-gray-500 mb-8">
          Meet the people behind the project
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white border rounded-lg shadow p-4 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Team;
  