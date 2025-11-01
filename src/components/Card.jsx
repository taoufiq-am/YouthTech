import { ServicesMenu } from "../mocData/data";

export const Card = () => {
  return (
    <section className=" bg-gray-50 py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ServicesMenu.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 oerflow-hidden group"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-84 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-500"
              >
                Learn More
                <span className="ml-1 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};